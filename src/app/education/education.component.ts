import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
  loading: boolean = true;
  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.loading = false;
    }, 2000);
  }

}
