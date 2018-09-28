import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {DataHandlerService} from '../../services/datahandler.service';

@Component({
    selector: 'app-project',
    templateUrl: './project.component.html',
    styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
    constructor(private formBuiler: FormBuilder,
                private dataService: DataHandlerService) {

    }

    techsArr: any = [];

    projectForm: FormGroup = this.formBuiler.group({
        startDate: new FormControl(''),
        estimatedEndDate: new FormControl(''),
        customer: new FormControl(''),
        description: new FormControl(''),
        technologies: new FormControl('')
    });

    ngOnInit() {
        this.dataService.getAllTechnologies().subscribe(res => {
                this.techsArr = res;
            },
            error2 => {
                console.log(error2);
            });
    }

    suggestTeam() {
        this.dataService.suggestTeam(this.projectForm.value.technologies).subscribe(res => {
            console.log(res);
        },
            error2 => {
            console.log(error2);
            });
    }
}
