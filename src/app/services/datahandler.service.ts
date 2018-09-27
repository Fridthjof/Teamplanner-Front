import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Injectable} from "@angular/core";

const httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class DataHandlerService {


    constructor(private http: HttpClient) {
    }


    private url = 'http://localhost:8080/api';

    getAllTechnologies() {
        return this.http.get(this.url + '/technology/getAllTechs', httpOptions);
    }

    createNewPerson(body) {
        return this.http.post(this.url + '/person/createPerson', body, httpOptions);
    }
}