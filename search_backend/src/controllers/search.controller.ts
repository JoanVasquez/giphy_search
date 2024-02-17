import { autoInjectable, inject } from "tsyringe";
import IService from "../interfaces/service.interface";
import BaseController from "./base.controller";

@autoInjectable()
export default class TodoController extends BaseController {
  constructor(@inject("IService") iService: IService<any>) {
    super(iService!);
  }
}
