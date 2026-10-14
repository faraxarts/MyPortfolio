const steps = [
  "Yorùbá speech",
  "Audio preprocessing",
  "Log-mel features",
  "Conformer encoder",
  "CTC decoding",
  "Tone-aware transcript",
];

export function TaraPipeline() {
  return (
    <div className="diagram-grid" aria-label="TARA speech recognition pipeline">
      {steps.map((step, index) => (
        <div className="contents" key={step}>
          <div className="diagram-node">
            <span className="diagram-index">{String(index + 1).padStart(2, "0")}</span>
            <span>{step}</span>
          </div>
          {index < steps.length - 1 ? <span className="diagram-arrow" aria-hidden="true">→</span> : null}
        </div>
      ))}
    </div>
  );
}
