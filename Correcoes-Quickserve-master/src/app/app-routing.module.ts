import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeadComponent } from './head/head.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RestaurantesComponent } from './restaurantes/restaurantes.component';
import { RestauranteDetalsComponent } from './restaurante-detals/restaurante-detals.component';
import { ReviewsComponent } from './restaurante-detals/reviews/reviews.component';
import { MenuComponent } from './restaurante-detals/menu/menu.component';
import { FecharPedidoComponent } from './fechar-pedido/fechar-pedido.component';
import { FormularioPedidoComponent } from './fechar-pedido/formulario-pedido/formulario-pedido.component';

const routes: Routes = [
  { path: 'head', component: HeadComponent },
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'restaurantes', component: RestaurantesComponent },
  { path: 'restaurantes/:id', component: RestauranteDetalsComponent,
  children: [
    {path: '', redirectTo: 'menu', pathMatch: 'full'},
    {path: 'menu', component: MenuComponent},
    {path: 'reviews', component: ReviewsComponent}
  ]},
  { path: 'fechar-pedido', component: FecharPedidoComponent,
  children: [
    {path: 'formulario', component: FormularioPedidoComponent}

  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
