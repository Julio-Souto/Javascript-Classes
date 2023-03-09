export class Mascota{
  nombre = ""
  tipo = ""
  chip = ""
  edad = 0
  sexo = ""
  constructor(nombre,tipo,chip,edad,sexo){
    this.nombre = nombre;
    this.tipo = tipo;
    this.chip = chip;
    this.edad = edad;
    this.sexo = sexo;
  }
  get nombre(){
    return this.nombre;
  }
  get tipo(){
    return this.tipo;
  }
  get chip(){
    return this.chip;
  }
  get edad(){
    return this.edad;
  }
  get sexo(){
    return this.sexo;
  }
}