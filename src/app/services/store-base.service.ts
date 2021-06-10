import { Store } from "./../interfaces/store";
import { BehaviorSubject, Observable } from "rxjs";
import { distinctUntilChanged, map } from "rxjs/operators";

export class StoreBaseService<Model> extends Store<Model> {
  public state$: BehaviorSubject<Model>;
  protected get state(): Model {
    return this.state$.getValue();
  }

  constructor(initialState: Model) {
    super();
    this.state$ = new BehaviorSubject<Model>(initialState);
  }

  protected select = <K>(mapFn: (state: Model) => K): Observable<K> => {
    return this.state$.asObservable().pipe(
      map((state: Model) => mapFn(state)),
      distinctUntilChanged()
    );
  };

  protected setState = (newState: Partial<Model>) => {
    this.state$.next({
      ...this.state,
      ...newState,
    });
  };
}
