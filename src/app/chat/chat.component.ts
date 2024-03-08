import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PromptComponent } from '../prompt/prompt.component';
import { Chat } from '../chat';
import { OpenAIService } from '../openai.service';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [CommonModule, PromptComponent],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})

export class ChatComponent {
  openAIService: OpenAIService = inject(OpenAIService);

  chat: Chat = {
    text: ''
  }
}
