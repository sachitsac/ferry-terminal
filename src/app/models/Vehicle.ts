import { Size } from "../interfaces/enums/size.enum";
import { VehicleType } from "../interfaces/enums/vehicle-type.enum";

export class Vehicle {
  public type: VehicleType;
  public size: Size;
  public cost: number;
}
