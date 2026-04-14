"use client";

import { ArrowLeft, Download, Share2 } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function DocViewPage() {
  const [copied, setCopied] = useState(false);

  function share() {
    const url = window.location.href;
    if (navigator.share) {
      navigator.share({ title: "User Manual", url }).catch(() => null);
    } else {
      navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }

  return (
    <main className="max-w-3xl mx-auto px-6 py-24">
      <div className="flex items-center justify-between mb-8">
        <Link href="/docs" className="inline-flex items-center gap-2 text-[#3b82f6] hover:text-[#60a5fa] text-sm font-medium transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Back to Documentation
        </Link>
        <div className="flex gap-2">
          <a
            href="/docs/USER_MANUAL.pdf"
            download="USER_MANUAL.pdf"
            className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white text-sm font-medium px-3 py-1.5 rounded-lg transition-colors"
          >
            <Download className="w-3.5 h-3.5" />
            Download PDF
          </a>
          <button
            onClick={share}
            className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white text-sm font-medium px-3 py-1.5 rounded-lg transition-colors"
          >
            <Share2 className="w-3.5 h-3.5" />
            {copied ? "Copied!" : "Share"}
          </button>
        </div>
      </div>
      <h1 className="text-3xl font-black text-white mb-6">User Manual</h1>
      <div dangerouslySetInnerHTML={{ __html: `<p class="text-white/70 text-sm leading-relaxed mb-4"><strong class="text-white font-semibold">App:</strong> Nomadical</p>
<p class="text-white/70 text-sm leading-relaxed mb-4"><strong class="text-white font-semibold">Version:</strong> 2.5.0</p>
<p class="text-white/70 text-sm leading-relaxed mb-4"><strong class="text-white font-semibold">Owner:</strong> KangaBlue.au</p>
<p class="text-white/70 text-sm leading-relaxed mb-4"><strong class="text-white font-semibold">Contact:</strong> skippy@kangablue.au</p>
<p class="text-white/70 text-sm leading-relaxed mb-4"><strong class="text-white font-semibold">Last updated:</strong> 2026-04-14</p>
<p class="text-white/70 text-sm leading-relaxed mb-4"><strong class="text-white font-semibold">Platform:</strong> Android (API 24+)</p>
<hr class="border-white/10 my-6"/>
<h2 id="introduction" class="text-xl font-bold text-white mt-10 mb-4 pb-2 border-b border-white/10">Introduction</h2>
<p class="text-white/70 text-sm leading-relaxed mb-4">Nomadical is a <strong class="text-white font-semibold">fully offline survival companion</strong> for Android. Everything — AI inference, knowledge articles, document search, GPS, compass, checklists, journal, and SOS tools — runs entirely on your device. After the one-time AI model download, the app requires <strong class="text-white font-semibold">no internet connection</strong> for any feature.</p>
<h3 id="what-s-in-v2-5" class="text-lg font-bold text-white mt-8 mb-3">What's in v2.5</h3>
<ul class="list-disc pl-6 mb-4 space-y-1">
<li class="text-white/70 text-sm"><strong class="text-white font-semibold">1,000+ curated survival articles</strong> across 22 categories — first aid, food and foraging, knots and rope, navigation, off-grid living, self-defence, shelter, fire, water, weather, tools, bug-out bags, communication, vehicle repair, DIY repair, alternative energy, clothing, coastal and marine, cold weather, desert, bush medicine, and survival psychology. Sourced from US Army FM 21-76, FEMA/Ready.gov, NOAA, CDC, US Forest Service, NPS, NZ DOC, NSW WeedWise and more.</li>
<li class="text-white/70 text-sm"><strong class="text-white font-semibold">On-device AI chat</strong> powered by Google's <strong class="text-white font-semibold">Gemma 4 2B</strong> model via the LiteRT-LM SDK. Ask survival questions, get structured emergency-mode and learn-mode answers. Fully offline after a one-time 2.6 GB model download.</li>
<li class="text-white/70 text-sm"><strong class="text-white font-semibold">My Documents and chat with your own PDFs</strong> <em>(new in v2.5)</em>. Import any PDF, TXT or Markdown file and ask the on-device AI questions about it. Single-document mode for focused drill-downs and <strong class="text-white font-semibold">"Ask my library"</strong> for cross-document search across everything you've imported. Source pills deep-link directly into the PDF viewer at the cited page.</li>
<li class="text-white/70 text-sm"><strong class="text-white font-semibold">On-device OCR</strong> <em>(new in v2.5)</em> via Google ML Kit Text Recognition for scanned PDFs without a text layer — no cloud round-trips, all extraction runs locally.</li>
<li class="text-white/70 text-sm"><strong class="text-white font-semibold">AI Scanner</strong> for plant, animal and object identification with a danger-level indicator.</li>
<li class="text-white/70 text-sm"><strong class="text-white font-semibold">Offline maps</strong> with user-cacheable tiles, <strong class="text-white font-semibold">digital compass</strong> with magnetic declination correction, and a <strong class="text-white font-semibold">field journal</strong> with optional GPS tagging and photos.</li>
<li class="text-white/70 text-sm"><strong class="text-white font-semibold">Emergency tools</strong> — SOS Morse-code flashlight, persistent one-tap SOS button, customisable emergency checklists, and a <strong class="text-white font-semibold">Medical ID</strong> for blood type, allergies, medications and emergency contacts.</li>
</ul>
<blockquote class="border-l-2 border-[#3b82f6] pl-4 my-4 text-white/50 italic text-sm"><strong class="text-white font-semibold">Important:</strong> Nomadical is a preparedness aid and educational tool. It does not replace professional survival training, medical expertise, or certified emergency equipment. AI answers and document-grounded responses are imperfect — always cross-reference critical information.</blockquote>
<hr class="border-white/10 my-6"/>
<h2 id="table-of-contents" class="text-xl font-bold text-white mt-10 mb-4 pb-2 border-b border-white/10">Table of Contents</h2>
<ul class="list-disc pl-6 mb-4 space-y-1">
<li class="text-white/70 text-sm"><a class="text-[#3b82f6] hover:underline" href="#introduction">Introduction</a></li>
<li class="text-white/70 text-sm"><a class="text-[#3b82f6] hover:underline" href="#first-launch-and-ai-model-setup">First Launch and AI Model Setup</a></li>
<li class="text-white/70 text-sm"><a class="text-[#3b82f6] hover:underline" href="#home-screen-dashboard">Home Screen Dashboard</a></li>
<li class="text-white/70 text-sm"><a class="text-[#3b82f6] hover:underline" href="#survival-knowledge-library">Survival Knowledge Library</a></li>
<li class="text-white/70 text-sm"><a class="text-[#3b82f6] hover:underline" href="#reading-articles">Reading Articles</a></li>
<li class="text-white/70 text-sm"><a class="text-[#3b82f6] hover:underline" href="#bookmarks-and-favorites">Bookmarks and Favorites</a></li>
<li class="text-white/70 text-sm"><a class="text-[#3b82f6] hover:underline" href="#my-documents-and-chat-with-your-pdfs">My Documents and Chat With Your PDFs</a></li>
<li class="text-white/70 text-sm"><a class="text-[#3b82f6] hover:underline" href="#ai-survival-assistant">AI Survival Assistant</a></li>
<li class="text-white/70 text-sm"><a class="text-[#3b82f6] hover:underline" href="#ai-scanner">AI Scanner</a></li>
<li class="text-white/70 text-sm"><a class="text-[#3b82f6] hover:underline" href="#emergency-checklists">Emergency Checklists</a></li>
<li class="text-white/70 text-sm"><a class="text-[#3b82f6] hover:underline" href="#field-journal">Field Journal</a></li>
<li class="text-white/70 text-sm"><a class="text-[#3b82f6] hover:underline" href="#compass-and-gps">Compass and GPS</a></li>
<li class="text-white/70 text-sm"><a class="text-[#3b82f6] hover:underline" href="#sos-and-emergency-tools">SOS and Emergency Tools</a></li>
<li class="text-white/70 text-sm"><a class="text-[#3b82f6] hover:underline" href="#app-settings">App Settings</a></li>
<li class="text-white/70 text-sm"><a class="text-[#3b82f6] hover:underline" href="#persistent-sos-button">Persistent SOS Button</a></li>
<li class="text-white/70 text-sm"><a class="text-[#3b82f6] hover:underline" href="#troubleshooting">Troubleshooting</a></li>
</ul>
<hr class="border-white/10 my-6"/>
<h2 id="first-launch-and-ai-model-setup" class="text-xl font-bold text-white mt-10 mb-4 pb-2 border-b border-white/10">First Launch and AI Model Setup</h2>
<p class="text-white/70 text-sm leading-relaxed mb-4">When you open Nomadical for the first time, you will see the <strong class="text-white font-semibold">Onboarding Screen</strong>.</p>
<h3 id="what-the-onboarding-screen-shows" class="text-lg font-bold text-white mt-8 mb-3">What the Onboarding Screen Shows</h3>
<ul class="list-disc pl-6 mb-4 space-y-1">
<li class="text-white/70 text-sm">A welcome message and app overview</li>
<li class="text-white/70 text-sm">A <strong class="text-white font-semibold">storage requirement warning</strong> — the Gemma 4 2B AI model is approximately <strong class="text-white font-semibold">2.6 GB</strong>. You need this much free space on your device to use AI features.</li>
<li class="text-white/70 text-sm">A <strong class="text-white font-semibold">Download AI Model</strong> button</li>
<li class="text-white/70 text-sm">An option to <strong class="text-white font-semibold">Skip</strong> and use the app without AI features</li>
</ul>
<h3 id="downloading-the-ai-model" class="text-lg font-bold text-white mt-8 mb-3">Downloading the AI Model</h3>
<ul class="list-disc pl-6 mb-4 space-y-1">
<li class="text-white/70 text-sm">Ensure you are connected to Wi-Fi (recommended — the download is ~2.6 GB)</li>
<li class="text-white/70 text-sm">Tap <strong class="text-white font-semibold">Download AI Model</strong></li>
<li class="text-white/70 text-sm">A progress bar shows download percentage and estimated time remaining</li>
<li class="text-white/70 text-sm">Do not close the app during download</li>
<li class="text-white/70 text-sm">After download completes, the app performs a <strong class="text-white font-semibold">SHA256 checksum verification</strong> to confirm the file is intact</li>
<li class="text-white/70 text-sm">Once verified, you will be taken to the Home Screen and AI features are ready</li>
</ul>
<h3 id="skipping-the-download" class="text-lg font-bold text-white mt-8 mb-3">Skipping the Download</h3>
<p class="text-white/70 text-sm leading-relaxed mb-4">If you tap <strong class="text-white font-semibold">Skip</strong>, you can use all non-AI features immediately. You can download the model later via <strong class="text-white font-semibold">Settings > AI Model > Download Model</strong>.</p>
<h3 id="gpu-vs-cpu-inference" class="text-lg font-bold text-white mt-8 mb-3">GPU vs. CPU Inference</h3>
<p class="text-white/70 text-sm leading-relaxed mb-4">When you first use the AI chat or scanner, the app attempts to use your device's GPU for faster responses. If your device does not support GPU acceleration, a notification will appear: <em>"Running on CPU — responses may be slower."</em> This is normal and the AI will still work correctly, just more slowly.</p>
<hr class="border-white/10 my-6"/>
<h2 id="home-screen-dashboard" class="text-xl font-bold text-white mt-10 mb-4 pb-2 border-b border-white/10">Home Screen Dashboard</h2>
<p class="text-white/70 text-sm leading-relaxed mb-4">The Home Screen is your central hub. It is the first screen you see after onboarding.</p>
<h3 id="elements-on-the-home-screen" class="text-lg font-bold text-white mt-8 mb-3">Elements on the Home Screen</h3>
<p class="text-white/70 text-sm leading-relaxed mb-4"><strong class="text-white font-semibold">Greeting & Date</strong></p>
<p class="text-white/70 text-sm leading-relaxed mb-4">Displays a contextual greeting (Good Morning / Afternoon / Evening) and the current date.</p>
<p class="text-white/70 text-sm leading-relaxed mb-4"><strong class="text-white font-semibold">Search Bar</strong></p>
<p class="text-white/70 text-sm leading-relaxed mb-4">Tap the search bar at the top to search across all 1,000+ survival articles instantly. Results appear as you type, with highlighted snippets showing where your search term appears in each article.</p>
<p class="text-white/70 text-sm leading-relaxed mb-4"><strong class="text-white font-semibold">Category Grid (8 Categories)</strong></p>
<p class="text-white/70 text-sm leading-relaxed mb-4">A 2×4 grid of category cards. Each card shows:</p>
<ul class="list-disc pl-6 mb-4 space-y-1">
<li class="text-white/70 text-sm">Category icon</li>
<li class="text-white/70 text-sm">Category name</li>
<li class="text-white/70 text-sm">Number of articles in that category</li>
</ul>
<p class="text-white/70 text-sm leading-relaxed mb-4">Tap any category card to open the Library filtered to that category.</p>
<p class="text-white/70 text-sm leading-relaxed mb-4">The 22 categories are:</p>
<ul class="list-disc pl-6 mb-4 space-y-1">
<li class="text-white/70 text-sm">First Aid & Medicine</li>
<li class="text-white/70 text-sm">Food & Foraging</li>
<li class="text-white/70 text-sm">Knots & Rope</li>
<li class="text-white/70 text-sm">Navigation & Orientation</li>
<li class="text-white/70 text-sm">Off-Grid Living</li>
<li class="text-white/70 text-sm">Self-Defense & Security</li>
<li class="text-white/70 text-sm">Tools & Weapons</li>
<li class="text-white/70 text-sm">Bug Out Bags</li>
<li class="text-white/70 text-sm">Communication</li>
<li class="text-white/70 text-sm">Vehicle Repair</li>
<li class="text-white/70 text-sm">Clothing & Gear</li>
<li class="text-white/70 text-sm">Coastal & Marine</li>
<li class="text-white/70 text-sm">DIY Repair</li>
<li class="text-white/70 text-sm">Alternative Energy</li>
<li class="text-white/70 text-sm">Weather</li>
<li class="text-white/70 text-sm">Bush Medicine</li>
<li class="text-white/70 text-sm">Shelter & Construction</li>
<li class="text-white/70 text-sm">Survival Psychology</li>
<li class="text-white/70 text-sm">Cold Weather</li>
<li class="text-white/70 text-sm">Water Purification</li>
<li class="text-white/70 text-sm">Fire & Warmth</li>
<li class="text-white/70 text-sm">Desert Survival</li>
</ul>
<p class="text-white/70 text-sm leading-relaxed mb-4"><strong class="text-white font-semibold">Quick Actions Row</strong></p>
<p class="text-white/70 text-sm leading-relaxed mb-4">Three quick-access buttons:</p>
<ul class="list-disc pl-6 mb-4 space-y-1">
<li class="text-white/70 text-sm"><strong class="text-white font-semibold">Compass</strong> — opens the digital compass immediately</li>
<li class="text-white/70 text-sm"><strong class="text-white font-semibold">SOS</strong> — opens the SOS emergency screen</li>
<li class="text-white/70 text-sm"><strong class="text-white font-semibold">Flashlight</strong> — toggles the SOS morse flashlight on/off</li>
</ul>
<p class="text-white/70 text-sm leading-relaxed mb-4"><strong class="text-white font-semibold">Survival Tip of the Day</strong></p>
<p class="text-white/70 text-sm leading-relaxed mb-4">A daily rotating tip card showing a short, practical survival tip. The tip changes each day at midnight and stays the same all day. The card shows:</p>
<ul class="list-disc pl-6 mb-4 space-y-1">
<li class="text-white/70 text-sm">Tip text</li>
<li class="text-white/70 text-sm">A category icon</li>
<li class="text-white/70 text-sm">A <strong class="text-white font-semibold">Read More</strong> button that links to a related article</li>
</ul>
<p class="text-white/70 text-sm leading-relaxed mb-4"><strong class="text-white font-semibold">AI Chat FAB</strong></p>
<p class="text-white/70 text-sm leading-relaxed mb-4">A floating action button (bottom-right area, green) opens the AI Survival Assistant chat.</p>
<p class="text-white/70 text-sm leading-relaxed mb-4"><strong class="text-white font-semibold">Persistent SOS FAB</strong></p>
<p class="text-white/70 text-sm leading-relaxed mb-4">A semi-transparent red button always visible in the bottom-right corner. See <a class="text-[#3b82f6] hover:underline" href="#persistent-sos-button">Persistent SOS Button</a>.</p>
<hr class="border-white/10 my-6"/>
<h2 id="survival-knowledge-library" class="text-xl font-bold text-white mt-10 mb-4 pb-2 border-b border-white/10">Survival Knowledge Library</h2>
<h3 id="accessing-the-library" class="text-lg font-bold text-white mt-8 mb-3">Accessing the Library</h3>
<p class="text-white/70 text-sm leading-relaxed mb-4">Tap the <strong class="text-white font-semibold">Library</strong> tab (book icon) in the bottom navigation bar.</p>
<h3 id="browsing-by-category" class="text-lg font-bold text-white mt-8 mb-3">Browsing by Category</h3>
<p class="text-white/70 text-sm leading-relaxed mb-4">The Library screen shows all 22 categories. Tap a category to see its articles listed as cards.</p>
<h3 id="searching-articles" class="text-lg font-bold text-white mt-8 mb-3">Searching Articles</h3>
<ul class="list-disc pl-6 mb-4 space-y-1">
<li class="text-white/70 text-sm">Tap the <strong class="text-white font-semibold">search icon</strong> or the search bar at the top of the Library screen</li>
<li class="text-white/70 text-sm">Type any word or phrase</li>
<li class="text-white/70 text-sm">Results appear instantly, ranked by relevance (BM25 ranking)</li>
<li class="text-white/70 text-sm">Each result shows a <strong class="text-white font-semibold">snippet</strong> — a short excerpt from the article with your search term highlighted so you can see the context before opening</li>
<li class="text-white/70 text-sm">Tap any result to open the full article</li>
</ul>
<p class="text-white/70 text-sm leading-relaxed mb-4">Search works fully offline using SQLite FTS5 full-text search technology.</p>
<h3 id="filtering-by-difficulty" class="text-lg font-bold text-white mt-8 mb-3">Filtering by Difficulty</h3>
<p class="text-white/70 text-sm leading-relaxed mb-4">Above the article list, you will see difficulty filter chips:</p>
<ul class="list-disc pl-6 mb-4 space-y-1">
<li class="text-white/70 text-sm"><strong class="text-white font-semibold">All</strong> — shows every article</li>
<li class="text-white/70 text-sm"><strong class="text-white font-semibold">Beginner</strong> — foundational techniques</li>
<li class="text-white/70 text-sm"><strong class="text-white font-semibold">Intermediate</strong> — requires some prior knowledge or practice</li>
<li class="text-white/70 text-sm"><strong class="text-white font-semibold">Advanced</strong> — complex skills for experienced users</li>
</ul>
<p class="text-white/70 text-sm leading-relaxed mb-4">Tap a chip to filter. Each article card shows a colored difficulty badge (color-coded by level).</p>
<h3 id="scenario-tags" class="text-lg font-bold text-white mt-8 mb-3">Scenario Tags</h3>
<p class="text-white/70 text-sm leading-relaxed mb-4">Articles are tagged with survival environment scenarios: <strong class="text-white font-semibold">Desert</strong>, <strong class="text-white font-semibold">Arctic</strong>, <strong class="text-white font-semibold">Jungle</strong>, <strong class="text-white font-semibold">Urban</strong>. These tags are visible on article cards and help you identify which articles are most relevant to your environment.</p>
<h3 id="bookmarked-articles-favorites" class="text-lg font-bold text-white mt-8 mb-3">Bookmarked Articles (Favorites)</h3>
<p class="text-white/70 text-sm leading-relaxed mb-4">A <strong class="text-white font-semibold">Favorites</strong> section at the top of the Library shows articles you have bookmarked, sorted by most recently bookmarked. See <a class="text-[#3b82f6] hover:underline" href="#bookmarks-and-favorites">Bookmarks and Favorites</a>.</p>
<hr class="border-white/10 my-6"/>
<h2 id="reading-articles" class="text-xl font-bold text-white mt-10 mb-4 pb-2 border-b border-white/10">Reading Articles</h2>
<h3 id="opening-an-article" class="text-lg font-bold text-white mt-8 mb-3">Opening an Article</h3>
<p class="text-white/70 text-sm leading-relaxed mb-4">Tap any article card from the Library or search results to open the full article.</p>
<h3 id="reading-progress-indicator" class="text-lg font-bold text-white mt-8 mb-3">Reading Progress Indicator</h3>
<p class="text-white/70 text-sm leading-relaxed mb-4">As you scroll through an article, a <strong class="text-white font-semibold">progress bar</strong> at the top of the screen fills from left to right, showing how far you have read. This helps you track your position in longer articles.</p>
<h3 id="svg-diagrams" class="text-lg font-bold text-white mt-8 mb-3">SVG Diagrams</h3>
<p class="text-white/70 text-sm leading-relaxed mb-4">Some articles include illustrated diagrams — knot-tying guides, shelter layout plans, signal patterns, and more. These are rendered inline within the article text. Pinch to zoom if needed.</p>
<h3 id="asking-the-ai-about-an-article" class="text-lg font-bold text-white mt-8 mb-3">Asking the AI About an Article</h3>
<p class="text-white/70 text-sm leading-relaxed mb-4">At the bottom of every article, there is an <strong class="text-white font-semibold">"Ask AI about this"</strong> button. Tapping it opens the AI Chat screen with the input pre-filled with <em>"I'm reading about [article title]."</em> — giving the AI immediate context so you can ask follow-up questions without re-explaining what you're looking at.</p>
<h3 id="bookmarking-from-the-article-screen" class="text-lg font-bold text-white mt-8 mb-3">Bookmarking from the Article Screen</h3>
<p class="text-white/70 text-sm leading-relaxed mb-4">Tap the <strong class="text-white font-semibold">bookmark icon</strong> in the article's top-right corner to bookmark it for quick access. Tap again to remove the bookmark.</p>
<hr class="border-white/10 my-6"/>
<h2 id="bookmarks-and-favorites" class="text-xl font-bold text-white mt-10 mb-4 pb-2 border-b border-white/10">Bookmarks and Favorites</h2>
<h3 id="bookmarking-an-article" class="text-lg font-bold text-white mt-8 mb-3">Bookmarking an Article</h3>
<p class="text-white/70 text-sm leading-relaxed mb-4">You can bookmark articles in three ways:</p>
<ul class="list-disc pl-6 mb-4 space-y-1">
<li class="text-white/70 text-sm"><strong class="text-white font-semibold">From the article reader:</strong> Tap the bookmark icon in the top-right corner</li>
<li class="text-white/70 text-sm"><strong class="text-white font-semibold">From the article list:</strong> Swipe right on any article card to reveal the quick bookmark shortcut</li>
<li class="text-white/70 text-sm"><strong class="text-white font-semibold">From search results:</strong> Swipe right on a result card</li>
</ul>
<p class="text-white/70 text-sm leading-relaxed mb-4">A medium haptic pulse confirms the bookmark was saved.</p>
<h3 id="viewing-bookmarks" class="text-lg font-bold text-white mt-8 mb-3">Viewing Bookmarks</h3>
<p class="text-white/70 text-sm leading-relaxed mb-4">Open the <strong class="text-white font-semibold">Library</strong> tab. Your bookmarked articles appear in the <strong class="text-white font-semibold">Favorites</strong> section at the top, sorted by most recently bookmarked.</p>
<h3 id="removing-a-bookmark" class="text-lg font-bold text-white mt-8 mb-3">Removing a Bookmark</h3>
<p class="text-white/70 text-sm leading-relaxed mb-4">Tap the bookmark icon again in the article reader, or swipe right on the article card in the Favorites list.</p>
<hr class="border-white/10 my-6"/>
<h2 id="my-documents-and-chat-with-your-pdfs" class="text-xl font-bold text-white mt-10 mb-4 pb-2 border-b border-white/10">My Documents and Chat With Your PDFs</h2>
<p class="text-white/70 text-sm leading-relaxed mb-4">Nomadical lets you import your own PDF survival guides, first aid manuals, field books, or any text document, and then <strong class="text-white font-semibold">ask the on-device AI questions about them</strong>. Everything runs entirely on your phone — documents never leave your device, and no internet connection is used.</p>
<h3 id="importing-a-document" class="text-lg font-bold text-white mt-8 mb-3">Importing a Document</h3>
<ul class="list-disc pl-6 mb-4 space-y-1">
<li class="text-white/70 text-sm">Open the <strong class="text-white font-semibold">Library</strong> tab.</li>
<li class="text-white/70 text-sm">Scroll the category filters at the top and tap <strong class="text-white font-semibold">My Docs</strong> (the last chip).</li>
<li class="text-white/70 text-sm">Tap the green <strong class="text-white font-semibold">Import PDFs</strong> button.</li>
<li class="text-white/70 text-sm">Pick one or more files from your phone (PDF, TXT, or Markdown).</li>
<li class="text-white/70 text-sm">Wait for the import to finish. Nomadical copies the file to private storage and <strong class="text-white font-semibold">extracts its text for search</strong>.</li>
</ul>
<p class="text-white/70 text-sm leading-relaxed mb-4"><strong class="text-white font-semibold">Tip:</strong> For faster import, download PDFs to your phone first (via OneDrive, Google Drive, Dropbox, or a browser), then pick them from your Downloads folder.</p>
<h3 id="what-happens-during-import" class="text-lg font-bold text-white mt-8 mb-3">What Happens During Import</h3>
<ul class="list-disc pl-6 mb-4 space-y-1">
<li class="text-white/70 text-sm"><strong class="text-white font-semibold">Text-based PDFs</strong> (ebooks, Word exports, modern gov publications): text is extracted directly and indexed in seconds.</li>
<li class="text-white/70 text-sm"><strong class="text-white font-semibold">Scanned PDFs</strong> (old books or photographed pages with no text layer): Nomadical automatically runs <strong class="text-white font-semibold">on-device OCR</strong> using Google ML Kit to read the images and extract text. This is slower — roughly 1–2 seconds per page on a mid-range phone. A progress bar shows which page is being processed.</li>
</ul>
<p class="text-white/70 text-sm leading-relaxed mb-4">The document row shows its status: e.g. <em>"2.3 MB • 176 chunks indexed • Added 14/4/2026"</em>.</p>
<h3 id="chatting-with-a-document-single-document-mode" class="text-lg font-bold text-white mt-8 mb-3">Chatting With a Document (single-document mode)</h3>
<ul class="list-disc pl-6 mb-4 space-y-1">
<li class="text-white/70 text-sm">In the My Docs list, tap the <strong class="text-white font-semibold">green chat bubble</strong> on the right side of a document row.</li>
<li class="text-white/70 text-sm">The chat screen opens. If the document was imported before RAG was added or hasn't been indexed yet, it indexes on first open.</li>
<li class="text-white/70 text-sm">Use a <strong class="text-white font-semibold">suggestion chip</strong> (e.g. "Summarise this document") or type your own question.</li>
<li class="text-white/70 text-sm">The AI searches the document's text, finds the most relevant sections, and answers using only what's in the document. If the answer isn't in the document, it will say so.</li>
</ul>
<h3 id="chatting-across-your-whole-library-cross-library-mode" class="text-lg font-bold text-white mt-8 mb-3">Chatting Across Your Whole Library (cross-library mode)</h3>
<p class="text-white/70 text-sm leading-relaxed mb-4">When you have more than one imported document, an <strong class="text-white font-semibold">"Ask my library"</strong> button appears above Import PDFs in My Docs. Tap it to open a chat that searches <strong class="text-white font-semibold">every indexed document at once</strong>.</p>
<ul class="list-disc pl-6 mb-4 space-y-1">
<li class="text-white/70 text-sm">The status bar at the top shows how many documents are currently being searched.</li>
<li class="text-white/70 text-sm">Retrieval pulls the most relevant passages across your library, capped at 2 per document so a single large PDF can't dominate the answer.</li>
<li class="text-white/70 text-sm">Each source pill shows <code class="bg-white/10 px-1.5 py-0.5 rounded text-xs text-[#3b82f6]">📘 DocTitle · p12</code> and tapping it jumps straight into the right PDF at the right page. Hit back to return to the cross-library chat.</li>
<li class="text-white/70 text-sm">Gemma is told to cite which document each fact comes from, so replies naturally reference "According to <em>BackcountryCookbook</em>…".</li>
</ul>
<p class="text-white/70 text-sm leading-relaxed mb-4"><strong class="text-white font-semibold">When to use which mode:</strong></p>
<ul class="list-disc pl-6 mb-4 space-y-1">
<li class="text-white/70 text-sm"><strong class="text-white font-semibold">Single-document chat</strong> — when you know which document has the answer and want the AI focused on just that text (great for summaries and drill-downs).</li>
<li class="text-white/70 text-sm"><strong class="text-white font-semibold">Cross-library chat</strong> — when you're not sure which document has the answer, or you want to compare/combine information from multiple sources.</li>
</ul>
<h3 id="tapping-a-document-view-the-pdf" class="text-lg font-bold text-white mt-8 mb-3">Tapping a Document (view the PDF)</h3>
<p class="text-white/70 text-sm leading-relaxed mb-4">Tapping the document <strong class="text-white font-semibold">row</strong> (not the chat bubble) opens the built-in PDF viewer. Use this for traditional reading, sharing, or jumping between pages manually.</p>
<h3 id="sources-in-ai-answers" class="text-lg font-bold text-white mt-8 mb-3">Sources in AI Answers</h3>
<p class="text-white/70 text-sm leading-relaxed mb-4">Under each AI response, Nomadical shows <strong class="text-white font-semibold">green source pills</strong> linking to the sections of the document the AI used to build the answer.</p>
<ul class="list-disc pl-6 mb-4 space-y-1">
<li class="text-white/70 text-sm">In single-document mode the pill shows just <code class="bg-white/10 px-1.5 py-0.5 rounded text-xs text-[#3b82f6]">Page 12</code> or <code class="bg-white/10 px-1.5 py-0.5 rounded text-xs text-[#3b82f6]">Section 3</code>.</li>
<li class="text-white/70 text-sm">In cross-library mode the pill shows the document title as well: <code class="bg-white/10 px-1.5 py-0.5 rounded text-xs text-[#3b82f6]">📘 First Aid Handbook · p47</code>.</li>
</ul>
<p class="text-white/70 text-sm leading-relaxed mb-4">Tap any pill to jump directly to that page in the PDF viewer. Hit <strong class="text-white font-semibold">back</strong> to return to the chat with your conversation still on screen.</p>
<h3 id="thinking-indicator" class="text-lg font-bold text-white mt-8 mb-3">Thinking Indicator</h3>
<p class="text-white/70 text-sm leading-relaxed mb-4">While the AI is working, a three-dot animated indicator appears with a phase label that updates as Nomadical goes through retrieval and generation:</p>
<ul class="list-disc pl-6 mb-4 space-y-1">
<li class="text-white/70 text-sm"><em>"Searching across N documents…"</em> — FTS5 retrieval</li>
<li class="text-white/70 text-sm"><em>"Reading relevant passages…"</em> — prompt assembly</li>
<li class="text-white/70 text-sm"><em>"Writing answer with Gemma…"</em> — the on-device model is generating</li>
</ul>
<p class="text-white/70 text-sm leading-relaxed mb-4">Expect a cross-library answer to take roughly <strong class="text-white font-semibold">10–20 seconds</strong> on a recent Android phone with GPU, longer if your device falls back to CPU inference.</p>
<h3 id="deleting-a-document" class="text-lg font-bold text-white mt-8 mb-3">Deleting a Document</h3>
<p class="text-white/70 text-sm leading-relaxed mb-4">Swipe right-to-left on any document in the My Docs list, or long-press it, and confirm. This removes the file from your device and deletes all indexed chunks.</p>
<h3 id="limitations" class="text-lg font-bold text-white mt-8 mb-3">Limitations</h3>
<ul class="list-disc pl-6 mb-4 space-y-1">
<li class="text-white/70 text-sm"><strong class="text-white font-semibold">Image-only pages that fail OCR:</strong> if the pages are too low-quality or blank, Nomadical will tell you it could not extract any text.</li>
<li class="text-white/70 text-sm"><strong class="text-white font-semibold">Non-Latin scripts:</strong> the built-in OCR recognises Latin characters (English and most European languages) by default. Other scripts may not extract cleanly.</li>
<li class="text-white/70 text-sm"><strong class="text-white font-semibold">Very large PDFs:</strong> indexing time grows with page count. 500+ page scans can take several minutes.</li>
<li class="text-white/70 text-sm"><strong class="text-white font-semibold">Accuracy:</strong> the AI is grounded in your document's text but still an AI — double-check critical information against the original pages using the source links.</li>
</ul>
<hr class="border-white/10 my-6"/>
<h2 id="ai-survival-assistant" class="text-xl font-bold text-white mt-10 mb-4 pb-2 border-b border-white/10">AI Survival Assistant</h2>
<h3 id="accessing-the-ai-chat" class="text-lg font-bold text-white mt-8 mb-3">Accessing the AI Chat</h3>
<ul class="list-disc pl-6 mb-4 space-y-1">
<li class="text-white/70 text-sm">Tap the <strong class="text-white font-semibold">green FAB</strong> on the Home Screen, or</li>
<li class="text-white/70 text-sm">Tap <strong class="text-white font-semibold">"Ask AI about this"</strong> from any article (pre-populates context)</li>
</ul>
<h3 id="first-use" class="text-lg font-bold text-white mt-8 mb-3">First Use</h3>
<p class="text-white/70 text-sm leading-relaxed mb-4">If the AI model has not been downloaded yet, you will be prompted to download it. See <a class="text-[#3b82f6] hover:underline" href="#first-launch-and-ai-model-setup">First Launch and AI Model Setup</a>.</p>
<p class="text-white/70 text-sm leading-relaxed mb-4">The first time you open the chat after installing the model, there may be a brief initialization delay while the model loads into memory. Subsequent opens are faster because the model loads in the background at app launch.</p>
<h3 id="having-a-conversation" class="text-lg font-bold text-white mt-8 mb-3">Having a Conversation</h3>
<ul class="list-disc pl-6 mb-4 space-y-1">
<li class="text-white/70 text-sm">Type your survival question in the text field at the bottom</li>
<li class="text-white/70 text-sm">Tap <strong class="text-white font-semibold">Send</strong> (or press the send icon)</li>
<li class="text-white/70 text-sm">The AI's response streams in token by token — a typing indicator (animated dots) shows while the response is being generated</li>
<li class="text-white/70 text-sm">Continue the conversation naturally — the AI maintains context within a session</li>
</ul>
<p class="text-white/70 text-sm leading-relaxed mb-4">The AI is configured with a survival-focused system prompt emphasizing practical, safety-conscious advice.</p>
<h3 id="chat-history" class="text-lg font-bold text-white mt-8 mb-3">Chat History</h3>
<p class="text-white/70 text-sm leading-relaxed mb-4">All conversations are saved automatically. To access past sessions:</p>
<ul class="list-disc pl-6 mb-4 space-y-1">
<li class="text-white/70 text-sm">Tap the <strong class="text-white font-semibold">history drawer icon</strong> (usually top-left of the chat screen)</li>
<li class="text-white/70 text-sm">A list of past chat sessions appears</li>
<li class="text-white/70 text-sm">Tap any session to resume it</li>
<li class="text-white/70 text-sm"><strong class="text-white font-semibold">Swipe left</strong> on a session in the history list to delete it</li>
</ul>
<h3 id="starting-a-new-session" class="text-lg font-bold text-white mt-8 mb-3">Starting a New Session</h3>
<p class="text-white/70 text-sm leading-relaxed mb-4">Tap <strong class="text-white font-semibold">New Chat</strong> (or the compose icon) to start a fresh conversation. The previous session is saved in history.</p>
<h3 id="what-the-ai-can-help-with" class="text-lg font-bold text-white mt-8 mb-3">What the AI Can Help With</h3>
<ul class="list-disc pl-6 mb-4 space-y-1">
<li class="text-white/70 text-sm">First aid procedures and wound care</li>
<li class="text-white/70 text-sm">Building emergency shelters</li>
<li class="text-white/70 text-sm">Finding and purifying water</li>
<li class="text-white/70 text-sm">Identifying edible plants (always cross-reference!)</li>
<li class="text-white/70 text-sm">Fire starting techniques</li>
<li class="text-white/70 text-sm">Navigation without GPS</li>
<li class="text-white/70 text-sm">Emergency signaling methods</li>
<li class="text-white/70 text-sm">Gear selection and improvisation</li>
<li class="text-white/70 text-sm">Any topic covered in the survival library</li>
</ul>
<blockquote class="border-l-2 border-[#3b82f6] pl-4 my-4 text-white/50 italic text-sm"><strong class="text-white font-semibold">Remember:</strong> AI responses are general guidance. In a real emergency, always cross-reference critical information, especially regarding plant/mushroom identification and medical decisions.</blockquote>
<hr class="border-white/10 my-6"/>
<h2 id="ai-scanner" class="text-xl font-bold text-white mt-10 mb-4 pb-2 border-b border-white/10">AI Scanner</h2>
<p class="text-white/70 text-sm leading-relaxed mb-4">The AI Scanner uses your device camera and the on-device Gemma 4 2B vision model to identify plants, animals, insects, mushrooms, tools, and other objects.</p>
<h3 id="accessing-the-scanner" class="text-lg font-bold text-white mt-8 mb-3">Accessing the Scanner</h3>
<p class="text-white/70 text-sm leading-relaxed mb-4">Tap the <strong class="text-white font-semibold">Scan</strong> tab (camera icon) in the bottom navigation bar.</p>
<h3 id="camera-permission" class="text-lg font-bold text-white mt-8 mb-3">Camera Permission</h3>
<p class="text-white/70 text-sm leading-relaxed mb-4">The first time you open the scanner, Android will ask for camera permission. Tap <strong class="text-white font-semibold">Allow</strong> to enable scanning. Without camera permission, you can still use the gallery pick option.</p>
<h3 id="scanning-an-object" class="text-lg font-bold text-white mt-8 mb-3">Scanning an Object</h3>
<p class="text-white/70 text-sm leading-relaxed mb-4"><strong class="text-white font-semibold">Using the Camera:</strong></p>
<ul class="list-disc pl-6 mb-4 space-y-1">
<li class="text-white/70 text-sm">Point your camera at the plant, animal, mushroom, or object</li>
<li class="text-white/70 text-sm">Frame the subject clearly — good lighting improves accuracy</li>
<li class="text-white/70 text-sm">Tap the <strong class="text-white font-semibold">Capture</strong> button (large circle)</li>
<li class="text-white/70 text-sm">The image is compressed and sent to the on-device AI model</li>
<li class="text-white/70 text-sm">A progress indicator shows while analysis runs (up to 30 seconds)</li>
<li class="text-white/70 text-sm">Results appear on the Scan Result screen</li>
</ul>
<p class="text-white/70 text-sm leading-relaxed mb-4"><strong class="text-white font-semibold">Using a Gallery Photo:</strong></p>
<ul class="list-disc pl-6 mb-4 space-y-1">
<li class="text-white/70 text-sm">Tap the <strong class="text-white font-semibold">Gallery</strong> button (photo icon) instead of capturing</li>
<li class="text-white/70 text-sm">Select a photo from your device gallery</li>
<li class="text-white/70 text-sm">Analysis proceeds the same way as a camera capture</li>
</ul>
<h3 id="understanding-scan-results" class="text-lg font-bold text-white mt-8 mb-3">Understanding Scan Results</h3>
<p class="text-white/70 text-sm leading-relaxed mb-4">The Scan Result screen shows:</p>
<ul class="list-disc pl-6 mb-4 space-y-1">
<li class="text-white/70 text-sm"><strong class="text-white font-semibold">Captured image</strong> with a danger level overlay card</li>
<li class="text-white/70 text-sm"><strong class="text-white font-semibold">Identification</strong> — what the AI thinks the subject is</li>
<li class="text-white/70 text-sm"><strong class="text-white font-semibold">Confidence percentage</strong> — e.g., "87% confidence"<br/>- If confidence is below 80%, multiple alternative identifications are shown</li>
<li class="text-white/70 text-sm"><strong class="text-white font-semibold">Danger level indicator</strong> with color coding:<br/>- <strong class="text-white font-semibold">Green</strong> — Safe<br/>- <strong class="text-white font-semibold">Amber</strong> — Caution (approach carefully)<br/>- <strong class="text-white font-semibold">Red</strong> — Dangerous (avoid)</li>
<li class="text-white/70 text-sm"><strong class="text-white font-semibold">AI analysis text</strong> — detailed description and relevant survival information</li>
<li class="text-white/70 text-sm"><strong class="text-white font-semibold">Safety disclaimer</strong> — always visible: <em>"AI identification is approximate — always cross-reference with survival guides before consuming wild plants/mushrooms."</em></li>
</ul>
<h3 id="retaking-a-scan" class="text-lg font-bold text-white mt-8 mb-3">Retaking a Scan</h3>
<p class="text-white/70 text-sm leading-relaxed mb-4">Tap <strong class="text-white font-semibold">Retake</strong> to return to the camera viewfinder. The last 10 scan results are cached in memory, so switching between recent results is instant without re-running inference.</p>
<h3 id="saving-a-scan-to-your-field-journal" class="text-lg font-bold text-white mt-8 mb-3">Saving a Scan to Your Field Journal</h3>
<ul class="list-disc pl-6 mb-4 space-y-1">
<li class="text-white/70 text-sm">On the Scan Result screen, tap <strong class="text-white font-semibold">Save to Journal</strong></li>
<li class="text-white/70 text-sm">A journal entry is automatically created with:<br/>- The captured photo<br/>- AI identification and danger level<br/>- Current GPS coordinates (if location permission is granted)</li>
<li class="text-white/70 text-sm">You can add optional notes before saving</li>
<li class="text-white/70 text-sm">The entry appears in your Field Journal</li>
</ul>
<blockquote class="border-l-2 border-[#3b82f6] pl-4 my-4 text-white/50 italic text-sm"><strong class="text-white font-semibold">Critical safety note:</strong> Never eat or touch a wild plant, mushroom, or animal based solely on this app's identification. The AI can be wrong. Always verify with multiple authoritative sources and, when in doubt, avoid.</blockquote>
<hr class="border-white/10 my-6"/>
<h2 id="emergency-checklists" class="text-xl font-bold text-white mt-10 mb-4 pb-2 border-b border-white/10">Emergency Checklists</h2>
<h3 id="accessing-checklists" class="text-lg font-bold text-white mt-8 mb-3">Accessing Checklists</h3>
<p class="text-white/70 text-sm leading-relaxed mb-4">Tap the <strong class="text-white font-semibold">Checklists</strong> tab (checklist icon) in the bottom navigation bar.</p>
<h3 id="pre-loaded-checklists" class="text-lg font-bold text-white mt-8 mb-3">Pre-Loaded Checklists</h3>
<p class="text-white/70 text-sm leading-relaxed mb-4">Nomadical includes six comprehensive pre-loaded checklists:</p>
<table class="w-full border-collapse my-4 text-sm"><thead><tr>
<th class="text-left px-3 py-2 bg-white/5 border border-white/10 text-white font-semibold text-xs">Checklist</th>
<th class="text-left px-3 py-2 bg-white/5 border border-white/10 text-white font-semibold text-xs">Items</th>
</tr></thead><tbody>
<tr>
<td class="px-3 py-2 border border-white/10 text-white/70 text-xs">Bug-Out Bag</td>
<td class="px-3 py-2 border border-white/10 text-white/70 text-xs">30+ items</td>
</tr>
<tr>
<td class="px-3 py-2 border border-white/10 text-white/70 text-xs">First Aid Kit</td>
<td class="px-3 py-2 border border-white/10 text-white/70 text-xs">25+ items</td>
</tr>
<tr>
<td class="px-3 py-2 border border-white/10 text-white/70 text-xs">Vehicle Emergency Kit</td>
<td class="px-3 py-2 border border-white/10 text-white/70 text-xs">20+ items</td>
</tr>
<tr>
<td class="px-3 py-2 border border-white/10 text-white/70 text-xs">Home Emergency Supplies</td>
<td class="px-3 py-2 border border-white/10 text-white/70 text-xs">20+ items</td>
</tr>
<tr>
<td class="px-3 py-2 border border-white/10 text-white/70 text-xs">Wilderness Day Pack</td>
<td class="px-3 py-2 border border-white/10 text-white/70 text-xs">20+ items</td>
</tr>
<tr>
<td class="px-3 py-2 border border-white/10 text-white/70 text-xs">Winter Survival Kit</td>
<td class="px-3 py-2 border border-white/10 text-white/70 text-xs">20+ items</td>
</tr>
</tbody></table>
<h3 id="using-a-checklist" class="text-lg font-bold text-white mt-8 mb-3">Using a Checklist</h3>
<ul class="list-disc pl-6 mb-4 space-y-1">
<li class="text-white/70 text-sm">Tap any checklist to open it</li>
<li class="text-white/70 text-sm">Each item shows:<br/>- A <strong class="text-white font-semibold">checkbox</strong> — tap to check/uncheck (light haptic feedback confirms each tap)<br/>- <strong class="text-white font-semibold">Item name</strong> and <strong class="text-white font-semibold">quantity</strong><br/>- <strong class="text-white font-semibold">Priority indicator</strong> — colored dot:<br/>- <strong class="text-white font-semibold">Red</strong> = Essential (must have)<br/>- <strong class="text-white font-semibold">Yellow</strong> = Recommended (strongly advised)<br/>- <strong class="text-white font-semibold">Green</strong> = Optional (nice to have)</li>
<li class="text-white/70 text-sm">A <strong class="text-white font-semibold">progress bar</strong> at the top shows your completion percentage, updating in real time as you check items</li>
</ul>
<h3 id="editing-items" class="text-lg font-bold text-white mt-8 mb-3">Editing Items</h3>
<p class="text-white/70 text-sm leading-relaxed mb-4"><strong class="text-white font-semibold">Long-press</strong> any checklist item to open an edit menu where you can:</p>
<ul class="list-disc pl-6 mb-4 space-y-1">
<li class="text-white/70 text-sm">Change the item name</li>
<li class="text-white/70 text-sm">Update the quantity</li>
<li class="text-white/70 text-sm">Change the priority level</li>
<li class="text-white/70 text-sm">Delete the item</li>
</ul>
<h3 id="resetting-a-checklist" class="text-lg font-bold text-white mt-8 mb-3">Resetting a Checklist</h3>
<p class="text-white/70 text-sm leading-relaxed mb-4">Tap the <strong class="text-white font-semibold">menu icon</strong> (three dots) in the checklist's top-right corner and select <strong class="text-white font-semibold">Reset</strong>. This unchecks all items and returns the checklist to its starting state. A confirmation prompt appears before resetting.</p>
<h3 id="sharing-a-checklist" class="text-lg font-bold text-white mt-8 mb-3">Sharing a Checklist</h3>
<p class="text-white/70 text-sm leading-relaxed mb-4">Tap the <strong class="text-white font-semibold">Share</strong> icon in the checklist header. The checklist is formatted as plain text and shared via the system share sheet — you can send it via messaging apps, email, notes, or any other app.</p>
<h3 id="creating-a-custom-checklist" class="text-lg font-bold text-white mt-8 mb-3">Creating a Custom Checklist</h3>
<ul class="list-disc pl-6 mb-4 space-y-1">
<li class="text-white/70 text-sm">On the Checklists screen, tap the <strong class="text-white font-semibold">+ New Checklist</strong> button</li>
<li class="text-white/70 text-sm">Enter a name for your checklist</li>
<li class="text-white/70 text-sm">Add items one by one:<br/>- Enter item name<br/>- Set quantity<br/>- Choose priority (Essential / Recommended / Optional)</li>
<li class="text-white/70 text-sm">Tap <strong class="text-white font-semibold">Save</strong> when done</li>
<li class="text-white/70 text-sm">Your custom checklist appears in the list alongside the pre-loaded ones</li>
<li class="text-white/70 text-sm">Long-press any item in your custom checklist to edit or delete it</li>
</ul>
<hr class="border-white/10 my-6"/>
<h2 id="field-journal" class="text-xl font-bold text-white mt-10 mb-4 pb-2 border-b border-white/10">Field Journal</h2>
<h3 id="accessing-the-journal" class="text-lg font-bold text-white mt-8 mb-3">Accessing the Journal</h3>
<p class="text-white/70 text-sm leading-relaxed mb-4">Tap the <strong class="text-white font-semibold">Journal</strong> tab (open book icon) in the bottom navigation bar.</p>
<h3 id="journal-entry-list" class="text-lg font-bold text-white mt-8 mb-3">Journal Entry List</h3>
<p class="text-white/70 text-sm leading-relaxed mb-4">Entries are displayed in chronological order, grouped by date. You can search entries by typing in the search bar at the top — search looks through entry titles and notes text.</p>
<h3 id="creating-a-new-journal-entry" class="text-lg font-bold text-white mt-8 mb-3">Creating a New Journal Entry</h3>
<ul class="list-disc pl-6 mb-4 space-y-1">
<li class="text-white/70 text-sm">Tap the <strong class="text-white font-semibold">+ New Entry</strong> button (or FAB)</li>
<li class="text-white/70 text-sm">Fill in the entry fields:<br/>- <strong class="text-white font-semibold">Title</strong> — a short name for the entry<br/>- <strong class="text-white font-semibold">Notes</strong> — multi-line text for your observations, thoughts, or findings<br/>- <strong class="text-white font-semibold">Photo</strong> (optional) — tap the camera icon to capture a new photo, or the gallery icon to pick an existing one<br/>- <strong class="text-white font-semibold">GPS Coordinates</strong> (optional) — tap <strong class="text-white font-semibold">Capture Location</strong> to automatically record your current GPS coordinates. Requires location permission.</li>
<li class="text-white/70 text-sm">Tap <strong class="text-white font-semibold">Save</strong> to store the entry</li>
</ul>
<p class="text-white/70 text-sm leading-relaxed mb-4">Timestamps are automatically added and formatted for readability.</p>
<h3 id="viewing-a-journal-entry" class="text-lg font-bold text-white mt-8 mb-3">Viewing a Journal Entry</h3>
<p class="text-white/70 text-sm leading-relaxed mb-4">Tap any entry in the list to open the full detail view, showing all fields, the photo (if any), and GPS coordinates.</p>
<h3 id="auto-entries-from-ai-scanner" class="text-lg font-bold text-white mt-8 mb-3">Auto-Entries from AI Scanner</h3>
<p class="text-white/70 text-sm leading-relaxed mb-4">When you save a scan result to the journal, an entry is automatically created pre-populated with:</p>
<ul class="list-disc pl-6 mb-4 space-y-1">
<li class="text-white/70 text-sm">The captured photo</li>
<li class="text-white/70 text-sm">AI identification result</li>
<li class="text-white/70 text-sm">Danger level assessment</li>
<li class="text-white/70 text-sm">GPS coordinates at time of scan</li>
</ul>
<p class="text-white/70 text-sm leading-relaxed mb-4">You can add additional notes to this entry at any time.</p>
<h3 id="sharing-a-journal-entry" class="text-lg font-bold text-white mt-8 mb-3">Sharing a Journal Entry</h3>
<p class="text-white/70 text-sm leading-relaxed mb-4">Open a journal entry and tap the <strong class="text-white font-semibold">Share</strong> icon. The entry text (title, notes, timestamp, and coordinates) is shared via the system share sheet.</p>
<h3 id="deleting-journal-data" class="text-lg font-bold text-white mt-8 mb-3">Deleting Journal Data</h3>
<p class="text-white/70 text-sm leading-relaxed mb-4">To delete all journal entries at once: <strong class="text-white font-semibold">Settings > Privacy > Clear Journal Data</strong> (requires confirmation).</p>
<p class="text-white/70 text-sm leading-relaxed mb-4">To delete individual entries: Open the entry detail view and tap <strong class="text-white font-semibold">Delete</strong>.</p>
<hr class="border-white/10 my-6"/>
<h2 id="compass-and-gps" class="text-xl font-bold text-white mt-10 mb-4 pb-2 border-b border-white/10">Compass and GPS</h2>
<h3 id="accessing-the-compass" class="text-lg font-bold text-white mt-8 mb-3">Accessing the Compass</h3>
<ul class="list-disc pl-6 mb-4 space-y-1">
<li class="text-white/70 text-sm">Tap <strong class="text-white font-semibold">Compass</strong> in the Quick Actions row on the Home Screen, or</li>
<li class="text-white/70 text-sm">Navigate to it from the Library or Settings</li>
</ul>
<h3 id="how-the-compass-works" class="text-lg font-bold text-white mt-8 mb-3">How the Compass Works</h3>
<p class="text-white/70 text-sm leading-relaxed mb-4">Nomadical uses your device's <strong class="text-white font-semibold">rotation vector sensor</strong> — a fusion of the magnetometer and accelerometer — for tilt-compensated heading. This means the compass gives accurate readings even when your phone is not held perfectly flat.</p>
<p class="text-white/70 text-sm leading-relaxed mb-4">A <strong class="text-white font-semibold">low-pass filter</strong> smooths out noisy sensor readings for a steady compass display.</p>
<p class="text-white/70 text-sm leading-relaxed mb-4">The screen stays on (wakelock active) while the compass is open so it does not sleep during navigation.</p>
<h3 id="reading-the-compass" class="text-lg font-bold text-white mt-8 mb-3">Reading the Compass</h3>
<ul class="list-disc pl-6 mb-4 space-y-1">
<li class="text-white/70 text-sm">The compass dial rotates to show your heading</li>
<li class="text-white/70 text-sm"><strong class="text-white font-semibold">Heading in degrees</strong> is displayed numerically (0–360°)</li>
<li class="text-white/70 text-sm"><strong class="text-white font-semibold">Cardinal direction</strong> (N / NE / E / SE / S / SW / W / NW) is shown</li>
<li class="text-white/70 text-sm">If location permission is granted, <strong class="text-white font-semibold">GPS coordinates</strong> are shown below the compass in your chosen format (Decimal, DMS, or MGRS)</li>
</ul>
<h3 id="true-north-vs-magnetic-north" class="text-lg font-bold text-white mt-8 mb-3">True North vs. Magnetic North</h3>
<p class="text-white/70 text-sm leading-relaxed mb-4">By default, the compass shows <strong class="text-white font-semibold">magnetic north</strong>. To switch to <strong class="text-white font-semibold">true north</strong>:</p>
<ul class="list-disc pl-6 mb-4 space-y-1">
<li class="text-white/70 text-sm">Open <strong class="text-white font-semibold">Settings > Compass</strong></li>
<li class="text-white/70 text-sm">Toggle <strong class="text-white font-semibold">Declination Correction</strong> on</li>
<li class="text-white/70 text-sm">The app uses your GPS position to automatically calculate the local magnetic declination and apply the correction</li>
<li class="text-white/70 text-sm">Alternatively, enter a <strong class="text-white font-semibold">manual declination value</strong> if you know it for your area</li>
</ul>
<h3 id="locking-a-bearing" class="text-lg font-bold text-white mt-8 mb-3">Locking a Bearing</h3>
<p class="text-white/70 text-sm leading-relaxed mb-4">Tap the compass dial to <strong class="text-white font-semibold">lock a bearing</strong>. A secondary needle appears on the dial showing your locked bearing. This is useful for:</p>
<ul class="list-disc pl-6 mb-4 space-y-1">
<li class="text-white/70 text-sm">Maintaining a heading while moving through terrain</li>
<li class="text-white/70 text-sm">Marking a direction to return to</li>
</ul>
<p class="text-white/70 text-sm leading-relaxed mb-4">Tap the dial again to unlock.</p>
<h3 id="gps-coordinate-formats" class="text-lg font-bold text-white mt-8 mb-3">GPS Coordinate Formats</h3>
<p class="text-white/70 text-sm leading-relaxed mb-4">Coordinates can be displayed in three formats, selectable in <strong class="text-white font-semibold">Settings > Compass > Coordinate Format</strong>:</p>
<ul class="list-disc pl-6 mb-4 space-y-1">
<li class="text-white/70 text-sm"><strong class="text-white font-semibold">Decimal Degrees</strong> — e.g., 37.7749° N, 122.4194° W</li>
<li class="text-white/70 text-sm"><strong class="text-white font-semibold">DMS</strong> — Degrees, Minutes, Seconds — e.g., 37° 46' 29.6" N</li>
<li class="text-white/70 text-sm"><strong class="text-white font-semibold">MGRS</strong> — Military Grid Reference System</li>
</ul>
<h3 id="battery-warning" class="text-lg font-bold text-white mt-8 mb-3">Battery Warning</h3>
<p class="text-white/70 text-sm leading-relaxed mb-4">If your device battery drops below 20% while the compass is open, a warning banner appears reminding you to conserve power.</p>
<hr class="border-white/10 my-6"/>
<h2 id="sos-and-emergency-tools" class="text-xl font-bold text-white mt-10 mb-4 pb-2 border-b border-white/10">SOS and Emergency Tools</h2>
<h3 id="accessing-the-sos-screen" class="text-lg font-bold text-white mt-8 mb-3">Accessing the SOS Screen</h3>
<ul class="list-disc pl-6 mb-4 space-y-1">
<li class="text-white/70 text-sm">Tap the red <strong class="text-white font-semibold">SOS FAB</strong> (always visible in the bottom-right corner of every main screen)</li>
<li class="text-white/70 text-sm">Tap <strong class="text-white font-semibold">SOS</strong> in the Quick Actions row on the Home Screen</li>
</ul>
<h3 id="personal-emergency-information" class="text-lg font-bold text-white mt-8 mb-3">Personal Emergency Information</h3>
<p class="text-white/70 text-sm leading-relaxed mb-4">The SOS screen displays a <strong class="text-white font-semibold">Personal Info Card</strong> with your emergency medical information. This is critical information for first responders.</p>
<p class="text-white/70 text-sm leading-relaxed mb-4"><strong class="text-white font-semibold">To set up your personal info:</strong></p>
<ul class="list-disc pl-6 mb-4 space-y-1">
<li class="text-white/70 text-sm">On the SOS screen, tap <strong class="text-white font-semibold">Edit</strong> on the Personal Info Card</li>
<li class="text-white/70 text-sm">Fill in:<br/>- Blood type<br/>- Allergies<br/>- Medical conditions<br/>- Current medications<br/>- Emergency contacts (name + phone number)</li>
<li class="text-white/70 text-sm">Tap <strong class="text-white font-semibold">Save</strong></li>
</ul>
<p class="text-white/70 text-sm leading-relaxed mb-4">This information is stored only on your device.</p>
<h3 id="sos-morse-flashlight" class="text-lg font-bold text-white mt-8 mb-3">SOS Morse Flashlight</h3>
<p class="text-white/70 text-sm leading-relaxed mb-4">The SOS Morse Flashlight flashes your device's LED in the international SOS pattern (··· — — — ···) with precise timing:</p>
<ul class="list-disc pl-6 mb-4 space-y-1">
<li class="text-white/70 text-sm">Dot = 100ms flash</li>
<li class="text-white/70 text-sm">Dash = 300ms flash</li>
<li class="text-white/70 text-sm">Letter gap = 300ms pause</li>
<li class="text-white/70 text-sm">Repeat gap = 1000ms pause</li>
</ul>
<p class="text-white/70 text-sm leading-relaxed mb-4">Simultaneously, your device <strong class="text-white font-semibold">vibrates</strong> in the same SOS pattern — dual-channel signaling for maximum visibility and detectability.</p>
<p class="text-white/70 text-sm leading-relaxed mb-4"><strong class="text-white font-semibold">To activate:</strong></p>
<ul class="list-disc pl-6 mb-4 space-y-1">
<li class="text-white/70 text-sm">On the SOS screen, tap <strong class="text-white font-semibold">Start SOS Flash</strong></li>
<li class="text-white/70 text-sm">The LED and vibration begin immediately</li>
<li class="text-white/70 text-sm">The screen stays on (wakelock) during SOS operation</li>
<li class="text-white/70 text-sm">Tap <strong class="text-white font-semibold">Stop</strong> to end the signal</li>
</ul>
<p class="text-white/70 text-sm leading-relaxed mb-4"><strong class="text-white font-semibold">Quick activation without navigating:</strong> Long-press the red SOS FAB from any screen to start the SOS flash immediately.</p>
<blockquote class="border-l-2 border-[#3b82f6] pl-4 my-4 text-white/50 italic text-sm"><strong class="text-white font-semibold">Note:</strong> SOS runs on a background thread to keep the app responsive. Do not force-close the app while SOS is active.</blockquote>
<h3 id="emergency-signal-reference" class="text-lg font-bold text-white mt-8 mb-3">Emergency Signal Reference</h3>
<p class="text-white/70 text-sm leading-relaxed mb-4">The SOS screen includes a reference card with:</p>
<ul class="list-disc pl-6 mb-4 space-y-1">
<li class="text-white/70 text-sm"><strong class="text-white font-semibold">Full morse code chart</strong> — all letters A–Z plus the SOS pattern</li>
<li class="text-white/70 text-sm"><strong class="text-white font-semibold">Whistle signals</strong> — 3 blasts = general distress, 3×3 = SOS</li>
<li class="text-white/70 text-sm"><strong class="text-white font-semibold">Ground-to-air signals</strong> — shapes to create for aerial search parties</li>
<li class="text-white/70 text-sm"><strong class="text-white font-semibold">Mirror signaling</strong> — instructions for using a reflective surface</li>
</ul>
<h3 id="emergency-phone-numbers" class="text-lg font-bold text-white mt-8 mb-3">Emergency Phone Numbers</h3>
<p class="text-white/70 text-sm leading-relaxed mb-4">A reference card shows international emergency numbers:</p>
<ul class="list-disc pl-6 mb-4 space-y-1">
<li class="text-white/70 text-sm">911 (USA/Canada)</li>
<li class="text-white/70 text-sm">112 (Europe/International)</li>
<li class="text-white/70 text-sm">999 (UK)</li>
<li class="text-white/70 text-sm">000 (Australia)</li>
</ul>
<p class="text-white/70 text-sm leading-relaxed mb-4">If you have any cellular or data connectivity, tapping a phone number launches your phone dialer with the number pre-filled.</p>
<hr class="border-white/10 my-6"/>
<h2 id="app-settings" class="text-xl font-bold text-white mt-10 mb-4 pb-2 border-b border-white/10">App Settings</h2>
<h3 id="accessing-settings" class="text-lg font-bold text-white mt-8 mb-3">Accessing Settings</h3>
<p class="text-white/70 text-sm leading-relaxed mb-4">Tap the <strong class="text-white font-semibold">Settings</strong> icon (gear) from the Home Screen or navigation menu.</p>
<h3 id="ai-model-section" class="text-lg font-bold text-white mt-8 mb-3">AI Model Section</h3>
<ul class="list-disc pl-6 mb-4 space-y-1">
<li class="text-white/70 text-sm"><strong class="text-white font-semibold">Status badge</strong> — shows whether the model is downloaded, downloading, or not installed</li>
<li class="text-white/70 text-sm"><strong class="text-white font-semibold">Model file size</strong> — 2.6 GB</li>
<li class="text-white/70 text-sm"><strong class="text-white font-semibold">Download progress</strong> — shown if a download is in progress</li>
<li class="text-white/70 text-sm"><strong class="text-white font-semibold">Delete Model</strong> — removes the model file from your device (frees ~2.6 GB of storage). A confirmation dialog appears first. After deletion, a notification confirms the storage has been reclaimed.</li>
<li class="text-white/70 text-sm"><strong class="text-white font-semibold">Re-download</strong> — re-downloads the model if it was previously deleted</li>
</ul>
<h3 id="display-section" class="text-lg font-bold text-white mt-8 mb-3">Display Section</h3>
<p class="text-white/70 text-sm leading-relaxed mb-4"><strong class="text-white font-semibold">Font Size Presets</strong></p>
<p class="text-white/70 text-sm leading-relaxed mb-4">Choose from five sizes: <strong class="text-white font-semibold">XS / S / M / L / XL</strong>. The selected size applies to all text throughout the app immediately. Your choice is saved and remembered between sessions.</p>
<p class="text-white/70 text-sm leading-relaxed mb-4"><strong class="text-white font-semibold">Theme Toggle</strong></p>
<p class="text-white/70 text-sm leading-relaxed mb-4">Switch between:</p>
<ul class="list-disc pl-6 mb-4 space-y-1">
<li class="text-white/70 text-sm"><strong class="text-white font-semibold">Dark Mode</strong> — standard dark theme</li>
<li class="text-white/70 text-sm"><strong class="text-white font-semibold">AMOLED Mode</strong> — true black (#000000) background that saves battery on OLED screens</li>
</ul>
<h3 id="compass-section" class="text-lg font-bold text-white mt-8 mb-3">Compass Section</h3>
<ul class="list-disc pl-6 mb-4 space-y-1">
<li class="text-white/70 text-sm"><strong class="text-white font-semibold">Declination Correction</strong> — toggle true north correction on/off</li>
<li class="text-white/70 text-sm"><strong class="text-white font-semibold">Manual Declination</strong> — enter a custom declination value in degrees (positive = east, negative = west)</li>
<li class="text-white/70 text-sm"><strong class="text-white font-semibold">Coordinate Format</strong> — choose Decimal / DMS / MGRS for GPS display</li>
</ul>
<h3 id="privacy-section" class="text-lg font-bold text-white mt-8 mb-3">Privacy Section</h3>
<p class="text-white/70 text-sm leading-relaxed mb-4">Each action requires a confirmation dialog before proceeding:</p>
<ul class="list-disc pl-6 mb-4 space-y-1">
<li class="text-white/70 text-sm"><strong class="text-white font-semibold">Clear Journal Data</strong> — permanently deletes all journal entries and associated photos</li>
<li class="text-white/70 text-sm"><strong class="text-white font-semibold">Clear Chat History</strong> — permanently deletes all AI chat sessions and messages</li>
<li class="text-white/70 text-sm"><strong class="text-white font-semibold">Clear Checklist Progress</strong> — resets all checklist checkboxes and deletes custom checklists</li>
</ul>
<h3 id="about-section" class="text-lg font-bold text-white mt-8 mb-3">About Section</h3>
<ul class="list-disc pl-6 mb-4 space-y-1">
<li class="text-white/70 text-sm"><strong class="text-white font-semibold">App Version</strong> — current version number and build number</li>
<li class="text-white/70 text-sm"><strong class="text-white font-semibold">Open Source Licenses</strong> — view licenses for all open-source libraries used in the app</li>
<li class="text-white/70 text-sm"><strong class="text-white font-semibold">Privacy Policy</strong> — opens this document</li>
<li class="text-white/70 text-sm"><strong class="text-white font-semibold">Terms of Use</strong> — opens the terms document</li>
<li class="text-white/70 text-sm"><strong class="text-white font-semibold">User Manual</strong> — opens this manual</li>
<li class="text-white/70 text-sm"><strong class="text-white font-semibold">FAQs</strong> — opens the FAQ document</li>
<li class="text-white/70 text-sm"><strong class="text-white font-semibold">Quick Start Guide</strong> — opens the getting started guide</li>
</ul>
<hr class="border-white/10 my-6"/>
<h2 id="persistent-sos-button" class="text-xl font-bold text-white mt-10 mb-4 pb-2 border-b border-white/10">Persistent SOS Button</h2>
<p class="text-white/70 text-sm leading-relaxed mb-4">A semi-transparent <strong class="text-white font-semibold">red SOS button</strong> (40dp) is always visible in the bottom-right corner of every main screen in the app. It is intentionally designed to never be hidden.</p>
<p class="text-white/70 text-sm leading-relaxed mb-4"><strong class="text-white font-semibold">Single tap:</strong> Navigates immediately to the full SOS screen.</p>
<p class="text-white/70 text-sm leading-relaxed mb-4"><strong class="text-white font-semibold">Long press:</strong> Activates the SOS Morse flashlight and vibration pattern immediately, without navigating away from your current screen. This allows you to signal for help while continuing to reference other app content.</p>
<hr class="border-white/10 my-6"/>
<h2 id="troubleshooting" class="text-xl font-bold text-white mt-10 mb-4 pb-2 border-b border-white/10">Troubleshooting</h2>
<h3 id="the-ai-chat-is-very-slow" class="text-lg font-bold text-white mt-8 mb-3">The AI Chat is very slow</h3>
<p class="text-white/70 text-sm leading-relaxed mb-4"><strong class="text-white font-semibold">Cause:</strong> Your device is using CPU inference instead of GPU acceleration.</p>
<p class="text-white/70 text-sm leading-relaxed mb-4"><strong class="text-white font-semibold">Solution:</strong> This is normal on devices without compatible GPU drivers. Responses will still be generated — just more slowly. Shorter, more specific questions get faster answers. Ensure no other heavy apps are running in the background.</p>
<h3 id="the-ai-model-download-keeps-failing" class="text-lg font-bold text-white mt-8 mb-3">The AI model download keeps failing</h3>
<p class="text-white/70 text-sm leading-relaxed mb-4"><strong class="text-white font-semibold">Solutions:</strong></p>
<ul class="list-disc pl-6 mb-4 space-y-1">
<li class="text-white/70 text-sm">Ensure you have a stable Wi-Fi connection</li>
<li class="text-white/70 text-sm">Verify you have at least 3 GB of free storage space (the model is ~2.6 GB and needs working space during extraction)</li>
<li class="text-white/70 text-sm">Try again — tap <strong class="text-white font-semibold">Re-download</strong> in Settings > AI Model</li>
<li class="text-white/70 text-sm">If repeated failures occur, restart your device and try again</li>
</ul>
<h3 id="the-compass-is-spinning-erratically" class="text-lg font-bold text-white mt-8 mb-3">The compass is spinning erratically</h3>
<p class="text-white/70 text-sm leading-relaxed mb-4"><strong class="text-white font-semibold">Causes:</strong> Magnetic interference from metal objects, other electronics, or cases with magnetic closures.</p>
<p class="text-white/70 text-sm leading-relaxed mb-4"><strong class="text-white font-semibold">Solutions:</strong></p>
<ul class="list-disc pl-6 mb-4 space-y-1">
<li class="text-white/70 text-sm">Move away from metal furniture, vehicles, or electronics</li>
<li class="text-white/70 text-sm">Remove your phone from any case with a magnetic clasp</li>
<li class="text-white/70 text-sm">Calibrate your compass: wave your phone in a figure-8 pattern several times, then hold it level</li>
<li class="text-white/70 text-sm">The low-pass filter smooths readings over time — allow a few seconds for the display to stabilize</li>
</ul>
<h3 id="gps-coordinates-are-not-showing-on-the-compass" class="text-lg font-bold text-white mt-8 mb-3">GPS coordinates are not showing on the compass</h3>
<p class="text-white/70 text-sm leading-relaxed mb-4"><strong class="text-white font-semibold">Solution:</strong> Ensure location permission is granted. Go to Android Settings > Apps > Nomadical > Permissions > Location and set to <strong class="text-white font-semibold">Allow while using app</strong> or <strong class="text-white font-semibold">Allow all the time</strong>. Then return to the compass screen.</p>
<h3 id="the-camera-won-t-open-for-scanning" class="text-lg font-bold text-white mt-8 mb-3">The camera won't open for scanning</h3>
<p class="text-white/70 text-sm leading-relaxed mb-4"><strong class="text-white font-semibold">Solution:</strong> Camera permission may have been denied. Go to Android Settings > Apps > Nomadical > Permissions > Camera and tap <strong class="text-white font-semibold">Allow</strong>.</p>
<h3 id="the-ai-scanner-says-low-confidence-on-everything" class="text-lg font-bold text-white mt-8 mb-3">The AI Scanner says "low confidence" on everything</h3>
<p class="text-white/70 text-sm leading-relaxed mb-4"><strong class="text-white font-semibold">Tips for better scans:</strong></p>
<ul class="list-disc pl-6 mb-4 space-y-1">
<li class="text-white/70 text-sm">Ensure the subject is well-lit (natural light is best)</li>
<li class="text-white/70 text-sm">Get closer to the subject and fill the frame</li>
<li class="text-white/70 text-sm">Hold the camera steady when capturing</li>
<li class="text-white/70 text-sm">For plants: capture the leaves, stem, and any flowers or berries if present</li>
<li class="text-white/70 text-sm">For mushrooms: capture the cap, gills (underside), and stem</li>
<li class="text-white/70 text-sm">Avoid blurry images — tap the screen to focus before capturing</li>
</ul>
<h3 id="the-sos-flashlight-stopped-working" class="text-lg font-bold text-white mt-8 mb-3">The SOS flashlight stopped working</h3>
<p class="text-white/70 text-sm leading-relaxed mb-4"><strong class="text-white font-semibold">Solutions:</strong></p>
<ul class="list-disc pl-6 mb-4 space-y-1">
<li class="text-white/70 text-sm">Some devices restrict torch access when the battery is critically low — charge your device</li>
<li class="text-white/70 text-sm">Ensure no other app is currently using the flashlight</li>
<li class="text-white/70 text-sm">Force-close Nomadical and reopen it, then try again</li>
<li class="text-white/70 text-sm">Restart your device if the torch is still unresponsive</li>
</ul>
<h3 id="journal-photos-are-not-showing" class="text-lg font-bold text-white mt-8 mb-3">Journal photos are not showing</h3>
<p class="text-white/70 text-sm leading-relaxed mb-4"><strong class="text-white font-semibold">Cause:</strong> Storage permission may have been revoked, or photos were stored in a location that was cleared.</p>
<p class="text-white/70 text-sm leading-relaxed mb-4"><strong class="text-white font-semibold">Solution:</strong> Check that Nomadical has storage/media permissions in Android Settings. Photos taken within the app are stored in the app's private storage and should always be accessible as long as the app is installed and data has not been cleared.</p>
<h3 id="the-app-is-using-a-lot-of-storage" class="text-lg font-bold text-white mt-8 mb-3">The app is using a lot of storage</h3>
<p class="text-white/70 text-sm leading-relaxed mb-4"><strong class="text-white font-semibold">The AI model is ~2.6 GB.</strong> If you do not use AI features frequently, you can delete the model via Settings > AI Model > Delete Model. You can re-download it at any time when you have Wi-Fi access.</p>
<h3 id="i-accidentally-cleared-all-my-journal-data" class="text-lg font-bold text-white mt-8 mb-3">I accidentally cleared all my journal data</h3>
<p class="text-white/70 text-sm leading-relaxed mb-4">Unfortunately, this action cannot be undone. The Privacy data clear actions are permanent. We recommend periodically sharing important journal entries via the share function to keep copies elsewhere.</p>
<h3 id="contact-support" class="text-lg font-bold text-white mt-8 mb-3">Contact Support</h3>
<p class="text-white/70 text-sm leading-relaxed mb-4">If you encounter an issue not covered here, contact us at <strong class="text-white font-semibold">skippy@kangablue.au</strong> and describe:</p>
<ul class="list-disc pl-6 mb-4 space-y-1">
<li class="text-white/70 text-sm">Your device model and Android version</li>
<li class="text-white/70 text-sm">The feature where the issue occurred</li>
<li class="text-white/70 text-sm">Steps to reproduce the problem</li>
<li class="text-white/70 text-sm">A screenshot or screen recording if possible</li>
</ul>
<p class="text-white/70 text-sm leading-relaxed mb-4">We review support emails as soon as practicable and will respond with next steps or a bug fix timeline. Because Nomadical operates entirely offline, we will never ask for your data or chat history — please only share what you believe is relevant to the issue.</p>
<hr class="border-white/10 my-6"/>
<p class="text-white/70 text-sm leading-relaxed mb-4"><em>Thank you for choosing Nomadical as your offline survival companion. Stay prepared, stay safe.</em></p>` }} />
    </main>
  );
}
