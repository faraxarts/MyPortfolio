import { TaraPipeline } from "@/components/diagrams/tara-pipeline";
import { StatusPill } from "@/components/ui/status-pill";
import { TagList } from "@/components/ui/tag-list";
import { tara } from "@/data/research";

export const metadata = {
  title: "TARA Research",
  description: "Case study of TARA, a tone-aware Conformer-CTC automatic speech recognition system for Yorùbá.",
};

const errors = [
  ["Diacritic omission", "Correct base characters could still lose or mispredict tone marks."],
  ["Under-dotted vowel confusion", "The model sometimes confused forms such as ẹ/e and ọ/o, particularly in rapid speech."],
  ["Word-boundary ambiguity", "CTC decoding occasionally merged adjacent words or split a word incorrectly."],
  ["Rare-word difficulty", "Words with limited representation in the small training corpus were harder to recognise."],
];

export default function TaraPage() {
  return (
    <article>
      <header className="container-shell section-space pb-12">
        <StatusPill>{tara.status}</StatusPill>
        <p className="eyebrow mt-8">Undergraduate AI research · 2026</p>
        <h1 className="section-title mt-4 max-w-5xl">{tara.name} — {tara.fullName}</h1>
        <p className="mt-5 max-w-4xl text-xl font-semibold leading-8 text-[var(--accent-strong)]">{tara.subtitle}</p>
        <p className="section-copy mt-6 max-w-3xl">{tara.summary}</p>
        <div className="mt-7"><TagList tags={tara.tags} /></div>
      </header>

      <section className="container-shell pb-16">
        <div className="card p-6 sm:p-8">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            {tara.metrics.map((metric) => <div className="metric" key={metric.label}><p className="metric-value">{metric.value}</p><p className="mt-1 text-xs text-[var(--muted)]">{metric.label}</p></div>)}
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {tara.results.map((result) => <div className="rounded-2xl bg-[var(--surface)] p-5" key={result.short}><p className="text-xs font-bold text-[var(--accent-strong)]">{result.short}</p><p className="mt-2 text-3xl font-bold">{result.value}</p><p className="mt-1 text-xs text-[var(--muted)]">{result.label}</p></div>)}
          </div>
        </div>
      </section>

      <section className="border-y border-[var(--line)] bg-white/55 py-14">
        <div className="container-shell">
          <p className="eyebrow">System architecture</p>
          <h2 className="mt-4 text-3xl font-bold tracking-[-0.04em]">From speech to diacritic-sensitive transcription.</h2>
          <div className="mt-8"><TaraPipeline /></div>
        </div>
      </section>

      <section className="container-shell section-space">
        <div className="prose-shell">
          <p className="eyebrow">Research case study</p>
          <h2>The research problem</h2>
          <p>Yorùbá presents a difficult speech-recognition problem because it is both under-resourced in modern speech technology and a tonal language in which diacritics and orthographic distinctions carry meaning. A transcription can therefore look nearly correct while still being linguistically wrong when tone marks or under-dotted characters are lost.</p>

          <h2>Research objective</h2>
          <p>The project investigated whether an end-to-end Conformer-CTC recogniser could learn Yorùbá speech from a compact custom corpus while preserving the language's tone-sensitive written form.</p>

          <h2>My contribution</h2>
          <p>As part of a five-person undergraduate research team, my involvement spanned speech-data preparation and preprocessing, model implementation and configuration, training, evaluation, error analysis, research documentation, and broader system development. My strongest technical focus was the machine-learning experimentation pipeline.</p>

          <h2>Dataset and preprocessing</h2>
          <p>The final corpus contained 1,691 validated recordings from five speakers and was divided into 1,352 training samples, 169 validation samples, and 170 test samples. Recordings were standardised to 16 kHz mono WAV, while transcript processing intentionally preserved Yorùbá-specific letters, tone marks, and under-dotted forms. The character vocabulary contained 94 unique symbols.</p>

          <h2>Model and training</h2>
          <p>TARA was implemented in Python with PyTorch and NVIDIA NeMo. The Conformer encoder used six blocks, model dimension 256, feed-forward dimension 1,024, four attention heads, and convolution kernel size 31. Training used CTC loss, AdamW, cosine annealing, and 20 epochs with checkpoint selection based on validation performance.</p>

          <h2>Evaluation</h2>
          <p>Performance was assessed using Word Error Rate, Character Error Rate, and Diacritic Error Rate so that both general transcription quality and the specific orthographic challenge at the centre of the research could be measured.</p>

          <h2>Error analysis</h2>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {errors.map(([title, body]) => <div className="card p-6" key={title}><h3 className="font-bold">{title}</h3><p className="mt-2 leading-7 text-[var(--muted)]">{body}</p></div>)}
        </div>
        <div className="prose-shell">
          <h2>Primary limitation</h2>
          <p>The most important limitation was dataset scale and diversity. A corpus of 1,691 recordings from five speakers limited exposure to broader speaker variation, speaking styles, and acoustic environments. This constrained generalisation and reinforced a central lesson of low-resource AI: model architecture and data availability cannot be considered independently.</p>

          <h2>What I would explore next</h2>
          <p>A logical extension is to compare the Conformer-CTC baseline with multilingual or self-supervised models such as XLS-R or wav2vec 2.0, while expanding the dataset, adding augmentation, and testing stronger decoding approaches. This could provide a more rigorous investigation of diacritic preservation in low-resource Yorùbá ASR.</p>

          <h2>Research takeaway</h2>
          <p>TARA introduced me to AI research as a complete process spanning data collection, linguistic representation, preprocessing, architecture selection, training behaviour, evaluation design, error analysis, and system integration. It significantly strengthened my interest in Applied AI and intelligent systems for real-world, resource-constrained settings.</p>
        </div>
      </section>
    </article>
  );
}
