export const programs = [
  { name: "Personal Development", slug: "personal-development" },
  { name: "Managing Work", slug: "managing-work" },
  { name: "Managing Relationships", slug: "managing-relationships" },
  { name: "Leadership & Management", slug: "leadership-management" },
  { name: "Impacting Strategy", slug: "impacting-strategy" },
] as const;

export function getProgram(slug: string) {
  return programs.find((program) => program.slug === slug);
}
