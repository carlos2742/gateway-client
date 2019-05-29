import * as fromDevice from '../actions/device.actions';
import {Device} from '../../models/device.model';
import {Gateway} from '../../models/gateway.model';

export interface Alert {
  show: boolean;
  status: string;
  message: string;
}

export interface DeviceEntity {
  entity: Device;
  loading: boolean;
  loaded: boolean;
}

export interface Modal {
  show: boolean;
  entityName: string;
  data: any;
  action: string;
  exist: boolean;
  selectedDevice: DeviceEntity;
}

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
    exist: false,
    show: false,
    action: 'none',
    data: {},
    selectedDevice: {
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
          selectedDevice: {
            ...state.modal.selectedDevice,
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
          selectedDevice: {
            ...state.modal.selectedDevice,
            loading: false,
            loaded: true,
            entity: action.payload.result
          }
        }
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
    case fromDevice.ActionTypes.RemoveSuccess: {
      console.log(fromDevice.ActionTypes.RemoveSuccess);
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
    case fromDevice.ActionTypes.RemoveFail: {
      console.log(fromDevice.ActionTypes.RemoveFail);
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
          exist: true,
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
export const isLoadingDevices = (state: State) => state.loading;
export const areDevicesLoaded = (state: State) => state.loaded;
export const getSelectedGateway = (state: State) => state.gateway.properties;
export const isLoadingSelectedGateway = (state: State) => state.gateway.loading;
export const isSelectedGatewayLoaded = (state: State) => state.gateway.loaded;
export const getAlert = (state: State) => state.alert;
export const getModal = (state: State) => state.modal;
