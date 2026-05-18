export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-medium px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          AI-Powered Developer Tool
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Turn Git Commits into{" "}
          <span className="text-[#58a6ff]">Beautiful Changelogs</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Connect your GitHub repo, select a commit range, and let AI generate
          categorized, user-friendly changelogs in Markdown, HTML, or JSON — in seconds.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href={checkoutUrl}
            className="bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-7 py-3 rounded-lg transition-colors text-sm"
          >
            Get Started — $19/mo
          </a>
          <a
            href="#faq"
            className="border border-[#30363d] hover:border-[#58a6ff] text-[#c9d1d9] px-7 py-3 rounded-lg transition-colors text-sm"
          >
            Learn More
          </a>
        </div>
        <div className="mt-14 grid grid-cols-3 gap-6 text-center">
          {[
            ["GitHub OAuth", "Secure repo access"],
            ["AI Categorization", "Features, fixes, breaking changes"],
            ["3 Export Formats", "Markdown, HTML, JSON"],
          ].map(([title, desc]) => (
            <div key={title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-4">
              <p className="text-white font-semibold text-sm mb-1">{title}</p>
              <p className="text-[#8b949e] text-xs">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center shadow-lg shadow-[#58a6ff]/10">
          <span className="text-[#58a6ff] text-xs font-semibold uppercase tracking-widest">Pro Plan</span>
          <div className="mt-3 mb-1">
            <span className="text-5xl font-bold text-white">$19</span>
            <span className="text-[#8b949e] text-sm">/month</span>
          </div>
          <p className="text-[#8b949e] text-sm mb-6">Everything you need for professional changelogs</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited changelog generations",
              "GitHub OAuth — connect any repo",
              "AI-powered commit categorization",
              "Export as Markdown, HTML, or JSON",
              "Custom commit range selection",
              "Priority email support",
            ].map((feature) => (
              <li key={feature} className="flex items-center gap-2 text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold py-3 rounded-lg transition-colors text-sm"
          >
            Start Now — $19/mo
          </a>
          <p className="text-[#8b949e] text-xs mt-3">Cancel anytime. No contracts.</p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            [
              "How does the AI generate changelogs?",
              "We send your commit messages to OpenAI, which categorizes them into features, bug fixes, breaking changes, and improvements — then formats them into a clean, readable changelog.",
            ],
            [
              "Which repositories are supported?",
              "Any public or private GitHub repository you have access to. We use GitHub OAuth so you stay in control of permissions.",
            ],
            [
              "Can I cancel my subscription?",
              "Yes, cancel anytime from your billing portal. You keep access until the end of your billing period.",
            ],
          ].map(([q, a]) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <p className="text-white font-semibold text-sm mb-2">{q}</p>
              <p className="text-[#8b949e] text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-6 text-[#8b949e] text-xs">
        © {new Date().getFullYear()} ChangelogAI. All rights reserved.
      </footer>
    </main>
  );
}
