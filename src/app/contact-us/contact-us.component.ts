import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { group } from '@angular/animations';


@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  reactiveForm: FormGroup;
  submitted: boolean = false;
  
  constructor(private formBuilder: FormBuilder) { }
  

  ngOnInit() {
    this.reactiveForm = this.formBuilder.group({
      title: ['', Validators.required],
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message:['', Validators.required],
      
    });
  }

  get f(){return this.reactiveForm.controls; }

  onSubmit(){
    console.log('reactiveForm' ,this.reactiveForm.value)
    this.submitted = true;
      if(this.reactiveForm.valid){
        return this.reactiveForm.reset(),alert('Message sent!');
      }else(this.submitted=false,alert("Please fill in form properly"));
    
    
  }
  onReset(){
    this.submitted=false;
    this.reactiveForm.reset();
  }
}
