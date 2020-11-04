import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  signupForm: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.setForm();
  }

  setForm(): void {
    this.signupForm = this.fb.group({
        name: ['', [Validators.required, Validators.minLength(3)]],
        email: ['', [Validators.email]],
        password: ['', [Validators.required, Validators.minLength(5)]],
        confirmPassword: [''],
      }, {
        validator: (form: FormGroup) => {
          return form.get('password').value !== form.get('confirmPassword').value ? {passwordMismatch: true} : null;
        }
      }
    );
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.signupForm.controls;
  }

  onSignup():void {
    console.log(this.signupForm.controls);
  }
}

