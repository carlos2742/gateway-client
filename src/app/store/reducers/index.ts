import * as Gateway from './gateway.reducer';
import * as Device from './device.reducer';

export interface AppState {
  gateway: Gateway.State;
  device: Device.State;
}

export const reducers = {
  gateway: Gateway.reducer,
  device: Device.reducer
};

