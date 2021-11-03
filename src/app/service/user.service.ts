import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { catchError } from 'rxjs/operators';
import { Usuario } from '../model/userData';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor(
        private http: HttpClient,
        private router: Router
    ) { }

    private urlEndPoint: string = environment.urlserve;
    private httpHeader = new HttpHeaders().append('Content-Type', 'application/json; charset=utf-8');

    public get_users(): Observable<any> {
        return this.http.get<any>(
            `${this.urlEndPoint}/obtenerUsuarios`, 
            { headers: this.httpHeader }
        )
        .pipe(
            catchError(e => {
                //Swal.fire('Se produjo un error al intentar obtener la lista de impactos','Si el problema persiste favor de ponerse en contacto con soporte de mesa de ayuda','error');
                return throwError(e);
            })
        );
    }

    public save_user(user: any): Observable<any> {
        return this.http.put<any>(
            `${this.urlEndPoint}/guardarUsuario`, user,
            { headers: this.httpHeader }
        )
        .pipe(
            catchError(e => {
                //Swal.fire('Se produjo un error al intentar obtener la lista de impactos','Si el problema persiste favor de ponerse en contacto con soporte de mesa de ayuda','error');
                return throwError(e);
            })
        );
    }
}