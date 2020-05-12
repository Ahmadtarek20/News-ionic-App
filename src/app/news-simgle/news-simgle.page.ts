import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-news-simgle',
  templateUrl: './news-simgle.page.html',
  styleUrls: ['./news-simgle.page.scss'],
})
export class NewsSimglePage implements OnInit {
  articles;
  constructor(private newsServ : NewsService , private router: Router) { }

  ngOnInit() {
    this.articles = this.newsServ.currentArticle;
    console.log(this.newsServ.currentArticle)
  }
  onBack(){
    this.router.navigate(['/tabs/news']);

  }
}
