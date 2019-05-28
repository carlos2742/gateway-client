import {createFeatureSelector, createSelector} from '@ngrx/store';
import * as Gateway from '../reducers/gateway.reducer';

export const selectStateGateway = createFeatureSelector('gateway');
export const getGatewayEntities = createSelector(selectStateGateway, Gateway.getEntities);
export const isLoadingEntities = createSelector(selectStateGateway, Gateway.isLoading);
export const areEntitiesLoaded = createSelector(selectStateGateway, Gateway.isLoaded);
