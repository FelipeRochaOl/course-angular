import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { CourseDTO } from "./course";
import { CourseService } from "./course.service";

@Component ({
  templateUrl: 'course-info.component.html'
})
export class CourseInfoComponent implements OnInit {

  courseId: number = 0;

  course: CourseDTO | undefined;

  success: boolean | undefined;

  constructor(
    private activatedRouter: ActivatedRoute,
    private courseService: CourseService,
  ) {}

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.paramMap.get('id');

    if (id) {
      this.courseId = parseInt(id)
      this.courseService.findById(this.courseId).subscribe({
        next: ([course]: CourseDTO[]) => this.course = course,
        error: err => console.log(err)
      })
    }
  }

  save = async(): Promise<void> => {
    if (this.course) {
      const course = await this.courseService.save(this.course).toPromise();
      this.success = !!course;
    }
  }
}
