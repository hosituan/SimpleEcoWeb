;import {Injectable} from  '@angular/core';
import { BehaviorSubject, Observable} from 'rxjs'
import { User } from './model'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';


@Injectable ({
    providedIn: 'root',
})
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;
    private urlAPI = 'http://localhost:8080/RESTful-API-using-Spring-Boot';
    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<User> (
            JSON.parse(localStorage.getItem('currentUser'))
        );
        this.currentUser = this.currentUserSubject.asObservable();
    }
    public login = (username: string, password: string) => {
        console.log(username);
        console.log(password);
    
        const loginUrl = `${this.urlAPI}/api/v1/user/signin`; 
        console.log(loginUrl);
        return this.http.post<any>(loginUrl, {
        username,
        password,
     })
        .pipe(
        map((user) => {
        console.log(user);
        if (user != null){
            localStorage.setItem('currentUser', JSON.stringify(user));
            this.currentUserSubject.next(user);
            return user;
     }
        else {
        return null;

        }
        }  
    )
    )
    };
    public isLoggedIn(): boolean {
        if (localStorage.getItem('currentUser') != null) {
        return true;
        }
        return false
      }
    public logout = () => { 
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
    }

}
