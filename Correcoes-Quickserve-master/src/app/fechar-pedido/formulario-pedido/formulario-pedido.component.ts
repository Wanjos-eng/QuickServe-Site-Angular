import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-formulario-pedido',
  templateUrl: './formulario-pedido.component.html',
  styleUrls: ['./formulario-pedido.component.scss']
})
export class FormularioPedidoComponent implements OnInit {
  formularioPedido: FormGroup = this.construtorFormulario.group({});
  @Output() formValidityChanged = new EventEmitter<boolean>();

  constructor(private construtorFormulario: FormBuilder) { }

  ngOnInit() {
    this.formularioPedido = this.construtorFormulario.group({
      endereco: ['', [Validators.required, Validators.minLength(5)]],
      numero: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      complemento: [''],
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telefone: ['', [Validators.required, Validators.pattern('^[0-9]*$')]]
    });
    this.formularioPedido.statusChanges.subscribe(status => {
      this.formValidityChanged.emit(status === 'VALID');
    });
  }

  enviar() {
    if (this.formularioPedido.valid) {
      console.log(this.formularioPedido.value);
    }
  }
}

