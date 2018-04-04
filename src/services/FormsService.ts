import { ApiService } from './ApiService';

export interface FormModel {
  formId: string;
  model: any;
}

export class FormsService {
  constructor(
    private api: ApiService
  ) { }

  postForm({ formId, model }: FormModel) {
    console.info('postForm', { formId, model });
  }

}
