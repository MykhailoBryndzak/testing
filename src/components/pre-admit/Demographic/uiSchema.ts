export const uiSchema = {
  patientInfo: {
    firstName: { classNames: 'col-sm-6 d-inline-block' },
    lastName: { classNames: 'col-sm-6 d-inline-block' },
    middleInitial: { classNames: 'col-sm-6 d-inline-block' },
    suffix: { classNames: 'col-sm-6 d-inline-block' },
    birthdate: { classNames: 'col-sm-6', 'ui:widget': 'date' },
    gender: {
      'ui:widget': 'radio',
      'ui:options': { inline: true, },
      classNames: 'col-sm-6 d-inline-block',
    },
    socialSecurityNumber: { classNames: 'col-sm-12 d-inline-block', },
    medicareNumber: { classNames: 'col-sm-12 d-inline-block', },
    medicaidNumber: { classNames: 'col-sm-12 d-inline-block', },
    address: { classNames: 'col-sm-12 d-inline-block', },
    city: { classNames: 'col-sm-4 d-inline-block', },
    state: { classNames: 'col-sm-4 d-inline-block', },
    zipCode: { classNames: 'col-sm-4 d-inline-block', },
  },
  maritalStatus: { classNames: 'col-sm-12', },
  race_ethnicity: {
    'ui:widget': 'checkboxes',
    classNames: 'col-sm-12',
  },
  education: { classNames: 'col-sm-12', },
  codeStatus: {
    'ui:widget': 'textarea',
    classNames: 'col-sm-12',
  },
  advancedDirectives: {
    'ui:widget': 'radio',
    'ui:options': {
      inline: true
    },
    classNames: 'col-sm-12',
  },
  advancedDirectivesDescription: {
    'ui:widget': 'textarea',
    'ui:label': false,
    classNames: 'col-sm-12',
  },
  preHospitalLivingSetting: { classNames: 'col-sm-12', },
  preHospitalLivingWith: { classNames: 'col-sm-12', },
  lifetimeOcuppations: { classNames: 'col-sm-12', },
  powerOfAttorney: {
    add: {
      'ui:widget': 'radio',
      'ui:options': {
        inline: true,
        label: false
      },
      classNames: 'col-sm-12',
    },
    name: { classNames: 'col-sm-12', },
    relationship: { classNames: 'col-sm-12', },
    telephone: { classNames: 'col-sm-12', },
    notes: {
      'ui:widget': 'textarea',
      classNames: 'col-sm-12',
    }
  },
  language: {
    englishSpeaking: {
      'ui:widget': 'radio',
      'ui:options': { inline: true },
      classNames: 'col-sm-12',
    },
    interpreter: { classNames: 'col-sm-6 d-inline-block', },
    preferedLanguage: { classNames: 'col-sm-6 d-inline-block', },
    preferedWrittenLanguage: { classNames: 'col-sm-12', },
    otherNeeds: {
      'ui:widget': 'textarea',
      classNames: 'col-sm-12',
    }
  },
  religion: {
    religion: { classNames: 'col-sm-12', },
    notes: {
      'ui:widget': 'textarea',
      'ui:options': { label: false },
      classNames: 'col-sm-12',
    }
  }
};
