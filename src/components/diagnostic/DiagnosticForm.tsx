"use client";

import { FormField } from "@/components/diagnostic/FormField";

export function DiagnosticForm() {
  return (
    <form>
      <h2>Diagnostic Form</h2>

      <fieldset>
        <legend>Contact</legend>

        <FormField label="Name" htmlFor="name">
          <input id="name" name="name" type="text" autoComplete="name" />
        </FormField>

        <FormField label="Email" htmlFor="email" required>
          <input id="email" name="email" type="email" autoComplete="email" required />
        </FormField>

        <FormField label="Business" htmlFor="business">
          <input id="business" name="business" type="text" autoComplete="organization" />
        </FormField>
      </fieldset>

      <fieldset>
        <legend>Diagnostic</legend>

        <FormField
          label="What does a “good day” look like operationally—and what breaks on a “bad day”?"
          htmlFor="q1_good_bad_day"
          required
          hint="High level is fine—3–5 lines is enough."
        >
          <textarea id="q1_good_bad_day" name="q1_good_bad_day" required />
        </FormField>

        <FormField
          label="Walk me through your workflow from first contact to delivery. Where does it slow down or become reactive?"
          htmlFor="q2_workflow"
          required
          hint="A quick outline is enough."
        >
          <textarea id="q2_workflow" name="q2_workflow" required />
        </FormField>

        <FormField
          label="What kind of improvement are you aiming for in the next 3–6 months?"
          htmlFor="q3_goals"
          required
          hint="Choose up to 3."
        >
          <div id="q3_goals">
            <label>
              <input type="checkbox" name="q3_goals" value="more_leads" /> More leads
            </label>
            <label>
              <input type="checkbox" name="q3_goals" value="better_conversion" /> Better conversion
            </label>
            <label>
              <input type="checkbox" name="q3_goals" value="smoother_ops" /> Smoother operations
            </label>
            <label>
              <input type="checkbox" name="q3_goals" value="less_firefighting" /> Less firefighting
            </label>
            <label>
              <input type="checkbox" name="q3_goals" value="not_sure" /> Not sure yet
            </label>
          </div>
        </FormField>

        <FormField
          label="What causes the most interruptions or rework in your week right now?"
          htmlFor="q4_interruptions"
          required
        >
          <textarea id="q4_interruptions" name="q4_interruptions" required />
        </FormField>

        <FormField
          label="Which feels most urgent right now?"
          htmlFor="q5_urgency"
          required
        >
          <div id="q5_urgency">
            <label>
              <input type="radio" name="q5_urgency" value="clarity" required /> Clarity
            </label>
            <label>
              <input type="radio" name="q5_urgency" value="consistency" /> Consistency
            </label>
            <label>
              <input type="radio" name="q5_urgency" value="leads" /> Leads
            </label>
            <label>
              <input type="radio" name="q5_urgency" value="execution" /> Execution
            </label>
            <label>
              <input type="radio" name="q5_urgency" value="mix" /> A mix of everything
            </label>
          </div>
        </FormField>

        <FormField
          label="In one or two sentences: what would make you feel like this is finally under control?"
          htmlFor="q6_under_control"
          required
        >
          <textarea id="q6_under_control" name="q6_under_control" required />
        </FormField>

        {/* Honeypot + timestamp (wired later) */}
        <input type="text" name="website" tabIndex={-1} autoComplete="off" style={{ display: "none" }} />
        <input type="hidden" name="form_started_at" value="" />
      </fieldset>

      <button type="submit">Submit</button>
    </form>
  );
}
