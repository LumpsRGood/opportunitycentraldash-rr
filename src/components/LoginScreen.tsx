import React from 'react';
import { ArrowRight, AlertCircle, Eye } from 'lucide-react';
import { OpportunityGroupLogo } from './OpportunityLogo';
import { RedRobinEmblem } from './RedRobinEmblem';
import { RedRobinBrandBackdrop } from './RedRobinBrandBackdrop';

interface LoginScreenProps {
  onLoginWithMicrosoft: () => void;
  onPreviewLogin: () => void;
  isLoading?: boolean;
  error?: string | null;
}

export const LoginScreen: React.FC<LoginScreenProps> = ({
  onLoginWithMicrosoft,
  onPreviewLogin,
  isLoading = false,
  error = null,
}) => {
  return (
    <div 
      id="login-landing-container" 
      className="relative min-h-screen w-full flex items-center justify-center p-4 overflow-hidden select-none"
    >
      {/* Exact Red Robin Brand Wallpaper Backdrop */}
      <RedRobinBrandBackdrop />

      {/* Floating Center Login Card */}
      <div className="relative z-10 w-full max-w-sm bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-white/20 p-8 text-center animate-fade-in">
        {/* Opportunity Group Logo */}
        <div className="inline-flex items-center justify-center p-3 bg-red-50/80 rounded-2xl mb-4 border border-red-100/80 text-[#ED1C24]">
          <OpportunityGroupLogo className="h-10 w-auto" />
        </div>

        {/* User-Provided Red Robin Logo */}
        <div className="flex items-center justify-center px-4 mb-6">
          <RedRobinEmblem className="h-12 w-auto max-w-[200px]" />
        </div>

        {/* Error Feedback */}
        {error && (
          <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-xl flex items-start gap-2 text-left text-xs text-red-700">
            <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
            <span>{error}</span>
          </div>
        )}

        {/* Single Main Action: Sign in with Microsoft 365 */}
        <button
          id="ms-login-btn"
          type="button"
          onClick={onLoginWithMicrosoft}
          disabled={isLoading}
          className="w-full flex items-center justify-center gap-3 py-3.5 px-4 bg-[#2F2F2F] hover:bg-[#1A1A1A] active:scale-[0.99] text-white font-bold text-sm rounded-xl transition-all shadow-md hover:shadow-lg disabled:opacity-60 group border border-gray-800"
        >
          {/* Microsoft 4-Color Tiles Logo */}
          <svg className="w-5 h-5 shrink-0" viewBox="0 0 21 21">
            <rect x="1" y="1" width="9" height="9" fill="#f25022" />
            <rect x="1" y="11" width="9" height="9" fill="#00a4ef" />
            <rect x="11" y="1" width="9" height="9" fill="#7fba00" />
            <rect x="11" y="11" width="9" height="9" fill="#ffb900" />
          </svg>
          <span>{isLoading ? 'Signing in...' : 'Sign in with Microsoft 365'}</span>
          <ArrowRight className="w-4 h-4 text-gray-400 group-hover:translate-x-0.5 transition-transform" />
        </button>

        {/* Direct Studio Preview Access Button */}
        <button
          id="preview-portal-btn"
          type="button"
          onClick={onPreviewLogin}
          className="w-full mt-3 flex items-center justify-center gap-2 py-2.5 px-4 bg-red-50 hover:bg-red-100 text-[#ED1C24] font-semibold text-xs rounded-xl transition-all border border-red-200 shadow-sm"
        >
          <Eye className="w-3.5 h-3.5" />
          <span>Enter Opportunity Central (Preview Mode)</span>
        </button>

        <p className="text-[11px] text-gray-400 mt-4 font-medium">
          Authorized Opportunity Restaurant Group Personnel
        </p>
      </div>
    </div>
  );
};
