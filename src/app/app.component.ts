import { Component, OnInit } from '@angular/core';
import {NewsService} from './news.service';
import { Source } from 'webpack-sources';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  mArticles: Array<any>;
  mSources: Array<any>;
 
 ngOnInit():void{
   this.news.initArticles().subscribe(data => this.mArticles= data['articles']);
   this.news.initSources().subscribe(data=>this.mSources=data['sources']);
 }
   searchArticles(source:string)
   {
     this.news.initArticlesById(source).subscribe(data=>this.mArticles=data['articles']);

   }
 constructor(private news: NewsService){}
}
