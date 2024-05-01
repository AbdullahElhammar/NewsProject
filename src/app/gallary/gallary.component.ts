import { Component } from '@angular/core';
import { NewsService } from '../services/news.service';
import { NewsDto } from '../Types/NewsDto';

@Component({
  selector: 'app-gallary',
  templateUrl: './gallary.component.html',
  styleUrl: './gallary.component.css'
})
export class GallaryComponent {
  NewsList: NewsDto[] = [];
  FilteredList: NewsDto[] = [];
  constructor(private NewsService: NewsService) {
  }


  ngOnInit(): void {
    this.NewsService.GetAllNews().subscribe({
      next: (c) => {
        this.NewsList = c;
        this.FilteredList = this.NewsList;
      },
      error: (err) => {
        console.log(err);
      },
      complete() {
        console.log('Complete');
      },
    });
  }
}
