import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { addUserComponent } from './addUser/addUser.component';
import { addProjectsComponent } from './addProjects/addProjects.component';
import { addFeaturesComponent } from './addFeatures/addFeatures.component';

const routes: Routes = [
    { path: 'add-user', component: addUserComponent, pathMatch: 'full' },
    { path: 'add-projects', component: addProjectsComponent, pathMatch: 'full' },
    { path: 'add-features', component: addFeaturesComponent, pathMatch: 'full' },
    { path: '**', redirectTo: '' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
