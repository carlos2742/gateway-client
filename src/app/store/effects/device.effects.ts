import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import {catchError, map, mergeMap, switchMap} from 'rxjs/operators';
import {GatewaysService} from '../../services/gateways.service';
import {of} from 'rxjs/observable/of';

import * as DeviceActions from '../actions/device.actions';

@Injectable()
export class DeviceEffects {

  @Effect()
  loadDevices$ = this.actions$
    .pipe(
      ofType(DeviceActions.ActionTypes.Load),
      map((action: DeviceActions.Load) => action.payload),
      switchMap(gatewayId => {
          return this._gatewayService.deviceList(gatewayId)
            .pipe(
              map(devices => new DeviceActions.LoadSuccess(devices),
                catchError(error => of(new DeviceActions.LoadFail(error)))
              ));
        }
      )
    );

  @Effect()
  loadGateway$ = this.actions$
    .pipe(
      ofType(DeviceActions.ActionTypes.LoadGateway),
      map((action: DeviceActions.LoadGateway) => action.payload),
      switchMap(gatewayId => {
          return this._gatewayService.gatewayById(gatewayId)
            .pipe(
              map(gateway => new DeviceActions.LoadGatewaySuccess(gateway),
                catchError(error => of(new DeviceActions.LoadGatewayFail(error)))
              ));
        }
      )
    );

  constructor(private actions$: Actions, private _gatewayService: GatewaysService) {}
}
