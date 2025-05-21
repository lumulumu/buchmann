import OpenAI from 'openai';

const openai = new OpenAI();

export async function complete(prompt: string) {
  const response = await openai.chat.completions.create({
    messages: [{ role: 'user', content: prompt }],
    model: 'gpt-3.5-turbo'
  });
  return response.choices[0]?.message.content ?? '';
}
