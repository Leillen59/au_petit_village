import { Routes} from '@angular/router';

//Importation des différentes pages
import { HomeComponent } from './Pages/home/home.component.js';
import { AboutComponent } from './Pages/about/about.component.js'

import { ProductComponent } from './Pages/product/product.component.js';


export const routes: Routes = [
    { path: '', redirectTo: 'Accueil', pathMatch: 'full' },
    { path: 'Accueil', component: HomeComponent },
    { path: 'About', component: AboutComponent },
    { path: 'product/:id', component: ProductComponent },
];