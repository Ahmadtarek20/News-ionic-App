import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
const ApI_URL = environment.aoiurl;
const ApI_Key = environment.apiKey;


@Injectable({
  providedIn: 'root'
})
export class NewsService {
 currentArticle: any;
  constructor(private http: HttpClient) { }

  getData(url){
    return this.http.get(`${ApI_URL}/${url}&apiKey=${ApI_Key}`);
  }
}
