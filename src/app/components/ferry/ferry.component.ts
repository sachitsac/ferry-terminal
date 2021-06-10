import { FerryService } from "./../../services/ferry.service";
import { Component, Input } from "@angular/core";
import { Ferry } from "src/app/models/Ferry";

@Component({
  selector: "app-ferry",
  templateUrl: "./ferry.component.html",
  styleUrls: ["./ferry.component.css"],
})
export class FerryComponent {
  @Input()
  ferry: Ferry;

  public constructor(private ferryService: FerryService) {}

  public get ferryRevenue(): number {
    return this.ferryService.ferryRevenue(this.ferry);
  }

  public get workerCommission(): number {
    return this.ferryService.workerCommission(this.ferry);
  }

  public get isFull() {
    return this.ferryService.isFull(this.ferry);
  }

  public unloadFerry(): void {
    this.ferryService.unloadFerryVehicles(this.ferry);
  }
}
