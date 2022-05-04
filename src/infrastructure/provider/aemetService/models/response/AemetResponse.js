export default class AemetResponse {
  constructor({ descripcion, estado, datos, metadatos } = {}) {
    this.description = descripcion
    this.status = estado
    this.data = datos
    this.metadata = metadatos
  }
}
