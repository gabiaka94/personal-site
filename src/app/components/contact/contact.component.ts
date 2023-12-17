import {Component, inject, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {ContactService} from './contact.service';
import {IconsContactComponent} from '../icons-contact/icons-contact.component';
import {GoogleAnalyticsService} from 'ngx-google-analytics';
import {debounceTime} from 'rxjs';

type ContactFormControl = {
  name: FormControl<string>,
  email: FormControl<string>,
  message: FormControl<string>
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, IconsContactComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent implements OnInit {

  private readonly contactService = inject(ContactService);
  private readonly gaService = inject(GoogleAnalyticsService)

  emailForm = new FormGroup<ContactFormControl>(
    {
      name: new FormControl('', {nonNullable: true, validators: Validators.required}),
      email: new FormControl('', {nonNullable: true, validators: [Validators.required, Validators.email]}),
      message: new FormControl('', {nonNullable: true, validators: Validators.required}),
    }
  );

  ngOnInit() {
    this.emailForm.valueChanges
      .pipe(
        debounceTime(500)
      )
      .subscribe(value => {
        this.gaService.event('fill_form', 'Contact form', JSON.stringify(value))
      })
  }

  onSubmit() {
    if (this.emailForm.valid) {
      const formData = this.emailForm.value as {
        name:string;
        email: string;
        message: string;
      };

      this.contactService.sendEmail(formData).subscribe({
        complete: () => alert('The email has been sended.'),
        error: () => alert('The email has NOT been sended.'),
      });
    }
  }
}
