import { BehaviorSubject, Observable } from "rxjs";

export abstract class Store<Model> {
  public abstract state$: BehaviorSubject<Model>;
  protected abstract select: <StateProp>(
    mapFn: (state: Model) => StateProp
  ) => Observable<StateProp>;
  protected abstract setState: (newState: Partial<Model>) => void;
}
