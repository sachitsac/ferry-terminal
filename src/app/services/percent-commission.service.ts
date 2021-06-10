import { Injectable } from "@angular/core";
import { AbstractCommissionCalculator } from "../interfaces/iferry.provider";

@Injectable({
  providedIn: "root",
})
export class PercentCommissionService extends AbstractCommissionCalculator {
  public calculate(cost: number, commissionPercentage: number) {
    return (cost * commissionPercentage) / 100;
  }
}
