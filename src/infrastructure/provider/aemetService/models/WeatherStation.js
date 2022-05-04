export default class WeatherStation {
  constructor({
    idema,
    lon,
    fint,
    prec,
    alt,
    vmax,
    vv,
    dv,
    lat,
    dmax,
    ubi,
    pres,
    hr,
    stdvv,
    ts,
    tamin,
    ta,
    tamax,
    tpr,
    vis,
    stddv,
    inso,
    tss5cm,
    pacutp,
    tss20cm,
    geo925
  } = {}) {
    this.idema = idema
    this.lon = lon
    this.fint = fint
    this.prec = prec
    this.alt = alt
    this.vmax = vmax
    this.vv = vv
    this.dv = dv
    this.lat = lat
    this.dmax = dmax
    this.ubi = ubi
    this.pres = pres
    this.hr = hr
    this.stdvv = stdvv
    this.ts = ts
    this.tamin = tamin
    this.ta = ta
    this.tamax = tamax
    this.tpr = tpr
    this.vis = vis
    this.stddv = stddv
    this.inso = inso
    this.tss5cm = tss5cm
    this.pacutp = pacutp
    this.tss20cm = tss20cm
    this.geo925 = geo925
  }
}
