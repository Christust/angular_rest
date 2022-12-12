# Iniciar el proyecto
```
ng new angular_rest
```
```
//app.module.ts
...
imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // Importamos FormsModule para utilizar ngModel y bindear variables
    FormsModule,
  ],
...
```
Crear las carpetas: components, guards, models, pages, pipes y services

Dentro de components crear las carpetas auth para componentes de autenticación y navigation para componentes de tipo navegación

# Generar componentes
```
ng g c pages/HomePage
...
ng g c pages/XPage
```
```
//app.routing.module.ts
const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "home",
  },
  {
    path: "home",
    component: HomePageComponent,
  },
  ...,
  {
    path: "**",
    component: NotFoundPageComponent,
  }
];
```
