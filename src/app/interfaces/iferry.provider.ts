import { Vehicle } from "./../models/Vehicle";
import { InjectionToken } from "@angular/core";
import { Ferry } from "../models/Ferry";

export interface FerryState {
  ferries: Ferry[];
}

export abstract class AbstractCommissionCalculator {
  public abstract calculate(cost: number, commissionPercentage: number): number;
}

export interface FerryProvider {
  acceptVehicle: (vehicle: Vehicle) => void;
  unloadFerryVehicles: (ferry: Ferry) => void;
}

export const FERRY_PROVIDER = new InjectionToken<FerryProvider>(
  "FerryProvider"
);
