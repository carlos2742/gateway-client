import * as fromGateway from '../actions/gateway.actions';
import {Gateway} from '../../models/gateway.model';
import {Alert, Modal} from './device.reducer';

export interface State {
  entities: Array<Gateway>;
  loading: boolean;
  loaded: boolean;
  alert: Alert;
  modal: Modal;
}

export const initialState: State = {
  entities: [],
  loading: false,
  loaded: false,
  alert: {
    show: false,
    status: '',
    message: ''
  },
  modal: {
    entityName: '',
    show: false,
    action: 'none',
    data: {},
    selectedEntity: {
      entity: {},
      loaded: false,
      loading: false
    }
  }
};

export function reducer(
  state = initialState,
  action: fromGateway.ActionsUnion
): State {
  switch (action.type) {
    case fromGateway.ActionTypes.LoadGateways: {
      console.log(fromGateway.ActionTypes.LoadGateways);
      return {...state, loading: true, loaded: false};
    }
    case fromGateway.ActionTypes.LoadGatewaysSuccess: {
      console.log(fromGateway.ActionTypes.LoadGatewaysSuccess);
      return {
        ...state,
        loading: false,
        loaded: true,
        entities: [...state.entities, ...action.payload.result]
      };
    }
    case fromGateway.ActionTypes.LoadSelectedGateway: {
      console.log(fromGateway.ActionTypes.LoadSelectedGateway);
      return {
        ...state,
        modal: {
          ...state.modal,
          selectedEntity: {
            entity: {},
            loading: true,
            loaded: false
          }
        }
      };
    }
    case fromGateway.ActionTypes.LoadSelectedGatewaySuccess: {
      console.log(fromGateway.ActionTypes.LoadSelectedGatewaySuccess);
      return {
        ...state,
        modal: {
          ...state.modal,
          selectedEntity: {
            entity: action.payload['result'],
            loading: false,
            loaded: true
          }
        }
      };
    }
    case fromGateway.ActionTypes.AddGatewaySuccess: {
      console.log(fromGateway.ActionTypes.AddGatewaySuccess);
      const entity: Gateway = action.payload['result'];
      return {
        ...state,
        entities: [...state.entities, entity],
        alert: {
          status: 'success',
          message: 'The gateway was added successfully',
          show: true
        }
      };
    }
    case fromGateway.ActionTypes.AddGatewayFail: {
      console.log(fromGateway.ActionTypes.AddGatewayFail);
      return {
        ...state,
        alert: {
          status: 'danger',
          message: 'The gateway could not be added',
          show: true
        }
      };
    }
    case fromGateway.ActionTypes.EditGatewaySuccess: {
      console.log(fromGateway.ActionTypes.EditGatewaySuccess);
      const entity: Gateway = action.payload['result'];
      const entityIndex = state.entities.findIndex((item: Gateway) => item._id === entity._id);
      return {
        ...state,
        entities: [
          ...state.entities.slice(0, entityIndex),
          entity,
          ...state.entities.slice(entityIndex + 1)
        ],
        alert: {
          status: 'success',
          message: 'The gateway was updated successfully',
          show: true
        }
      };
    }
    case fromGateway.ActionTypes.EditGatewayFail: {
      console.log(fromGateway.ActionTypes.EditGatewayFail);
      return {
        ...state,
        alert: {
          status: 'danger',
          message: 'The gateway could not be updated',
          show: true
        }
      };
    }
    case fromGateway.ActionTypes.ShowModal: {
      console.log(fromGateway.ActionTypes.ShowModal);
      return {
        ...state,
        modal: {
          ...state.modal,
          show: true,
          entityName: action.payload.entity,
          action: action.payload.formAction,
          data: action.payload.data
        }
      };
    }
    case fromGateway.ActionTypes.HideModal: {
      console.log(fromGateway.ActionTypes.HideModal);
      return {
        ...state,
        modal: {
          ...state.modal,
          entityName: '',
          show: false,
          action: 'none',
          data: {},
          selectedEntity: {
            loaded: false,
            loading: false,
            entity: {}
          }
        }
      };
    }
    case fromGateway.ActionTypes.HideAlert: {
      console.log(fromGateway.ActionTypes.HideAlert);
      return {
        ...state,
        alert: {
          status: '',
          message: '',
          show: false
        }
      };
    }
    default: {
      return state;
    }
  }
}

export const getGateways = (state: State) => state.entities;
export const areGatewaysLoaded = (state: State) => state.loaded;
export const getAlert = (state: State) => state.alert;
export const getModal = (state: State) => state.modal;
