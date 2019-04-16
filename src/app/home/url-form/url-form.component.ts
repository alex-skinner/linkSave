import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-url-form',
  templateUrl: './url-form.component.html',
  styleUrls: ['./url-form.component.less']
})
export class UrlFormComponent implements OnInit {
  newLinkForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.newLinkForm = new FormGroup({
      url: new FormControl(null)
    });
  }

  onSubmit() {

  }

}
