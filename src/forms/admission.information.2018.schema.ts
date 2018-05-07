export const schema: any = {
  title: 'ADMISSION INFORMATION',
  type: 'object',
  properties: {
    referenceDate: {
      title: 'A0210. Admission Assessment Reference Date:',
      type: 'string',
      format: 'date'
    },
    admissionDate: {
      title: 'A0220. Admission Date:',
      type: 'string',
      format: 'date'
    },
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
};