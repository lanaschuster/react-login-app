export class InvalidArgumentsError extends Error {
  constructor () {
    super('Há algo de errado na requisição. Tente novamente.')
    this.name = 'InvalidArgumentsError'
  }
}
