import { ApiService } from './ApiService';

export interface FormModel {
  formId: string;
  model: any;
}

export interface PreAdmitForm {
  DEMOGRAPHICS: any;
  REFERRAL: any;
  STATUS: any;
}

export class FormsService {
  constructor(
    private api: ApiService
  ) { }

  postForm(form: PreAdmitForm) {
    console.info('postForm', form);
  }

}
