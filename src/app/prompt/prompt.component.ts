import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Chat } from "../chat";

@Component({
  selector: 'app-prompt',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './prompt.component.html',
  styleUrl: './prompt.component.css'
})

export class PromptComponent {
  @Input() chat!: Chat;
}
