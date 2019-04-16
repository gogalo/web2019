import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  set(key: string, value: any) {
    //if (typeof value == 'object' || typeof value == 'array') {
        value = JSON.stringify(value);
    //}

    return localStorage.setItem(key, value);
  }

  get(key: string) {
    //if (typeof value == 'object' || typeof value == 'array') {
        return JSON.parse(localStorage.getItem(key));
    //}
  }

  remove(key: string) {
    return localStorage.removeItem(key);
  }

  clear() {
    return localStorage.clear();
  }

}
