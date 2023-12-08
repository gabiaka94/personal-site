import {Component, inject, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {ContactService} from './contact.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {

  private readonly contactService = inject(ContactService);

  emailForm: FormGroup = new FormGroup<any>(
    {
      name: new FormControl('', Validators.required),
      email:new FormControl('', [Validators.required, Validators.email]),
      message: new FormControl('', Validators.required),
    }
  );

  onSubmit() {
    if (this.emailForm.valid) {
      const formData = this.emailForm.value;

      this.contactService.sendEmail(formData).subscribe({
        complete: () => console.log('success'),
        error: () => console.log('error'),
      });
    }
  }
}
