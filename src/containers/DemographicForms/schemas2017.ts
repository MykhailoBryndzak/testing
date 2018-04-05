export const schema = {
  title: 'Demographics',
  type: 'object',
  required: ['patientInfo'],
  properties: {
    patientInfo: {
      type: 'object',
      required: ['firstName', 'middleInitial', 'lastName', 'gender'],
      title: 'Patient Identification',
      properties: {
        firstName: { type: 'string', title: 'A0500A. First Name', errorMessage: 'First Name is required field' },
        middleInitial: { type: 'string', title: 'A0500B. Middle Initial', },
        lastName: { type: 'string', title: 'A0500C. Last Name', },
        suffix: { type: 'string', title: 'A0500D. Suffix', default: '' },
        birthdate: { type: 'string', format: 'date', title: 'A0900. Birth Date' },
        gender: {
          type: 'string',
          enum: ['male', 'female', 'none'],
          enumNames: ['Male', 'Female', 'unspesified'],
          title: 'A0800. Gender',
          default: 'none'
        },
        socialSecurityNumber: {
          type: 'string',
          pattern: '^\\d{3}-\\d{2}-\\d{4}$',
          title: 'A0600A. Social Security Number',
          errorMessage: 'Should match such number ***-**-****',
        },
        medicareNumber: {
          type: 'string',
          pattern: '^\\d{9}\\w$',
          errorMessage: 'Should match such number 123456789W',
          title: 'A0600B. Medicare Number',
        },
        medicaidNumber: {
          type: 'string',
          pattern: '^\\d{6}$',
          errorMessage: 'Should match such number ******',
          title: 'A0700. Medicaide Number',
        },
        address: { type: 'string', title: 'Address', default: '' },
        city: { type: 'string', title: 'City', default: '' },
        state: { type: 'string', title: 'State', default: '' },
        zipCode: { type: 'string', pattern: '^\\d{5,}', errorMessage: 'Should be five numbers', title: 'ZIP' },
      }
    },
    maritalStatus: {
      type: 'string',
      enum: ['married', 'unmarried', 'abandoned'],
      enumNames: ['Married', 'Unmarried', 'Abandoned'],
      title: 'A1200. Marital Status',
      default: 'unmarried'
    },
    race_ethnicity: {
      type: 'array',
      title: 'A1000. Race / Ethnicity',
      items: {
        type: 'string',
        enum: ['american', 'asian', 'african', 'latino', 'islander', 'white'],
        enumNames: [
          'American Indian or Alaska Native',
          'Asian',
          'Black or African American',
          'Hispanic or Latino',
          'Native Havaiian or Other Pacific Islander',
          'White'
        ],
      },
      uniqueItems: true
    },
    education: {
      type: 'string',
      title: 'A1050. Education',
      enum: ['low-high', 'high', 'magister'],
      enumNames: ['Low Education', 'High Education', 'Magister Education'],
      default: 'low-high'
    },
    codeStatus: {
      type: 'string',
      title: 'Code Status',
      default: ''
    },
    advancedDirectives: {
      type: 'string',
      enum: ['yes', 'no', 'none'],
      enumNames: ['Yes', 'No', 'unspecified'],
      title: 'Advanced Directives',
      default: 'none'
    },
    advancedDirectivesDescription: {
      type: 'string',
      title: 'Advanced Directives Description',
      default: ''
    },
    powerOfAttorney: {
      type: 'object',
      title: 'Power Of Attorney',
      properties: {
        add: {
          type: 'string',
          title: 'Add',
          enum: ['yes', 'no', 'none'],
          enumNames: ['Yes', 'No', 'unspecified'],
          default: 'none'
        },
        name: {
          type: 'string',
          title: 'Name',
          default: ''
        },
        relationship: {
          type: 'string',
          title: 'Relationship',
          default: ''
        },
        telephone: {
          type: 'string',
          title: 'Telephone #',
          pattertn: '\\d{6}',
          errorMessage: 'Should be such format ******',
        },
        notes: {
          type: 'string',
          title: 'Notes',
          default: ''
        }
      },
    },
    preHospitalLivingSetting: {
      type: 'string',
      title: 'Pre-Hospital Living Setting',
      enum: ['home', 'hospital'],
      enumNames: ['Home', 'Hospital'],
      default: 'home'
    },
    preHospitalLivingWith: {
      type: 'string',
      title: 'Pre-Hospital Living With',
      enum: ['relative', 'nurse', 'doctor'],
      enumNames: ['Relative', 'Nurse', 'Doctor'],
      default: 'relative'
    },
    lifetimeOcuppations: {
      type: 'string',
      title: 'A1300D. Lifetime Occupation(s)',
      description: 'Put " / " between two occupations',
      default: ''
    },
    language: {
      type: 'object',
      title: 'Language / Communication Needs',
      properties: {
        englishSpeaking: {
          type: 'string',
          title: 'English Speaking',
          enum: ['yes', 'no', 'none'],
          enumNames: ['Yes', 'No', 'unspecified'],
          default: 'none'
        },
        interpreter: {
          type: 'string',
          title: 'A1100A. Need or want an interpreter',
          enum: ['yes', 'no'],
          enumNames: ['Yes', 'No'],
          default: 'no'
        },
        preferedLanguage: {
          type: 'string',
          title: 'A1100B. Preferred Language',
          default: ''
        },
        preferedWrittenLanguage: {
          type: 'string',
          title: 'Preferred Written Language',
          default: ''
        },
        otherNeeds: {
          type: 'string',
          title: 'Other Communication Needs',
          default: ''
        }
      }
    },
    religion: {
      type: 'object',
      title: 'Religious / Cultural Considerations',
      properties: {
        religion: {
          type: 'string',
          title: 'Religion',
          enum: ['methodist', 'christian', 'none'],
          enumNames: ['Methodist', 'Christian', 'None'],
          default: 'none'
        },
        notes: {
          type: 'string',
          title: 'Notes',
          default: ''
        }
      }
    }
  }
};

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
