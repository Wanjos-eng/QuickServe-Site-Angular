import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-formulario-pedido',
  templateUrl: './formulario-pedido.component.html',
  styleUrls: ['./formulario-pedido.component.scss']
})
export class FormularioPedidoComponent implements OnInit {
  formularioPedido: FormGroup = this.construtorFormulario.group({});

  constructor(private construtorFormulario: FormBuilder) { }

  ngOnInit() {
    this.formularioPedido = this.construtorFormulario.group({
      endereco: ['', [Validators.required, Validators.minLength(5)]],
      numero: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      complemento: ['']
    });
  }

  enviar() {
    if (this.formularioPedido.valid) {
      console.log(this.formularioPedido.value);
    }
  }
}
