import {Action} from '@ngrx/store';

export enum ActionTypes {
  LoadGateways = '[Gateway] Load',
  LoadGatewaysFail = '[Gateway] Load Fail',
  LoadGatewaysSuccess = '[Gateway] Load Success',
  LoadSelectedGateway = '[Gateway] Load Selected Gateway',
  LoadSelectedGatewayFail = '[Gateway] Load Selected Gateway Fail',
  LoadSelectedGatewaySuccess = '[Gateway] Load Selected Gateway Success',
  AddGateway = '[Gateway] Add',
  AddGatewayFail = '[Gateway] Add Fail',
  AddGatewaySuccess = '[Gateway] Add Success',
  EditGateway = '[Gateway] Edit',
  EditGatewayFail = '[Gateway] Edit Fail',
  EditGatewaySuccess = '[Gateway] Edit Success',
  ShowModal = '[Gateway] Show Modal',
  HideModal = '[Gateway] Hide Modal',
  HideAlert = '[Gateway] Hide Alert',
}

export class LoadGateways implements Action {
  readonly type = ActionTypes.LoadGateways;
}

export class LoadGatewaysFail implements Action {
  readonly type = ActionTypes.LoadGatewaysFail;
  constructor(public payload: any) {}
}

export class LoadGatewaysSuccess implements Action {
  readonly type = ActionTypes.LoadGatewaysSuccess;
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

export class AddGateway implements Action {
  readonly type = ActionTypes.AddGateway;
  constructor(public payload: any) {}
}

export class AddGatewayFail implements Action {
  readonly type = ActionTypes.AddGatewayFail;
  constructor(public payload: any) {}
}

export class AddGatewaySuccess implements Action {
  readonly type = ActionTypes.AddGatewaySuccess;
  constructor(public payload: any) {}
}

export class EditGateway implements Action {
  readonly type = ActionTypes.EditGateway;
  constructor(public payload: any) {}
}

export class EditGatewayFail implements Action {
  readonly type = ActionTypes.EditGatewayFail;
  constructor(public payload: any) {}
}

export class EditGatewaySuccess implements Action {
  readonly type = ActionTypes.EditGatewaySuccess;
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

export type ActionsUnion = LoadGateways |
  LoadGatewaysFail |
  LoadGatewaysSuccess |
  AddGateway |
  LoadSelectedGateway |
  LoadSelectedGatewayFail |
  LoadSelectedGatewaySuccess |
  AddGateway |
  AddGatewayFail |
  AddGatewaySuccess |
  EditGateway |
  EditGatewayFail |
  EditGatewaySuccess |
  ShowModal |
  HideModal |
  HideAlert;
