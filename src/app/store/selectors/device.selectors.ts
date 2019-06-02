import {createFeatureSelector, createSelector} from '@ngrx/store';
import * as Device from '../reducers/device.reducer';


export const selectStateDevice = createFeatureSelector('device');
export const getDevices = createSelector(selectStateDevice, Device.getDevices);
export const getSelectedGateway = createSelector(selectStateDevice, Device.getSelectedGateway);
export const getDeviceAlert = createSelector(selectStateDevice, Device.getAlert);
export const getDeviceModal = createSelector(selectStateDevice, Device.getModal);
export const getComposeModalData = createSelector(
  getSelectedGateway,
  getDeviceModal,
  (gateway, modal) => {
    return {gateway, modal};
  });
