import {createFeatureSelector, createSelector} from '@ngrx/store';
import * as Device from '../reducers/device.reducer';


export const selectStateDevice = createFeatureSelector('device');
export const getDevices = createSelector(selectStateDevice, Device.getDevices);
export const isLoadingDevices = createSelector(selectStateDevice, Device.isLoadingDevices);
export const areDevicesLoaded = createSelector(selectStateDevice, Device.areDevicesLoaded);
export const getSelectedGateway = createSelector(selectStateDevice, Device.getSelectedGateway);
export const isLoadingSelectedGateway = createSelector(selectStateDevice, Device.isLoadingSelectedGateway);
export const isSelectedGatewayLoaded = createSelector(selectStateDevice, Device.isSelectedGatewayLoaded);
export const getAlert = createSelector(selectStateDevice, Device.getAlert);
export const getModal = createSelector(selectStateDevice, Device.getModal);
export const getComposeModalData = createSelector(
  getSelectedGateway,
  getModal,
  (gateway, modal) => {
    return {gateway, modal};
  });
