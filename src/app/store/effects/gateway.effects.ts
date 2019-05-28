import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import {catchError, map, mergeMap} from 'rxjs/operators';
import {GatewaysService} from '../../services/gateways.service';
import {of} from 'rxjs/observable/of';

import * as GatewayActions from '../actions/gateway.actions';

@Injectable()
export class GatewayEffects {

  @Effect()
  loadGateways$ = this.actions$
    .pipe(
      ofType(GatewayActions.ActionTypes.Load),
      mergeMap(() => this._gatewayService.list
        .pipe(
          map(gateways => new GatewayActions.LoadSuccess(gateways),
            catchError(error => of(new GatewayActions.LoadFail(error)))
          ))
      )
    );

  constructor(private actions$: Actions, private _gatewayService: GatewaysService) {}
}
