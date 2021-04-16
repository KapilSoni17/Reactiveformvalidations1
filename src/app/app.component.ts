import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, MinLengthValidator } from '@angular/forms';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  form!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      name: [null,Validators.required],
      fname:[null,Validators.required],
      email: [null, [Validators.required, Validators.email]],
      password: [null, Validators.required],


    });
  }

  get name() {
    return this.form && this.form.get('name');
  }

  get fname() {
    return this.form && this.form.get('fname');
  }

  get email() {
    return this.form && this.form.get('email');
  }

  onsubmit(){
    console.table(this.form.value)
  }

}
