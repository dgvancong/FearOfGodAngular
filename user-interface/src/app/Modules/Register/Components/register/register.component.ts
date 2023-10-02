import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import 'boxicons';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  msg = "";
  signForm!: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.signForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      fullname: ['', Validators.required],
      email: ['', Validators.required],
      telephone: ['', Validators.required],
      location: ['', Validators.required]
    })
  }
  onSign(){
    if(this.signForm.valid){
      console.log(this.signForm.value)
    }
    else{
      this.validateAllFormFileds(this.signForm);
      this.msg = "Đăng Ký Thất Bại! Vui Lòng Thử Lại."
    }
  }
  private validateAllFormFileds(formGroup: FormGroup){
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if(control instanceof FormControl){
        control?.markAsDirty({ onlySelf: true});
      }else if(control instanceof FormGroup){
        this.validateAllFormFileds(control)
      }
    })
  }

}
