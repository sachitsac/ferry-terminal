type Constructor<T = {}> = new (...args: any[]) => T;

export const makeModel = <Model>(
  modelClass: Constructor<Model>,
  properties: { [k in keyof Model]: Model[k] }
): Model => {
  return Object.assign(new modelClass(), properties);
};
