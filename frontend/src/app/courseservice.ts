import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Courseservice {

  http = inject(HttpClient);

  apiUrl = "http://localhost:3000/api/v1";

  getAllCourses(){
    return this.http.get<any>(`${this.apiUrl}/getallcourses`);
  }

  saveCourse(course:any){
    return this.http.post(`${this.apiUrl}/createcourse`,course);
  }

  updateCourse(course:any){
    return this.http.put(`${this.apiUrl}/updcourse/${course.courseid}`,course);
  }

  deleteCourse(id:number){
    return this.http.delete(`${this.apiUrl}/delcourse/${id}`);
  }

  getCourseById(id:number){
    return this.http.get<any>(`${this.apiUrl}/getcourse/${id}`);
  }

}