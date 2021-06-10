import { PercentCommissionService } from "./services/percent-commission.service";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { FerryTerminalComponent } from "./ferryterminal/ferryterminal.component";
import { HardcodedVehicleService } from "./services/hardcoded.vehicle.service";
import { VEHICLE_PROVIDER } from "./interfaces/ivehicle.provider";
import { VehicleComponent } from "./components/vehicle/vehicle.component";
import { FerryComponent } from "./components/ferry/ferry.component";
import { CommonModule } from "@angular/common";
import { AbstractCommissionCalculator } from "./interfaces/iferry.provider";

@NgModule({
  declarations: [
    AppComponent,
    FerryTerminalComponent,
    VehicleComponent,
    FerryComponent,
  ],
  imports: [BrowserModule, CommonModule],
  providers: [
    { provide: VEHICLE_PROVIDER, useClass: HardcodedVehicleService },
    {
      provide: AbstractCommissionCalculator,
      useClass: PercentCommissionService,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
