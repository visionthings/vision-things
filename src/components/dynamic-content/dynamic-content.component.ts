import { Component, Input, OnInit } from '@angular/core';
import { DynamicContentService } from '../../services/dynamic-content.service';
import { NgOptimizedImage } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { SuccessMessageComponent } from '../../shared/success-message/success-message.component';
import { ErrorMessageComponent } from '../../shared/error-message/error-message.component';

@Component({
  selector: 'app-dynamic-content',
  standalone: true,
  imports: [
    NgOptimizedImage,
    ReactiveFormsModule,
    SuccessMessageComponent,
    ErrorMessageComponent,
  ],
  templateUrl: './dynamic-content.component.html',
  styleUrl: './dynamic-content.component.scss',
})
export class DynamicContentComponent implements OnInit {
  @Input() id: string | null = null;
  constructor(
    private contentService: DynamicContentService,
    private fb: FormBuilder
  ) {}

  contents: any = [];

  form = this.fb.group({
    name: ['', Validators.required],
    phone: ['', Validators.required],
    email: ['', Validators.required],
    interested: [this.id],
    message: ['', Validators.required],
  });

  successMessage: string | null = null;
  errorMessage: string | null = null;

  submit() {
    this.form.markAllAsTouched();
    this.form.get('interested')?.patchValue(this.id);
    this.contentService.sendInterestedMessage(this.form.value).subscribe({
      next: (res) => {
        this.successMessage =
          'تم الإرسال بنجاح، وسيتم التواصل معك في أقرب وقت.';
        setTimeout(() => {
          this.successMessage = null;
        }, 5000);
      },
      error: () => {
        this.errorMessage =
          'تعذر الإرسال في الوقت الحالي، يرجى المحاولة مرة أخرى لاحقاً.';
        setTimeout(() => {
          this.errorMessage = null;
        }, 5000);
      },
    });
  }

  ngOnInit(): void {
    this.contentService.getPage(this.id).subscribe({
      next: (res: any) => {
        this.contents = res.contents;
      },
    });
  }
}
