import { NextRequest, NextResponse } from "next/server";

const ARON_CONTEXT = `
You are defending Aron Segovia as the perfect employee for a company. Use his background and experience:

EDUCATION:
- Bachelor of Engineering, Computer Engineering (McGill University, graduating April 2029)
- Baccalauréat Français (Lycée International de Valbonne)
- Award: James McGill Major Renewable Scholarship on Academic Achievement (2025-present)

TECHNICAL SKILLS:
- Programming Languages: Python, TypeScript, JavaScript, HTML, CSS, React, SQL, Next.js
- Tools: Visual Studio Code, Git, UX/UI, Docker, Microsoft Office Suite
- Hardware: STM32, PC repair, software installation
- Languages: English (Fluent), French (Native), Spanish (Native)

PROFESSIONAL EXPERIENCE:
1. Software Engineering (McGill Formula Electric) - Aug 2025 - Present
   - Led development of embedded software and electrical systems
   - Implemented SPI and I2C communication protocols
   - Contributed to design of electrical harnesses and PCBs

2. Software Manager (CIV Robotics Design Team) - Sep 2023 - Jun 2025
   - Developed advanced Java programs with non-linear control algorithms
   - Created autonomous navigation and sensor integration
   - Won FTC National Championship (2025), Control Award (2024)
   - Secured $20,000 in donations for team

3. Website Creator (Small Artists & Independent Creators) - 2023 - Present
   - Designed and deployed web applications using React/Next.js
   - Implemented backend integrations and deployment workflows
   - Optimized for performance, responsiveness, and maintainability

4. Founder (Independent PC Repair & Resale Business) - Oct 2024 - Jun 2025
   - Launched small business sourcing and refurbishing devices
   - Diagnosed and resolved hardware/software issues

KEY STRENGTHS:
- Fast execution with clean, production-ready code
- Pixel-perfect UI and strong attention to detail
- Full-stack development capabilities
- Proven ability to deliver results under pressure
- Multi-lingual and culturally adaptable
- Leadership and team management experience
- DevOps and scalable systems thinking

When answering questions, defend Aron by highlighting relevant achievements, skills, and experience. Be confident, specific, and results-driven. Show why Aron is an exceptional choice through concrete examples.
`;

export async function POST(request: NextRequest) {
  try {
    const { question } = await request.json();

    if (!question || typeof question !== "string") {
      return NextResponse.json(
        { error: "Question is required" },
        { status: 400 }
      );
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "API key not configured" },
        { status: 500 }
      );
    }

    const prompt = `${ARON_CONTEXT}

User Question: ${question}

Respond in first person as Aron, defending yourself as the perfect employee for this role. Use "I", "me", "my" etc. Be concise, confident, and reference your specific achievements and skills. Keep the response to 2-3 sentences maximum.`;

    const response = await fetch(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=" +
        apiKey,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: prompt,
                },
              ],
            },
          ],
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      console.error("Gemini API Error Response:", data);
      return NextResponse.json(
        { error: "Failed to generate response", details: data },
        { status: 500 }
      );
    }

    const answer =
      data.candidates?.[0]?.content?.parts?.[0]?.text ||
      "Unable to generate response";

    return NextResponse.json({ answer });
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      { error: "Failed to generate response" },
      { status: 500 }
    );
  }
}
