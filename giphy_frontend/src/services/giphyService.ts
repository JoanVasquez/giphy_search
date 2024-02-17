import { BaseService } from "./baseService";

export class GiphyService extends BaseService {
  constructor({ offset, search}: any) {
    super(
      `https://api.giphy.com/v1/gifs/search?api_key=pLURtkhVrUXr3KG25Gy5IvzziV5OrZGa&q=${search}&offset=${offset}`
    );
  }
}
