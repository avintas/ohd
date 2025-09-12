import { PageLayout } from '@/components';
import Link from 'next/link';

export default function Extras() {
  return (
    <PageLayout>
      <div className="min-h-screen bg-gradient-to-br from-[#0a0e1a] via-[#1a1f2e] to-[#0f1419] p-4 md:p-6 lg:p-8 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#4cc9f0]/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 w-60 h-60 bg-[#4cc9f0]/3 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          {/* Enhanced Header */}
          <div className="mb-8">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-[#4cc9f0] to-[#3bb5e0] rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-2xl">🏒</span>
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white via-[#4cc9f0] to-white bg-clip-text text-transparent mb-2">
                  Extras
                </h1>
                <p className="text-[#a0aec0] text-lg">
                  Your personalized hockey command center
                </p>
              </div>
            </div>
          </div>

          {/* Enhanced Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            
            {/* User Profile Card - Enhanced with Hockey Theme */}
            <div className="lg:row-span-2 bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl rounded-3xl p-6 relative overflow-hidden border border-[#4cc9f0]/20 shadow-2xl hover:shadow-[#4cc9f0]/20 transition-all duration-500 group">
              {/* Dynamic Hockey-themed Header */}
              <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-br from-[#4cc9f0] via-blue-500 to-indigo-600 rounded-t-3xl relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 transform translate-x-full group-hover:translate-x-[-200%] transition-transform duration-1000"></div>
                <div className="absolute top-2 right-2 text-white/30 text-4xl">🏒</div>
                <div className="absolute bottom-2 left-2 text-white/20 text-2xl">⚡</div>
              </div>
              
              <div className="relative z-10 pt-16">
                {/* Enhanced Profile Avatar */}
                <div className="flex items-center justify-center w-24 h-24 md:w-28 md:h-28 bg-gradient-to-br from-slate-600 to-slate-700 rounded-full mb-4 mx-auto shadow-xl border-4 border-[#4cc9f0]/30 group-hover:border-[#4cc9f0]/60 transition-all duration-300">
                  <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-slate-500 to-slate-600 rounded-full flex items-center justify-center shadow-inner">
                    <span className="text-white text-3xl md:text-4xl">👤</span>
                  </div>
                </div>

                {/* Enhanced User Info */}
                <div className="text-center mb-6">
                  <div className="flex items-center justify-center gap-2 mb-3">
                    <span className="w-3 h-3 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400/50"></span>
                    <span className="text-[#4cc9f0] text-sm font-semibold tracking-wide">Mavrik2828</span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-2 tracking-tight">
                    Aim243
                  </h3>
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#4cc9f0]/20 rounded-full border border-[#4cc9f0]/30">
                    <span className="text-[#4cc9f0] text-sm">Level 15</span>
                    <span className="text-yellow-400">⭐</span>
                  </div>
                </div>

                {/* Hockey Stats */}
                <div className="space-y-3 bg-black/20 rounded-2xl p-4 border border-[#4cc9f0]/10">
                  <div className="flex justify-between items-center">
                    <span className="text-[#a0aec0] text-sm flex items-center gap-2">
                      <span className="text-[#4cc9f0]">🏒</span> Goals Scored
                    </span>
                    <span className="text-white font-bold">142</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[#a0aec0] text-sm flex items-center gap-2">
                      <span className="text-yellow-400">🏆</span> Wins
                    </span>
                    <span className="text-[#4cc9f0] font-bold">89</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[#a0aec0] text-sm flex items-center gap-2">
                      <span className="text-red-400">🔥</span> Streak
                    </span>
                    <span className="text-red-400 font-bold">12 games</span>
                  </div>
                </div>
              </div>
            </div>

            {/* User Information Card - Cyan Theme */}
            <Link href="/user-information" className="bg-gradient-to-br from-cyan-900/40 to-cyan-800/30 backdrop-blur-xl rounded-3xl p-6 hover:from-cyan-800/50 hover:to-cyan-700/40 transition-all duration-500 border border-cyan-400/20 shadow-xl hover:shadow-cyan-400/20 group relative overflow-hidden block">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="flex flex-col items-center text-center h-full relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg shadow-cyan-400/25 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1H5C3.89 1 3 1.89 3 3V21C3 22.11 3.89 23 5 23H19C20.11 23 21 22.11 21 21V9M19 9H14V4H19V9Z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">User Information</h3>
                <p className="text-cyan-100/80 text-sm">Configure your personal information and preferences.</p>
              </div>
            </Link>

            {/* Site Settings Card - Purple Theme */}
            <Link href="/site-settings" className="bg-gradient-to-br from-purple-900/40 to-purple-800/30 backdrop-blur-xl rounded-3xl p-6 hover:from-purple-800/50 hover:to-purple-700/40 transition-all duration-500 border border-purple-400/20 shadow-xl hover:shadow-purple-400/20 group relative overflow-hidden block">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="flex flex-col items-center text-center h-full relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg shadow-purple-400/25 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.22,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.22,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.68 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Site Settings</h3>
                <p className="text-purple-100/80 text-sm">Customize your preferences</p>
              </div>
            </Link>

            {/* Help Card - Emerald Theme */}
            <Link href="/help" className="bg-gradient-to-br from-emerald-900/40 to-emerald-800/30 backdrop-blur-xl rounded-3xl p-6 hover:from-emerald-800/50 hover:to-emerald-700/40 transition-all duration-500 border border-emerald-400/20 shadow-xl hover:shadow-emerald-400/20 group relative overflow-hidden block">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="flex flex-col items-center text-center h-full relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg shadow-emerald-400/25 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M11,18H13V16H11V18ZM12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2ZM12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20ZM12,6A4,4 0 0,0 8,10H10A2,2 0 0,1 12,8A2,2 0 0,1 14,10C14,12 11,11.75 11,15H13C13,12.75 16,12.5 16,10A4,4 0 0,0 12,6Z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Help</h3>
                <p className="text-emerald-100/80 text-sm">Learn the rules and master your hockey skills.</p>
              </div>
            </Link>

            {/* Support Card - Orange Theme */}
            <Link href="/support" className="bg-gradient-to-br from-orange-900/40 to-orange-800/30 backdrop-blur-xl rounded-3xl p-6 hover:from-orange-800/50 hover:to-orange-700/40 transition-all duration-500 border border-orange-400/20 shadow-xl hover:shadow-orange-400/20 group relative overflow-hidden block">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="flex flex-col items-center text-center h-full relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg shadow-orange-400/25 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12,1C17.5,1 22,5.5 22,11C22,16.5 17.5,21 12,21C10.76,21 9.57,20.82 8.47,20.5C5.55,21 2,21 2,21C4.33,18.67 4.7,17.1 4.75,16.5C3.05,15.07 2,13.13 2,11C2,5.5 6.5,1 12,1ZM12,3C7.58,3 4,6.58 4,11C4,12.5 4.5,13.87 5.35,15C5.35,15 5.35,15 5.35,15L6,15.75C6,16.5 5.9,18.1 4.5,19.5C6.13,19.5 7.5,19.5 8.5,19C9.5,19.35 10.72,19.5 12,19.5C16.42,19.5 20,15.92 20,11.5C20,7.08 16.42,3.5 12,3.5V3Z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Support</h3>
                <p className="text-orange-100/80 text-sm">Get help with your account and technical issues.</p>
              </div>
            </Link>

          </div>
        </div>
      </div>
    </PageLayout>
  );
}
