import {Action} from '@ngrx/store';

export enum ActionTypes {
  LoadDevices = '[Device] Load Devices',
  LoadDevicesFail = '[Device] Load Devices Fail',
  LoadDevicesSuccess = '[Device] Load Devices Success',
  LoadSelectedGateway = '[Device] Load Selected Gateway',
  LoadSelectedGatewayFail = '[Device] Load Selected Gateway Fail',
  LoadSelectedGatewaySuccess = '[Device] Load Selected Gateway Success',
  LoadSelectedDevice = '[Device] Load Selected Device',
  LoadSelectedDeviceFail = '[Device] Load Selected Device Fail',
  LoadSelectedDeviceSuccess = '[Device] Load Selected Device Success',
  AddDevice = '[Device] Add',
  AddDeviceFail = '[Device] Add Fail',
  AddDeviceSuccess = '[Device] Add Success',
  EditDevice = '[Device] Edit',
  EditDeviceFail = '[Device] Edit Fail',
  EditDeviceSuccess = '[Device] Edit Success',
  RemoveDevice = '[Device] Remove',
  RemoveDeviceFail = '[Device] Remove Fail',
  RemoveDeviceSuccess = '[Device] Remove Success',
  ShowModal = '[Device] Show Modal',
  HideModal = '[Device] Hide Modal',
  HideAlert = '[Device] Hide Alert',
}

export class LoadDevices implements Action {
  readonly type = ActionTypes.LoadDevices;
  constructor(public payload: any) {}
}

export class LoadDevicesFail implements Action {
  readonly type = ActionTypes.LoadDevicesFail;
  constructor(public payload: any) {}
}

export class LoadDevicesSuccess implements Action {
  readonly type = ActionTypes.LoadDevicesSuccess;
  constructor(public payload: any) {}
}

export class LoadSelectedGateway implements Action {
  readonly type = ActionTypes.LoadSelectedGateway;
  constructor(public payload: any) {}
}

export class LoadSelectedGatewayFail implements Action {
  readonly type = ActionTypes.LoadSelectedGatewayFail;
  constructor(public payload: any) {}
}

export class LoadSelectedGatewaySuccess implements Action {
  readonly type = ActionTypes.LoadSelectedGatewaySuccess;
  constructor(public payload: any) {}
}

export class LoadSelectedDevice implements Action {
  readonly type = ActionTypes.LoadSelectedDevice;
  constructor(public payload: any) {}
}

export class LoadSelectedDeviceFail implements Action {
  readonly type = ActionTypes.LoadSelectedDeviceFail;
  constructor(public payload: any) {}
}

export class LoadSelectedDeviceSuccess implements Action {
  readonly type = ActionTypes.LoadSelectedDeviceSuccess;
  constructor(public payload: any) {}
}

export class AddDevice implements Action {
  readonly type = ActionTypes.AddDevice;
  constructor(public payload: any) {}
}

export class AddDeviceFail implements Action {
  readonly type = ActionTypes.AddDeviceFail;
  constructor(public payload: any) {}
}

export class AddDeviceSuccess implements Action {
  readonly type = ActionTypes.AddDeviceSuccess;
  constructor(public payload: any) {}
}

export class EditDevice implements Action {
  readonly type = ActionTypes.EditDevice;
  constructor(public payload: any) {}
}

export class EditDeviceFail implements Action {
  readonly type = ActionTypes.EditDeviceFail;
  constructor(public payload: any) {}
}

export class EditDeviceSuccess implements Action {
  readonly type = ActionTypes.EditDeviceSuccess;
  constructor(public payload: any) {}
}

export class RemoveDevice implements Action {
  readonly type = ActionTypes.RemoveDevice;
  constructor(public payload: any) {}
}

export class RemoveDeviceFail implements Action {
  readonly type = ActionTypes.RemoveDeviceFail;
  constructor(public payload: any) {}
}

export class RemoveDeviceSuccess implements Action {
  readonly type = ActionTypes.RemoveDeviceSuccess;
  constructor(public payload: any) {}
}

export class ShowModal implements Action {
  readonly type = ActionTypes.ShowModal;
  constructor(public payload: any) {}
}

export class HideModal implements Action {
  readonly type = ActionTypes.HideModal;
}

export class HideAlert implements Action {
  readonly type = ActionTypes.HideAlert;
}

export type ActionsUnion = LoadDevices |
  LoadDevicesFail |
  LoadDevicesSuccess |
  LoadSelectedGateway |
  LoadSelectedGatewayFail |
  LoadSelectedGatewaySuccess |
  LoadSelectedDevice |
  LoadSelectedDeviceFail |
  LoadSelectedDeviceSuccess |
  AddDevice |
  AddDeviceFail |
  AddDeviceSuccess |
  EditDevice |
  EditDeviceFail |
  EditDeviceSuccess |
  RemoveDevice |
  RemoveDeviceFail |
  RemoveDeviceSuccess |
  ShowModal |
  HideModal |
  HideAlert;
