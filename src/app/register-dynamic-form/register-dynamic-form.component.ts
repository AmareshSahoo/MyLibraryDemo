import { Component, OnInit } from "@angular/core";
import { RegisterFormData } from "../shared/registerData";
import { FormGroup } from "@angular/forms";
import { Ipost, IUser } from '../shared/Ipost';
import { Observable } from 'rxjs';
import { formConfig, TemplateService } from 'ng-json-powered-form';
import { HttpClient } from "@angular/common/http";
import { map } from 'rxjs/operators';

@Component({
  selector: "app-register-dynamic-form",
  templateUrl: "./register-dynamic-form.component.html",
  styleUrls: ["./register-dynamic-form.component.sass"],
})

export class RegisterDynamicFormComponent implements OnInit {
  regdFormData: formConfig[] = [];
  form:any;
  constructor(
    private tempservice: TemplateService,
    private http: HttpClient
  ) {}


  ngOnInit() {
    // this.http.get('./assets/mockData.json').pipe(
    //   map((res:any) => res.fields)
    // ).subscribe((fields:formConfig[])=>{
    //   this.regdFormData = fields;
    //   console.log("regdFormData---------.....", this.regdFormData);
    // })

    this.regdFormData = RegisterFormData;
    this.tempservice.generateMethods(this.regdFormData, this);
  }

  OnformChange(event:any) {
    console.log("OnformChangeeeeeee.....", event);
  }

  onClickUserName() {
    console.log("onClickUsername");
  }
  onClickPass() {
    console.log("onClickPass-====");
  }
  onClickGender() {
    console.log("onClickGender-====");
  }

  onChangeUserName() {
    console.log("Good To Go ");
    // this.tempservice.changeUI(
    //   this.regdFormData,
    //   ["Username", "Password"],
    //   "disabled",
    //   true
    // );

    // this.tempservice.changeUI(this.regdFormData,["Username","Password"],"hidden",true);

    this.tempservice.changeUI(
      this.regdFormData,
      ["Username"],
      "defaultValue",
      "amar"
    );

    this.tempservice.changeUI(
      this.regdFormData,
      ["Gender"],
      "defaultValue",
      "female"
    );

    this.tempservice.changeUI(
      this.regdFormData,
      ["Password"],
      "required",
      true,
      "isValidation"
    );

    console.log(this.regdFormData);
  }

  onFormSubmit(event:any) {
    console.log("onFormSubmit.....", event.value);
  }
}
