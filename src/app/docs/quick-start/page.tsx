"use client";

import { ArrowLeft, Download, Share2 } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function DocViewPage() {
  const [copied, setCopied] = useState(false);

  function share() {
    const url = window.location.href;
    if (navigator.share) {
      navigator.share({ title: "Quick Start Guide", url }).catch(() => null);
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
            href="/docs/QUICK_START.pdf"
            download="QUICK_START.pdf"
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
      <h1 className="text-3xl font-black text-white mb-6">Quick Start Guide</h1>
      <div dangerouslySetInnerHTML={{ __html: `<p class="text-white/70 text-sm leading-relaxed mb-4"><strong class="text-white font-semibold">App:</strong> Nomadical</p>
<p class="text-white/70 text-sm leading-relaxed mb-4"><strong class="text-white font-semibold">Version:</strong> 2.5.0</p>
<p class="text-white/70 text-sm leading-relaxed mb-4"><strong class="text-white font-semibold">Owner:</strong> KangaBlue.au</p>
<p class="text-white/70 text-sm leading-relaxed mb-4"><strong class="text-white font-semibold">Contact:</strong> skippy@kangablue.au</p>
<p class="text-white/70 text-sm leading-relaxed mb-4"><strong class="text-white font-semibold">Last updated:</strong> 2026-04-14</p>
<p class="text-white/70 text-sm leading-relaxed mb-4">Your offline survival companion — ready in minutes.</p>
<hr class="border-white/10 my-6"/>
<ul class="list-disc pl-6 mb-4 space-y-1">
<li class="text-white/70 text-sm"><strong class="text-white font-semibold">Install and open the app</strong><br/>Launch Nomadical. The onboarding screen explains the app and AI model requirements.</li>
</ul>
<ul class="list-disc pl-6 mb-4 space-y-1">
<li class="text-white/70 text-sm"><strong class="text-white font-semibold">Download the AI model (optional but recommended)</strong><br/>Tap <strong class="text-white font-semibold">Download AI Model</strong> on the onboarding screen. The ~2.6 GB model enables the AI chat assistant and plant/object scanner. Requires Wi-Fi and free storage. Tap <strong class="text-white font-semibold">Skip</strong> to use all other features now and download later via Settings.</li>
</ul>
<ul class="list-disc pl-6 mb-4 space-y-1">
<li class="text-white/70 text-sm"><strong class="text-white font-semibold">Set up your emergency info</strong><br/>Tap the red <strong class="text-white font-semibold">SOS</strong> button, then tap <strong class="text-white font-semibold">Edit</strong> on the Personal Info Card. Enter your blood type, allergies, medications, and emergency contacts. This could save your life.</li>
</ul>
<ul class="list-disc pl-6 mb-4 space-y-1">
<li class="text-white/70 text-sm"><strong class="text-white font-semibold">Explore the survival library</strong><br/>Tap the <strong class="text-white font-semibold">Library</strong> tab. Browse over 1,000 articles across 22 categories, or use the search bar to find exactly what you need — works fully offline.</li>
</ul>
<ul class="list-disc pl-6 mb-4 space-y-1">
<li class="text-white/70 text-sm"><strong class="text-white font-semibold">Import your own PDFs and chat with them</strong><br/>In the Library, scroll the category chips to <strong class="text-white font-semibold">My Docs</strong>, tap <strong class="text-white font-semibold">Import PDFs</strong>, and pick any survival guide, first aid manual, or reference you have. Tap the green chat bubble next to a document to ask questions about it — answers are grounded in the document itself, fully offline. Scanned PDFs work too (on-device OCR runs automatically).</li>
</ul>
<ul class="list-disc pl-6 mb-4 space-y-1">
<li class="text-white/70 text-sm"><strong class="text-white font-semibold">Scan a plant or object</strong><br/>Tap the <strong class="text-white font-semibold">Scan</strong> tab, point your camera at a plant, mushroom, or object, and tap Capture. The on-device AI identifies it and shows a danger level. Always cross-reference before consuming anything wild.</li>
</ul>
<ul class="list-disc pl-6 mb-4 space-y-1">
<li class="text-white/70 text-sm"><strong class="text-white font-semibold">Prepare your checklists</strong><br/>Tap the <strong class="text-white font-semibold">Checklists</strong> tab and work through the Bug-Out Bag or First Aid Kit checklists to ensure you are ready before heading out.</li>
</ul>
<ul class="list-disc pl-6 mb-4 space-y-1">
<li class="text-white/70 text-sm"><strong class="text-white font-semibold">You are ready</strong><br/>Long-press the red SOS button anytime to activate emergency signaling instantly. Stay safe.</li>
</ul>` }} />
    </main>
  );
}
