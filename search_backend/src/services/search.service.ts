import { injectable } from "tsyringe";
import SearchRepository from "../repositories/search.repository";
import BaseService from "./base.service";

@injectable()
export default class SearchService extends BaseService<any> {
  constructor(searchRepository: SearchRepository) {
    super(searchRepository);
  }
}
