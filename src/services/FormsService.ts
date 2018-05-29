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

  fetchPreAdmits(getResult: Function, contex: object) {
    this.api.get('http://172.25.3.73:8080/ltrax/v2.0.0/preadmits', {})
      .then((data: any) => {
        getResult(data, contex);
      })
      .catch((err: any) => {
        console.info('error', err);
      });
  }

}
