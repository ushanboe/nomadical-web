import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function LegalPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-24">
      <Link href="/" className="inline-flex items-center gap-2 text-[#3b82f6] hover:text-[#60a5fa] text-sm font-medium transition-colors mb-8">
        <ArrowLeft className="w-4 h-4" />
        Back to Home
      </Link>
      <h1 className="text-3xl font-black text-white mb-6">Privacy Policy</h1>
      <div className="flex gap-3 mb-8"><a href="/docs/PRIVACY_POLICY.pdf" download="PRIVACY_POLICY.pdf" className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors">Download PDF</a></div>
      <div dangerouslySetInnerHTML={{ __html: `<p class="text-white/70 text-sm leading-relaxed mb-4"><strong class="text-white font-semibold">App:</strong> Nomadical</p>
<p class="text-white/70 text-sm leading-relaxed mb-4"><strong class="text-white font-semibold">Version:</strong> 2.5.0</p>
<p class="text-white/70 text-sm leading-relaxed mb-4"><strong class="text-white font-semibold">Owner:</strong> KangaBlue.au</p>
<p class="text-white/70 text-sm leading-relaxed mb-4"><strong class="text-white font-semibold">Contact:</strong> skippy@kangablue.au</p>
<p class="text-white/70 text-sm leading-relaxed mb-4"><strong class="text-white font-semibold">Last updated:</strong> 2026-04-14</p>
<hr class="border-white/10 my-6"/>
<h2 id="overview" class="text-xl font-bold text-white mt-10 mb-4 pb-2 border-b border-white/10">Overview</h2>
<p class="text-white/70 text-sm leading-relaxed mb-4">Nomadical is designed from the ground up to operate <strong class="text-white font-semibold">entirely offline with zero cloud dependencies</strong>. This privacy policy explains exactly what data the app collects, where it stays, and what we do (and do not) do with it. In short: nothing leaves your device unless you explicitly share it.</p>
<hr class="border-white/10 my-6"/>
<h2 id="data-we-collect-on-your-device-only" class="text-xl font-bold text-white mt-10 mb-4 pb-2 border-b border-white/10">1. Data We Collect (on your device, only)</h2>
<p class="text-white/70 text-sm leading-relaxed mb-4">Nomadical collects and stores the following data <strong class="text-white font-semibold">locally on your device only</strong>. No server ever sees any of it.</p>
<h3 id="location-gps" class="text-lg font-bold text-white mt-8 mb-3">Location (GPS)</h3>
<ul class="list-disc pl-6 mb-4 space-y-1">
<li class="text-white/70 text-sm">Your GPS coordinates are optionally captured when you create a Field Journal entry or save an AI Scanner result.</li>
<li class="text-white/70 text-sm">GPS is also used to compute magnetic declination correction for the Compass.</li>
<li class="text-white/70 text-sm">Location data is stored only in the app's local SQLite database on your device.</li>
<li class="text-white/70 text-sm">Location is never transmitted anywhere.</li>
</ul>
<h3 id="camera-and-photos" class="text-lg font-bold text-white mt-8 mb-3">Camera and Photos</h3>
<ul class="list-disc pl-6 mb-4 space-y-1">
<li class="text-white/70 text-sm">The AI Scanner uses your device camera to capture images for on-device plant, animal, and object identification.</li>
<li class="text-white/70 text-sm">Photos attached to Field Journal entries are stored in your device's local file system.</li>
<li class="text-white/70 text-sm">Images are never uploaded to any server or cloud service.</li>
<li class="text-white/70 text-sm">You may also select photos from your device gallery for AI scanning; these are processed entirely on-device.</li>
</ul>
<h3 id="personal-emergency-information-medical-id" class="text-lg font-bold text-white mt-8 mb-3">Personal Emergency Information (Medical ID)</h3>
<ul class="list-disc pl-6 mb-4 space-y-1">
<li class="text-white/70 text-sm">The SOS screen allows you to store personal medical information: blood type, allergies, medical conditions, current medications, and emergency contact names and phone numbers.</li>
<li class="text-white/70 text-sm">This information is stored locally in the app's SQLite database.</li>
<li class="text-white/70 text-sm">It is never transmitted, synced, or shared with any third party.</li>
</ul>
<h3 id="field-journal-entries" class="text-lg font-bold text-white mt-8 mb-3">Field Journal Entries</h3>
<ul class="list-disc pl-6 mb-4 space-y-1">
<li class="text-white/70 text-sm">Text notes, titles, timestamps, optional photos, and optional GPS coordinates you write in the Field Journal are stored locally in the app's SQLite database.</li>
<li class="text-white/70 text-sm">Journal entries are never uploaded or shared without your explicit action using the system share sheet.</li>
</ul>
<h3 id="chat-history" class="text-lg font-bold text-white mt-8 mb-3">Chat History</h3>
<ul class="list-disc pl-6 mb-4 space-y-1">
<li class="text-white/70 text-sm">Conversations with the on-device AI assistant (Gemma 4 2B) are stored locally in the app's SQLite database.</li>
<li class="text-white/70 text-sm">AI inference runs entirely on your device. Your messages are never sent to any external AI service, API, or server.</li>
</ul>
<h3 id="my-documents-user-uploaded-pdfs-txt-markdown" class="text-lg font-bold text-white mt-8 mb-3">My Documents (user-uploaded PDFs, TXT, Markdown)</h3>
<p class="text-white/70 text-sm leading-relaxed mb-4">Starting in v2.5, Nomadical lets you import your own PDF, text, and Markdown files and chat with them using the on-device AI.</p>
<ul class="list-disc pl-6 mb-4 space-y-1">
<li class="text-white/70 text-sm">Imported files are copied into Nomadical's <strong class="text-white font-semibold">private app storage</strong> (<code class="bg-white/10 px-1.5 py-0.5 rounded text-xs text-[#3b82f6]">getApplicationDocumentsDirectory()/pdfs/</code>). They are not readable by other apps.</li>
<li class="text-white/70 text-sm">Nomadical extracts the text from each document and splits it into searchable "chunks" which are stored in the app's local SQLite database along with the document's metadata.</li>
<li class="text-white/70 text-sm">For scanned (image-only) PDFs, Nomadical uses <strong class="text-white font-semibold">Google ML Kit Text Recognition on-device</strong> to extract text from the page images. ML Kit runs entirely on your phone — no image data is transmitted to Google or any other party.</li>
<li class="text-white/70 text-sm">Chat conversations about an uploaded document are stored locally in the same chat history database as the regular AI chat.</li>
<li class="text-white/70 text-sm">When you delete a document from <strong class="text-white font-semibold">My Docs</strong>, both the file and all its extracted chunks are permanently removed from your device.</li>
<li class="text-white/70 text-sm"><strong class="text-white font-semibold">Uploaded documents never leave your device.</strong> There is no sync, no backup, no upload path.</li>
</ul>
<h3 id="checklist-data" class="text-lg font-bold text-white mt-8 mb-3">Checklist Data</h3>
<ul class="list-disc pl-6 mb-4 space-y-1">
<li class="text-white/70 text-sm">Your checklist completion progress and any custom checklists you create are stored locally in the app's SQLite database.</li>
</ul>
<h3 id="app-settings-and-preferences" class="text-lg font-bold text-white mt-8 mb-3">App Settings and Preferences</h3>
<ul class="list-disc pl-6 mb-4 space-y-1">
<li class="text-white/70 text-sm">Display preferences (font size, theme), compass settings (declination correction, coordinate format), and other settings are stored locally using your device's shared preferences storage.</li>
</ul>
<hr class="border-white/10 my-6"/>
<h2 id="data-we-do-not-collect" class="text-xl font-bold text-white mt-10 mb-4 pb-2 border-b border-white/10">2. Data We Do NOT Collect</h2>
<p class="text-white/70 text-sm leading-relaxed mb-4">Nomadical does <strong class="text-white font-semibold">not</strong> collect:</p>
<ul class="list-disc pl-6 mb-4 space-y-1">
<li class="text-white/70 text-sm">Analytics or usage telemetry of any kind</li>
<li class="text-white/70 text-sm">Crash reports sent to external services</li>
<li class="text-white/70 text-sm">Advertising identifiers</li>
<li class="text-white/70 text-sm">Device identifiers</li>
<li class="text-white/70 text-sm">Account details — Nomadical has no accounts, no sign-up, no sign-in</li>
<li class="text-white/70 text-sm">Contacts, calendar, or messages</li>
<li class="text-white/70 text-sm">Any data transmitted over the internet at runtime</li>
</ul>
<p class="text-white/70 text-sm leading-relaxed mb-4">The app makes <strong class="text-white font-semibold">zero network requests</strong> during normal operation. All AI inference, OCR, knowledge content, map rendering, and sensor data processing happens entirely on your device.</p>
<hr class="border-white/10 my-6"/>
<h2 id="on-device-ai-model" class="text-xl font-bold text-white mt-10 mb-4 pb-2 border-b border-white/10">3. On-Device AI Model</h2>
<p class="text-white/70 text-sm leading-relaxed mb-4">The <strong class="text-white font-semibold">Gemma 4 2B</strong> AI model (~2.6 GB) is downloaded directly to your device during initial setup from a Google-hosted model distribution endpoint. After download, the model file resides on your local storage (<code class="bg-white/10 px-1.5 py-0.5 rounded text-xs text-[#3b82f6]">getApplicationDocumentsDirectory()/models/</code>) and is used exclusively for on-device inference. No queries, images, or results are transmitted to Google or any other party.</p>
<p class="text-white/70 text-sm leading-relaxed mb-4">The model download itself requires an internet connection only once. After download, the app operates fully offline. You may delete the model at any time via <strong class="text-white font-semibold">Settings > AI Model > Delete Model</strong> and re-download it later if needed.</p>
<hr class="border-white/10 my-6"/>
<h2 id="google-ml-kit-text-recognition-ocr" class="text-xl font-bold text-white mt-10 mb-4 pb-2 border-b border-white/10">4. Google ML Kit Text Recognition (OCR)</h2>
<p class="text-white/70 text-sm leading-relaxed mb-4">When you import a scanned PDF into My Documents, Nomadical uses <strong class="text-white font-semibold">Google ML Kit Text Recognition</strong> to extract text from the page images. ML Kit is a Google library that ships with the app and <strong class="text-white font-semibold">runs entirely on-device</strong> — no image data, extracted text, or metadata is transmitted to Google or any other party.</p>
<p class="text-white/70 text-sm leading-relaxed mb-4">ML Kit requires Google Play Services to be installed on the device (standard on Android phones with Google Mobile Services). If Play Services is not available, OCR will fail gracefully and the document will show an "could not extract text" message.</p>
<hr class="border-white/10 my-6"/>
<h2 id="third-party-services" class="text-xl font-bold text-white mt-10 mb-4 pb-2 border-b border-white/10">5. Third-Party Services</h2>
<p class="text-white/70 text-sm leading-relaxed mb-4">Nomadical does not integrate with any third-party analytics, advertising, or data collection services.</p>
<p class="text-white/70 text-sm leading-relaxed mb-4">The only external network activity in the entire app is:</p>
<ul class="list-disc pl-6 mb-4 space-y-1">
<li class="text-white/70 text-sm"><strong class="text-white font-semibold">One-time download of the Gemma 4 2B model file</strong> from a model distribution endpoint during onboarding. This download transmits no personal data — it is a standard file download.</li>
<li class="text-white/70 text-sm"><strong class="text-white font-semibold">Optional map tile download</strong> when you proactively cache a region using the offline map feature. Tiles come from OpenStreetMap; your device makes tile requests to openstreetmap.org while downloading, which may be logged by the tile server per its own privacy policy. After caching, the map works fully offline.</li>
</ul>
<p class="text-white/70 text-sm leading-relaxed mb-4">No third-party SDKs that collect behavioural data are bundled in the app.</p>
<hr class="border-white/10 my-6"/>
<h2 id="data-sharing" class="text-xl font-bold text-white mt-10 mb-4 pb-2 border-b border-white/10">6. Data Sharing</h2>
<p class="text-white/70 text-sm leading-relaxed mb-4">We do <strong class="text-white font-semibold">not</strong> share your data with anyone. Ever. There is no mechanism in this app to transmit your journal entries, chat history, personal emergency info, photos, imported documents, or location data to any external party.</p>
<p class="text-white/70 text-sm leading-relaxed mb-4">The only way data leaves your device is if <strong class="text-white font-semibold">you explicitly choose</strong> to share a journal entry, checklist, or document using your device's system share sheet — in which case you control exactly what is shared and where it goes.</p>
<hr class="border-white/10 my-6"/>
<h2 id="permissions-used" class="text-xl font-bold text-white mt-10 mb-4 pb-2 border-b border-white/10">7. Permissions Used</h2>
<table class="w-full border-collapse my-4 text-sm"><thead><tr>
<th class="text-left px-3 py-2 bg-white/5 border border-white/10 text-white font-semibold text-xs">Permission</th>
<th class="text-left px-3 py-2 bg-white/5 border border-white/10 text-white font-semibold text-xs">Why It's Used</th>
</tr></thead><tbody>
<tr>
<td class="px-3 py-2 border border-white/10 text-white/70 text-xs">Camera</td>
<td class="px-3 py-2 border border-white/10 text-white/70 text-xs">AI Scanner — capture photos for on-device identification</td>
</tr>
<tr>
<td class="px-3 py-2 border border-white/10 text-white/70 text-xs">Location (fine)</td>
<td class="px-3 py-2 border border-white/10 text-white/70 text-xs">GPS tagging in Field Journal; magnetic declination correction in Compass</td>
</tr>
<tr>
<td class="px-3 py-2 border border-white/10 text-white/70 text-xs">Flashlight / Torch</td>
<td class="px-3 py-2 border border-white/10 text-white/70 text-xs">SOS Morse flashlight emergency signaling</td>
</tr>
<tr>
<td class="px-3 py-2 border border-white/10 text-white/70 text-xs">Vibration</td>
<td class="px-3 py-2 border border-white/10 text-white/70 text-xs">Dual-channel SOS signaling alongside LED flash</td>
</tr>
<tr>
<td class="px-3 py-2 border border-white/10 text-white/70 text-xs">Read External Storage</td>
<td class="px-3 py-2 border border-white/10 text-white/70 text-xs">Gallery photo selection for AI Scanner; file picker for PDF/TXT/MD document import</td>
</tr>
<tr>
<td class="px-3 py-2 border border-white/10 text-white/70 text-xs">Write External Storage</td>
<td class="px-3 py-2 border border-white/10 text-white/70 text-xs">Saving journal photos; copying imported documents to private app storage</td>
</tr>
<tr>
<td class="px-3 py-2 border border-white/10 text-white/70 text-xs">Wake Lock</td>
<td class="px-3 py-2 border border-white/10 text-white/70 text-xs">Prevents screen sleep during compass use and SOS signaling</td>
</tr>
<tr>
<td class="px-3 py-2 border border-white/10 text-white/70 text-xs">Internet</td>
<td class="px-3 py-2 border border-white/10 text-white/70 text-xs">One-time Gemma AI model download; optional offline map tile caching</td>
</tr>
</tbody></table>
<p class="text-white/70 text-sm leading-relaxed mb-4">All permissions are requested only when the relevant feature is first used. You may deny optional permissions (such as location) and the app will continue to function without those specific features.</p>
<hr class="border-white/10 my-6"/>
<h2 id="data-retention-and-deletion" class="text-xl font-bold text-white mt-10 mb-4 pb-2 border-b border-white/10">8. Data Retention and Deletion</h2>
<p class="text-white/70 text-sm leading-relaxed mb-4">All data is stored on your device and under your control.</p>
<p class="text-white/70 text-sm leading-relaxed mb-4"><strong class="text-white font-semibold">To delete specific data:</strong></p>
<ul class="list-disc pl-6 mb-4 space-y-1">
<li class="text-white/70 text-sm"><strong class="text-white font-semibold">Journal entries:</strong> Settings > Privacy > Clear Journal Data</li>
<li class="text-white/70 text-sm"><strong class="text-white font-semibold">Chat history:</strong> Settings > Privacy > Clear Chat History</li>
<li class="text-white/70 text-sm"><strong class="text-white font-semibold">Checklist progress:</strong> Settings > Privacy > Clear Checklist Progress</li>
<li class="text-white/70 text-sm"><strong class="text-white font-semibold">Imported documents:</strong> Swipe right-to-left on any row in Library > My Docs to delete that document and all its indexed text</li>
<li class="text-white/70 text-sm"><strong class="text-white font-semibold">AI model file:</strong> Settings > AI Model > Delete Model</li>
</ul>
<p class="text-white/70 text-sm leading-relaxed mb-4"><strong class="text-white font-semibold">To delete all app data:</strong> Uninstall the app or use your device's "Clear App Data" option in Android Settings. This permanently removes all locally stored data, the AI model file, imported documents, and all preferences.</p>
<hr class="border-white/10 my-6"/>
<h2 id="children-s-privacy" class="text-xl font-bold text-white mt-10 mb-4 pb-2 border-b border-white/10">9. Children's Privacy</h2>
<p class="text-white/70 text-sm leading-relaxed mb-4">Nomadical is rated for ages 13+ and is not directed at children under 13. We do not knowingly collect personal information from anyone — child or adult — because the app does not collect personal information in the first place.</p>
<hr class="border-white/10 my-6"/>
<h2 id="changes-to-this-policy" class="text-xl font-bold text-white mt-10 mb-4 pb-2 border-b border-white/10">10. Changes to This Policy</h2>
<p class="text-white/70 text-sm leading-relaxed mb-4">If this privacy policy changes materially, the updated policy will be included in the next app update and published to the project's GitHub repository. The "Last updated" date at the top of this file will reflect the most recent revision. Continued use of the app after an update constitutes acceptance of the revised policy.</p>
<hr class="border-white/10 my-6"/>
<h2 id="contact" class="text-xl font-bold text-white mt-10 mb-4 pb-2 border-b border-white/10">11. Contact</h2>
<p class="text-white/70 text-sm leading-relaxed mb-4">For any privacy questions or concerns:</p>
<p class="text-white/70 text-sm leading-relaxed mb-4"><strong class="text-white font-semibold">Owner:</strong> KangaBlue.au</p>
<p class="text-white/70 text-sm leading-relaxed mb-4"><strong class="text-white font-semibold">Email:</strong> skippy@kangablue.au</p>
<p class="text-white/70 text-sm leading-relaxed mb-4">We aim to respond to enquiries within 5 business days.</p>
<hr class="border-white/10 my-6"/>
<p class="text-white/70 text-sm leading-relaxed mb-4"><em>This Privacy Policy applies to the Nomadical mobile app.</em></p>` }} />
    </main>
  );
}
