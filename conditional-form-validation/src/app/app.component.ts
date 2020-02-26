import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.less'],
})
export class AppComponent {
    constructor(private formBuilder: FormBuilder) {}

    public emailForm = this.formBuilder.group(
        {
            isActive: this.formBuilder.control(false),
            recipient: this.formBuilder.control('', Validators.required),
            subject: this.formBuilder.control(''),
            message: this.formBuilder.control(''),
        },
        {
            updateOn: 'submit',
        }
    );

    public onSubmit(): void {
        // Mark complete form as touched to enforce form validation
        this.emailForm.markAsTouched();

        console.log(this.emailForm.valid);
    }
}
