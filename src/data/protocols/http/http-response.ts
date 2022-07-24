export enum HttpStatusCode {
  ok = 200,
  noContent = 204,
  unathorized = 401
}

export type HttpResponse = {
  statusCode: HttpStatusCode
  body?: any
}
