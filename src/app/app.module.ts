import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule, MatInputModule, MatSelectModule, MatTabsModule} from '@angular/material';
import {ProjectComponent} from "./components/project/project.component";
import {TeamComponent} from "./components/team/team.component";
import {PersonComponent} from "./components/person/person.component";
import {DataHandlerService} from "./services/datahandler.service";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
    declarations: [
        AppComponent,
        PersonComponent,
        ProjectComponent,
        TeamComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,

        // Material
        MatTabsModule,
        MatSelectModule,
        MatInputModule,
        MatButtonModule
    ],
    providers: [
        DataHandlerService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
