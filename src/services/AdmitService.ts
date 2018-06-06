import { ApiService } from './ApiService';

export interface AdmitModel {
    formId: string;
    model: any;
}

export interface AdmitForm {
    DEMOGRAPHICS: any;
    REFERRAL: any;
    STATUS: any;
}

export class AdmitService {
    constructor(
        private api: ApiService
    ) { }

    postForm(form: AdmitForm): void {
        console.info('postForm', form);
    }

    fetchAdmits(getResult: Function, contex: object): void {
        this.api.get('http://172.25.3.73:8080/ltrax/v2.0.0/preadmits', {})
            .then((data: any) => {
                getResult(data, contex);
            })
            .catch((err: any) => {
                console.info('error', err);
            });
    }

}
