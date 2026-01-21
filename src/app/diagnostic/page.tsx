import { DiagnosticIntro } from "@/components/diagnostic/DiagnosticIntro";
import { WhatToExpect } from "@/components/diagnostic/WhatToExpect";
import { DiagnosticForm } from "@/components/diagnostic/DiagnosticForm";

export default function DiagnosticPage() {
  return (
    <main>
      <DiagnosticIntro />
      <WhatToExpect />
      <DiagnosticForm />
    </main>
  );
}
