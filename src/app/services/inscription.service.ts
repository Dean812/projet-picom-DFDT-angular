import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../business/client';
import { Utilisateur } from '../business/utilisateur';

@Injectable({
  providedIn: 'root'
})
export class InscriptionService {

  private url: string = '';



  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      "Access-Control-Allow-Origin": '*'
    }),
  };

  constructor(private http: HttpClient) {
    this.url = 'http://localhost:8080/api';
  }

  public recupererUtilisateurs(): Observable<Utilisateur[]> {
    return this.http.get<Utilisateur[]>(this.url, this.httpOptions);
  }

  public ajouterClient(client: Client): Observable<Client> {
    return this.http.post<Client>(this.url + '/clientDto', client, this.httpOptions);
  }
}
