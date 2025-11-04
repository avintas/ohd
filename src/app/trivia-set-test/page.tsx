import { getTriviaSetById } from '@/lib/triviaSetLoader';
import { PageLayout } from '@/components';
import TriviaSetClient from './TriviaSetClient';

export default async function TriviaSetTestPage() {
  // Fetch trivia set #4
  const triviaSet = await getTriviaSetById(4);

  return (
    <PageLayout>
      <div className="py-16 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-8">
            🎮 Trivia Set #4 Test
          </h1>

          {triviaSet ? (
            <div className="space-y-6">
              {/* Trivia Set Info */}
              <div className="bg-[#16213e] rounded-2xl p-6">
                <h2 className="text-2xl font-bold text-white mb-4">
                  ✅ Successfully Loaded Trivia Set #4
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div>
                    <span className="text-[#a0aec0]">Title:</span>
                    <p className="text-white font-bold">{triviaSet.title}</p>
                  </div>
                  <div>
                    <span className="text-[#a0aec0]">ID:</span>
                    <p className="text-white">{triviaSet.id}</p>
                  </div>
                  {triviaSet.difficulty && (
                    <div>
                      <span className="text-[#a0aec0]">Difficulty:</span>
                      <p className="text-white">{triviaSet.difficulty}</p>
                    </div>
                  )}
                  {triviaSet.category && (
                    <div>
                      <span className="text-[#a0aec0]">Category:</span>
                      <p className="text-white">{triviaSet.category}</p>
                    </div>
                  )}
                  {triviaSet.question_count && (
                    <div>
                      <span className="text-[#a0aec0]">Questions:</span>
                      <p className="text-white">{triviaSet.question_count}</p>
                    </div>
                  )}
                  {triviaSet.status && (
                    <div>
                      <span className="text-[#a0aec0]">Status:</span>
                      <p className="text-white">{triviaSet.status}</p>
                    </div>
                  )}
                  <div>
                    <span className="text-[#a0aec0]">Created:</span>
                    <p className="text-white">
                      {new Date(triviaSet.created_at).toLocaleDateString()}
                    </p>
                  </div>
                </div>

                {/* Question Data Preview */}
                <div>
                  <h3 className="text-lg font-bold text-white mb-3">
                    Question Data (JSONB):
                  </h3>
                  <div className="bg-[#0a0e1a] p-4 rounded overflow-x-auto">
                    <pre className="text-[#a0aec0] text-sm whitespace-pre-wrap max-h-96 overflow-y-auto">
                      {JSON.stringify(triviaSet.question_data, null, 2)}
                    </pre>
                  </div>
                  <div className="mt-2 text-xs text-[#a0aec0]">
                    Type: {typeof triviaSet.question_data} |
                    {Array.isArray(triviaSet.question_data)
                      ? ` Array with ${triviaSet.question_data.length} items`
                      : ' Object'}
                  </div>
                </div>
              </div>

              {/* Interactive Quiz */}
              <TriviaSetClient triviaSet={triviaSet} />

              {/* Next Steps */}
              <div className="bg-[#16213e] rounded-2xl p-6">
                <h3 className="text-xl font-bold text-white mb-4">
                  🚀 Integration Status
                </h3>
                <div className="text-[#a0aec0] space-y-2">
                  <p>✅ Successfully connected to trivia_sets table</p>
                  <p>✅ Loaded trivia set #4 data</p>
                  <p>✅ Parsed content into interactive quiz</p>
                  <p>🎯 Ready to integrate with trivia zone</p>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-red-900/50 border border-red-500 rounded-2xl p-6">
              <h2 className="text-xl font-bold text-red-400 mb-2">
                ❌ Failed to Load Trivia Set #4
              </h2>
              <p className="text-red-300">
                Could not find trivia set with ID #4 in the trivia_sets table.
              </p>
              <div className="mt-4 text-red-300 text-sm">
                <p>Possible issues:</p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>Trivia set #4 doesn&apos;t exist</li>
                  <li>Database connection issue</li>
                  <li>Table name is different</li>
                  <li>Permission issues</li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </PageLayout>
  );
}
