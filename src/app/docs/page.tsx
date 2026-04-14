"use client";

import { FileText, Download, Share2, Eye, ArrowLeft } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

interface DocCardProps {
  title: string;
  description: string;
  viewHref: string;
  downloadHref: string;
  filename: string;
}

function DocCard({ title, description, viewHref, downloadHref, filename }: DocCardProps) {
  const [copied, setCopied] = useState(false);

  function share() {
    const url = window.location.origin + viewHref;
    if (navigator.share) {
      navigator.share({ title, url }).catch(() => null);
    } else {
      navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }

  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-[#3b82f6]/40 transition-colors">
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 bg-[#3b82f6]/10 rounded-xl flex items-center justify-center shrink-0">
          <FileText className="w-6 h-6 text-[#3b82f6]" />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-white font-bold text-lg mb-1">{title}</h3>
          <p className="text-white/50 text-sm mb-4">{description}</p>
          <div className="flex flex-wrap gap-2">
            <Link
              href={viewHref}
              className="inline-flex items-center gap-2 bg-[#3b82f6] hover:bg-[#2563eb] text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors"
            >
              <Eye className="w-4 h-4" />
              View
            </Link>
            <a
              href={downloadHref}
              download={filename}
              className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors"
            >
              <Download className="w-4 h-4" />
              Download
            </a>
            <button
              onClick={share}
              className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors"
            >
              <Share2 className="w-4 h-4" />
              {copied ? "Link copied!" : "Share"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function DocsPage() {
  return (
    <main className="min-h-screen bg-black">
      <div className="max-w-3xl mx-auto px-6 py-24">
        <Link href="/" className="inline-flex items-center gap-2 text-[#3b82f6] hover:text-[#60a5fa] text-sm font-medium transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
        <h1 className="text-4xl font-black text-white mb-3">Documentation</h1>
        <p className="text-white/50 text-lg mb-10">Everything you need to get started with Nomadical.</p>
        <div className="space-y-4">
          <DocCard
            title="Quick Start Guide"
            description="Get up and running in minutes with this step-by-step guide."
            viewHref="/docs/quick-start"
            downloadHref="/docs/QUICK_START.pdf"
            filename="QUICK_START.pdf"
          />
          <DocCard
            title="User Manual"
            description="Comprehensive guide covering all features and functionality."
            viewHref="/docs/user-manual"
            downloadHref="/docs/USER_MANUAL.pdf"
            filename="USER_MANUAL.pdf"
          />
        </div>
      </div>
    </main>
  );
}
