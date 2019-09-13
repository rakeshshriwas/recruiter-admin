import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'kt-postjob',
  templateUrl: './postjob.component.html',
  styleUrls: ['./postjob.component.scss']
})
export class PostjobComponent implements OnInit {
  // loginForm: FormGroup;
  constructor() { }

  // email = new FormControl('', [Validators.required, Validators.email]);

  ngOnInit() {
  }

  // getErrorMessage() {
  //   return this.email.hasError('required') ? 'You must enter a value' : this.email.hasError('email') ? 'Not a valid email' : '';
  // }

}
