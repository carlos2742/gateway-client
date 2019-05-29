import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import {catchError, map, mergeMap, switchMap} from 'rxjs/operators';
import {GatewaysService} from '../../services/gateways.service';
import {of} from 'rxjs/observable/of';

import * as DeviceActions from '../actions/device.actions';
import {DevicesService} from '../../services/devices.service';

@Injectable()
export class DeviceEffects {

  @Effect()
  loadDevices$ = this.actions$
    .pipe(
      ofType(DeviceActions.ActionTypes.LoadDevices),
      map((action: DeviceActions.LoadDevices) => action.payload),
      switchMap(gatewayId => {
          return this._gateway.deviceList(gatewayId)
            .pipe(
              map(devices => new DeviceActions.LoadDevicesSuccess(devices),
                catchError(error => of(new DeviceActions.LoadDevicesFail(error)))
              ));
        }
      )
    );

  @Effect()
  loadDevice$ = this.actions$
    .pipe(
      ofType(DeviceActions.ActionTypes.LoadSelectedDevice),
      map((action: DeviceActions.LoadSelectedDevice) => action.payload),
      switchMap(deviceId => {
          return this._device.deviceById(deviceId)
            .pipe(
              map(devices => new DeviceActions.LoadSelectedDeviceSuccess(devices),
                catchError(error => of(new DeviceActions.LoadSelectedDeviceFail(error)))
              ));
        }
      )
    );

  @Effect()
  removeDevice$ = this.actions$
    .pipe(
      ofType(DeviceActions.ActionTypes.RemoveDevice),
      map((action: DeviceActions.RemoveDevice) => action.payload),
      switchMap(deviceId => {
          return this._device.remove(deviceId)
            .pipe(
              map(devices => new DeviceActions.RemoveDeviceSuccess(devices),
                catchError(error => of(new DeviceActions.RemoveDeviceFail(error)))
              ));
        }
      )
    );

  @Effect()
  addDevice$ = this.actions$
    .pipe(
      ofType(DeviceActions.ActionTypes.AddDevice),
      map((action: DeviceActions.AddDevice) => action.payload),
      switchMap(payload => {
          return this._gateway.addDevice(payload.gatewayId, payload.data)
            .pipe(
              map(device => new DeviceActions.AddDeviceSuccess(device),
                catchError(error => of(new DeviceActions.AddDeviceFail(error)))
              ));
        }
      )
    );

  @Effect()
  editDevice$ = this.actions$
    .pipe(
      ofType(DeviceActions.ActionTypes.EditDevice),
      map((action: DeviceActions.EditDevice) => action.payload),
      switchMap(payload => {
          return this._device.edit(payload.deviceId, payload.data)
            .pipe(
              map(device => new DeviceActions.EditDeviceSuccess(device),
                catchError(error => of(new DeviceActions.EditDeviceFail(error)))
              ));
        }
      )
    );

  @Effect()
  loadGateway$ = this.actions$
    .pipe(
      ofType(DeviceActions.ActionTypes.LoadSelectedGateway),
      map((action: DeviceActions.LoadSelectedGateway) => action.payload),
      switchMap(gatewayId => {
          return this._gateway.gatewayById(gatewayId)
            .pipe(
              map(gateway => new DeviceActions.LoadSelectedGatewaySuccess(gateway),
                catchError(error => of(new DeviceActions.LoadSelectedGatewayFail(error)))
              ));
        }
      )
    );

  constructor(private actions$: Actions, private _gateway: GatewaysService, private _device: DevicesService) {}
}
