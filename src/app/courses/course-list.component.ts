import { Component, OnInit } from '@angular/core';
import { CourseDTO } from './course';
import { CourseService } from './course.service';

@Component({
  templateUrl: 'course-list.component.html',
})
export class CourseListComponent implements OnInit {
  filteredCourses: CourseDTO[] = [];

  _courses: CourseDTO[] = [];

  _filterBy: string = '';

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    this.listAll();
  }

  listAll(): void {
    this.courseService.listAll().subscribe({
      next: (course: CourseDTO[]) => {
        this._courses = course;
        this.filteredCourses = this._courses;
      },
      error: err => console.log(err)
    })
  }

  deleteById = async(id: number): Promise<void> => {
    try {
      await this.courseService.deleteById(id).toPromise();
      this.listAll();
    } catch (err) {
      console.log(err)
    }
  }

  set filter(value: string) {
    this._filterBy = value;
    this.filteredCourses = this._courses.filter(
      (course: CourseDTO) =>
        course.name?.toLowerCase().indexOf(this._filterBy.toLowerCase()) !== -1
    );
  }

  get filter() {
    return this._filterBy;
  }
}
