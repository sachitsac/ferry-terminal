import { Vehicle } from "./../../models/Vehicle";
import { makeModel } from "./../../utils/makeModel";
import { Component, Input, EventEmitter, Output } from "@angular/core";
import { VehicleSummary } from "../../interfaces/ivehicle.provider";
import { costForVehicleInCents } from "src/app/utils/cost-for-vehicle-in-cents";

@Component({
  selector: "app-vehicle",
  templateUrl: "./vehicle.component.html",
  styleUrls: ["./vehicle.component.css"],
})
export class VehicleComponent {
  @Input()
  public vehicle: VehicleSummary;

  @Output()
  public onVehicleAssign: EventEmitter<Vehicle> = new EventEmitter();

  public assign() {
    const vehicle = makeModel<Vehicle>(Vehicle, {
      cost: costForVehicleInCents(this.vehicle.type),
      size: this.vehicle.category,
      type: this.vehicle.type,
    });
    this.onVehicleAssign.emit(vehicle);
    this.vehicle = null;
  }
}
