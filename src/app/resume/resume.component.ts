import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {
  loading: boolean = true;
  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.loading = false;
    }, 2000);
  }

}
