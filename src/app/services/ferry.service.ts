import { Vehicle } from "./../models/Vehicle";
import { StoreBaseService } from "./store-base.service";
import { Injectable } from "@angular/core";
import { Ferry } from "../models/Ferry";
import { Observable } from "rxjs";
import { makeModel } from "../utils/makeModel";
import { Size } from "../interfaces/enums/size.enum";
import {
  AbstractCommissionCalculator,
  FerryProvider,
  FerryState,
} from "../interfaces/iferry.provider";

const initialState: FerryState = {
  ferries: [
    makeModel(Ferry, {
      id: 1,
      size: Size.Small,
      capacity: 2,
      items: [],
      worker: {
        totalCommission: 0,
        commissionPercentage: 10,
      },
    }),
    makeModel(Ferry, {
      id: 2,
      size: Size.Large,
      capacity: 1,
      items: [],
      worker: {
        totalCommission: 0,
        commissionPercentage: 15,
      },
    }),
  ],
};

@Injectable({
  providedIn: "root",
})
export class FerryService
  extends StoreBaseService<FerryState>
  implements FerryProvider
{
  public ferries$: Observable<Ferry[]> = this.select((state) => state.ferries);

  constructor(private commissionCalculator: AbstractCommissionCalculator) {
    super(initialState);
  }

  public acceptVehicle(vehicle: Vehicle): boolean {
    const ferries = [...this.state.ferries];
    let accepted = false;
    this.state.ferries.forEach((ferry, i) => {
      if (
        ferry.size === vehicle.size &&
        ferry.items.length !== ferry.capacity
      ) {
        ferries[i].items = [...ferries[i].items, vehicle];
        accepted = true;
      }
    });
    this.setState({ ferries });
    return accepted;
  }

  public unloadFerryVehicles(ferry: Ferry) {
    this.setState({
      ferries: this.state.ferries.map((ferryInState) => ({
        ...ferryInState,
        items: ferryInState.id === ferry.id ? [] : ferryInState.items,
      })),
    });
  }

  public ferryRevenue(ferry: Ferry): number {
    return ferry.items.reduce((acc, val) => acc + val.cost, 0) / 100;
  }

  public workerCommission(ferry: Ferry): number {
    return this.commissionCalculator.calculate(
      this.ferryRevenue(ferry),
      ferry.worker.commissionPercentage
    );
  }

  public isFull(ferry: Ferry) {
    return ferry.items.length === ferry.capacity;
  }
}
