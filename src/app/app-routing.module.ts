import { TechavidusComponent } from './cname/techavidus/techavidus.component';
import { CnameComponent } from './cname/cname.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RadixwebComponent } from './cname/radixweb/radixweb.component';


const routes: Routes = [
  {path:"cname",component:CnameComponent,
  children:[
    {path:"techavidus",component:TechavidusComponent},
    {path:"radixweb",component:RadixwebComponent}]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
