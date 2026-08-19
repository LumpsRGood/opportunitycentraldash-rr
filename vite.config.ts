import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig, Plugin } from 'vite';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';
import { SYSTEM_INSTRUCTION } from './src/utils/aiKnowledge';

dotenv.config();

function setCorsHeaders(res: any) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Requested-With');
}

function aiApiPlugin(): Plugin {
  return {
    name: 'opportunity-ai-chat-api',
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        const rawUrl = req.url || '';
        const pathname = rawUrl.split('?')[0].replace(/\/+$/, '');

        // Preflight OPTIONS handling
        if (req.method === 'OPTIONS' && pathname.startsWith('/api/')) {
          setCorsHeaders(res);
          res.statusCode = 204;
          res.end();
          return;
        }

        if (pathname === '/api/ai/chat' && req.method === 'POST') {
          setCorsHeaders(res);
          let body = '';
          req.on('data', chunk => {
            body += chunk;
          });

          req.on('end', async () => {
            try {
              const { message, history } = JSON.parse(body || '{}');
              if (!message || typeof message !== 'string') {
                res.statusCode = 400;
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({ error: 'Message prompt is required.' }));
                return;
              }

              const apiKey = process.env.GEMINI_API_KEY;
              if (!apiKey) {
                res.statusCode = 500;
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({ error: 'GEMINI_API_KEY environment variable is not configured.' }));
                return;
              }

              const ai = new GoogleGenAI({
                apiKey,
                httpOptions: {
                  headers: {
                    'User-Agent': 'aistudio-build'
                  }
                }
              });

              const contents: Array<{ role: string; parts: Array<{ text: string }> }> = [];

              if (Array.isArray(history)) {
                for (const item of history.slice(-8)) {
                  if (item && item.role && item.text) {
                    contents.push({
                      role: item.role === 'user' ? 'user' : 'model',
                      parts: [{ text: item.text }]
                    });
                  }
                }
              }

              contents.push({
                role: 'user',
                parts: [{ text: message }]
              });

              const response = await ai.models.generateContent({
                model: 'gemini-3.7-flash',
                contents,
                config: {
                  systemInstruction: SYSTEM_INSTRUCTION,
                  temperature: 0.7
                }
              });

              const responseText = response.text || 'I was unable to generate an answer. Please contact store management.';

              res.statusCode = 200;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ reply: responseText }));
            } catch (err: any) {
              console.error('AI chat endpoint error:', err);
              res.statusCode = 500;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({
                error: err?.message || 'Internal server error while processing AI request.'
              }));
            }
          });
          return;
        }

        if (pathname === '/api/health') {
          setCorsHeaders(res);
          res.statusCode = 200;
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify({ status: 'ok', timestamp: new Date().toISOString() }));
          return;
        }

        next();
      });
    }
  };
}

export default defineConfig(() => {
  return {
    base: '/',
    plugins: [react(), tailwindcss(), aiApiPlugin()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      port: 3000,
      host: '0.0.0.0',
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      hmr: process.env.DISABLE_HMR !== 'true',
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
