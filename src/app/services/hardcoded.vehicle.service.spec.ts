import { TestBed } from "@angular/core/testing";
import { HardcodedVehicleService } from "./hardcoded.vehicle.service";

describe("Hardcoded.VehicleService", () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it("should be created", () => {
    const service: HardcodedVehicleService = TestBed.get(
      HardcodedVehicleService
    );
    expect(service).toBeTruthy();
  });
});
