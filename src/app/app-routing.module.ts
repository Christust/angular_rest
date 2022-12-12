import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';

// Agregamos las rutas que queremos para nuestras pages, como objetos al array de Routes.
const routes: Routes = [
  {
    path: "",
    // pathMatch solo se activa cuando la ruta es exactamente la misma 
    pathMatch: "full",
    // redirect nos hace un redireccionamiento a la ruta que pongamos
    redirectTo: "home",
  },
  {
    path: "home",
    // Component especifica el componente que queremos renderizar
    component: HomePageComponent,
  },
  {
    path: "login",
    component: LoginPageComponent,
  },
  {
    // Al usar el path '**' declaramos que cuando no encuentre una ruta anteriormente use esta
    // por defecto
    path: "**",
    component: NotFoundPageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
