import {Action} from '@ngrx/store';

export enum ActionTypes {
  Load = '[Gateway] Load',
  LoadFail = '[Gateway] Load Fail',
  LoadSuccess = '[Gateway] Load Success',
  Add = '[Gateway] Add',
  AddFail = '[Gateway] Add Fail',
  AddSuccess = '[Gateway] Add Success',
  Edit = '[Gateway] Edit',
  EditFail = '[Gateway] Edit Fail',
  EditSuccess = '[Gateway] Edit Success',
  Remove = '[Gateway] Remove',
  RemoveFail = '[Gateway] Remove Fail',
  RemoveSuccess = '[Gateway] Remove Success'
}

export class Load implements Action {
  readonly type = ActionTypes.Load;
}

export class LoadFail implements Action {
  readonly type = ActionTypes.LoadFail;
  constructor(public payload: any) {}
}

export class LoadSuccess implements Action {
  readonly type = ActionTypes.LoadSuccess;
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

export type ActionsUnion = Load | LoadFail | LoadSuccess | Add | AddFail | AddSuccess | Edit | EditFail | EditSuccess | Remove | RemoveFail | RemoveSuccess;
