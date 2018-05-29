import { observable } from 'mobx';
import { persist } from 'mobx-persist';

import { FormsService, PreAdmitForm } from '../services/FormsService';
export class FormsStore {
  @persist('object') @observable forms: object = {};

  constructor(
    private formsService: FormsService
  ) { }

  addForm(id: string) {
    this.forms = {
      ...this.forms,
      [id]: {}
    };
  }
  upsertSection(id: string, form: any) {
    this.forms[id] = form;
  }

  initHomePage() {
    let self1 = this;
    this.formsService.fetchPreAdmits(
      (data: any, context: any) => {
        console.info('data', data);

        data.map((element: any) => {
          context.forms[element.preAdmitId] = element;
        });

        console.info('context', context);
         
      },
      this
    );
  }
}
