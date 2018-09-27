import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';

@Component({
    selector: 'app-project',
    templateUrl: './project.component.html',
    styleUrls: ['./project.component.scss']
})
export class ProjectComponent {
    constructor(private formBuiler: FormBuilder) {

    }

     projectForm: FormGroup = this.formBuiler.group({
         startDate: new FormControl(''),
         estimatedEndDate: new FormControl(''),
         customer: new FormControl(''),
         description: new FormControl(''),
    });
}
