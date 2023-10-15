import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, timeout } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class Main_serviceService {
  private databaseName = "DiabetsBandung";
  // private apiUrl = 'http://localhost:8069/api/per_diabets_bandung';
  // private api_profile = 'http://localhost:8069/api/get_profile';
  // private Url_authenticate = 'http://localhost:8069/web/session/authenticate';
  constructor(private http: HttpClient) { }

  authenticate(): Observable<any> {
    return this.http.post<any>("/web/session/authenticate", {
      params: {
        login: 'admin',
        password: '1234',
        db: 'DiabetsBandung'
      }
    }, { withCredentials: true });
  }

  public get_profile_test() {
    return this.http.post<any>("/api/get_profile",
      {
        params: {
          db: this.databaseName
        }
      },
      { withCredentials: true });
  }
  per_diabets_bandung(): Observable<any> {
    const payload = {
      params: {
        db: this.databaseName
      }
    };
    return this.http.post<any>("/api/per_diabets_bandung", payload);
  }
  get_profile(): Observable<any> {
    const payload = {
      params: {
        db: this.databaseName
      }
    };
    return this.http.post<any>("/api/get_profile", payload);
  }

}
