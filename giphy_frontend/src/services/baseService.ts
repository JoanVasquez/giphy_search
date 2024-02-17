import axios from "axios";
import { ICrudService } from "./ICrudService";

export abstract class BaseService implements ICrudService<any> {
  constructor(private endPoint: string) {}

  async findAll(): Promise<any[]> {
    const response = await axios.get(this.endPoint);
    return response.data;
  }
}
