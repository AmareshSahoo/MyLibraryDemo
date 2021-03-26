import { Component, OnInit } from "@angular/core";
import { RegisterFormData } from "../shared/registerData";
import { FormGroup } from "@angular/forms";
import { Ipost, IUser } from '../shared/Ipost';
import { Observable } from 'rxjs';
import { formConfig, TemplateService } from 'ng-json-powered-form';
import { HttpClient } from "@angular/common/http";
import { UserTemplate } from "../shared/userTemplate";
import { map } from 'rxjs/operators';
import { CryptoService } from "../services/crypto.service";

@Component({
  selector: "app-register-dynamic-form",
  templateUrl: "./register-dynamic-form.component.html",
  styleUrls: ["./register-dynamic-form.component.sass"],
})

export class RegisterDynamicFormComponent implements OnInit {
  regdFormData: formConfig[] = [];
  form: any;
  constructor(
    private tempservice: TemplateService,
    private http: HttpClient,
    private crypto: CryptoService
  ) { }


  ngOnInit() {
    const params = {
      collection: "Template",
      params: {
        query: { id: 12001 }
      }
    }
    this.http.post('https://amarcreation.xyz/api/fetch', params).pipe(
      map((res: any) => res['data'][0]['fields'])
    ).subscribe((fields: formConfig[]) => {
      console.log("fields---------.....", fields);
      this.regdFormData = fields;
      this.tempservice.generateMethods(this.regdFormData, this);
    })


    const data = {
      collection: "Employee",
      params: {
        query: { position: "Developer" }
      }
    }

    this.http.post("https://amarcreation.xyz/api/fetch", { payload: this.crypto.encrypt(JSON.stringify(data)) }).subscribe(data => {
      console.log("TETS", data)
    })

    this.testCrypto();
  }

  OnformChange(event: any) {
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
      ["female"]
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

  onFormSubmit(event: any) {
    console.log("onFormSubmit.....", event);
    const params = {
      collection: "User",
      data: event.value
    }
    if (event.valid) {
      this.http.post("https://amarcreation.xyz/api/insert", params).subscribe(res => {
        console.log("res====", res)
      })
    }
  }


  insert() {
    const params2 = {
      "collection": "Template",
      data: {
        "id": 12001,
        "fields": [{
          "controlName": "Username",
          "controlType": "text",
          "valueType": "text",
          "placeholder": "Enter username",
          "hidden": false,
          "validators": {
            "required": true,
            "minlength": 5
          },
          "defaultValue": "amarr@gmail.com",
          "listeners": {
            "click": {
              "methodName": "onClickUserName",
              "param": "Data"
            },
            "change": {
              "methodName": "onChangeUserName",
              "param": "Data"
            }
          },
          "order": 2
        },
        {
          "controlName": "Password",
          "controlType": "text",
          "valueType": "password",
          "placeholder": "Enter Password",
          "validators": {
            "required": false,
            "minlength": 5
          },
          "listeners": {
            "click": {
              "methodName": "onClickPass",
              "param": "Data"
            }
          },
          "order": 3
        },
        {
          "controlName": "Email",
          "valueType": "email",
          "placeholder": "Enter email",
          "controlType": "text",
          "validators": {
            "required": true,
            "minlength": 6,
            "maxlength": 50,
            "email": true
          },
          "listeners": {
            "click": {
              "methodName": "onChangeEmail",
              "param": "Data"
            }
          },
          "order": 1
        },
        {
          "controlName": "Address",
          "controlType": "textarea",
          "valueType": "text",
          "placeholder": "Enter Your Address",
          "hidden": false,
          "validators": {
            "required": true,
            "minlength": 5
          },
          "defaultValue": "",
          "listeners": {
            "change": {
              "methodName": "onChangeAddress",
              "param": "Data"
            }
          },
          "order": 6
        },
        {
          "controlName": "Gender",
          "placeholder": "Select gender",
          "controlType": "select",
          "options": [{
            "optionName": "Male",
            "value": "male"
          },
          {
            "optionName": "Female",
            "value": "female"
          }
          ],
          "validators": {
            "required": true
          },
          "listeners": {
            "click": {
              "methodName": "onClickGender",
              "param": "Data"
            }
          },
          "order": 4
        },
        {
          "controlName": "Vehicle you own",
          "placeholder": "Select vehicle",
          "controlType": "radio",
          "options": [{
            "optionName": "Yes",
            "value": "Yes"
          },
          {
            "optionName": "No",
            "value": "No"
          },
          {
            "optionName": "Both",
            "value": "Both"
          }
          ],
          "defaultValue": "Yes",
          "validators": {
            "required": true
          },
          "order": 5
        },
        {
          "controlName": "Are You Aggree ?",
          "placeholder": "",
          "controlType": "checkbox",
          "options": [{
            "optionName": "Yes",
            "value": "Yes"
          },
          {
            "optionName": "No",
            "value": "No"
          },
          {
            "optionName": "Both",
            "value": "Both"
          }
          ],
          "defaultValue": "",
          "validators": {
            "required": true
          },
          "order": 5
        },
        {
          "controlName": "SubmitButton",
          "placeholder": "Submit",
          "controlType": "button",
          "buttonType": "button",
          "addClass": "btn btn-primary",
          "listeners": {
            "click": {
              "methodName": "OnSubmitButton",
              "param": "Data"
            }
          }
        }
        ]
      }
    }
    this.http.post("https://amarcreation.xyz/api/insert", params2).subscribe(res => {
      console.log("res====", res)
    })
  }

  testCrypto() {
    const data = {
      "type": "encrypt",
      "value": JSON.stringify({
        "collection": "Employee",
        "params": {
          "query": { "position": "Developer" }
        }
      })
    }
    this.http.post("https://amarcreation.xyz/api/crypto", data).subscribe(res => {
      console.log("Encrypt===", res)
    })
  }
}
