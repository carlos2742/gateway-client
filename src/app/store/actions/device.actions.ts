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
  Add = '[Device] Add',
  AddFail = '[Device] Add Fail',
  AddSuccess = '[Device] Add Success',
  Edit = '[Device] Edit',
  EditFail = '[Device] Edit Fail',
  EditSuccess = '[Device] Edit Success',
  Remove = '[Device] Remove',
  RemoveFail = '[Device] Remove Fail',
  RemoveSuccess = '[Device] Remove Success',
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

export class Add implements Action {
  readonly type = ActionTypes.Add;
}

export class AddFail implements Action {
  readonly type = ActionTypes.AddFail;
  constructor(public payload: any) {}
}

export class AddSuccess implements Action {
  readonly type = ActionTypes.AddSuccess;
  constructor(public payload: any) {}
}

export class Edit implements Action {
  readonly type = ActionTypes.Edit;
}

export class EditFail implements Action {
  readonly type = ActionTypes.EditFail;
  constructor(public payload: any) {}
}

export class EditSuccess implements Action {
  readonly type = ActionTypes.EditSuccess;
  constructor(public payload: any) {}
}

export class Remove implements Action {
  readonly type = ActionTypes.Remove;
  constructor(public payload: any) {}
}

export class RemoveFail implements Action {
  readonly type = ActionTypes.RemoveFail;
  constructor(public payload: any) {}
}

export class RemoveSuccess implements Action {
  readonly type = ActionTypes.RemoveSuccess;
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
  Add |
  AddFail |
  AddSuccess |
  Edit |
  EditFail |
  EditSuccess |
  Remove |
  RemoveFail |
  RemoveSuccess |
  ShowModal |
  HideModal |
  HideAlert;
