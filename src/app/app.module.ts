import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
// import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { addUserComponent } from './addUser/addUser.component';
import { addFeaturesComponent } from './addFeatures/addFeatures.component';
import { addProjectsComponent } from './addProjects/addProjects.component';

@NgModule({
    declarations: [AppComponent, addUserComponent, addFeaturesComponent, addProjectsComponent],
    imports: [BrowserModule, ReactiveFormsModule, AppRoutingModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
