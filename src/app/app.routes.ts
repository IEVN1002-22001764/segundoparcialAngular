import { Routes } from "@angular/router";

export const routes: Routes = [
  {
    path: "formulario",
    children: [
      {
        path: "usuarios",
        loadComponent: () =>
          import("./formularios/usuarios/usuarios").then((c) => c.Usuarios),
      },
      {
        path: "zodiaco",
        loadComponent: () =>
          import("./formularios/zodiaco/zodiaco").then((c) => c.Zodiaco),
      },
    ],
  },
  
 {
  path: "escuela",
  children: [
    {
      path: "lista-alumnos",
      loadComponent: () =>
        import("./escuela/lista-alumnos/lista-alumnos").then(
          (c) => c.ListaAlumnos
        ),
    },

    {
      path: "cinepolis",
      loadComponent: () =>
        import("./escuela/cinepolis/cinepolis").then((c) => c.Cinepolis),
    },
  ],
},

  {
    path: "",
    redirectTo: "admin",
    pathMatch: "full",
  },

];
