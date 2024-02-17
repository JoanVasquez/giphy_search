import { injectable } from "tsyringe";
import BaseRepository from "./base.repository";

@injectable()
export default class SearchRepository extends BaseRepository {
  constructor() {
    super("search");
  }
}
