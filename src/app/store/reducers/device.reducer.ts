import * as fromDevice from '../actions/device.actions';
import {Device} from '../../models/device.model';
import {Gateway} from '../../models/gateway.model';

export interface Alert {
  show: boolean;
  status: string;
  message: string;
}

export interface SelectedEntity {
  entity: Device | Gateway;
  loading: boolean;
  loaded: boolean;
}

export interface Modal {
  show: boolean;
  entityName: string;
  data: any;
  action: string;
  selectedEntity: SelectedEntity;
}

export interface SelectedGateway {
  properties: Gateway;
  loading: boolean;
  loaded: boolean;
}

export interface State {
  entities: Array<Device>;
  loading: boolean;
  loaded: boolean;
  gateway: SelectedGateway;
  alert: Alert;
  modal: Modal;
}

export const initialState: State = {
  entities: [],
  loading: false,
  loaded: false,
  gateway: {
    properties: {},
    loading: false,
    loaded: false
  },
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
  action: fromDevice.ActionsUnion
): State {
  switch (action.type) {
    case fromDevice.ActionTypes.LoadDevices: {
      console.log(fromDevice.ActionTypes.LoadDevices);
      return {
        ...state,
        loading: true,
        loaded: false
      };
    }
    case fromDevice.ActionTypes.LoadDevicesSuccess: {
      console.log(fromDevice.ActionTypes.LoadDevicesSuccess);
      return {
        ...state,
        loading: false,
        loaded: true,
        entities: [...action.payload.result]
      };
    }
    case fromDevice.ActionTypes.LoadSelectedGateway: {
      console.log(fromDevice.ActionTypes.LoadSelectedGateway);
      return {
        ...state,
        gateway: {
          ...state.gateway,
          loading: true,
          loaded: false
        }
      };
    }
    case fromDevice.ActionTypes.LoadSelectedGatewaySuccess: {
      console.log(fromDevice.ActionTypes.LoadSelectedGatewaySuccess);
      return {
        ...state,
        gateway: {
          loading: false,
          loaded: true,
          properties: Object.assign({}, action.payload.result)
        }
      };
    }
    case fromDevice.ActionTypes.LoadSelectedDevice: {
      console.log(fromDevice.ActionTypes.LoadSelectedDevice);
      return {
        ...state,
        modal: {
          ...state.modal,
          selectedEntity: {
            ...state.modal.selectedEntity,
            loading: true,
            loaded: false,
          }
        }
      };
    }
    case fromDevice.ActionTypes.LoadSelectedDeviceSuccess: {
      console.log(fromDevice.ActionTypes.LoadSelectedDeviceSuccess);
      return {
        ...state,
        modal: {
          ...state.modal,
          selectedEntity: {
            ...state.modal.selectedEntity,
            loading: false,
            loaded: true,
            entity: action.payload.result
          }
        }
      };
    }
    case fromDevice.ActionTypes.AddDeviceSuccess: {
      console.log(fromDevice.ActionTypes.AddDeviceSuccess);
      const entity: Device = action.payload['result'];
      return {
        ...state,
        alert: {
          status: 'success',
          message: 'The device was added successfully',
          show: true
        },
        entities: [...state.entities, entity]
      };
    }
    case fromDevice.ActionTypes.AddDeviceFail: {
      console.log(fromDevice.ActionTypes.AddDeviceSuccess);
      return {
        ...state,
        alert: {
          status: 'danger',
          message: 'The device could not be added',
          show: true
        }
      };
    }
    case fromDevice.ActionTypes.EditDeviceSuccess: {
      console.log(fromDevice.ActionTypes.EditDeviceSuccess);
      const entity = action.payload['result'];
      const entityIndex = state.entities.findIndex( (item: Device) => item._id === entity._id);
      return {
        ...state,
        alert: {
          status: 'success',
          message: 'The device was updated successfully',
          show: true
        },
        entities: [
          ...state.entities.slice(0, entityIndex),
          entity,
          ...state.entities.slice(entityIndex + 1)
        ]
      };
    }
    case fromDevice.ActionTypes.EditDeviceFail: {
      console.log(fromDevice.ActionTypes.EditDeviceFail);
      return {
        ...state,
        alert: {
          status: 'danger',
          message: 'The device could not be updated',
          show: true
        }
      };
    }
    case fromDevice.ActionTypes.RemoveDeviceSuccess: {
      console.log(fromDevice.ActionTypes.RemoveDeviceSuccess);
      const itemDeleted: Device = action.payload.result;
      const index = state.entities.findIndex( item => item._id === itemDeleted._id);
      const entities = state.entities.slice(0);
      entities.splice(index, 1);
      return {
        ...state,
        alert: {
          status: 'success',
          message: 'Device removed successfully',
          show: true
        },
        entities: entities
      };
    }
    case fromDevice.ActionTypes.RemoveDeviceFail: {
      console.log(fromDevice.ActionTypes.RemoveDeviceFail);
      return {
        ...state,
        alert: {
          status: 'danger',
          message: 'Device can\'t be removed',
          show: true
        }
      };
    }
    case fromDevice.ActionTypes.ShowModal: {
      console.log(fromDevice.ActionTypes.ShowModal);
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
    case fromDevice.ActionTypes.HideModal: {
      console.log(fromDevice.ActionTypes.HideModal);
      return {
        ...state,
        modal: {
          ...state.modal,
          entityName: '',
          show: false,
          action: 'none',
          data: {}
        }
      };
    }
    case fromDevice.ActionTypes.HideAlert: {
      console.log(fromDevice.ActionTypes.HideAlert);
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

export const getDevices = (state: State) => state.entities;
export const getSelectedGateway = (state: State) => state.gateway.properties;
export const getAlert = (state: State) => state.alert;
export const getModal = (state: State) => state.modal;
