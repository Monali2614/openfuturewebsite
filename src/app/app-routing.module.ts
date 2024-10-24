import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SolutionsComponent } from './solutions/solutions.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SliderComponent } from './slider/slider.component';
import { ServicesComponent } from './services/services.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { FooterComponent } from './footer/footer.component';

const routes: Routes = [

   {path:'',component:HomeComponent},
   {path:'solutions',component:SolutionsComponent},
   {path:'navbar',component:NavbarComponent},
   {path:'slider',component:SliderComponent},
   {path:'services',component:ServicesComponent},
   {path:'aboutus',component:AboutusComponent},
   {path:'footer',component:FooterComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
