
interface RequestInitExtended extends RequestInit {
  parseJson?: boolean;
}

export class ApiService {
  constructor(
    private _fetch: typeof window.fetch
  ) { }

  _handleOkOrFailure(res: Response) {
    return res.ok ? Promise.resolve(res) : Promise.reject(res);
  }

  get(url: string, params: RequestInitExtended) {
    this.fetch('GET', url, params);
  }

  post(url: string, params: RequestInitExtended) {
    this.fetch('POST', url, params);
  }

  put(url: string, params: RequestInitExtended) {
    this.fetch('PUT', url, params);
  }

  delete(url: string, params: RequestInitExtended) {
    this.fetch('DELETE', url, params);
  }

  private fetch(
    method: string,
    url: string,
    {
      parseJson = true,
      ...options
    }: RequestInitExtended = {}
  ) {
    return this._fetch(url, {
      ...options,
      method,
    })
      .then(this._handleOkOrFailure)
      .then(res => parseJson ? res.json() : res);
  }
}