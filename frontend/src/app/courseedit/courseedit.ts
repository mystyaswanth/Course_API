import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Courseservice } from '../courseservice';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
selector: 'app-courseedit',
standalone: true,
imports: [FormsModule, CommonModule],
templateUrl: './courseedit.html',
styleUrl: './courseedit.css'
})
export class Courseedit implements OnInit{

course:any={};

service=inject(Courseservice);

route=inject(ActivatedRoute);

router=inject(Router);

ngOnInit(){

const id=this.route.snapshot.paramMap.get('id');

this.service.getCourseById(Number(id)).subscribe((res:any)=>{

this.course=res.course;

});

}

updateCourse(){

this.service.updateCourse(this.course).subscribe(()=>{

alert("Course Updated");

this.router.navigate(['/courselist']);

});

}

}