import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, timeout } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class Main_serviceService {
  private databaseName = "DiabetsBandung";
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

  per_diabets_bandung(applicationData: any): Observable<any> {
    const payload = {
      params: {
        db: this.databaseName,
        bps: applicationData.bps,
        bpd: applicationData.bpd,
        bw: applicationData.bw,
        height: applicationData.height,
        fbs: applicationData.fbs,
        bmi: applicationData.bmiz,
        tg: applicationData.tg,
        hdl: applicationData.hdl,
        creatinine: applicationData.creatinine,
        hba1c: applicationData.hba1c,
        fh: applicationData.fh,
        waist: applicationData.waist,
        smoking_type_id: applicationData.smoking_type_id,
        drinking_type_id: applicationData.drinking_type_id,
        egfr: applicationData.egfr
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
