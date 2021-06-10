import { FerryService } from "./../services/ferry.service";
import { Component, Inject } from "@angular/core";
import {
  IVehicleProvider,
  VehicleSummary,
  VEHICLE_PROVIDER,
} from "../interfaces/ivehicle.provider";
import { Ferry } from "../models/Ferry";
import { Vehicle } from "../models/Vehicle";
import { Observable, Subscription } from "rxjs";

@Component({
  selector: "ferry-terminal",
  templateUrl: "./ferry.terminal.component.html",
  styleUrls: ["./ferry.terminal.component.css"],
})
export class FerryTerminalComponent {
  currentVehicle: VehicleSummary;
  public ferries$: Observable<Ferry[]> = this.ferryService.ferries$;
  public ferrySub: Subscription;
  public capacityReached = false;

  constructor(
    @Inject(VEHICLE_PROVIDER) private vehicleProvider: IVehicleProvider,
    private ferryService: FerryService
  ) {}

  public ngOnDestroy(): void {
    this.ferrySub.unsubscribe();
  }

  public getVehicle(): void {
    this.currentVehicle = this.vehicleProvider.GetVehicle();
  }

  public assign(item: Vehicle): void {
    if (!this.ferryService.acceptVehicle(item)) {
      this.capacityReached = true;
    } else {
      this.capacityReached = false;
    }
  }
}
