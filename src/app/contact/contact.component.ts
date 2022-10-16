import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  loading: boolean = true;
  contactform!: FormGroup;
  successmsg: any;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.loading = false;
    }, 2000);
    var validator = '[a-z0-9]+@[a-z0-9]+[.]{1}[a-z0-9.]+';
    this.contactform = this.fb.group({
      name: ['', Validators.required],
      mail: ['', [Validators.required, Validators.pattern(validator)]],
      msg: ['', Validators.required]
    });
  }
  onSumbit(form: FormGroup)
  {
    console.log(form);
    this.successmsg = 'Thanks for the Message';
    setTimeout(() => {
      this.clear();
    }, 2000);
  }
  clear()
  {
    this.contactform.reset();
    this.successmsg = '';
  }
}
