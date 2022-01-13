import axios from 'axios';

class ProductHttpService {
  constructor() {
    this.url = '[YOUR-REST-API-URL-HERE]';
  }

  async getData() {
    const resp = await axios.get(`${this.url}/api/Products`);
    return resp;
  }

  async getDataById(id) {
    const resp = await axios.get(`${this.url}/api/Products/${id}`);
    return resp;
  }

  async postData(prd) {
    const resp = await axios.post(`${this.url}/api/Products`, prd, {
      'Content-Type': 'application/json',
    });
    return resp;
  }

  async putData(id, prd) {
    const resp = await axios.put(`${this.url}/api/Products/${id}`, prd, {
      'Content-Type': 'application/json',
    });
    return resp;
  }

  async deleteData(id) {
    const resp = await axios.delete(`${this.url}/api/Products/${id}`);
    return resp;
  }
}

export default ProductHttpService;
