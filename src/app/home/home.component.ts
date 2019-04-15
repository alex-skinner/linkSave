import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  newLinkForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.newLinkForm = new FormGroup({});
  }

  onSubmit() {

  }

}
