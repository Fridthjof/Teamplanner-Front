import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Injectable} from "@angular/core";

const httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class DataHandlerService {


    constructor(private http: HttpClient) {
    }


    private url = 'http://localhost:2659/api';

    getAllTechnologies() {
        return this.http.get(this.url + '/technology/getAllTechs', httpOptions);
    }

    createNewPerson(body) {
        return this.http.post(this.url + '/person/createPerson', body, httpOptions);
    }

    suggestTeam(body) {
        return this.http.post(this.url + '/team/suggestTeam', body, httpOptions);
    }
}