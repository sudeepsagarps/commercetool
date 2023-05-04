import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-addFeatures',
    templateUrl: './addFeatures.component.html',
    styleUrls: ['./addFeatures.component.scss'],
})
export class addFeaturesComponent implements OnInit {
    title = 'addFeatures';
    registerForm!: FormGroup;

    constructor(private fb: FormBuilder) {}

    ngOnInit() {
        this.createRegisterForm();
    }
    createRegisterForm() {
        this.registerForm = this.fb.group({
            category: ['', Validators.compose([Validators.required])],
            subCategory: ['', Validators.compose([Validators.required])],
            name: ['', Validators.compose([Validators.required])],
            description: ['', Validators.compose([Validators.required])],
            type: ['', Validators.compose([Validators.required])],
            featureRef: ['', Validators.compose([Validators.required])],
        });
    }
    get f() {
        return this.registerForm.controls;
    }

    registerFormSubmit(value: any) {
        console.log(value, 'values');
    }
}
