import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-addUser',
    templateUrl: './addUser.component.html',
    styleUrls: ['./addUser.component.scss'],
})
export class addUserComponent implements OnInit {
    title = 'addUser';
    registerForm!: FormGroup;

    constructor(private fb: FormBuilder) {}

    ngOnInit() {
        this.createRegisterForm();
    }
    createRegisterForm() {
        this.registerForm = this.fb.group({
            fname: ['', Validators.compose([Validators.required])],
            lname: ['', Validators.compose([Validators.required])],
            emailId: [
                '',
                Validators.compose([
                    Validators.required,
                    Validators.pattern('^[A-Za-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'),
                ]),
            ],
        });
    }
    get f() {
        return this.registerForm.controls;
    }

    registerFormSubmit(value: any) {
        console.log(value, 'values');
    }
}
