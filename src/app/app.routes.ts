import { Routes } from '@angular/router';
import { HomePage } from './features/home-page/home-page';
import { Consultas } from './features/consultas/consultas';
import { Servicios } from './shared/servicios/servicios';

export const routes: Routes = [
    //ruta inicial
    {path:'',component:HomePage},
    {path:'consultas',component:Consultas},
    {path:'servicios', component:Servicios},

    //Error 404
    //{path:'**', component:Pagina404}
];
