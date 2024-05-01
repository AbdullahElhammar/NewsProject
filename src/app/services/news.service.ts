import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NewsAddDto } from '../Types/NewsAddDto';
import { UpdateNewsDto } from '../Types/UpdateNewsDto';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
 

  constructor(private http: HttpClient) { }
  public GetAllNews(): Observable<any> {
    return this.http.get<any>(
      'https://localhost:7159/api/News/GetAllNews'
    );
  }


  addNews(news:any):Observable<NewsAddDto> {
  const myheaders =new HttpHeaders().set('Authorization',`Bearer ${localStorage.getItem('token')}`)
  return this.http.post<any>('https://localhost:7159/api/News/AddNews',
     news,
     {
      headers:myheaders,
     });
 }

updateNews(news: any): Observable<UpdateNewsDto> {
  const myheaders =new HttpHeaders().set('Authorization',`Bearer ${localStorage.getItem('token')}`)
  return this.http.put<any>('https://localhost:7159/api/News/UpdateNews',
     news,
     {
      headers:myheaders,
     });
}

deleteNews(newsId: number): Observable<any> {
  const myheaders =new HttpHeaders().set('Authorization',`Bearer ${localStorage.getItem('token')}`)
  return this.http.put<any>('https://localhost:7159/api/News/DeleteNews',
  newsId,
     {
      headers:myheaders,
     });
}
}
