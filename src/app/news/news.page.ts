import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {
 data : any;
  constructor(private newsServ : NewsService , private router: Router) { }

  ngOnInit() {
    this.newsServ.getData('everything?q=bitcoin&from=2020-04-12&sortBy=publishedAt').subscribe(data =>{
      console.log(data);
      this.data = data;
    })
  }
 onGoNewsSinglePage(articles){
      this.newsServ.currentArticle = articles ;
      this.router.navigate(['/news-simgle']);
    }
}
