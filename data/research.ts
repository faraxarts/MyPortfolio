export const tara = {
  name: "TARA",
  fullName: "Tone-Aware Recognition and Annotation",
  subtitle: "Improving Diacritics Prediction in Yorùbá Language Automatic Speech Recognition",
  status: "Research Project · Completed",
  summary:
    "An end-to-end, tone-aware Yorùbá language automatic speech recognition system based on Conformer-CTC, developed to preserve diacritic-sensitive orthography in a low-resource speech setting.",
  tags: ["Python", "PyTorch", "NVIDIA NeMo", "Conformer-CTC", "Speech AI", "Low-Resource AI"],
  metrics: [
    { label: "Validated recordings", value: "1,691" },
    { label: "Output characters", value: "94" },
    { label: "Speakers", value: "5" },
    { label: "Training epochs", value: "20" },
  ],
  results: [
    { label: "Word Error Rate", value: "45.0%", short: "WER" },
    { label: "Character Error Rate", value: "24.0%", short: "CER" },
    { label: "Diacritic Error Rate", value: "32.5%", short: "DER" },
  ],
};
