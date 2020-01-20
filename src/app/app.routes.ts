import { NgModule } from "@angular/core";
import { Routes , RouterModule } from "@angular/router";

import { InicioComponent } from './home/inicio/inicio.component';

const rutas : Routes = [

    /*NAVEGADOR*/
    
    { path: "inicio" , component:InicioComponent },
    

    { path : "**" , pathMatch: "full" , redirectTo: "inicio" }
]

@NgModule({
    imports : [
        RouterModule.forRoot(rutas , { useHash : true, scrollPositionRestoration: 'enabled'})
    ],
    exports : [
        RouterModule
    ] 
})

export class AppRouting {}
