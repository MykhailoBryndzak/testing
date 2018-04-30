export const schema = {
  title: 'Status',
  type: 'object',
  required: [],
  properties: {
    currentStatus: {
      title: 'Current Status:',
      type: 'object',
      properties: {
        primaryAcuteHospitalDiagnosys: {
          title: 'Primary Acute Hospital Diagnosis',
          type: 'object',
          properties: {
            icd10cm: {
              title: 'ICD-10-CM:',
              type: 'string',
            },
            description: {
              title: 'Description:',
              type: 'string'
            },
            dateOfOnSet: {
              title: 'Date Of On Set:',
              type: 'string',
              format: 'date',
            },
            acuteHospitalAdmitDate: {
              title: 'Acute Hospital Admit Date:',
              type: 'string',
              format: 'date',
            }
          }
        },
        referringFacilityStay: {
          title: 'Referring Facility ICU / CCU Stay:',
          type: 'object',
          properties: {
            facilityStay: {
              title: 'Was the patient admited to the ICU/CCU during their stay in the referring facility?',
              type: 'string',
              enum: ['bypass', 'yes', 'no', 'unspecified'],
              enumNames: ['Bypass this question', 'Yes', 'No', 'Unspecified'],
              default: 'unspecified'
            }
          }
        },
        referringFacilityStayDates: {
          title: 'Referring Facility ICU / CCU Stay Dates',
          type: 'object',
          properties: {
            stayDates: {
              title: ' ',
              type: 'array',
              items: {
                title: ' ',
                type: 'object',
                properties: {
                  admitDate: { title: 'Admit Date', type: 'string', format: 'date' },
                  transferDate: { title: 'Transfer Date', type: 'string', format: 'date' }
                }
              }
            },
            totalDay: {
              title: 'Total Days:',
              type: 'string'
            }
          }
        }
      }
    }
  }
};

export const uiSchema = {
  currentStatus: {
    primaryAcuteHospitalDiagnosys: {
      icd10cm: {},
      description: {},
      dateOfOnSet: {},
      acuteHospitalAdmitDate: {}
    },
    referringFacilityStay: {
      facilityStay: {
        'ui:widget': 'radio'
      }
    },
    referringFacilityStayDates: {
      stayDates: {
        'ui:options': {
          inline: true
        }
      },
      totalDays: { 'ui:options': { inline: true } }
    }
  }
};