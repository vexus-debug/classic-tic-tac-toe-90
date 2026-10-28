import { supabase } from "@/integrations/supabase/client";

/** One-shot call to the clinic AI assistant; returns plain text. */
export async function askClinicAi(orgId: string, prompt: string, page: string): Promise<string> {
  const { data, error } = await supabase.functions.invoke("ai-copilot", {
    body: { messages: [{ role: "user", content: prompt }], orgId, context: { page } },
  });
  if (error) {
    const s = (error as any)?.context?.status;
    if (s === 429) throw new Error("AI is busy — please wait a moment and try again.");
    if (s === 402) throw new Error("AI credits are currently unavailable.");
    throw error;
  }
  const reply = String(data?.reply ?? "").trim();
  if (!reply) throw new Error("AI returned nothing.");
  return reply;
}

export const consentRiskPrompt = (patientId: string, title: string, content: string) =>
  `Tailor this dental consent form for patient id ${patientId}. Use get_patient_history (read-only) to check allergies, medical conditions and medications. Never invent facts.
Procedure: ${title}
Current form text:
${content}

Reply with ONLY a short section to append, starting with "PATIENT-SPECIFIC RISKS:" followed by bullet points ("- ") covering procedure-specific risks (e.g. nerve proximity for lower molars, dry socket, sinus involvement) and risks raised by this patient's medical history. Plain text, no markdown headings.`;

export const postOpPrompt = (patientId: string, procedures: string[], meds: string[]) =>
  `Write post-operative care instructions for dental patient id ${patientId}. Use get_patient_history (read-only) for allergies/conditions. Never invent facts.
Procedures done today: ${procedures.join("; ") || "none listed"}
Medications prescribed today: ${meds.join("; ") || "none"}

Reply in plain text, simple patient-friendly language, short bullet points ("- ") grouped under: "Today", "Next few days", "Medications", "Call the clinic if". No markdown headings or bold.`;
