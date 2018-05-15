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

}
