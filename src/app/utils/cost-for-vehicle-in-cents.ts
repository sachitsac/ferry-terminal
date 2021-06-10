import { VehicleType } from "../interfaces/enums/vehicle-type.enum";

export const costForVehicleInCents = (vehicle: VehicleType) => {
  switch (vehicle) {
    case VehicleType.Car:
      return 500;
    case VehicleType.Van:
      return 750;
    case VehicleType.Truck:
      return 1000;
    case VehicleType.Bus:
      return 1500;
    default:
      throw new Error("No vehicle type found");
  }
};
