import * as R from 'ramda';
import { create } from 'mobx-persist';
import * as localForage from 'localforage';

import { ApiService } from './services/ApiService';
import { FormsService } from './services/FormsService';
// import {TabsSyncService} from './services/TabsSyncService';

const apiService = new ApiService(window.fetch.bind(window));
const formsService = new FormsService(apiService);
// const tabsSyncService = new TabsSyncService();

import { FormsStore } from './stores/FormsStore';
import { StatusStore } from './stores/StatusStore';

const formsStore = new FormsStore(formsService);
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

const formsStoreHydrate = hydrate('formsStore', formsStore);

export const storesPromise = Promise.all([
  formsStoreHydrate.then(R.always(['formsStore', formsStore])),
  Promise.resolve(['statusStore', statusStore]),
]).then(R.fromPairs as any);

window.addEventListener('storage', event => {
  if (event.key === 'localforage/formsStore') { formsStoreHydrate.rehydrate(); }
});
