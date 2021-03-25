
import { formConfig } from 'ng-json-powered-form'

export const UserTemplate: formConfig[] = [
  {
    controlName: 'first_name',
    controlType: 'text',
    valueType: 'text',
    placeholder: 'Enter First Name',
    hidden: false,
    validators: {
      required: true,
      minlength: 3
    },
    listeners: {},
    order: 1
  },
  {
    controlName: 'last_name',
    controlType: 'text',
    valueType: 'text',
    placeholder: 'Enter Last Name',
    hidden: false,
    validators: {
      required: true,
      minlength: 3
    },
    listeners: {},
    order: 2
  },
  {
    controlName: 'username',
    controlType: 'text',
    valueType: 'text',
    placeholder: 'Enter username',
    hidden: false,
    validators: {
      required: true
    },
    listeners: {},
    order: 3
  },
  {
    controlName: 'email',
    valueType: 'email',
    placeholder: 'Enter email',
    controlType: 'text',
    validators: {
      required: true,
      email: true
    },
    listeners: {},
    order: 4
  },
  {
    controlName: 'password',
    controlType: 'text',
    valueType: 'password',
    placeholder: 'Enter Password',
    validators: {
      required: false,
      minlength: 5
    },
    listeners: {},
    order: 5
  },
  {
    controlName: 'confirm_password',
    controlType: 'text',
    valueType: 'password',
    placeholder: 'Enter confirm Password',
    validators: {
      required: false
    },
    listeners: {},
    order: 6
  },
  {
    controlName: 'phone',
    controlType: 'text',
    valueType: 'text',
    placeholder: 'Enter phone number',
    hidden: false,
    validators: {
      required: true
    },
    listeners: {},
    order: 7
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
