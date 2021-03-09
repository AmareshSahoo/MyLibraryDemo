
import { formConfig } from 'ng-json-powered-form'

export const RegisterFormData: formConfig[] = [
  {
    controlName: 'Username',
    controlType: 'text',
    valueType: 'text',
    placeholder: 'Enter username',
    hidden: false,
    validators: {
      required: true,
      minlength: 5
    },
    defaultValue: "amarr@gmail.com",
    listeners: {
      click: {
        methodName: "onClickUserName",
        param: 'Data'
      },
      change: {
        methodName: "onChangeUserName",
        param: 'Data'
      },
    },
    order: 2
  },
  {
    controlName: 'Password',
    controlType: 'text',
    valueType: 'password',
    placeholder: 'Enter Password',
    validators: {
      required: false,
      minlength: 5
    },
    listeners: {
      click: {
        methodName: "onClickPass",
        param: 'Data'
      },
    },
    order: 3
  },
  {
    controlName: 'Email',
    valueType: 'email',
    placeholder: 'Enter email',
    controlType: 'text',
    validators: {
      required: true,
      minlength: 6,
      maxlength: 50,
      email: true
    },
    listeners: {
      click: {
        methodName: "onChangeEmail",
        param: 'Data'
      }
    },
    order: 1
  },
  {
    controlName: 'Address',
    controlType: 'textarea',
    valueType: 'text',
    placeholder: 'Enter Your Address',
    hidden: false,
    validators: {
      required: true,
      minlength: 5
    },
    defaultValue: "",
    listeners: {
      change: {
        methodName: "onChangeAddress",
        param: 'Data'
      },
    },
    order: 6
  },
  {
    controlName: 'Gender',
    placeholder: 'Select gender',
    controlType: 'select',
    options: [{
      optionName: 'Male',
      value: 'male'
    }, {
      optionName: 'Female',
      value: 'female'
    }],
    validators: {
      required: true
    },
    listeners: {
      click: {
        methodName: "onClickGender",
        param: 'Data'
      },
    },
    order: 4
  },
  {
    controlName: 'Vehicle you own',
    placeholder: 'Select vehicle',
    controlType: 'radio',
    options: [
      {
        optionName: 'Yes',
        value: 'Yes'
      },
      {
        optionName: 'No',
        value: 'No'
      },
      {
        optionName: 'Both',
        value: 'Both'
      }
    ],
    defaultValue: "Yes",
    validators: {
      required: true
    },
    order: 5
  },
  {
    controlName: 'Are You Aggree ?',
    placeholder: '',
    controlType: 'checkbox',
    options: [
      {
        optionName: 'Yes',
        value: 'Yes'
      },
      {
        optionName: 'No',
        value: 'No'
      },
      {
        optionName: 'Both',
        value: 'Both'
      }
    ],
    defaultValue: "",
    validators: {
      required: true
    },
    order: 5
  },
  {
    controlName: 'SubmitButton',
    placeholder: 'Submit',
    controlType: 'button',
    buttonType: 'button',
    addClass: 'btn btn-primary',
    listeners: {
      click: {
        methodName: "OnSubmitButton",
        param: 'Data'
      },
    }
  }
];
