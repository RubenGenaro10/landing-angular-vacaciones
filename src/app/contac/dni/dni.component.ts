import { Component, Input, OnChanges, SimpleChange } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dni',
  templateUrl: './dni.component.html',
  styleUrls: ['./dni.component.css']
})
export class DniComponent implements OnChanges {
  @Input()  tipoDni:string =''

  formularioDocumento:FormGroup
  constructor(private form:FormBuilder) {
    this.formularioDocumento=this.form.group({
      dni:['',[Validators.required,Validators.minLength(8)]],
    })
  }

  ngOnChanges(changes: { [propKey: string]: SimpleChange }) {
    console.log(changes?.['tipoDni'].currentValue)
  }
  

  hasErrors( controlName:string,errorType:string){
    return this.formularioDocumento.get(controlName)?.hasError(errorType) && this.formularioDocumento.get(controlName)?.touched
    }
}
