export const schema = {
  title: 'PRE-ADMISSION SERVICE USE',
  type: 'object',
  required: [],
  properties: {
    preHospitalLivingSetting: {
      title: 'Pre-Hospital Living Setting',
      type: 'string',
      enum: ['bypass', 'yes', 'no', 'unspecified'],
      enumNames: ['Bypass this question', 'Yes', 'No', 'Unspecified']
    },
    preHospitalLivingWith: {
      title: 'Pre-Hospital Living With',
      type: 'string',
      enum: ['bypass', 'yes', 'no', 'unspecified'],
      enumNames: ['Bypass this question', 'Yes', 'No', 'Unspecified']
    },
    admittedForm: {
      title: 'A1802. Admitted Form',
      type: 'string',
      enum: ['bypass', 'yes', 'no', 'unspecified'],
      enumNames: ['Bypass this question', 'Yes', 'No', 'Unspecified']
    },
    referringFacility: {
      title: 'Referring Facility',
      type: 'string',
      default: 'Not configured'
    },
    referringFacilityAdmissionDate: {
      title: 'Referring Facility Admission Date',
      type: 'string',
      format: 'date'
    },
    referringFacilityLOS: {
      title: 'Referring Facility LOS',
      type: 'string',
      placeholder: 'days'
    },
    referringFacilityStay: {
      title: 'Referring Facility ICU/CCU stay.',
      type: 'object',
      properties: {
        facilityStay: {
          title: 'Was the patient admited to the ICU/CCU during their stay in the referring facility?',
          type: 'string',
          enum: ['bypass', 'yes', 'no', 'unspecified'],
          enumNames: ['Bypass this question', 'Yes', 'No', 'Unspecified'],
          default: 'unspecified'
        },
        stayDates: {
          title: 'Referring Facility ICU / CCU Stay Dates',
          type: 'object',
          properties: {
            stayDates: {
              title: ' ',
              type: 'array',
              items: {
                min: 1,
                title: ' ',
                type: 'object',
                properties: {
                  admitDate: { title: 'Admit Date', type: 'string', format: 'date' },
                  transferDate: { title: 'Transfer Date', type: 'string', format: 'date' }
                }
              }
            },
            totalDays: {
              title: 'Total Days:',
              type: 'string'
            }
          }
        }
      }
    },
    referringFacilityPrimaryDiagnostics: {
      title: 'Referring Facility Primary Diagnostics:',
      type: 'string'
    },
    problemList: {
      title: 'Referring Facility Problem List:',
      type: 'string'
    }
  }
};