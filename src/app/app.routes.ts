import {Routes, RouterModule} from '@angular/router';
import {HeroFormComponent} from './hero-form.component';
import { AppComponent } from './app.component';
import {ItemComponent} from './item.component';

const AppRoutes: Routes = [
    {path: '', redirectTo: 'login', pathMatch: 'full'},
    {path: 'login', component: AppComponent},
    {path: 'hero', component: HeroFormComponent},
    {path: 'item', component: ItemComponent}
]

export const routes = RouterModule.forRoot(AppRoutes);
