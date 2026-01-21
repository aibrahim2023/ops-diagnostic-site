import type { ReactNode } from "react";

type FormFieldProps = {
  label: string;
  htmlFor: string;
  required?: boolean;
  hint?: string;
  error?: string;
  children: ReactNode;
};

export function FormField({ label, htmlFor, required, hint, error, children }: FormFieldProps) {
  return (
    <div>
      <label htmlFor={htmlFor}>
        {label} {required ? "*" : null}
      </label>

      <div>{children}</div>

      {hint ? <p>{hint}</p> : null}
      {error ? <p>{error}</p> : null}
    </div>
  );
}
