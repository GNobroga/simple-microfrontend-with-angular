import { computed, Injectable, Signal, signal } from '@angular/core';

@Injectable({
  providedIn: 'platform'
})
export class StoreService {

  state = signal({} as any);

  select(callback: any) {
    return computed(() => callback(this.state));
  }

  update(callback: any) {
    this.state.update(callback);
  }

  start(initialState: any) {
    this.state.set(initialState);
  }
}
