import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss']
})
export class ExperiencesComponent implements OnInit {
  loading: boolean = true;
  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.loading = false;
    }, 2000);
  }

}
