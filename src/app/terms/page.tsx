import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function LegalPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-24">
      <Link href="/" className="inline-flex items-center gap-2 text-[#3b82f6] hover:text-[#60a5fa] text-sm font-medium transition-colors mb-8">
        <ArrowLeft className="w-4 h-4" />
        Back to Home
      </Link>
      <h1 className="text-3xl font-black text-white mb-6">Terms of Service</h1>
      <div className="flex gap-3 mb-8"><a href="/docs/TERMS_OF_SERVICE.pdf" download="TERMS_OF_SERVICE.pdf" className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors">Download PDF</a></div>
      <div dangerouslySetInnerHTML={{ __html: `<p class="text-white/70 text-sm leading-relaxed mb-4"><strong class="text-white font-semibold">App:</strong> Nomadical</p>
<p class="text-white/70 text-sm leading-relaxed mb-4"><strong class="text-white font-semibold">Version:</strong> 2.5.0</p>
<p class="text-white/70 text-sm leading-relaxed mb-4"><strong class="text-white font-semibold">Owner:</strong> KangaBlue.au</p>
<p class="text-white/70 text-sm leading-relaxed mb-4"><strong class="text-white font-semibold">Contact:</strong> skippy@kangablue.au</p>
<p class="text-white/70 text-sm leading-relaxed mb-4"><strong class="text-white font-semibold">Last updated:</strong> 2026-04-14</p>
<hr class="border-white/10 my-6"/>
<h2 id="acceptance-of-terms" class="text-xl font-bold text-white mt-10 mb-4 pb-2 border-b border-white/10">1. Acceptance of Terms</h2>
<p class="text-white/70 text-sm leading-relaxed mb-4">By downloading, installing, or using Nomadical, you agree to be bound by these Terms of Use. If you do not agree to these terms, do not use the app.</p>
<p class="text-white/70 text-sm leading-relaxed mb-4">These Terms form a legally binding agreement between you and the developer of Nomadical ("we", "us").</p>
<hr class="border-white/10 my-6"/>
<h2 id="description-of-service" class="text-xl font-bold text-white mt-10 mb-4 pb-2 border-b border-white/10">2. Description of Service</h2>
<p class="text-white/70 text-sm leading-relaxed mb-4">Nomadical is an <strong class="text-white font-semibold">offline survival companion application</strong> for Android. It provides:</p>
<ul class="list-disc pl-6 mb-4 space-y-1">
<li class="text-white/70 text-sm">A curated survival knowledge library with <strong class="text-white font-semibold">1,000+ articles</strong> across 22 categories, sourced from public-domain and open-licensed materials (US Army FM 21-76, FEMA/Ready.gov, NOAA, CDC, US Forest Service, NPS, NZ DOC, NSW WeedWise, Healthdirect Australia, and the CDC Yellow Book)</li>
<li class="text-white/70 text-sm">An <strong class="text-white font-semibold">on-device AI chat assistant</strong> and vision-based object identifier powered by Google's Gemma 4 2B model running via the LiteRT-LM SDK</li>
<li class="text-white/70 text-sm">A <strong class="text-white font-semibold">My Documents</strong> feature (v2.5+) that lets you import your own PDF, TXT, or Markdown files and chat with them using retrieval-augmented generation (RAG). Both single-document chat and cross-library ("Ask my library") modes are supported. Scanned PDFs are handled via on-device Google ML Kit OCR</li>
<li class="text-white/70 text-sm">Interactive <strong class="text-white font-semibold">emergency checklists</strong> with custom checklist creation</li>
<li class="text-white/70 text-sm">A <strong class="text-white font-semibold">field journal</strong> with optional GPS tagging and photos</li>
<li class="text-white/70 text-sm">A <strong class="text-white font-semibold">tilt-compensated digital compass</strong> with true north correction</li>
<li class="text-white/70 text-sm">An <strong class="text-white font-semibold">offline map viewer</strong> with user-cacheable tiles</li>
<li class="text-white/70 text-sm"><strong class="text-white font-semibold">Emergency SOS tools</strong> including a Morse-code flashlight, vibration signaling, and a persistent one-tap SOS button</li>
<li class="text-white/70 text-sm"><strong class="text-white font-semibold">Medical ID</strong> for emergency contacts, blood type, allergies, medications</li>
</ul>
<p class="text-white/70 text-sm leading-relaxed mb-4">All features operate <strong class="text-white font-semibold">without internet connectivity</strong> after the initial AI model download. The app is intended as a supplementary educational and preparedness tool.</p>
<hr class="border-white/10 my-6"/>
<h2 id="critical-safety-disclaimer" class="text-xl font-bold text-white mt-10 mb-4 pb-2 border-b border-white/10">3. Critical Safety Disclaimer</h2>
<p class="text-white/70 text-sm leading-relaxed mb-4"><strong class="text-white font-semibold">READ THIS CAREFULLY.</strong></p>
<p class="text-white/70 text-sm leading-relaxed mb-4">Nomadical is an informational and preparedness aid. It is <strong class="text-white font-semibold">NOT a substitute for professional training, medical advice, or certified emergency services.</strong></p>
<ul class="list-disc pl-6 mb-4 space-y-1">
<li class="text-white/70 text-sm"><strong class="text-white font-semibold">AI identifications are approximate.</strong> The AI Scanner's plant, animal, mushroom, and object identifications may be incorrect. <strong class="text-white font-semibold">Never consume wild plants, mushrooms, or berries based solely on this app's output.</strong> Always cross-reference with authoritative field guides and expert knowledge.</li>
<li class="text-white/70 text-sm"><strong class="text-white font-semibold">AI answers from your own documents are grounded in the source text but still imperfect.</strong> When chatting with an imported PDF, always use the source page links to verify facts against the original pages before acting on them.</li>
<li class="text-white/70 text-sm"><strong class="text-white font-semibold">Survival advice is general.</strong> Articles and AI responses provide general guidance. Real survival situations vary enormously; conditions, your physical state, and available resources all affect what the right action is.</li>
<li class="text-white/70 text-sm"><strong class="text-white font-semibold">The compass is a navigation aid.</strong> Always carry a physical backup compass in the field. Do not rely solely on a phone-based compass in life-critical navigation.</li>
<li class="text-white/70 text-sm"><strong class="text-white font-semibold">SOS tools are supplementary.</strong> The SOS flashlight and signaling features are aids, not replacements for carrying dedicated emergency signaling equipment (PLBs, satellite communicators).</li>
<li class="text-white/70 text-sm"><strong class="text-white font-semibold">Emergency numbers are for reference.</strong> Emergency contact numbers shown in the app are informational. Confirm local emergency numbers before travel.</li>
</ul>
<p class="text-white/70 text-sm leading-relaxed mb-4"><strong class="text-white font-semibold">We expressly disclaim all liability for decisions made or actions taken in reliance on information provided by this app.</strong> In an actual emergency, contact professional emergency services and follow their instructions.</p>
<hr class="border-white/10 my-6"/>
<h2 id="user-responsibilities" class="text-xl font-bold text-white mt-10 mb-4 pb-2 border-b border-white/10">4. User Responsibilities</h2>
<p class="text-white/70 text-sm leading-relaxed mb-4">You agree to:</p>
<ul class="list-disc pl-6 mb-4 space-y-1">
<li class="text-white/70 text-sm">Use Nomadical only for lawful purposes</li>
<li class="text-white/70 text-sm">Not rely on AI identifications or general survival guidance in life-critical situations without cross-referencing authoritative sources</li>
<li class="text-white/70 text-sm">Take responsibility for verifying critical survival information</li>
<li class="text-white/70 text-sm">Maintain appropriate emergency preparedness beyond any single app or device</li>
<li class="text-white/70 text-sm">Ensure your device is adequately charged when relying on the app in the field</li>
<li class="text-white/70 text-sm">Only import documents you have the legal right to possess and use — you are solely responsible for the content of documents you upload into <strong class="text-white font-semibold">My Documents</strong></li>
<li class="text-white/70 text-sm">Not attempt to reverse-engineer, decompile, or modify the app</li>
<li class="text-white/70 text-sm">Not use the app to generate or distribute harmful content</li>
</ul>
<p class="text-white/70 text-sm leading-relaxed mb-4">You must be at least <strong class="text-white font-semibold">13 years old</strong> to use the app, consistent with the Google Play Store age rating.</p>
<hr class="border-white/10 my-6"/>
<h2 id="ai-features-and-on-device-inference" class="text-xl font-bold text-white mt-10 mb-4 pb-2 border-b border-white/10">5. AI Features and On-Device Inference</h2>
<p class="text-white/70 text-sm leading-relaxed mb-4">Nomadical's AI features (chat assistant, image scanner, document RAG) run entirely on your device using the Gemma 4 2B model. By using these features:</p>
<ul class="list-disc pl-6 mb-4 space-y-1">
<li class="text-white/70 text-sm">You acknowledge that AI outputs may be inaccurate, incomplete, or inappropriate for your specific situation</li>
<li class="text-white/70 text-sm">You understand that AI-generated survival advice must be critically evaluated and cross-referenced</li>
<li class="text-white/70 text-sm">You accept that inference quality depends on your device hardware capabilities — typical end-to-end response times are 6–12 seconds for single-document chat and 10–20 seconds for cross-library chat on modern Android GPUs, with longer times on CPU fallback</li>
<li class="text-white/70 text-sm">You understand that the app will attempt GPU-accelerated inference and fall back to CPU if GPU acceleration is unavailable, which may affect response speed</li>
</ul>
<hr class="border-white/10 my-6"/>
<h2 id="ai-model-download" class="text-xl font-bold text-white mt-10 mb-4 pb-2 border-b border-white/10">6. AI Model Download</h2>
<p class="text-white/70 text-sm leading-relaxed mb-4">The Gemma 4 2B model (~2.6 GB) is downloaded to your device on first use. By initiating the download:</p>
<ul class="list-disc pl-6 mb-4 space-y-1">
<li class="text-white/70 text-sm">You confirm you have sufficient available storage space</li>
<li class="text-white/70 text-sm">You accept any data charges your mobile carrier may apply for the download</li>
<li class="text-white/70 text-sm">You understand the model file is stored locally on your device</li>
<li class="text-white/70 text-sm">You may delete the model at any time via <strong class="text-white font-semibold">Settings > AI Model > Delete Model</strong></li>
</ul>
<p class="text-white/70 text-sm leading-relaxed mb-4">Use of the Gemma model is subject to <strong class="text-white font-semibold">Google's Gemma Terms of Use</strong>.</p>
<hr class="border-white/10 my-6"/>
<h2 id="user-uploaded-documents-my-documents" class="text-xl font-bold text-white mt-10 mb-4 pb-2 border-b border-white/10">7. User-Uploaded Documents (My Documents)</h2>
<p class="text-white/70 text-sm leading-relaxed mb-4">When you import PDF, TXT, or Markdown files via <strong class="text-white font-semibold">My Docs</strong>:</p>
<ul class="list-disc pl-6 mb-4 space-y-1">
<li class="text-white/70 text-sm">The file is copied into Nomadical's private app storage and never transmitted off-device</li>
<li class="text-white/70 text-sm">Nomadical extracts text from the file (using Syncfusion PDF text extraction, or Google ML Kit OCR for scanned PDFs)</li>
<li class="text-white/70 text-sm">Extracted text is split into chunks and stored in the app's local SQLite database to power RAG search</li>
<li class="text-white/70 text-sm">Chat conversations about the document are stored locally alongside the rest of your chat history</li>
</ul>
<p class="text-white/70 text-sm leading-relaxed mb-4"><strong class="text-white font-semibold">You are solely responsible for:</strong></p>
<ul class="list-disc pl-6 mb-4 space-y-1">
<li class="text-white/70 text-sm">Confirming you have the legal right to possess and use the documents you import</li>
<li class="text-white/70 text-sm">The content of the documents — we do not review, inspect, or moderate what you upload</li>
<li class="text-white/70 text-sm">Any consequences of relying on information extracted from your uploaded documents</li>
</ul>
<p class="text-white/70 text-sm leading-relaxed mb-4">Deleting a document from <strong class="text-white font-semibold">My Docs</strong> permanently removes both the file and all its indexed chunks from your device.</p>
<hr class="border-white/10 my-6"/>
<h2 id="intellectual-property" class="text-xl font-bold text-white mt-10 mb-4 pb-2 border-b border-white/10">8. Intellectual Property</h2>
<p class="text-white/70 text-sm leading-relaxed mb-4"><strong class="text-white font-semibold">App content:</strong> The Nomadical app, its code, UI design, SVG diagrams, checklist templates, and compiled article metadata are the intellectual property of the developer. All rights reserved.</p>
<p class="text-white/70 text-sm leading-relaxed mb-4"><strong class="text-white font-semibold">Bundled article content:</strong> The 1,000+ curated articles are derived from public-domain and open-licensed government and educational materials (see Section 2). Individual source attributions are available in each article record. These sources remain the property of their respective agencies.</p>
<p class="text-white/70 text-sm leading-relaxed mb-4"><strong class="text-white font-semibold">User content:</strong> Journal entries, custom checklists, medical ID, chat history, and documents you import remain entirely your own. We claim no ownership over content you create or import, and we never see it.</p>
<p class="text-white/70 text-sm leading-relaxed mb-4"><strong class="text-white font-semibold">Gemma model:</strong> The Gemma 4 2B model is subject to <strong class="text-white font-semibold">Google's Gemma Terms of Use</strong>. Use of the AI features constitutes your agreement to those terms.</p>
<p class="text-white/70 text-sm leading-relaxed mb-4"><strong class="text-white font-semibold">ML Kit:</strong> Google ML Kit Text Recognition is subject to <strong class="text-white font-semibold">Google's ML Kit Terms of Service</strong>.</p>
<hr class="border-white/10 my-6"/>
<h2 id="disclaimer-of-warranties" class="text-xl font-bold text-white mt-10 mb-4 pb-2 border-b border-white/10">9. Disclaimer of Warranties</h2>
<p class="text-white/70 text-sm leading-relaxed mb-4">Nomadical is provided <strong class="text-white font-semibold">"as is"</strong> and <strong class="text-white font-semibold">"as available"</strong> without warranties of any kind, either express or implied, including but not limited to:</p>
<ul class="list-disc pl-6 mb-4 space-y-1">
<li class="text-white/70 text-sm">Warranties of merchantability or fitness for a particular purpose</li>
<li class="text-white/70 text-sm">Warranties that the app will be error-free, uninterrupted, or free of bugs</li>
<li class="text-white/70 text-sm">Warranties regarding the accuracy, completeness, or reliability of AI outputs, article content, or document-extracted text</li>
<li class="text-white/70 text-sm">Warranties that the app will function correctly on all devices or Android versions</li>
<li class="text-white/70 text-sm">Warranties regarding OCR accuracy on scanned documents</li>
</ul>
<hr class="border-white/10 my-6"/>
<h2 id="limitation-of-liability" class="text-xl font-bold text-white mt-10 mb-4 pb-2 border-b border-white/10">10. Limitation of Liability</h2>
<p class="text-white/70 text-sm leading-relaxed mb-4">To the maximum extent permitted by applicable law, we shall not be liable for any:</p>
<ul class="list-disc pl-6 mb-4 space-y-1">
<li class="text-white/70 text-sm">Direct, indirect, incidental, special, consequential, or punitive damages</li>
<li class="text-white/70 text-sm">Loss of life, personal injury, or property damage arising from reliance on app content</li>
<li class="text-white/70 text-sm">Damages arising from incorrect AI identifications, survival guidance, or document retrieval</li>
<li class="text-white/70 text-sm">Data loss resulting from app malfunction, device failure, or user action</li>
<li class="text-white/70 text-sm">Damages exceeding the amount you paid for the app (if any)</li>
</ul>
<p class="text-white/70 text-sm leading-relaxed mb-4">This limitation applies regardless of the theory of liability and even if we have been advised of the possibility of such damages.</p>
<p class="text-white/70 text-sm leading-relaxed mb-4">Nothing in these Terms is intended to exclude or limit any liability that cannot be excluded under applicable consumer protection laws, including the Australian Consumer Law.</p>
<hr class="border-white/10 my-6"/>
<h2 id="modifications-to-the-app-and-terms" class="text-xl font-bold text-white mt-10 mb-4 pb-2 border-b border-white/10">11. Modifications to the App and Terms</h2>
<p class="text-white/70 text-sm leading-relaxed mb-4">We reserve the right to modify or discontinue the app at any time. These Terms of Use may be updated; continued use of the app after changes constitutes acceptance of the revised terms. The "Last updated" date at the top of this document will reflect the most recent revision. Updated terms are distributed with app updates and published to the project repository.</p>
<hr class="border-white/10 my-6"/>
<h2 id="governing-law" class="text-xl font-bold text-white mt-10 mb-4 pb-2 border-b border-white/10">12. Governing Law</h2>
<p class="text-white/70 text-sm leading-relaxed mb-4">These Terms of Use are governed by and construed in accordance with the laws of <strong class="text-white font-semibold">Australia</strong>, without regard to its conflict of law provisions. Any disputes arising under these Terms will be subject to the exclusive jurisdiction of the courts of Australia, subject to any mandatory consumer protection laws that apply in your jurisdiction of residence.</p>
<hr class="border-white/10 my-6"/>
<h2 id="contact" class="text-xl font-bold text-white mt-10 mb-4 pb-2 border-b border-white/10">13. Contact</h2>
<p class="text-white/70 text-sm leading-relaxed mb-4">For questions about these terms:</p>
<p class="text-white/70 text-sm leading-relaxed mb-4"><strong class="text-white font-semibold">Owner:</strong> KangaBlue.au</p>
<p class="text-white/70 text-sm leading-relaxed mb-4"><strong class="text-white font-semibold">Email:</strong> skippy@kangablue.au</p>
<p class="text-white/70 text-sm leading-relaxed mb-4">We aim to respond to enquiries within 5 business days.</p>
<hr class="border-white/10 my-6"/>
<p class="text-white/70 text-sm leading-relaxed mb-4"><em>These Terms of Use apply to all users of the Nomadical app. By using the app you acknowledge that you have read, understood, and agreed to them.</em></p>` }} />
    </main>
  );
}
