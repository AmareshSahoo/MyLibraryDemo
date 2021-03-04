// Create this file under app/shared/mock/mock-data.ts



export const MockForm = [
  {
    controlName: 'Username',
    controlType: 'text',
    valueType: 'text',
    placeholder: 'Enter username',
    validators: {
      required: true,
      minlength: 5
    }
  },
  {
    controlName: 'Telephone',
    placeholder: 'Enter Phone',
    valueType: 'tel',
    controlType: 'text',
    validators: {
      required: true,
      minlength: 7,
      maxlength: 10
    }
  },
  {
    controlName: 'Email',
    valueType: 'email',
    placeholder: 'Enter email',
    controlType: 'text',
    validators: {
      required: true
    }
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
    }
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
    controlName: 'SubmitButton',
    placeholder: 'Submit',
    controlType: 'button',
    addClass: 'btn btn-primary',
    click: {
      methodName: "OnSubmitButton",
      param: 'Amaresh'
    }
  }
];
