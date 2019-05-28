import {createFeatureSelector, createSelector} from '@ngrx/store';
import * as Device from '../reducers/device.reducer';


export const selectStateDevice = createFeatureSelector('device');
export const getDeviceEntities = createSelector(selectStateDevice, Device.getEntities);
export const isDeviceLoading = createSelector(selectStateDevice, Device.isLoadingEntities);
export const isDeviceLoaded = createSelector(selectStateDevice, Device.areEntitiesLoaded);
export const getGateway = createSelector(selectStateDevice, Device.getGateway);
export const isLoadingGateway = createSelector(selectStateDevice, Device.isLoadingGateway);
export const isGatewayLoaded = createSelector(selectStateDevice, Device.isGatewayLoaded);
