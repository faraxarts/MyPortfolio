import { siteConfig } from "@/data/site";

export const metadata = { title: "About" };

export default function AboutPage() {
  return (
    <section className="container-shell section-space">
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="eyebrow">About</p>
          <h1 className="section-title mt-4">Computer Science, software engineering, and an increasingly focused path into Applied AI.</h1>
        </div>
        <div className="prose-shell">
          <p>I am a First-Class Computer Science graduate from Kwara State University with hands-on experience spanning low-resource speech-recognition research and full-stack software engineering.</p>
          <p>My current direction is Applied Artificial Intelligence and Intelligent Systems: building systems that combine machine learning, data, domain knowledge, and sound software engineering to solve practical problems.</p>
          <p>My undergraduate research on tone-aware Yorùbá automatic speech recognition introduced me to the full research cycle — from data representation and preprocessing through model training, evaluation, error analysis, and system integration. Alongside that research, I have continued designing intelligent systems for academic planning, market decision support, and professional career discovery.</p>
          <p>I am particularly interested in graduate research opportunities involving Applied AI, speech and language technologies, low-resource AI, machine-learning systems, and intelligent decision support.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a className="button button-primary" href={`mailto:${siteConfig.email}`}>Get in touch</a>
            <a className="button button-secondary" href={siteConfig.cv} target="_blank" rel="noreferrer">Academic CV</a>
          </div>
        </div>
      </div>
    </section>
  );
}
