import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';

// Initialize only if key exists to avoid runtime crashes on init
const ai = apiKey ? new GoogleGenAI({ apiKey }) : null;

export const refineMemoryText = async (rawText: string): Promise<string> => {
  if (!ai) {
    console.warn("Gemini API Key is missing. Returning original text.");
    return rawText;
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `You are an assistant for a memorial website. 
      The user has written a memory or condolence message in Hebrew. 
      Your task is to fix any grammatical errors and ensure the tone is respectful and appropriate for a memorial site. 
      Do not change the meaning or the personal voice of the author. 
      
      Input text: "${rawText}"
      
      Output only the refined Hebrew text.`,
      config: {
        thinkingConfig: { thinkingBudget: 0 } // Disable thinking for simple text refinement to reduce latency
      }
    });

    return response.text?.trim() || rawText;
  } catch (error) {
    console.error("Error refining text with Gemini:", error);
    return rawText;
  }
};
