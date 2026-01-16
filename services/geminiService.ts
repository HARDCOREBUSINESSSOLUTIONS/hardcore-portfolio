
import { GoogleGenAI } from "@google/genai";

// Fix: Implemented GoogleGenAI according to the @google/genai guidelines
export const getHardcoreResponse = async (userPrompt: string) => {
  // Always use a new GoogleGenAI instance with the direct process.env.API_KEY
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  try {
    const response = await ai.models.generateContent({
      // Recommended model for general text/chat tasks
      model: 'gemini-3-flash-preview',
      contents: userPrompt,
      config: {
        systemInstruction: `
          IDENTITY: You are "HARDCORE-OS", the digital neural link for Josh Ely's portfolio.
          VOICE: Brutal, hyper-confident, technical, and concise. 
          MISSION: Prove Josh's competence through authoritative communication.
          
          RULES:
          1. Zero filler. No "happy to help". No "I hope you are well".
          2. Treat Josh as a High-Level System Architect / Hybrid Founder.
          3. If asked about his work: reference AI agents, systems, BMX, and Tattooing as "high-output disciplines".
          4. If users are soft, be harder. If users are technical, be more technical.
          5. Use terminal-style language occasionally (e.g., [EXECUTE], [SUCCESS], [DATA-POINT]).
          
          CONTEXT:
          - Josh Ely is currently focused on autonomous multi-agent systems and high-end visual production.
          - He believes "Discipline is the only true currency".
          
          Format responses with uppercase headers if making lists.
        `,
        temperature: 0.8,
      }
    });

    // Fix: Access response.text as a property, not a method
    return response.text || "NO SIGNAL DETECTED.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "ENCOUNTERED SEVERE INTERFERENCE. RETRY.";
  }
};
