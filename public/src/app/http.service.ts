import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private _http: HttpClient) {

  }
  getAuthors() {
    return this._http.get('/authors');
  }


  getAuthorsByID(id) {
    return this._http.get(`/authors/${id}`);   //you can also use this format for the parameter   get("/authors/" + id)
  }

  addAuthors(newAuthor) {
    console.log("Post data from newAuthor in http.servic.ts in addTask method.", newAuthor);
    return this._http.post('/authors', newAuthor)
  }

  updateAuthors(id: any, updateAuthor) {
    console.log("Update data from updateAuthor in http.servic.ts in updateAuthor method.", updateAuthor);
    return this._http.put('/authors/' + id, updateAuthor)
  }


  deleteAuthors(id) {
    // console.log("Delete id from newTask in http.servic.ts in addTask method.", id);
    return this._http.delete('/authors/' + id)
  }

}


