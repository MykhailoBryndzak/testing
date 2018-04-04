import { observable } from 'mobx';

export class StatusStore {
  @observable online: boolean = navigator.onLine;

  constructor() {
    window.addEventListener('offline', () => { this.online = false; });
    window.addEventListener('online', () => { this.online = true; });
  }

}