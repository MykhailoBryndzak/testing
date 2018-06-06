import * as R from 'ramda';
import { create } from 'mobx-persist';
import * as localForage from 'localforage';

import { ApiService } from './services/ApiService';
import { PreAdmitService } from './services/PreAdmitService';
import { AdmitService } from './services/AdmitService';
// import {TabsSyncService} from './services/TabsSyncService';

const apiService = new ApiService(window.fetch.bind(window));
const preAdmitService = new PreAdmitService(apiService);
const admitService = new AdmitService(apiService);

import { PreAdmitStore } from './stores/PreAdmitStore';
import { AdmitStore } from './stores/AdmitStore';
import { StatusStore } from './stores/StatusStore';

const preAdmitStore = new PreAdmitStore(preAdmitService);
const admitStore = new AdmitStore(admitService);
const statusStore = new StatusStore();

localForage.config({
    driver: localForage.LOCALSTORAGE, // Force WebSQL; same as using setDriver()
    /*name        : 'myApp',
    version     : 1.0,
    size        : 4980736, // Size of database, in bytes. WebSQL-only for now.
    storeName   : 'keyvaluepairs', // Should be alphanumeric, with underscores.
    description : 'some description'*/
});

const hydrate = create({
    storage: localForage,

    jsonify: false,
});

const preAdmitStoreHydrate = hydrate('preAdmitStore', preAdmitStore);
const admitStoreHydrate = hydrate('admitStore', admitStore);

export const storesPromise = Promise.all([
    preAdmitStoreHydrate.then(R.always(['preAdmitStore', preAdmitStore])),
    admitStoreHydrate.then(R.always(['admitStore', admitStore])),

    Promise.resolve(['statusStore', statusStore]),
]).then(R.fromPairs as any);

window.addEventListener('storage', event => {
    if (event.key === 'localforage/preAdmitStore') {
        preAdmitStoreHydrate.rehydrate();
    } else if (event.key === 'admitStore') {
        admitStoreHydrate.rehydrate();
    }

});
