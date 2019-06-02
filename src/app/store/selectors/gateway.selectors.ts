import {createFeatureSelector, createSelector} from '@ngrx/store';
import * as Gateway from '../reducers/gateway.reducer';

export const selectStateGateway = createFeatureSelector('gateway');
export const getGateways = createSelector(selectStateGateway, Gateway.getGateways);
export const areGatewaysLoaded = createSelector(selectStateGateway, Gateway.areGatewaysLoaded);
export const getGatewayAlert = createSelector(selectStateGateway, Gateway.getAlert);
export const getGatewayModal = createSelector(selectStateGateway, Gateway.getModal);
