import { observable } from 'mobx';
import { persist } from 'mobx-persist';

import { PreAdmitService, PreAdmitForm } from '../services/PreAdmitService';
export class PreAdmitStore {
  @persist('object') @observable preAdmit: object = {};

  constructor(
    private preAdmitService: PreAdmitService
  ) { }

  addPreAdmit(id: string): void {
    this.preAdmit = {
      ...this.preAdmit,
      [id]: {}
    };
  }

  initHomePage(): void {
    this.preAdmitService.fetchPreAdmits(
      (data: any, context: any) => {
        console.info('data', data);

        data.map((element: any) => {
          context.addPreAdmit(element.preAdmitId);
          context.preAdmit[element.preAdmitId] = element;
        });

        console.info('context', context);
         
      },
      this
    );
  }
}
