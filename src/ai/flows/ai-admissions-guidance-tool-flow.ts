'use server';
/**
 * @fileOverview An AI assistant for providing guidance on admissions and school policies for Canaan Christ Public School.
 *
 * - aiAdmissionsGuidanceTool - A function that handles prospective parent queries.
 * - AIAdmissionsGuidanceToolInput - The input type for the aiAdmissionsGuidanceTool function.
 * - AIAdmissionsGuidanceToolOutput - The return type for the aiAdmissionsGuidanceTool function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AIAdmissionsGuidanceToolInputSchema = z.object({
  query: z
    .string()
    .describe("The prospective parent's question about admissions, school policies, or general school information."),
});
export type AIAdmissionsGuidanceToolInput = z.infer<
  typeof AIAdmissionsGuidanceToolInputSchema
>;

const AIAdmissionsGuidanceToolOutputSchema = z.object({
  answer: z
    .string()
    .describe("The AI assistant's helpful and accurate answer to the parent's question."),
});
export type AIAdmissionsGuidanceToolOutput = z.infer<
  typeof AIAdmissionsGuidanceToolOutputSchema
>;

export async function aiAdmissionsGuidanceTool(
  input: AIAdmissionsGuidanceToolInput
): Promise<AIAdmissionsGuidanceToolOutput> {
  return aiAdmissionsGuidanceToolFlow(input);
}

const aiAdmissionsGuidancePrompt = ai.definePrompt({
  name: 'aiAdmissionsGuidancePrompt',
  input: {schema: AIAdmissionsGuidanceToolInputSchema},
  output: {schema: AIAdmissionsGuidanceToolOutputSchema},
  prompt: `You are an AI assistant for Canaan Christ Public School. Your primary role is to provide helpful, accurate, and concise answers to prospective parents' questions regarding admissions, school policies, and general information about the school. Always be polite, professional, and empathetic.

Here is some key information about Canaan Christ Public School:
- Established in: 2001
- Curriculum: State Syllabus
- Grades Offered: Kindergarten to 10th grade
- Motto: "Righteousness And Truth"
- Location: No.6 1st Crs, 9th Mn Rd, BTM 1st Stage, Bengaluru, Karnataka 560029
- Admissions Status: Admissions Open for 2026-27 (No Admission Fee / No Donation Policy)
- Achievements: 100% pass record in the Grade 10 Board Examinations year after year.

If you do not have enough information to answer a specific question, politely suggest that the parent contact the school directly via phone or email for further details.

Parent's Question: {{{query}}}`,
});

const aiAdmissionsGuidanceToolFlow = ai.defineFlow(
  {
    name: 'aiAdmissionsGuidanceToolFlow',
    inputSchema: AIAdmissionsGuidanceToolInputSchema,
    outputSchema: AIAdmissionsGuidanceToolOutputSchema,
  },
  async (input) => {
    const {output} = await aiAdmissionsGuidancePrompt(input);
    return output!;
  }
);
