import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';

@Component({
    selector: 'app-team',
    templateUrl: './team.component.html',
    styleUrls: ['./team.component.scss']
})
export class TeamComponent {
    constructor(private formBuiler: FormBuilder) {

    }

    teamForm: FormGroup = this.formBuiler.group({
        startDate: new FormControl(''),
        estimatedEndDate: new FormControl(''),
        customer: new FormControl(''),
        description: new FormControl(''),
    });
}
