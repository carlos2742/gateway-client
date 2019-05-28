import * as fromGateway from '../actions/gateway.actions';
import {Gateway} from '../../models/gateway.model';

export interface State {
  entities: Array<Gateway>;
  loading: boolean;
  loaded: boolean;
}

export const initialState: State = {
  entities: [],
  loading: false,
  loaded: false
};

export function reducer(
  state = initialState,
  action: fromGateway.ActionsUnion
): State {
  switch (action.type) {
    case fromGateway.ActionTypes.Load: {
      console.log(fromGateway.ActionTypes.Load);
      return {...state, loading: true};
    }

    case fromGateway.ActionTypes.LoadSuccess: {
      console.log(fromGateway.ActionTypes.LoadSuccess);
      return {
        loading: false,
        loaded: true,
        entities: [...state.entities, ...action.payload.result]
      };
    }

    case fromGateway.ActionTypes.Add: {
      console.log(fromGateway.ActionTypes.Add);
      return state;
    }

    case fromGateway.ActionTypes.Edit: {
      console.log(fromGateway.ActionTypes.Edit);
      return state;
    }

    case fromGateway.ActionTypes.Remove: {
      console.log(fromGateway.ActionTypes.Remove);
      return state;
    }

    default: {
      return state;
    }
  }
}

export const getEntities = (state: State) => state.entities;
export const isLoading = (state: State) => state.loading;
export const isLoaded = (state: State) => state.loaded;
