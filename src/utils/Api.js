class ApiService {
  constructor() {
    this.baseUri = "https://fed-challenge-api.sure.now.sh/api/v1";
    this.quotesPath = `${this.baseUri}/quotes`;
  }

  async createQuote(body) {
    const options = {
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      mode: "cors",
    };
    const response = await fetch(this.quotesPath, options);
    return response.json();
  }

  async updateQuote(quoteId, body) {
    const path = `${this.quotesPath}/${quoteId}`;
    const options = {
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
      method: "PUT",
      mode: "cors",
    };
    const response = await fetch(path, options);
    return response.json();
  }
}

export default new ApiService();
