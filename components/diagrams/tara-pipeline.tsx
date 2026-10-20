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
    <ol
      className="diagram-grid"
      aria-label="TARA speech recognition pipeline"
    >
      {steps.map((step, index) => (
        <li className="diagram-node" key={step}>
          <span className="diagram-index">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span>{step}</span>
        </li>
      ))}
    </ol>
  );
}