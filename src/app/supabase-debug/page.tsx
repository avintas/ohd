import { supabase, type ContentProcessed } from '@/lib/supabase';
import { PageLayout } from '@/components';

export default async function SupabaseDebugPage() {
  let allContent: ContentProcessed[] = [];
  let contentTypes: string[] = [];
  let error: string | null = null;

  try {
    if (supabase) {
      // Get all content to see what's available
      const { data: allData, error: allError } = await supabase
        .from('content_processed')
        .select('*')
        .order('created_at', { ascending: false });

      if (allError) {
        error = allError.message;
      } else {
        allContent = allData || [];
      }

      // Get unique content types
      const { data: typesData, error: typesError } = await supabase
        .from('content_processed')
        .select('content_type');

      if (!typesError && typesData) {
        contentTypes = [...new Set(typesData.map((item) => item.content_type))];
      }
    } else {
      error = 'Supabase not configured';
    }
  } catch (err) {
    error = 'Failed to fetch data';
    console.error(err);
  }

  return (
    <PageLayout>
      <div className="py-16 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-8">
            🔍 Supabase Content Explorer
          </h1>

          {error && (
            <div className="bg-red-900/50 border border-red-500 rounded-2xl p-6 mb-8">
              <h2 className="text-xl font-bold text-red-400 mb-2">Error</h2>
              <p className="text-red-300">{error}</p>
            </div>
          )}

          {/* Content Types Summary */}
          <div className="bg-[#16213e] rounded-2xl p-6 mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">
              Available Content Types
            </h2>
            {contentTypes.length > 0 ? (
              <div className="flex flex-wrap gap-2">
                {contentTypes.map((type) => (
                  <span
                    key={type}
                    className="bg-[#4cc9f0] text-[#0a0e1a] px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {type}
                  </span>
                ))}
              </div>
            ) : (
              <p className="text-[#a0aec0]">No content types found</p>
            )}
          </div>

          {/* All Content */}
          <div className="bg-[#16213e] rounded-2xl p-6 mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">
              All Content ({allContent.length} items)
            </h2>

            {allContent.length > 0 ? (
              <div className="space-y-4 max-h-96 overflow-y-auto">
                {allContent.map((item, index) => (
                  <div
                    key={item.id}
                    className="bg-[#0a0e1a] p-4 rounded border-l-4 border-[#4cc9f0]"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-[#4cc9f0] font-bold text-lg">
                        {item.title}
                      </h3>
                      <span className="text-xs text-[#a0aec0] bg-[#16213e] px-2 py-1 rounded">
                        #{index + 1}
                      </span>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm mb-3">
                      <div>
                        <span className="text-[#a0aec0]">ID:</span>
                        <p className="text-white font-mono text-xs break-all">
                          {item.id}
                        </p>
                      </div>
                      <div>
                        <span className="text-[#a0aec0]">Type:</span>
                        <p className="text-white">{item.content_type}</p>
                      </div>
                      <div>
                        <span className="text-[#a0aec0]">Status:</span>
                        <p className="text-white">{item.status}</p>
                      </div>
                      <div>
                        <span className="text-[#a0aec0]">Created:</span>
                        <p className="text-white">
                          {new Date(item.created_at).toLocaleDateString()}
                        </p>
                      </div>
                    </div>

                    {/* Show first 200 chars of markdown content */}
                    {item.markdown_content && (
                      <details className="mt-3">
                        <summary className="text-[#4cc9f0] cursor-pointer hover:text-[#3bb5e0]">
                          Preview Markdown Content
                        </summary>
                        <pre className="mt-2 text-xs bg-[#16213e] p-3 rounded overflow-x-auto whitespace-pre-wrap text-[#a0aec0] max-h-40 overflow-y-auto">
                          {item.markdown_content.substring(0, 500)}
                          {item.markdown_content.length > 500 ? '...' : ''}
                        </pre>
                      </details>
                    )}

                    {/* ID Display */}
                    <div className="mt-3 bg-[#4cc9f0] text-[#0a0e1a] px-3 py-1 rounded text-sm font-medium inline-block">
                      📋 ID: {item.id}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8">
                <p className="text-[#a0aec0] text-lg mb-4">
                  No content found in Supabase
                </p>
                <p className="text-[#a0aec0] text-sm">This could mean:</p>
                <ul className="text-[#a0aec0] text-sm mt-2 space-y-1">
                  <li>• No content has been created in Tango CMS yet</li>
                  <li>• Content exists but isn&apos;t published</li>
                  <li>• Content is in a different table</li>
                </ul>
              </div>
            )}
          </div>

          {/* Instructions */}
          <div className="bg-[#16213e] rounded-2xl p-6">
            <h2 className="text-2xl font-bold text-white mb-4">Next Steps</h2>
            <div className="text-[#a0aec0] space-y-2">
              <p>
                🔍 <strong>Found content?</strong> Copy an ID and we&apos;ll
                create a loader for it
              </p>
              <p>
                📝 <strong>No content?</strong> Create some in Tango CMS first
              </p>
              <p>
                🎯 <strong>Looking for daily quiz?</strong> Check if
                content_type is &quot;daily-quiz&quot;
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
