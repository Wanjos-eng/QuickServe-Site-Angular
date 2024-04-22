import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadComponent } from './head/head.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RestaurantesComponent } from './restaurantes/restaurantes.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { RestauranteDetalsComponent } from './restaurante-detals/restaurante-detals.component';
import { MenuComponent } from './restaurante-detals/menu/menu.component';
import { ReviewsComponent } from './restaurante-detals/reviews/reviews.component';
import { CardComprarComponent } from './restaurante-detals/card-comprar/card-comprar.component';
import { FecharPedidoComponent } from './fechar-pedido/fechar-pedido.component';
import { CustosComponent } from './fechar-pedido/custos/custos.component';
import { FormularioPedidoComponent } from './fechar-pedido/formulario-pedido/formulario-pedido.component';
import { PedidoConcluidoComponent } from './pedido-concluido/pedido-concluido.component';

@NgModule({
    declarations: [
        AppComponent,
        HeadComponent,
        HomeComponent,
        AboutComponent,
        RestaurantesComponent,
        FooterComponent,
        RestauranteDetalsComponent,
        MenuComponent,
        ReviewsComponent,
        CardComprarComponent,
        FecharPedidoComponent,
        CustosComponent,
        FormularioPedidoComponent,
        PedidoConcluidoComponent,
    ],
    providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        RouterModule.forRoot([]),
        HttpClientModule,
        ReactiveFormsModule
    ]
})
export class AppModule { }
