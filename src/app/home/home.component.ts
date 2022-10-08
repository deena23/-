import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  loading: boolean = true;
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.loading = false;
    }, 2000);
  }
  clk_exp()
  {
    this.router.navigate(['Experience']);
  }
  clk_edu()
  {
    this.router.navigate(['Education']);
  }
  clk_resume()
  {
    this.router.navigate(['Resume']);
  }
}
