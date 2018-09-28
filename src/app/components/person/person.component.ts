import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {DataHandlerService} from '../../services/datahandler.service';

@Component({
    selector: 'app-person',
    templateUrl: './person.component.html',
    styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {

    personForm: FormGroup = this.formBuiler.group({
        education: new FormControl(''),
        technologies: new FormControl(''),
        yearsOfExp: new FormControl(''),
        name: new FormControl(''),
        email: new FormControl(''),
        cellnumber: new FormControl('')
    });

    constructor(private formBuiler: FormBuilder,
                private dataService: DataHandlerService) {

    }

    techsArr: any = [];

    ngOnInit() {

        this.dataService.getAllTechnologies().subscribe(res => {
                this.techsArr = res;
            },
            error2 => {
                console.log(error2);
            });
    }

    createPerson() {
        this.dataService.createNewPerson(this.personForm.value).subscribe(res => {
                console.log(res);
            },
            err => {
                console.log(err.status);
            });
        this.personForm.reset();
    }

}
