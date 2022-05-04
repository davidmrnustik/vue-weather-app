export default class MetadataField {
  constructor({ id, descripcion, tipo_datos, requerido }) {
    this.id = id
    this.descripcion = descripcion
    this.type = tipo_datos
    this.required = requerido
  }
}
