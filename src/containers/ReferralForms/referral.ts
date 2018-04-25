export const schema = {
  title: 'Referral / Payer',
  type: 'object',
  required: [],
  properties: {
    dateOfReferral: { type: 'string', format: 'date', title: 'Date of Referral: ' },
    admissionType: {
      title: 'Admission Type: ',
      type: 'object',
      properties: {
        primaryAdmissionType: {
          type: 'object',
          title: 'Primary Admission Type: ',
          properties: {
            first: {
              title: ' ',
              enum: [
                'Canser',
                'Cardiovascular',
                'CVA',
                'Infectious Disease', 
                'IV Therapy', 
                'Pain Management', 
                'Rehabilitation', 
                'Respiratory Management', 
                'Transplant', 
                'Trauma',
                'Ventilator Weaning',
                'Wound Case',
                'Other Complex Medical'
              ],
              enumNames: [
                'Canser',
                'Cardiovascular',
                'CVA',
                'Infectious Disease',
                'IV Therapy',
                'Pain Management',
                'Rehabilitation',
                'Respiratory Management',
                'Transplant',
                'Trauma',
                'Ventilator Weaning',
                'Wound Case',
                'Other Complex Medical'
              ],
            },
            second: {
              title: ' ',
              type: 'string'
            }
          }
        },
        additionalAdmissionTypes: {
          title: 'Additional Admission Types: ',
          type: 'object',
          properties: {
            canser: { type: 'boolean', title: 'Canser' },
            cardiovascular: { type: 'boolean', title: 'Cardiovascular' },
            cva: { type: 'boolean', title: 'CVA' },
            infectiousDisease: { type: 'boolean', title: 'Infectious Disease' },
            ivTherapy: { type: 'boolean', title: 'IV Therapy' },
            painManagement: { type: 'boolean', title: 'Pain Management' },
            rehabilitation: { type: 'boolean', title: 'Rehabilitation' },
            respiratoryManagement: { type: 'boolean', title: 'Respiratory Management' },
            transplant: { type: 'boolean', title: 'Transplant' },
            trauma: { type: 'boolean', title: 'Trauma' },
            ventilatorWeaning: { type: 'boolean', title: 'Ventilator Weaning' },
            woundCare: { type: 'boolean', title: 'Wound Care' },
            otherComplexMedical: { type: 'boolean', title: 'Other Complex Medical' }
          }
        }
      }
    },
    referringSourceInformation: {
      title: 'Referring Source Information: ',
      type: 'object',
      properties: {
        referringFacility: { 
          title: 'Referring Facility:',
          type: 'string',
          disabled: true,
          default: 'Not configured' 
        },
        referringFacilityType: {
          title: '(A1802. Admitted Form) Referring Facility Type: ',
          type: 'string',
          enum: [ 0, 1, 2, 3, 4, 5 ],
          enumNames: [ 'select one', 1, 2, 3, 4, 5 ],
          default: '0'
        },
        refferingFacilityAdmissionDate: { 
          title: 'Reffering Facility Admission Date: ',
          type: 'string',
          format: 'date'
        },
        contactName: { title: 'Contact Name', type: 'string' },
        telephoneNumber: { title: 'Telephone #:', type: 'string' },
        referringPhisician: { title: 'Referring Phisician:', type: 'string', default: 'Not configured' },
        telephoneOrPagerNumber: { title: 'Telephone / Pager #:', type: 'string' }
      }
    },
    patientMedicareMedicaidNumber: {
      title: 'Patient Medicare / Medicaid Number:',
      type: 'object',
      properties: {
        medicareNumber: { title: 'A0600B. Medicare Number:', type: 'string' },
        medicaidNumber: { title: 'A0700. Medicaid Number:', type: 'string' }
      }
    },
    primaryIsurance: {
      title: 'Primary Insurance:',
      type: 'object',
      properties: {
        payerInformation: {
          title: 'Payer Information:',
          type: 'string',
          enum: [0, 1, 2, 3, 4, 5],
          enumNames: ['select one', 1, 2, 3, 4, 5],
          default: '0'
        },
        insurerName: { title: 'Insurer Name:', type: 'string' },
        contanctName: { title: 'Contact Name:', type: 'string' },
        telephoneNumber: { title: 'Telephone #:', type: 'string' },
        caseManagerName: { title: 'Case Manager Name:', type: 'string' },
        caseManagerTelephone: { title: 'Telephone #:', type: 'string' },
        insuredsName: { title: 'Insured\'s Name:', type: 'string' },
        insuredsEmployer: { title: 'Isured\'s Employer: ', type: 'string' },
        policyNumber: { title: 'Policy #:', type: 'string' },
        groupNumber: { title: 'Group #:', type: 'string' },
        authorizationNumber: { title: 'Authorization #:', type: 'string' }
      }
    },
    secondaryIsurance: {
      title: 'Secondary Insurance:',
      type: 'object',
      properties: {
        payerInformation: {
          title: 'Payer Information:',
          type: 'string',
          enum: [0, 1, 2, 3, 4, 5],
          enumNames: ['select one', 1, 2, 3, 4, 5],
          default: '0'
        },
        insurerName: { title: 'Insurer Name:', type: 'string' },
        contanctName: { title: 'Contact Name:', type: 'string' },
        telephoneNumber: { title: 'Telephone #:', type: 'string' },
        caseManagerName: { title: 'Case Manager Name:', type: 'string' },
        caseManagerTelephone: { title: 'Telephone #:', type: 'string' },
        insuredsName: { title: 'Insured\'s Name:', type: 'string' },
        insuredsEmployer: { title: 'Isured\'s Employer: ', type: 'string' },
        policyNumber: { title: 'Policy #:', type: 'string' },
        groupNumber: { title: 'Group #:', type: 'string' },
        authorizationNumber: { title: 'Authorization #:', type: 'string' }
      }
    },
    tertiaryIsurance: {
      title: 'Tertiary Insurance:',
      type: 'object',
      properties: {
        payerInformation: {
          title: 'Payer Information:',
          type: 'string',
          enum: [0, 1, 2, 3, 4, 5],
          enumNames: ['select one', 1, 2, 3, 4, 5],
          default: '0'
        },
        insurerName: { title: 'Insurer Name:', type: 'string' },
        contanctName: { title: 'Contact Name:', type: 'string' },
        telephoneNumber: { title: 'Telephone #:', type: 'string' },
        caseManagerName: { title: 'Case Manager Name:', type: 'string' },
        caseManagerTelephone: { title: 'Telephone #:', type: 'string' },
        insuredsName: { title: 'Insured\'s Name:', type: 'string' },
        insuredsEmployer: { title: 'Isured\'s Employer: ', type: 'string' },
        policyNumber: { title: 'Policy #:', type: 'string' },
        groupNumber: { title: 'Group #:', type: 'string' },
        authorizationNumber: { title: 'Authorization #:', type: 'string' }
      }
    },
    insuranceNotes: {
      title: 'Insurance Notes',
      type: 'string'
    }
  }
};