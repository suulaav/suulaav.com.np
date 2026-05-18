import { personal, experience, projects, skills, education } from "@/data/portfolio";

export const dynamic = "force-static";

export function GET() {
  const skillList = Object.entries(skills)
    .map(([cat, items]) => `- **${cat}:** ${items.map((s) => s.name).join(", ")}`)
    .join("\n");

  const experienceList = experience
    .map((e) => `- **${e.role}** at ${e.company} (${e.period}) — ${e.description}`)
    .join("\n");

  const projectList = projects
    .map((p) => `- **${p.title}** (${p.subtitle}): ${p.description} Tech: ${p.tech.join(", ")}.`)
    .join("\n");

  const educationList = education
    .map((e) => `- ${e.degree}, ${e.institution} (${e.period})`)
    .join("\n");

  const content = `# ${personal.name}

> ${personal.bio}

## About

${personal.name} is a ${personal.role} based in ${personal.location} with 7+ years of experience building scalable SaaS products, RESTful APIs, and production backend infrastructure. Currently leading technical decisions at ${experience[0].company}.

## Experience

${experienceList}

## Projects

${projectList}

## Skills

${skillList}

## Education

${educationList}

## Contact

- Email: ${personal.email}
- GitHub: ${personal.links.github}
- LinkedIn: ${personal.links.linkedin}
- Website: https://suulaav.com.np
`;

  return new Response(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400",
    },
  });
}
