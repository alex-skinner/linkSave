import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UrlFormComponent } from './url-form.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('UrlFormComponent', () => {
  let component: UrlFormComponent;
  let fixture: ComponentFixture<UrlFormComponent>;
  let compiled: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UrlFormComponent],
      imports: [ReactiveFormsModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UrlFormComponent);
    component = fixture.componentInstance;
    compiled = fixture.debugElement.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain a div with the ID "urlForm"', () => {
    expect(compiled.querySelector('div#urlForm')).toBeTruthy();
  });

  it('should contain a form element with ID "newLinkForm"', () => {
    expect(compiled.querySelector('form#newLinkForm')).toBeTruthy();
  });

  it('should contain a text input with ID "URL"', () => {
    expect(compiled.querySelector('input[type=text]#url')).toBeTruthy();
  });
});
