import { observable } from 'mobx';
import { persist } from 'mobx-persist';

import { FormsService, FormModel } from '../services/FormsService';

export class FormsStore {
  @persist('list') @observable forms: Array<FormModel> = [];

  constructor(
    private formsService: FormsService
  ) { }

  addForm(form: FormModel) {
    this.forms.push(form);
  }

}
