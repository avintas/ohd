import { PageLayout } from '@/components';

export default function SiteSettingsPage() {
  return (
    <PageLayout>
      <div className="py-12 md:py-16 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Page Title */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Site Settings
            </h1>
            <p className="text-lg text-[#a0aec0]">
              Customize your OnlyHockey experience with these preferences.
            </p>
          </div>

          {/* Settings Sections */}
          <div className="space-y-12">
            
            {/* Display & Theme */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">Display & Theme</h2>
              <div className="space-y-6">
                
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Dark Mode</h3>
                    <p className="text-[#a0aec0] text-sm">Use dark theme for better viewing experience</p>
                  </div>
                  <div className="relative">
                    <input type="checkbox" id="dark-mode" className="sr-only" defaultChecked />
                    <label htmlFor="dark-mode" className="flex items-center cursor-pointer">
                      <div className="relative">
                        <div className="w-12 h-6 bg-[#4cc9f0] rounded-full shadow-inner"></div>
                        <div className="absolute w-4 h-4 bg-white rounded-full shadow top-1 right-1 transition-transform"></div>
                      </div>
                    </label>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Animations</h3>
                    <p className="text-[#a0aec0] text-sm">Enable hover effects and smooth transitions</p>
                  </div>
                  <div className="relative">
                    <input type="checkbox" id="animations" className="sr-only" defaultChecked />
                    <label htmlFor="animations" className="flex items-center cursor-pointer">
                      <div className="relative">
                        <div className="w-12 h-6 bg-[#4cc9f0] rounded-full shadow-inner"></div>
                        <div className="absolute w-4 h-4 bg-white rounded-full shadow top-1 right-1 transition-transform"></div>
                      </div>
                    </label>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Large Text</h3>
                    <p className="text-[#a0aec0] text-sm">Increase font size for better readability</p>
                  </div>
                  <div className="relative">
                    <input type="checkbox" id="large-text" className="sr-only" />
                    <label htmlFor="large-text" className="flex items-center cursor-pointer">
                      <div className="relative">
                        <div className="w-12 h-6 bg-gray-600 rounded-full shadow-inner"></div>
                        <div className="absolute w-4 h-4 bg-white rounded-full shadow top-1 left-1 transition-transform"></div>
                      </div>
                    </label>
                  </div>
                </div>
              </div>
            </div>

            {/* Notifications */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">Notifications</h2>
              <div className="space-y-6">
                
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Email Notifications</h3>
                    <p className="text-[#a0aec0] text-sm">Receive updates about new hockey content</p>
                  </div>
                  <div className="relative">
                    <input type="checkbox" id="email-notifications" className="sr-only" defaultChecked />
                    <label htmlFor="email-notifications" className="flex items-center cursor-pointer">
                      <div className="relative">
                        <div className="w-12 h-6 bg-[#4cc9f0] rounded-full shadow-inner"></div>
                        <div className="absolute w-4 h-4 bg-white rounded-full shadow top-1 right-1 transition-transform"></div>
                      </div>
                    </label>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Weekly Newsletter</h3>
                    <p className="text-[#a0aec0] text-sm">Hockey tips, trivia, and crew updates</p>
                  </div>
                  <div className="relative">
                    <input type="checkbox" id="newsletter" className="sr-only" />
                    <label htmlFor="newsletter" className="flex items-center cursor-pointer">
                      <div className="relative">
                        <div className="w-12 h-6 bg-gray-600 rounded-full shadow-inner"></div>
                        <div className="absolute w-4 h-4 bg-white rounded-full shadow top-1 left-1 transition-transform"></div>
                      </div>
                    </label>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Browser Notifications</h3>
                    <p className="text-[#a0aec0] text-sm">Get notified about new posts and updates</p>
                  </div>
                  <div className="relative">
                    <input type="checkbox" id="browser-notifications" className="sr-only" />
                    <label htmlFor="browser-notifications" className="flex items-center cursor-pointer">
                      <div className="relative">
                        <div className="w-12 h-6 bg-gray-600 rounded-full shadow-inner"></div>
                        <div className="absolute w-4 h-4 bg-white rounded-full shadow top-1 left-1 transition-transform"></div>
                      </div>
                    </label>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Preferences */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">Content Preferences</h2>
              <div className="space-y-6">
                
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Show Trivia Content</h3>
                    <p className="text-[#a0aec0] text-sm">Display hockey trivia and brain training content</p>
                  </div>
                  <div className="relative">
                    <input type="checkbox" id="show-trivia" className="sr-only" defaultChecked />
                    <label htmlFor="show-trivia" className="flex items-center cursor-pointer">
                      <div className="relative">
                        <div className="w-12 h-6 bg-[#4cc9f0] rounded-full shadow-inner"></div>
                        <div className="absolute w-4 h-4 bg-white rounded-full shadow top-1 right-1 transition-transform"></div>
                      </div>
                    </label>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Show Motivational Content</h3>
                    <p className="text-[#a0aec0] text-sm">Display motivational quotes and coaching tips</p>
                  </div>
                  <div className="relative">
                    <input type="checkbox" id="show-motivational" className="sr-only" defaultChecked />
                    <label htmlFor="show-motivational" className="flex items-center cursor-pointer">
                      <div className="relative">
                        <div className="w-12 h-6 bg-[#4cc9f0] rounded-full shadow-inner"></div>
                        <div className="absolute w-4 h-4 bg-white rounded-full shadow top-1 right-1 transition-transform"></div>
                      </div>
                    </label>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Show Statistics</h3>
                    <p className="text-[#a0aec0] text-sm">Display hockey stats and analytics content</p>
                  </div>
                  <div className="relative">
                    <input type="checkbox" id="show-stats" className="sr-only" defaultChecked />
                    <label htmlFor="show-stats" className="flex items-center cursor-pointer">
                      <div className="relative">
                        <div className="w-12 h-6 bg-[#4cc9f0] rounded-full shadow-inner"></div>
                        <div className="absolute w-4 h-4 bg-white rounded-full shadow top-1 right-1 transition-transform"></div>
                      </div>
                    </label>
                  </div>
                </div>
              </div>
            </div>

            {/* Privacy & Data */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">Privacy & Data</h2>
              <div className="space-y-6">
                
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Analytics Data</h3>
                    <p className="text-[#a0aec0] text-sm">Help improve the site by sharing usage data</p>
                  </div>
                  <div className="relative">
                    <input type="checkbox" id="analytics" className="sr-only" defaultChecked />
                    <label htmlFor="analytics" className="flex items-center cursor-pointer">
                      <div className="relative">
                        <div className="w-12 h-6 bg-[#4cc9f0] rounded-full shadow-inner"></div>
                        <div className="absolute w-4 h-4 bg-white rounded-full shadow top-1 right-1 transition-transform"></div>
                      </div>
                    </label>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Marketing Cookies</h3>
                    <p className="text-[#a0aec0] text-sm">Allow personalized content and advertisements</p>
                  </div>
                  <div className="relative">
                    <input type="checkbox" id="marketing-cookies" className="sr-only" />
                    <label htmlFor="marketing-cookies" className="flex items-center cursor-pointer">
                      <div className="relative">
                        <div className="w-12 h-6 bg-gray-600 rounded-full shadow-inner"></div>
                        <div className="absolute w-4 h-4 bg-white rounded-full shadow top-1 left-1 transition-transform"></div>
                      </div>
                    </label>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Public Profile</h3>
                    <p className="text-[#a0aec0] text-sm">Make your stats and achievements visible to others</p>
                  </div>
                  <div className="relative">
                    <input type="checkbox" id="public-profile" className="sr-only" />
                    <label htmlFor="public-profile" className="flex items-center cursor-pointer">
                      <div className="relative">
                        <div className="w-12 h-6 bg-gray-600 rounded-full shadow-inner"></div>
                        <div className="absolute w-4 h-4 bg-white rounded-full shadow top-1 left-1 transition-transform"></div>
                      </div>
                    </label>
                  </div>
                </div>
              </div>
            </div>

            {/* Personalization */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">Personalization</h2>
              <div className="space-y-6">
                
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Favorite Team</h3>
                  <select className="w-full md:w-64 bg-[#1a1f2e] border border-[#4cc9f0]/20 rounded-lg px-4 py-2 text-white focus:border-[#4cc9f0] focus:outline-none">
                    <option value="">Select your favorite NHL team</option>
                    <option value="bos">Boston Bruins</option>
                    <option value="buf">Buffalo Sabres</option>
                    <option value="det">Detroit Red Wings</option>
                    <option value="fla">Florida Panthers</option>
                    <option value="mtl">Montreal Canadiens</option>
                    <option value="ott">Ottawa Senators</option>
                    <option value="tb">Tampa Bay Lightning</option>
                    <option value="tor">Toronto Maple Leafs</option>
                  </select>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Default Landing Page</h3>
                  <select className="w-full md:w-64 bg-[#1a1f2e] border border-[#4cc9f0]/20 rounded-lg px-4 py-2 text-white focus:border-[#4cc9f0] focus:outline-none">
                    <option value="home">Home</option>
                    <option value="trivia-zone">Trivia Zone</option>
                    <option value="stories">Hockey Lore</option>
                    <option value="captain-heart">Heart & Share</option>
                    <option value="shop">Shop</option>
                  </select>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Trivia Difficulty</h3>
                  <select className="w-full md:w-64 bg-[#1a1f2e] border border-[#4cc9f0]/20 rounded-lg px-4 py-2 text-white focus:border-[#4cc9f0] focus:outline-none">
                    <option value="beginner">Beginner</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="advanced">Advanced</option>
                    <option value="expert">Expert</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Save Button */}
            <div className="pt-8 border-t border-[#2d3748]">
              <button className="bg-[#4cc9f0] hover:bg-[#3bb5e0] text-[#0a0e1a] font-semibold px-8 py-3 rounded-lg transition-colors duration-200">
                Save Settings
              </button>
              <p className="text-[#a0aec0] text-sm mt-3">
                Changes are automatically saved when you toggle settings.
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
