"use client";

import { useState } from "react";
import { Camera } from "lucide-react";

export default function ScreenshotSlot({ slot, label, hint }: { slot: string; label: string; hint?: string }) {
  const [errored, setErrored] = useState(false);
  const src = `/screenshots/${slot}.png`;

  if (errored) {
    return (
      <div className="border-2 border-dashed border-white/20 bg-white/5 rounded-lg min-h-[200px] flex items-center justify-center flex-col gap-2 p-4">
        <Camera className="w-8 h-8 text-white/30" />
        <span className="text-white/40 font-semibold text-sm text-center">{label}</span>
        {hint && <span className="text-white/30 text-xs text-center">{hint}</span>}
      </div>
    );
  }

  return (
    <div className="rounded-[2rem] border-[4px] border-zinc-400/60 bg-zinc-900 p-1.5 shadow-xl shadow-black/40">
      <img
        src={src}
        alt={label}
        onError={() => setErrored(true)}
        loading="eager"
        className="w-full rounded-[1.5rem] object-cover"
      />
    </div>
  );
}