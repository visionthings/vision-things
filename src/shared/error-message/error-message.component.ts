import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-error-message',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './error-message.component.html',
  styleUrl: './error-message.component.scss',
})
export class ErrorMessageComponent implements OnInit {
  @Input() message: string | null = null;

  closeErrorMessage(): void {
    this.message = null;
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.message = null;
    }, 7000);
  }
}
