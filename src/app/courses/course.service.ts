import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CourseDTO } from './course';

@Injectable({
  providedIn: 'root',
})
export class CourseService {

  _apiUrl: string = environment.apiURL;

  constructor(private httpClient: HttpClient) {}

  listAll(): Observable<CourseDTO[]> {
     return this.httpClient.get<CourseDTO[]>(this._apiUrl);
  }

  findById(id: number): Observable<CourseDTO[]> {
    return this.httpClient.get<CourseDTO[]>(this._apiUrl, { params:{id} });
  }

  deleteById(id: number): Observable<any> {
    return this.httpClient.delete<any>(`${this._apiUrl}/${id}}`);
  }

  save(course: CourseDTO): Observable<CourseDTO> {
    return this.httpClient.put<CourseDTO>(`${this._apiUrl}/${course.id}`, course);
  }
}
