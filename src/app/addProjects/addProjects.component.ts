import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-addProjects',
    templateUrl: './addProjects.component.html',
    styleUrls: ['./addProjects.component.scss'],
})
export class addProjectsComponent implements OnInit {
    title = 'addProjects';
    registerForm!: FormGroup;

    constructor(private fb: FormBuilder) {}

    ngOnInit() {
        this.createRegisterForm();
    }
    createRegisterForm() {
        this.registerForm = this.fb.group({
            sector: ['', Validators.compose([Validators.required])],
            poc: ['', Validators.compose([Validators.required])],
            name: ['', Validators.compose([Validators.required])],
            notes: ['', Validators.compose([Validators.required])],
            clientBase: ['', Validators.compose([Validators.required])],
            practice: ['', Validators.compose([Validators.required])],
            domain: ['', Validators.compose([Validators.required])],
            lastServed: ['', Validators.compose([Validators.required])],
            multiBrand: ['', Validators.compose([Validators.required])],
            multiSite: ['', Validators.compose([Validators.required])],
            regionUS: ['', Validators.compose([Validators.required])],
            regionCA: ['', Validators.compose([Validators.required])],
            regionEU: ['', Validators.compose([Validators.required])],
            regionAUNZ: ['', Validators.compose([Validators.required])],
            regionChina: ['', Validators.compose([Validators.required])],
            brandNames: ['', Validators.compose([Validators.required])],
        });
    }
    get f() {
        return this.registerForm.controls;
    }

    registerFormSubmit(value: any) {
        console.log(value, 'values');
    }
}
