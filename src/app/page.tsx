import Link from 'next/link';

export default function Home() {
  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="text-center py-24 bg-gradient-to-b from-blue-50 to-white dark:from-blue-950/20 dark:to-gray-900 rounded-3xl px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
          Discover the World of{' '}
          <span className="text-blue-600 dark:text-blue-400 block mt-2">
            AI & Language Models
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
          Your gateway to understanding artificial intelligence, large language models,
          and their transformative impact on our world.
        </p>
        <Link
          href="/fundamentals"
          className="inline-block bg-blue-600 text-white px-10 py-4 rounded-lg text-lg
            hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-500 transition-colors
            hover:shadow-lg"
        >
          Start Learning
        </Link>
      </section>

      {/* Features Grid */}
      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        <div className="p-8 bg-white dark:bg-gray-800 rounded-xl shadow-sm border dark:border-gray-700 hover:shadow-lg transition-shadow">
          <h3 className="text-2xl font-semibold mb-4">AI Fundamentals</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
            Learn the basic concepts of artificial intelligence, machine learning,
            and how computers learn to solve complex problems.
          </p>
          <Link 
            href="/fundamentals" 
            className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline font-medium"
          >
            Explore Basics <span className="ml-2">→</span>
          </Link>
        </div>

        <div className="p-8 bg-white dark:bg-gray-800 rounded-xl shadow-sm border dark:border-gray-700 hover:shadow-lg transition-shadow">
          <h3 className="text-2xl font-semibold mb-4">Understanding LLMs</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
            Dive deep into large language models, how they work, and why they&apos;re
            revolutionizing how we interact with technology.
          </p>
          <Link 
            href="/llms" 
            className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline font-medium"
          >
            Learn About LLMs <span className="ml-2">→</span>
          </Link>
        </div>

        <div className="p-8 bg-white dark:bg-gray-800 rounded-xl shadow-sm border dark:border-gray-700 hover:shadow-lg transition-shadow">
          <h3 className="text-2xl font-semibold mb-4">AI Implications</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
            Explore the societal, ethical, and economic implications of AI
            technology in our rapidly evolving world.
          </p>
          <Link 
            href="/implications" 
            className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline font-medium"
          >
            Understand Impact <span className="ml-2">→</span>
          </Link>
        </div>
      </section>

      {/* Why Learn Section */}
      <section className="bg-white dark:bg-gray-800 p-12 rounded-xl border dark:border-gray-700 mx-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Why Learn About AI?
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold mb-4">Stay Informed</h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
              AI is transforming every industry. Understanding its capabilities and
              limitations is crucial for making informed decisions in today&apos;s
              technology-driven world.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold mb-4">Future-Proof Skills</h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
              Gain the knowledge needed to leverage AI tools effectively and
              prepare yourself for an AI-driven future. Stay ahead of the curve
              with practical insights.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center py-16 px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Begin?</h2>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
          Start your journey into the fascinating world of artificial intelligence
          and discover how it&apos;s shaping our future.
        </p>
        <Link
          href="/fundamentals"
          className="inline-block bg-blue-600 text-white px-10 py-4 rounded-lg text-lg
            hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-500 transition-colors
            hover:shadow-lg"
        >
          Get Started Now
        </Link>
      </section>
    </div>
  );
}
