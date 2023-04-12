import { Component } from '@angular/core';
import "@dscla/ds-input";
import "@dscla/ds-button"
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  styleUrls: ['./form-component.component.scss']
})
export class FormComponentComponent {

    forms: FormGroup;

    constructor( private fb: FormBuilder ) { 
        this.forms = this.fb.group({
            nombre: ['', Validators.required],
            correo: ['', Validators.required]
        })
    }

    enviarDatos(){
        console.log(this.forms)
    }    

}
