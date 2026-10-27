import { z } from "zod";

export const projectTypes = ["AI MVP Development", "AI Chatbot / AI Agent", "Web Application", "SaaS Product", "AI Automation", "API Integration", "Other"] as const;
export const budgets = ["Under $1,000", "$1,000–$3,000", "$3,000–$5,000", "$5,000–$10,000", "$10,000+", "Not sure yet"] as const;
export const timelines = ["Within 2 weeks", "Within 1 month", "Within 2–3 months", "Flexible"] as const;

export const inquirySchema = z.object({
  name: z.string().trim().min(2, "Enter your full name.").max(100),
  email: z.string().trim().email("Enter a valid email address.").max(200),
  company: z.string().trim().max(150).optional().or(z.literal("")),
  projectType: z.enum(projectTypes, { errorMap: () => ({ message: "Choose a project type." }) }),
  budget: z.enum(budgets).optional().or(z.literal("")),
  timeline: z.enum(timelines).optional().or(z.literal("")),
  description: z.string().trim().min(20, "Describe your project in at least 20 characters.").max(3000),
  details: z.string().trim().max(3000).optional().or(z.literal("")),
  consent: z.literal(true, { errorMap: () => ({ message: "Please agree to the Privacy Policy to continue." }) }),
  website: z.string().max(0).optional().or(z.literal("")), // honeypot
});
export type InquiryInput = z.infer<typeof inquirySchema>;
