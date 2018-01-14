import { Injectable } from '@angular/core';
import {Observable} from "RxJS/Rx";
import 'rxjs/add/operator/map';
import {SERVER_URL} from "../../config/config"
import { Http,Headers } from '@angular/http';

/*
The following service is specified to provide the 
connection between the components and server.
*/

@Injectable()
export class APIService {
  public isLogin:boolean = false
  public sessionId:string
  
  constructor(private http: Http) { }
  
  login(userName:string, password:string):Observable<any>{
	var headers = new Headers();
	headers.append('Content-Type', 'application/x-www-form-urlencoded');
	let urlSearchParams = new URLSearchParams();
	urlSearchParams.append('action', "login");
	urlSearchParams.append('email', userName);
	urlSearchParams.append('password', password);
	urlSearchParams.append('os', "android");
	urlSearchParams.append('devicetoken', "android");
	let body = urlSearchParams.toString()
    return this.http
    .post(SERVER_URL,body,{headers: headers})
    .map(res =>{
		console.log(res)
		
     return res.json()
    })
  }
  registration(email,sex,int,dt){
	var headers = new Headers();
	headers.append('Content-Type', 'application/x-www-form-urlencoded');
	let urlSearchParams = new URLSearchParams();
	urlSearchParams.append('action', "reg");
	urlSearchParams.append('email', email);
	urlSearchParams.append('sex', sex);
	urlSearchParams.append('interested', int);
	urlSearchParams.append('distance', "50");
	urlSearchParams.append('devicetoken', dt);
	let body = urlSearchParams.toString()
    return this.http
    .post(SERVER_URL,body,{headers: headers})
    .map(res =>{
		console.log(res)
     return res.json()
    })
  }
  getList(love,lat,long,int){
	var headers = new Headers();
	headers.append('Content-Type', 'application/x-www-form-urlencoded');
	let urlSearchParams = new URLSearchParams();
	urlSearchParams.append('action', "getPersons");
	urlSearchParams.append('love', love);
	urlSearchParams.append('id', this.sessionId);
	urlSearchParams.append('latitude', lat);
	urlSearchParams.append('longitude', long);
	urlSearchParams.append('interested', int);
	let body = urlSearchParams.toString()
    return this.http
    .post(SERVER_URL,body,{headers: headers})
    .map(res =>{
		console.log(res)
     return res.json()
    })
  }
}