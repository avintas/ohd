import {
  fetchStats,
  fetchWisdom,
  fetchRandomMotivational,
  fetchRandomGreeting,
} from '@/lib/tango-api';
import type { Stat, Wisdom, Motivational, Greeting } from '@/lib/tango-types';

export async function TangoTest() {
  // Test all endpoints in parallel
  const [statsResult, wisdomResult, motivationalResult, greetingResult] =
    await Promise.all([
      fetchStats(3),
      fetchWisdom(3),
      fetchRandomMotivational(),
      fetchRandomGreeting(),
    ]);

  const stats: Stat[] = statsResult.success ? statsResult.data : [];
  const wisdom: Wisdom[] = wisdomResult.success ? wisdomResult.data : [];
  const motivational: Motivational | null = motivationalResult.success
    ? motivationalResult.data
    : null;
  const greeting: Greeting | null = greetingResult.success
    ? greetingResult.data
    : null;

  return (
    <div className="p-8 space-y-8">
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-2">Tango CMS API Test</h1>
        <p className="text-gray-400">
          Testing connection to: {process.env.TANGO_CMS_URL || 'Not set'}
        </p>
      </div>

      {/* Stats Test */}
      <section className="border border-gray-700 rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">Stats Test</h2>
        {statsResult.success ? (
          <>
            <p className="text-green-400 mb-4">
              ✅ Success! Fetched {stats.length} stats
            </p>
            <ul className="space-y-2">
              {stats.map((stat) => (
                <li key={stat.id} className="border-l-2 border-blue-500 pl-4">
                  <p className="font-medium">{stat.stat_text}</p>
                  <p className="text-sm text-gray-400">
                    Category: {stat.stat_category}
                  </p>
                  {stat.attribution && (
                    <p className="text-xs text-gray-500">
                      — {stat.attribution}
                    </p>
                  )}
                </li>
              ))}
            </ul>
          </>
        ) : (
          <div className="text-red-400">
            ❌ Error: {statsResult.error || 'Unknown error'}
          </div>
        )}
      </section>

      {/* Wisdom Test */}
      <section className="border border-gray-700 rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">Wisdom Test</h2>
        {wisdomResult.success ? (
          <>
            <p className="text-green-400 mb-4">
              ✅ Success! Fetched {wisdom.length} wisdom items
            </p>
            <ul className="space-y-4">
              {wisdom.map((item) => (
                <li key={item.id} className="border-l-2 border-purple-500 pl-4">
                  <h3 className="font-semibold text-lg">{item.title}</h3>
                  <p className="text-gray-300">{item.musing}</p>
                  {item.from_the_box && (
                    <blockquote className="mt-2 italic text-gray-400 border-l-4 border-purple-500 pl-4">
                      {item.from_the_box}
                    </blockquote>
                  )}
                  {item.attribution && (
                    <p className="text-xs text-gray-500 mt-2">
                      — {item.attribution}
                    </p>
                  )}
                </li>
              ))}
            </ul>
          </>
        ) : (
          <div className="text-red-400">
            ❌ Error: {wisdomResult.error || 'Unknown error'}
          </div>
        )}
      </section>

      {/* Motivational Test */}
      <section className="border border-gray-700 rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">Motivational Test</h2>
        {motivationalResult.success ? (
          <>
            <p className="text-green-400 mb-4">
              ✅ Success! Fetched random quote
            </p>
            <div className="border-l-4 border-yellow-500 pl-6 py-4">
              <blockquote className="text-xl italic mb-2">
                {motivational.quote}
              </blockquote>
              {motivational.context && (
                <p className="text-gray-400 mb-2">{motivational.context}</p>
              )}
              {motivational.attribution && (
                <p className="text-sm text-gray-500">
                  — {motivational.attribution}
                </p>
              )}
            </div>
          </>
        ) : (
          <div className="text-red-400">
            ❌ Error: {motivationalResult.error || 'Unknown error'}
          </div>
        )}
      </section>

      {/* Greeting Test */}
      <section className="border border-gray-700 rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">Greeting Test</h2>
        {greetingResult.success ? (
          <>
            <p className="text-green-400 mb-4">
              ✅ Success! Fetched random greeting
            </p>
            <div className="border-l-4 border-green-500 pl-6 py-4">
              <p className="text-lg">{greeting.greeting_text}</p>
              {greeting.attribution && (
                <p className="text-sm text-gray-500 mt-2">
                  — {greeting.attribution}
                </p>
              )}
            </div>
          </>
        ) : (
          <div className="text-red-400">
            ❌ Error: {greetingResult.error || 'Unknown error'}
          </div>
        )}
      </section>

      {/* Debug Info */}
      <section className="border border-gray-700 rounded-lg p-6 bg-gray-900">
        <h2 className="text-2xl font-semibold mb-4">Debug Info</h2>
        <pre className="text-xs overflow-auto">
          {JSON.stringify(
            {
              TANGO_CMS_URL: process.env.TANGO_CMS_URL || 'NOT SET',
              stats: { success: statsResult.success, count: stats.length },
              wisdom: { success: wisdomResult.success, count: wisdom.length },
              motivational: { success: motivationalResult.success },
              greeting: { success: greetingResult.success },
            },
            null,
            2
          )}
        </pre>
      </section>
    </div>
  );
}
