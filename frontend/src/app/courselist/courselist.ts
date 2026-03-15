import { Component, inject, OnInit } from '@angular/core';
import { Courseservice } from '../courseservice';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-courselist',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './courselist.html',
  styleUrl: './courselist.css'
})
export class Courselist implements OnInit {

  courses:any[] = [];

  service = inject(Courseservice);

  ngOnInit(){
    this.getAllCourses();
  }

  getAllCourses(){

    this.service.getAllCourses().subscribe((res:any)=>{

      this.courses = res.courses;

    });

  }

  deleteCourse(id:number){

    if(confirm("Delete this course?")){

      this.service.deleteCourse(id).subscribe(()=>{

        alert("Course deleted");

        this.getAllCourses();

      });

    }

  }

}