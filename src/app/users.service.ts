import { Injectable } from '@angular/core';
//import { Http } from '@angular/http';
import { map } from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class UsersService {

    size = 8;

    constructor(private http: HttpClient) {}

    getUsers() {
        return this.http.get('https://randomuser.me/api/?inc=gender,name,picture,location&results='+ this.size +'&nat=gb')
            //.pipe(map(response => response.json()))
            .pipe(map(data => data['results']),
                map(users => {
                return users.map(u => {
                    return {
                        name: u.name.first + ' ' + u.name.last,
                        image: u.picture.large,
                        geo: u.location.city + ' ' + u.location.state + ' ' + u.location.street
                    }
                })
            }))
    }

    setSize(size) {
        this.size = size;
    }
}