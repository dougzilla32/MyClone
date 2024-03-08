import { Injectable } from '@angular/core';
import OpenAI from 'openai';

@Injectable({
  providedIn: 'root'
})

export class OpenAIService {
  constructor() { }

  readonly openai = new OpenAI({
    apiKey: "hi" // process.env.OPENAI_API_KEY,
  });

  async getCompletion(prompt: string): Promise<string> {
    // New (i.e., OpenAI NodeJS SDK v4)
    const chatCompletion = await this.openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{"role": "user", "content": "Hello!"}],
    });
    return chatCompletion.choices[0].message.content!;
  }
}
