import {Action} from '@ngrx/store';

export enum ActionTypes {
  Load = '[Device] Load',
  LoadFail = '[Device] Load Fail',
  LoadSuccess = '[Device] Load Success',
  LoadGateway = '[Device] Load Device-Gateway',
  LoadGatewayFail = '[Device] Load Device-Gateway Fail',
  LoadGatewaySuccess = '[Device] Load Device-Gateway Success',
  Add = '[Device] Add',
  AddFail = '[Device] Add Fail',
  AddSuccess = '[Device] Add Success',
  Edit = '[Device] Edit',
  EditFail = '[Device] Edit Fail',
  EditSuccess = '[Device] Edit Success',
  Remove = '[Device] Remove',
  RemoveFail = '[Device] Remove Fail',
  RemoveSuccess = '[Device] Remove Success'
}

export class Load implements Action {
  readonly type = ActionTypes.Load;
  constructor(public payload: any) {}
}

export class LoadFail implements Action {
  readonly type = ActionTypes.LoadFail;
  constructor(public payload: any) {}
}

export class LoadSuccess implements Action {
  readonly type = ActionTypes.LoadSuccess;
  constructor(public payload: any) {}
}

export class LoadGateway implements Action {
  readonly type = ActionTypes.LoadGateway;
  constructor(public payload: any) {}
}

export class LoadGatewayFail implements Action {
  readonly type = ActionTypes.LoadGatewayFail;
  constructor(public payload: any) {}
}

export class LoadGatewaySuccess implements Action {
  readonly type = ActionTypes.LoadGatewaySuccess;
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
}

export class RemoveFail implements Action {
  readonly type = ActionTypes.RemoveFail;
  constructor(public payload: any) {}
}

export class RemoveSuccess implements Action {
  readonly type = ActionTypes.RemoveSuccess;
  constructor(public payload: any) {}
}

export type ActionsUnion = Load |
  LoadFail |
  LoadSuccess |
  LoadGateway |
  LoadGatewayFail |
  LoadGatewaySuccess |
  Add |
  AddFail |
  AddSuccess |
  Edit |
  EditFail |
  EditSuccess |
  Remove |
  RemoveFail |
  RemoveSuccess;
