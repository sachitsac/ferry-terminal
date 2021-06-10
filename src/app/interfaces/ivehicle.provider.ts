import { InjectionToken } from "@angular/core";
import { Size } from "./enums/size.enum";
import { VehicleType } from "./enums/vehicle-type.enum";

export const VEHICLE_PROVIDER = new InjectionToken("IVehicleProvider");

export interface IVehicleProvider {
  GetVehicle(): VehicleSummary;
}

export class VehicleSummary {
  type: VehicleType;
  category: Size;
}
