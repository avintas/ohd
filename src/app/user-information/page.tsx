import { PageLayout } from '@/components';

export default function UserInformationPage() {
  return (
    <PageLayout>
      <div className="py-12 md:py-16 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Page Title */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              User Information
            </h1>
            <p className="text-lg text-[#a0aec0]">
              Manage your personal information and account preferences.
            </p>
          </div>

          {/* User Information Form */}
          <div className="space-y-12">
            {/* Personal Information */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">
                Personal Information
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-white mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder="Alex"
                    className="w-full bg-[#1a1f2e] border border-[#4cc9f0]/20 rounded-lg px-4 py-3 text-white placeholder-[#a0aec0] focus:border-[#4cc9f0] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-white mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="Smith"
                    className="w-full bg-[#1a1f2e] border border-[#4cc9f0]/20 rounded-lg px-4 py-3 text-white placeholder-[#a0aec0] focus:border-[#4cc9f0] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-white mb-2">
                    Username
                  </label>
                  <input
                    type="text"
                    placeholder="Mavrik2828"
                    className="w-full bg-[#1a1f2e] border border-[#4cc9f0]/20 rounded-lg px-4 py-3 text-white placeholder-[#a0aec0] focus:border-[#4cc9f0] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-white mb-2">
                    Display Name
                  </label>
                  <input
                    type="text"
                    placeholder="Aim243"
                    className="w-full bg-[#1a1f2e] border border-[#4cc9f0]/20 rounded-lg px-4 py-3 text-white placeholder-[#a0aec0] focus:border-[#4cc9f0] focus:outline-none"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-white mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="alex.smith@email.com"
                    className="w-full bg-[#1a1f2e] border border-[#4cc9f0]/20 rounded-lg px-4 py-3 text-white placeholder-[#a0aec0] focus:border-[#4cc9f0] focus:outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Hockey Profile */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">
                Hockey Profile
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-white mb-2">
                    Favorite Team
                  </label>
                  <select className="w-full bg-[#1a1f2e] border border-[#4cc9f0]/20 rounded-lg px-4 py-3 text-white focus:border-[#4cc9f0] focus:outline-none">
                    <option value="">Select your favorite NHL team</option>
                    <option value="bos">Boston Bruins</option>
                    <option value="buf">Buffalo Sabres</option>
                    <option value="det">Detroit Red Wings</option>
                    <option value="fla">Florida Panthers</option>
                    <option value="mtl">Montreal Canadiens</option>
                    <option value="ott">Ottawa Senators</option>
                    <option value="tb">Tampa Bay Lightning</option>
                    <option value="tor">Toronto Maple Leafs</option>
                    <option value="car">Carolina Hurricanes</option>
                    <option value="cbj">Columbus Blue Jackets</option>
                    <option value="nj">New Jersey Devils</option>
                    <option value="nyi">New York Islanders</option>
                    <option value="nyr">New York Rangers</option>
                    <option value="phi">Philadelphia Flyers</option>
                    <option value="pit">Pittsburgh Penguins</option>
                    <option value="wsh">Washington Capitals</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-white mb-2">
                    Playing Experience
                  </label>
                  <select className="w-full bg-[#1a1f2e] border border-[#4cc9f0]/20 rounded-lg px-4 py-3 text-white focus:border-[#4cc9f0] focus:outline-none">
                    <option value="">Select your experience level</option>
                    <option value="never">Never played</option>
                    <option value="recreational">
                      Recreational/Beer League
                    </option>
                    <option value="high-school">High School</option>
                    <option value="junior">Junior Hockey</option>
                    <option value="college">College/University</option>
                    <option value="semi-pro">Semi-Professional</option>
                    <option value="professional">Professional</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-white mb-2">
                    Preferred Position
                  </label>
                  <select className="w-full bg-[#1a1f2e] border border-[#4cc9f0]/20 rounded-lg px-4 py-3 text-white focus:border-[#4cc9f0] focus:outline-none">
                    <option value="">Select your position</option>
                    <option value="goalie">Goaltender</option>
                    <option value="defense">Defense</option>
                    <option value="left-wing">Left Wing</option>
                    <option value="center">Center</option>
                    <option value="right-wing">Right Wing</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-white mb-2">
                    Years Following Hockey
                  </label>
                  <select className="w-full bg-[#1a1f2e] border border-[#4cc9f0]/20 rounded-lg px-4 py-3 text-white focus:border-[#4cc9f0] focus:outline-none">
                    <option value="">How long have you been a fan?</option>
                    <option value="new">New fan (less than 1 year)</option>
                    <option value="casual">Casual fan (1-5 years)</option>
                    <option value="dedicated">
                      Dedicated fan (5-15 years)
                    </option>
                    <option value="lifelong">Lifelong fan (15+ years)</option>
                  </select>
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-white mb-2">
                    About Me
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your hockey journey, favorite memories, or what you love most about the game..."
                    className="w-full bg-[#1a1f2e] border border-[#4cc9f0]/20 rounded-lg px-4 py-3 text-white placeholder-[#a0aec0] focus:border-[#4cc9f0] focus:outline-none resize-none"
                  ></textarea>
                </div>
              </div>
            </div>

            {/* Account Settings */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">
                Account Settings
              </h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-white mb-2">
                    Current Password
                  </label>
                  <input
                    type="password"
                    placeholder="Enter your current password"
                    className="w-full md:w-96 bg-[#1a1f2e] border border-[#4cc9f0]/20 rounded-lg px-4 py-3 text-white placeholder-[#a0aec0] focus:border-[#4cc9f0] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-white mb-2">
                    New Password
                  </label>
                  <input
                    type="password"
                    placeholder="Enter a new password"
                    className="w-full md:w-96 bg-[#1a1f2e] border border-[#4cc9f0]/20 rounded-lg px-4 py-3 text-white placeholder-[#a0aec0] focus:border-[#4cc9f0] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-white mb-2">
                    Confirm New Password
                  </label>
                  <input
                    type="password"
                    placeholder="Confirm your new password"
                    className="w-full md:w-96 bg-[#1a1f2e] border border-[#4cc9f0]/20 rounded-lg px-4 py-3 text-white placeholder-[#a0aec0] focus:border-[#4cc9f0] focus:outline-none"
                  />
                </div>

                <div className="pt-4">
                  <h3 className="text-lg font-semibold text-white mb-3">
                    Account Actions
                  </h3>
                  <div className="flex flex-wrap gap-4">
                    <button className="bg-[#4cc9f0] hover:bg-[#3bb5e0] text-[#0a0e1a] font-semibold px-6 py-2 rounded-lg transition-colors duration-200">
                      Export Data
                    </button>
                    <button className="bg-gray-600 hover:bg-gray-700 text-white font-semibold px-6 py-2 rounded-lg transition-colors duration-200">
                      Deactivate Account
                    </button>
                    <button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-2 rounded-lg transition-colors duration-200">
                      Delete Account
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Save Button */}
            <div className="pt-8 border-t border-[#2d3748]">
              <div className="flex flex-wrap gap-4">
                <button className="bg-[#4cc9f0] hover:bg-[#3bb5e0] text-[#0a0e1a] font-semibold px-8 py-3 rounded-lg transition-colors duration-200">
                  Save Changes
                </button>
                <button className="bg-gray-600 hover:bg-gray-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200">
                  Cancel
                </button>
              </div>
              <p className="text-[#a0aec0] text-sm mt-3">
                Make sure to save your changes before navigating away from this
                page.
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
