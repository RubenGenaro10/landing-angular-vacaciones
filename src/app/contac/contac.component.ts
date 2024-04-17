import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contac',
  templateUrl: './contac.component.html',
  styleUrls: ['./contac.component.css']
})
export class ContacComponent implements OnInit,OnDestroy{

  //simulacion de info traida de un servicio
  // usuarioActivo:any={
  //   nombre:'Juan',
  //   apellido:'Perez',
  //   dni:'12345678',
  //   email:'juan@gmail.com '
  // }

  tipoDni:string ='DNI'

  formularioContacto:FormGroup
  constructor(private form:FormBuilder) {
    this.formularioContacto=this.form.group({
      nombre:['',[Validators.required,Validators.minLength(3)]],
      apellido:['',[Validators.required,Validators.minLength(3)]],
      tipoDni:[''],
      dni:['',[Validators.required,Validators.minLength(8)]],
      email:['',[Validators.required,Validators.email]],
    })
  }

  ngOnInit(): void {
  
    //valueChanges: se dispara cada vez que el valor de un input cambia y emite un observable con el valor actual
    //subscribe: se suscribe a un observable y recibe el valor emitido por el observable y ejecuta una funcion
    this.formularioContacto.get('tipoDni')?.valueChanges.subscribe((valor)=>{
      this.tipoDni=valor
    })
  }

  ngOnDestroy(){
    console.log('se destruyo el componente')
  }

  hasErrors( controlName:string,errorType:string){
    return this.formularioContacto.get(controlName)?.hasError(errorType) && this.formularioContacto.get(controlName)?.touched
    }
 

  enviar(){
    console.log(this.formularioContacto.value)
  }


  // public user = {
  //   name: '',
  //   email: '',
  // }

  // enviar() {
  //   console.log(this.user)
  // }
}
