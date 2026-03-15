import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Courseservice } from '../courseservice';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-courseadd',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './courseadd.html',
  styleUrl: './courseadd.css'
})
export class Courseadd {

course:any={};

service = inject(Courseservice);

router = inject(Router);

saveCourse(){

this.service.saveCourse(this.course).subscribe(()=>{

alert("Course Added");

this.router.navigate(['/courselist']);

});

}

}