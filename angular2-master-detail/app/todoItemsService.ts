import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from "rxjs/Observable";
import * as Models from "./Models/index";
import "rxjs/Rx"

@Injectable()
export class ToDoItemsService {
    private baseUrl = "http://localhost:31770/api/todo";  // web api URL
    constructor(private http: Http) { }

    getAll() {
        let result = this.http.get(this.baseUrl)
            .toPromise()
            .then(response => {
                let result = response.json();
                let items = result as Models.ToDoItem[];
            })
            .catch(error => {
                console.log("Errors occurred.");
                console.log(error);
                alert(error);
            });

    }

    getById() {
        alert("get by id");
    }

    put() {
        alert("Put");
    }

    post() {
        alert("Post");
    }

    delete() {
        alert("Delete");
    }
}