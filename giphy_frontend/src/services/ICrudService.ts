export interface ICrudService<T> {
  findAll(): Promise<Array<T>>;
}
