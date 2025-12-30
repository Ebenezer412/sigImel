
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getAdminAssistance = async (prompt: string, contextData: any) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Contexto do Sistema IMEL (Instituto Médio de Economia de Luanda): ${JSON.stringify(contextData)}. Pergunta: ${prompt}`,
      config: {
        systemInstruction: "Você é o Consultor Inteligente do IMEL. Ajude a administração escolar com análises, redação de comunicados e suporte sobre dados dos alunos e professores. Responda de forma profissional e objetiva em Português de Angola.",
      }
    });
    return response.text;
  } catch (error) {
    console.error("Erro ao consultar Gemini:", error);
    return "Desculpe, ocorreu um erro ao processar sua solicitação. Verifique sua conexão ou chave de API.";
  }
};
