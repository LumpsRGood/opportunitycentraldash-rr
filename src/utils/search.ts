import { DocumentItem } from '../types';

// Common synonyms and related concept mappings for restaurant franchise operations
const SYNONYM_MAP: Record<string, string[]> = {
  incident: ['incident', 'incidents', 'accident', 'accidents', 'injury', 'injuries', 'hurt', 'claim', 'claims', 'slip', 'fall', 'burn', 'damage', 'cctv', 'evidence', 'emergency', 'workers comp', 'guest report'],
  incidents: ['incident', 'incidents', 'accident', 'accidents', 'injury', 'injuries', 'claim', 'claims', 'slip', 'fall', 'damage'],
  injury: ['injury', 'injuries', 'incident', 'medical', 'first aid', 'workers comp', 'hurt', 'claim', 'ems', 'hospital', 'doctor'],
  injuries: ['injury', 'injuries', 'incident', 'medical', 'first aid', 'workers comp', 'hurt', 'claim'],
  accident: ['accident', 'incident', 'injury', 'fall', 'slip', 'burn', 'guest', 'vendor', 'property'],
  claim: ['claim', 'claims', 'workers comp', 'insurance', 'incident', 'first report', 'injury', 'medical'],
  forms: ['form', 'forms', 'template', 'report', 'sheet', 'checklist', 'pdf', 'docx', 'xlsx'],
  form: ['form', 'forms', 'template', 'report', 'sheet', 'checklist', 'pdf', 'docx', 'xlsx'],
  cash: ['cash', 'money', 'safe', 'deposit', 'drop', 'paid out', 'register', 'petty cash', 'drawer', 'reallocation', 'log'],
  money: ['cash', 'money', 'safe', 'deposit', 'drop', 'paid out', 'register', 'petty cash'],
  deposit: ['deposit', 'deposits', 'safe', 'drop', 'bank', 'slip', 'cash', 'armored', 'tracking'],
  safe: ['safe', 'deposit', 'drop', 'cash', 'lockbox', 'drawer', 'smart safe'],
  mileage: ['mileage', 'miles', 'car', 'travel', 'trip', 'driving', 'odometer', 'vehicle', 'gas', 'reimbursement'],
  ramp: ['ramp', 'credit card', 'corporate card', 'gl coding', 'chart of accounts', 'expense', 'receipt'],
  card: ['card', 'ramp', 'credit card', 'corporate card', 'gl coding'],
  payroll: ['payroll', 'paycheck', 'bdo', 'wage', 'salary', 'hours', 'timecard', 'punch', 'overtime', 'tip'],
  timecard: ['timecard', 'punch', 'missed punch', 'overtime', 'clock in', 'clock out', 'hours', 'adjustment'],
  termination: ['termination', 'terminate', 'separations', 'separation', 'fire', 'fired', 'quit', 'exit', 'exit interview', 'asset recovery'],
  discipline: ['discipline', 'corrective', 'write up', 'writeup', 'warning', 'counseling', 'pip', 'infraction', 'coaching'],
  writeup: ['discipline', 'corrective', 'write up', 'writeup', 'warning', 'counseling', 'infraction'],
  harassment: ['harassment', 'sexual harassment', 'discrimination', 'eeo', 'conduct', 'training', 'prevention'],
  alcohol: ['alcohol', 'tabc', 'beer', 'wine', 'liquor', 'bar', 'intoxication', 'id check', '21', 'server'],
  tabc: ['tabc', 'alcohol', 'beer', 'liquor', 'wine', 'service', 'intoxication', 'id'],
  robbery: ['robbery', 'theft', 'threat', 'assailant', 'safe', 'alarm', 'lockdown', 'intruder', 'stealing', 'cash'],
  assailant: ['assailant', 'active assailant', 'run hide fight', 'shooter', 'threat', 'emergency', 'lockdown', 'police'],
  lockdown: ['lockdown', 'emergency', 'shelter in place', 'threat', 'perimeter', 'security', 'police'],
  it: ['it', 'pos', 'aloha', 'toast', 'computer', 'network', 'wifi', 'internet', 'router', 'kds', 'kitchen display', 'printer', 'troubleshooting', 'helpdesk'],
  pos: ['pos', 'it', 'terminal', 'register', 'printer', 'aloha', 'toast', 'kds', 'troubleshooting', 'helpdesk', 'system'],
  printer: ['printer', 'receipt', 'pos', 'it', 'paper', 'hardware', 'kds'],
  handbook: ['handbook', 'manual', 'policies', 'standards', 'appearance', 'uniform', 'dress code', 'grooming', 'guidelines'],
  uniform: ['uniform', 'appearance', 'dress code', 'shoes', 'grooming', 'hygiene', 'standards', 'handbook', 'apron'],
  dress: ['dress code', 'uniform', 'appearance', 'shoes', 'standards', 'grooming']
};

/**
 * Searches a document across all relevant metadata, description, title, category, department, keywords, and synonyms.
 */
export function matchDocument(doc: DocumentItem & { department?: string }, rawQuery: string): boolean {
  if (!rawQuery || !rawQuery.trim()) return true;

  const query = rawQuery.trim().toLowerCase();
  const queryTokens = query.split(/\s+/).filter(Boolean);

  // Build searchable text corpus for the document
  const keywordsStr = (doc.keywords || []).join(' ').toLowerCase();
  const docCorpus = [
    doc.title.toLowerCase(),
    doc.description.toLowerCase(),
    doc.category.toLowerCase(),
    (doc.department || '').toLowerCase(),
    doc.format.toLowerCase(),
    keywordsStr
  ].join(' ');

  // Direct full substring match
  if (docCorpus.includes(query)) {
    return true;
  }

  // Token-by-token matching with synonym expansion
  return queryTokens.every(token => {
    // Exact token match in doc corpus
    if (docCorpus.includes(token)) return true;

    // Check if token has synonyms in dictionary
    const synonyms = SYNONYM_MAP[token] || [];
    for (const syn of synonyms) {
      if (docCorpus.includes(syn)) {
        return true;
      }
    }

    // Prefix/stem matching (e.g., "incid" -> "incident", "polic" -> "policy")
    if (token.length >= 4) {
      const stem = token.slice(0, token.length - 1);
      if (docCorpus.includes(stem)) return true;
    }

    return false;
  });
}
