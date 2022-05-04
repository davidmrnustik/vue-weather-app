export default class HttpService {
  async #checkResponse(res) {
    if (res.ok) {
      return res.json()
    }

    const err = await res.text()

    return Promise.reject(err)
  }

  get(url, options = {}) {
    return fetch(url, options)
      .then(res => this.#checkResponse(res))
      .catch(err => Promise.reject(err))
  }
}
