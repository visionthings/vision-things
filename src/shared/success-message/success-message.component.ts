import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-success-message',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './success-message.component.html',
  styleUrl: './success-message.component.css',
})
export class SuccessMessageComponent implements OnInit {
  @Input() message: string | null = null;

  closeMessage(): void {
    this.message = null;
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.message = null;
    }, 7000);
  }
}
