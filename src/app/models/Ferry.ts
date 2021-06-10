import { Vehicle } from "./Vehicle";
import { Worker } from "./Worker";
import { Size } from "../interfaces/enums/size.enum";

export class Ferry {
  public id: number;
  public size: Size;
  public capacity: number;
  public items: Vehicle[];
  public worker: Worker;
}
