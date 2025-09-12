import { PageLayout } from '@/components';

export default function HelpPage() {
  return (
    <PageLayout>
      <div className="py-12 md:py-16 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Page Title */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Help
            </h1>
            <p className="text-lg text-[#a0aec0]">
              Learn how to use OnlyHockey.com and get the most out of your hockey experience.
            </p>
          </div>

          {/* Help Content */}
          <div className="space-y-12">
            
            {/* Getting Started */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">Getting Started</h2>
              <div className="space-y-6">
                
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Creating Your Account</h3>
                  <p className="text-[#a0aec0] leading-relaxed mb-4">
                    Welcome to OnlyHockey! To get started, create your free account by clicking the profile icon in the top navigation. 
                    You&apos;ll be able to track your progress, save your favorite content, and customize your experience.
                  </p>
                  <ul className="text-[#a0aec0] space-y-2 list-disc list-inside">
                    <li>Choose a unique username and display name</li>
                    <li>Select your favorite NHL team</li>
                    <li>Set your hockey experience level</li>
                    <li>Customize your content preferences</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Navigating the Site</h3>
                  <p className="text-[#a0aec0] leading-relaxed mb-4">
                    OnlyHockey is organized around our crew members, each with their own expertise:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-[#1a1f2e] rounded-lg p-4 border border-[#4cc9f0]/20">
                      <h4 className="text-[#4cc9f0] font-semibold mb-2">🧠 Samantha</h4>
                      <p className="text-[#a0aec0] text-sm">Hockey trivia and brain training challenges</p>
                    </div>
                    <div className="bg-[#1a1f2e] rounded-lg p-4 border border-[#4cc9f0]/20">
                      <h4 className="text-[#4cc9f0] font-semibold mb-2">📚 Broadcaster Mike</h4>
                      <p className="text-[#a0aec0] text-sm">Stories, history, and hockey insights</p>
                    </div>
                    <div className="bg-[#1a1f2e] rounded-lg p-4 border border-[#4cc9f0]/20">
                      <h4 className="text-[#4cc9f0] font-semibold mb-2">💪 Iron Mike</h4>
                      <p className="text-[#a0aec0] text-sm">Motivation and performance coaching</p>
                    </div>
                    <div className="bg-[#1a1f2e] rounded-lg p-4 border border-[#4cc9f0]/20">
                      <h4 className="text-[#4cc9f0] font-semibold mb-2">❤️ Captain Heart</h4>
                      <p className="text-[#a0aec0] text-sm">Community support and encouragement</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Using Features */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">Using OnlyHockey Features</h2>
              <div className="space-y-6">
                
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Hockey Trivia</h3>
                  <p className="text-[#a0aec0] leading-relaxed mb-4">
                    Test your hockey knowledge with Samantha&apos;s trivia challenges. Questions range from beginner to expert level.
                  </p>
                  <ul className="text-[#a0aec0] space-y-2 list-disc list-inside">
                    <li><strong className="text-white">Daily Challenges:</strong> New questions every day</li>
                    <li><strong className="text-white">Difficulty Levels:</strong> Beginner, Intermediate, Advanced, Expert</li>
                    <li><strong className="text-white">Progress Tracking:</strong> See your improvement over time</li>
                    <li><strong className="text-white">Leaderboards:</strong> Compete with other hockey fans</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Content Sharing</h3>
                  <p className="text-[#a0aec0] leading-relaxed mb-4">
                    Share your favorite hockey content with friends and fellow fans using our built-in sharing features.
                  </p>
                  <ul className="text-[#a0aec0] space-y-2 list-disc list-inside">
                    <li>Look for the 📤 share button on content cards</li>
                    <li>Copy links to share via text or email</li>
                    <li>Share directly to social media platforms</li>
                    <li>All shared content includes proper attribution</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Personalization</h3>
                  <p className="text-[#a0aec0] leading-relaxed mb-4">
                    Customize your OnlyHockey experience through the Extras dashboard and Site Settings.
                  </p>
                  <ul className="text-[#a0aec0] space-y-2 list-disc list-inside">
                    <li><strong className="text-white">Theme Settings:</strong> Dark mode, font size, animations</li>
                    <li><strong className="text-white">Content Preferences:</strong> Show/hide different content types</li>
                    <li><strong className="text-white">Team Favorites:</strong> Get content tailored to your team</li>
                    <li><strong className="text-white">Notification Settings:</strong> Control email and browser alerts</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Troubleshooting */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">Troubleshooting</h2>
              <div className="space-y-6">
                
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Common Issues</h3>
                  <div className="space-y-4">
                    
                    <div>
                      <h4 className="text-lg font-medium text-white mb-2">Content Not Loading</h4>
                      <ul className="text-[#a0aec0] space-y-1 list-disc list-inside">
                        <li>Check your internet connection</li>
                        <li>Try refreshing the page</li>
                        <li>Clear your browser cache and cookies</li>
                        <li>Disable browser extensions temporarily</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-medium text-white mb-2">Account Issues</h4>
                      <ul className="text-[#a0aec0] space-y-1 list-disc list-inside">
                        <li>Forgot password? Use the reset link on the login page</li>
                        <li>Can&apos;t access account? Check your email for verification</li>
                        <li>Settings not saving? Make sure to click &quot;Save Changes&quot;</li>
                        <li>Still having trouble? Contact our support team</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-medium text-white mb-2">Mobile Experience</h4>
                      <ul className="text-[#a0aec0] space-y-1 list-disc list-inside">
                        <li>Use the hamburger menu (☰) for navigation on mobile</li>
                        <li>Swipe gestures work on content cards</li>
                        <li>Tap and hold for sharing options</li>
                        <li>Adjust text size in Site Settings for better readability</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Tips & Tricks */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">Tips & Tricks</h2>
              <div className="space-y-4">
                
                <div className="bg-[#1a1f2e] rounded-lg p-6 border border-[#4cc9f0]/20">
                  <h3 className="text-[#4cc9f0] font-semibold mb-3">💡 Pro Tip: Daily Routine</h3>
                  <p className="text-[#a0aec0]">
                    Start each day with Samantha&apos;s daily trivia challenge, then explore new content from our crew members. 
                    This helps build your hockey knowledge consistently over time.
                  </p>
                </div>

                <div className="bg-[#1a1f2e] rounded-lg p-6 border border-[#4cc9f0]/20">
                  <h3 className="text-[#4cc9f0] font-semibold mb-3">🎯 Focus Mode</h3>
                  <p className="text-[#a0aec0]">
                    Turn off animations in Site Settings if you prefer a more focused reading experience or if you&apos;re 
                    on a slower device. This can improve performance and reduce distractions.
                  </p>
                </div>

                <div className="bg-[#1a1f2e] rounded-lg p-6 border border-[#4cc9f0]/20">
                  <h3 className="text-[#4cc9f0] font-semibold mb-3">📱 Mobile Shortcuts</h3>
                  <p className="text-[#a0aec0]">
                    Add OnlyHockey to your phone&apos;s home screen for quick access. On iOS, use &quot;Add to Home Screen&quot; 
                    in Safari. On Android, look for &quot;Install App&quot; or &quot;Add to Home Screen&quot; in Chrome.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Support */}
            <div className="pt-8 border-t border-[#2d3748]">
              <h2 className="text-2xl font-bold text-white mb-6">Still Need Help?</h2>
              <p className="text-[#a0aec0] leading-relaxed mb-6">
                Can&apos;t find what you&apos;re looking for? Our support team is here to help you get the most out of your OnlyHockey experience.
              </p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="mailto:team@onlyhockey.com" 
                  className="bg-[#4cc9f0] hover:bg-[#3bb5e0] text-[#0a0e1a] font-semibold px-8 py-3 rounded-lg transition-colors duration-200 inline-block"
                >
                  Contact Support
                </a>
                <a 
                  href="/faq" 
                  className="bg-gray-600 hover:bg-gray-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200 inline-block"
                >
                  View FAQ
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
