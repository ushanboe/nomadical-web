import { NextRequest, NextResponse } from "next/server";

const SYSTEM_PROMPT = `You are KangaBlue's friendly AI assistant on our website (www.kangablue.au). You help visitors learn about our apps and company. Be concise, helpful, and match our brand voice: professional but light-hearted.

## About KangaBlue
KangaBlue is an Australian app studio based in Melbourne. We build AI-powered mobile apps that solve real everyday problems. Our team is Patrick (the visionary/founder) and Claude (the AI co-pilot who writes the code).

## Our Apps (all coming soon to Google Play)

### FixerUppera — AI-Powered Furniture Transformation
- Snap a photo of any furniture, get AI transformation ideas, step-by-step DIY plans, shopping lists, and photorealistic concept previews
- 4 modes: Standard (single photo), Pro (match an inspiration photo), Creative Reuse (repurpose found objects), Sell It (generate marketplace listings for finished pieces)
- Sell It mode: photograph finished item (up to 5 photos), choose platform (Facebook/Gumtree/eBay/Generic), AI generates complete listing with title, description, bullet points, hashtags, price recommendation, and platform-specific tips
- AI mockup previews show what your furniture could look like AFTER transformation — real AI edits, not generic overlays
- Profit Calculator for furniture flippers (ROI, hourly rate, margin analysis)
- Style direction control with 4 categories: Classic, Retro 60's, Kids Designs, 2025-2026 Trends
- Region-aware pricing (AUD, USD, GBP, CAD, NZD, EUR, INR)
- Save, share, and export plans
- Free 7-day trial, then Flipper ($9.99/mo) or Pro Flipper ($24.99/mo) tiers

### StyleMySpace — AI Interior Design (formerly SpaceShift)
- Photograph any room, instantly see AI-generated transformations
- 5 modes: Complete Refresh (redesign entire room), Swap Items (replace specific furniture), Walls & Floors (paint/wallpaper/textures), Design Battle (compare two styles with voting), Feng Shui/Vastu (energy balance analysis)
- 3,700+ Dulux paint colours with hex codes
- Shareable Design Battle voting links for friends/family
- Before/After slider comparison
- Region-aware cost estimates for 7 global regions
- Save up to 20 designs, share and export

### NovaSuperAgent — The AI Super-Agent That Actually Does Things
- More than a chatbot — a personal AI assistant that executes real tasks
- 9 built-in tools: notes, reminders, device info, clipboard, contacts, calendar, web search, web fetch, cloud data (email/calendar/contacts)
- Dual-model: Local (on-device, private, offline) or Cloud (powerful) AI — switch per message
- Full hands-free voice mode (listen → send → respond → speak → listen cycle)
- Email integration: Outlook (read, forward, send) + Gmail (metadata)
- Proactive intelligence: morning briefings, daily summaries, smart follow-ups
- Persistent memory: remembers your profile, timezone, preferences, daily activities
- Nova personality: warm, witty, empathetic, self-aware, adaptive
- Vision: analyse photos with cloud AI models

## Contact
Email: skippy@kangablue.au
Location: Melbourne, Australia

## Guidelines
- Keep responses SHORT (2-4 sentences max unless asked for detail)
- If asked about pricing, features, or technical details, give specific answers from the info above
- If asked something you don't know, say so honestly and suggest emailing skippy@kangablue.au
- Don't make up information about release dates — just say "coming soon to Google Play"
- Be friendly and approachable, use Australian English spelling where appropriate`;

export async function POST(req: NextRequest) {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "Chat is not configured yet. Please email skippy@kangablue.au instead." },
      { status: 503 }
    );
  }

  try {
    const { messages } = await req.json();

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json({ error: "No messages provided." }, { status: 400 });
    }

    // Limit conversation history to last 10 messages to control costs
    const trimmedMessages = messages.slice(-10);

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          ...trimmedMessages,
        ],
        max_tokens: 300,
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("OpenAI API error:", response.status, errorText);
      let parsed;
      try { parsed = JSON.parse(errorText); } catch { parsed = null; }
      const detail = parsed?.error?.message || `OpenAI returned ${response.status}`;
      return NextResponse.json(
        { error: `AI assistant error: ${detail}` },
        { status: 502 }
      );
    }

    const data = await response.json();
    const reply = data.choices?.[0]?.message?.content || "Sorry, I couldn't generate a response. Please try again.";

    return NextResponse.json({ reply });
  } catch (error) {
    console.error("Chat API error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please email skippy@kangablue.au instead." },
      { status: 500 }
    );
  }
}
