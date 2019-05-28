import * as fromDevice from '../actions/device.actions';
import {Device} from '../../models/device.model';
import {Gateway} from '../../models/gateway.model';

export interface DeviceGateway {
  properties: Gateway;
  loading: boolean;
  loaded: boolean;
}

export interface State {
  entities: Array<Device>;
  loading: boolean;
  loaded: boolean;
  gateway: DeviceGateway;
}

export const initialState: State = {
  entities: [],
  loading: false,
  loaded: false,
  gateway: {
    properties: {},
    loading: false,
    loaded: false
  }
};

export function reducer(
  state = initialState,
  action: fromDevice.ActionsUnion
): State {
  switch (action.type) {
    case fromDevice.ActionTypes.Load: {
      console.log(fromDevice.ActionTypes.Load);
      return {...state, loading: true};
    }

    case fromDevice.ActionTypes.LoadSuccess: {
      console.log(fromDevice.ActionTypes.LoadSuccess);
      return {
        ...state,
        loading: false,
        loaded: true,
        entities: [...action.payload.result]
      };
    }

    case fromDevice.ActionTypes.LoadGateway: {
      console.log(fromDevice.ActionTypes.LoadGateway);
      return {...state, gateway: {...state.gateway, loading: true}};
    }

    case fromDevice.ActionTypes.LoadGatewaySuccess: {
      console.log(fromDevice.ActionTypes.LoadGatewaySuccess);
      return {
        ...state,
        gateway: {loading: false, loaded: true, properties: Object.assign({}, action.payload.result)}
      };
    }

    case fromDevice.ActionTypes.Add: {
      console.log(fromDevice.ActionTypes.Add);
      return state;
    }

    case fromDevice.ActionTypes.Edit: {
      console.log(fromDevice.ActionTypes.Edit);
      return state;
    }

    case fromDevice.ActionTypes.Remove: {
      console.log(fromDevice.ActionTypes.Remove);
      return state;
    }

    default: {
      return state;
    }
  }
}

export const getEntities = (state: State) => state.entities;
export const isLoadingEntities = (state: State) => state.loading;
export const areEntitiesLoaded = (state: State) => state.loaded;
export const getGateway = (state: State) => state.gateway.properties;
export const isLoadingGateway = (state: State) => state.gateway.loading;
export const isGatewayLoaded = (state: State) => state.gateway.loaded;
