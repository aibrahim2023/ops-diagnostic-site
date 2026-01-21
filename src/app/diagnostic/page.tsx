import { DiagnosticIntro } from "@/components/diagnostic/DiagnosticIntro";
import { WhatToExpect } from "@/components/diagnostic/WhatToExpect";

export default function DiagnosticPage() {
  return (
    <main>
      <DiagnosticIntro />
      <WhatToExpect />
      <p>Form coming next.</p>
    </main>
  );
}
