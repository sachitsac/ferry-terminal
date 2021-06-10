import { Injectable } from "@angular/core";
import { Size } from "../interfaces/enums/size.enum";
import { VehicleType } from "../interfaces/enums/vehicle-type.enum";
import {
  IVehicleProvider,
  VehicleSummary,
} from "../interfaces/ivehicle.provider";

@Injectable()
export class HardcodedVehicleService implements IVehicleProvider {
  GetVehicle(): VehicleSummary {
    const randomNumber = Math.floor(Math.random() * 4) + 1;

    switch (randomNumber) {
      case 1: {
        return {
          type: VehicleType.Car,
          category: Size.Small,
        };
      }
      case 2: {
        return {
          type: VehicleType.Van,
          category: Size.Small,
        };
      }
      case 3: {
        return {
          type: VehicleType.Truck,
          category: Size.Large,
        };
      }
      default: {
        return {
          type: VehicleType.Bus,
          category: Size.Large,
        };
      }
    }
  }
}
