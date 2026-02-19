import { GoogleGenAI } from "@google/genai";

// Initialize Gemini API using the recommended pattern with named parameter
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const refineMemoryText = async (rawText: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      // Use gemini-3-flash-preview for basic text tasks
      model: 'gemini-3-flash-preview',
      contents: `You are an assistant for a memorial website. 
      The user has written a memory or condolence message in Hebrew. 
      Your task is to fix any grammatical errors and ensure the tone is respectful and appropriate for a memorial site. 
      Do not change the meaning or the personal voice of the author. 
      
      Input text: "${rawText}"
      
      Output only the refined Hebrew text.`,
      config: {
        thinkingConfig: { thinkingBudget: 0 } // Disable thinking for simple text refinement
      }
    });

    // Access the .text property directly
    return response.text?.trim() || rawText;
  } catch (error) {
    console.error("Error refining text with Gemini:", error);
    return rawText;
  }
};