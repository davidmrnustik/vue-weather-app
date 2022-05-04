import MetadataField from '../MetadataField'

export default class AemetMetadataResponse {
  constructor({
    unidad_generadora,
    periodicidad,
    formato,
    copyright,
    notaLegal,
    campos
  } = {}) {
    this.generator = unidad_generadora
    this.periodicity = periodicidad
    this.format = formato
    this.copyright = copyright
    this.legalNote = notaLegal
    this.fields = campos.map(field => new MetadataField(field))
  }
}
