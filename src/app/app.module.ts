import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { JwtModule } from '@auth0/angular-jwt';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from './interceptors/jwt.interceptor';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { InicioComponent } from './inicio/inicio.component';
import { RouterModule } from '@angular/router';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { RegistroClienteComponent } from './registro-cliente/registro-cliente.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { CatFantasiaComponent } from './cat-fantasia/cat-fantasia.component';
import { CatTerrorComponent } from './cat-terror/cat-terror.component';
import { CatSuspensoComponent } from './cat-suspenso/cat-suspenso.component';
import { CatDramaComponent } from './cat-drama/cat-drama.component';
import { CatHistoricoComponent } from './cat-historico/cat-historico.component';
import { CarritoComprasComponent } from './carrito-compras/carrito-compras.component';
import { RegistroAdminComponent } from './registro-admin/registro-admin.component';
import { PagosComponent } from './pagos/pagos.component';
import { EventosComponent } from './eventos/eventos.component';
import { RegistroLibroComponent } from './registro-libro/registro-libro.component';
import { StockComponent } from './stock/stock.component';
import { RegistroClienteService } from './registro-cliente/registro-cliente.service';
import { CatAccionComponent } from './cat-accion/cat-accion.component';

export function tokenGetter() {
  return localStorage.getItem('token');
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    InicioComponent,
    InicioSesionComponent,
    RegistroClienteComponent,
    CategoriasComponent,
    CatFantasiaComponent,
    CatTerrorComponent,
    CatSuspensoComponent,
    CatDramaComponent,
    CatAccionComponent,
    CatHistoricoComponent,
    CarritoComprasComponent,
    RegistroAdminComponent,
    PagosComponent,
    EventosComponent,
    RegistroLibroComponent,
    StockComponent
  ],
  imports: [
    BrowserModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter
      }
    }),
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path: '', component: InicioComponent},
      {path: 'app-inicio-sesion', component: InicioSesionComponent},
      {path: 'app-registro-cliente', component: RegistroClienteComponent},
      {path: 'app-categorias', component: CategoriasComponent},
      {path: 'app-cat-fantasia', component: CatFantasiaComponent},
      {path: 'app-cat-terror', component: CatTerrorComponent},
      {path: 'app-cat-suspenso', component: CatSuspensoComponent},
      {path: 'app-cat-drama', component: CatDramaComponent},
      {path: 'app-cat-accion', component: CatAccionComponent},
      {path: 'app-cat-historico', component: CatHistoricoComponent},
      {path: 'app-registro-libro', component: RegistroLibroComponent},
      {path: 'app-registro-admin', component: RegistroAdminComponent},
      {path: 'app-pagos', component: PagosComponent},
      {path: 'app-eventos', component: EventosComponent},
      {path: 'app-carrito-compras', component: CarritoComprasComponent},
      {path: 'app-stock', component: StockComponent},
    ]),
  ],
  providers: [
    RegistroClienteService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
