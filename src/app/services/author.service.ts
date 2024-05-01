import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  private apiUrl = 'https://your-api-url.com/authors';

    constructor(private http: HttpClient) {}

    addAuthor(author: any): Observable<any> {
        return this.http.post<any>(this.apiUrl, author);
    }

    updateAuthor(author: any): Observable<any> {
        return this.http.put<any>(`${this.apiUrl}/${author.id}`, author);
    }

    deleteAuthor(authorId: number): Observable<any> {
        return this.http.delete<any>(`${this.apiUrl}/${authorId}`);
    }
}
