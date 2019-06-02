import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import {catchError, map, mergeMap, switchMap} from 'rxjs/operators';
import {GatewaysService} from '../../services/gateways.service';
import {of} from 'rxjs/observable/of';

import * as GatewayActions from '../actions/gateway.actions';
import * as DeviceActions from '../actions/device.actions';

@Injectable()
export class GatewayEffects {

  @Effect()
  loadGateways$ = this.actions$
    .pipe(
      ofType(GatewayActions.ActionTypes.LoadGateways),
      mergeMap(() => this._gatewayService.list
        .pipe(
          map(gateways => new GatewayActions.LoadGatewaysSuccess(gateways),
            catchError(error => of(new GatewayActions.LoadGatewaysFail(error)))
          ))
      )
    );

  @Effect()
  loadGateway$ = this.actions$
    .pipe(
      ofType(GatewayActions.ActionTypes.LoadSelectedGateway),
      map((action: GatewayActions.LoadSelectedGateway) => action.payload),
      switchMap(gatewayId => this._gatewayService.gatewayById(gatewayId)
        .pipe(
          map(gateway => new GatewayActions.LoadSelectedGatewaySuccess(gateway),
            catchError(error => of(new GatewayActions.LoadGatewaysFail(error)))
          ))
      )
    );

  @Effect()
  addGateways$ = this.actions$
    .pipe(
      ofType(GatewayActions.ActionTypes.AddGateway),
      map((action: GatewayActions.AddGateway) => action.payload),
      switchMap(payload => this._gatewayService.add(payload)
        .pipe(
          map(gateway => new GatewayActions.AddGatewaySuccess(gateway),
            catchError(error => of(new GatewayActions.AddGatewayFail(error)))
          ))
      )
    );

  @Effect()
  editGateways$ = this.actions$
    .pipe(
      ofType(GatewayActions.ActionTypes.EditGateway),
      map((action: GatewayActions.EditGateway) => action.payload),
      switchMap(payload => this._gatewayService.edit(payload.gatewayId, payload.data)
        .pipe(
          map(gateway => new GatewayActions.EditGatewaySuccess(gateway),
            catchError(error => of(new GatewayActions.EditGatewayFail(error)))
          ))
      )
    );

  constructor(private actions$: Actions, private _gatewayService: GatewaysService) {}
}
