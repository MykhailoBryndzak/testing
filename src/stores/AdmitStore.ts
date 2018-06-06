import { observable } from 'mobx';
import { persist } from 'mobx-persist';

import { AdmitService, AdmitForm } from '../services/AdmitService';
export class AdmitStore {
    @persist('object') @observable admit: object = {};

    constructor(
        private admitService: AdmitService
    ) { }

    addAdmit(id: string) {
        this.admit = {
            ...this.admit,
            [id]: {}
        };
    }

    initHomePage() {
        this.admitService.fetchAdmits(
            (data: any, context: any) => {
                console.info('data', data);

                data.map((element: any) => {
                    context.addAdmit(element.preAdmitId); // temporary id
                    context.admit[element.preAdmitId] = element;
                });

                console.info('context', context);

            },
            this
        );
    }
}
