import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../services/news.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news-management',
  templateUrl: './news-management.component.html',
  styleUrl: './news-management.component.css'
})
export class NewsManagementComponent  {
  images: any;
  OnSelectedImages(e: any) {
    this.images = e.target.files;
    console.log(this.images);
  }
  UpdateNewsForm:FormGroup;
  DeleteNewsForm:FormGroup;
  AddNewsForm:FormGroup;

  constructor(
    private newsService: NewsService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.AddNewsForm = this.fb.group({
      Title: ['', Validators.required],
      Description: [, Validators.required],
      Images: [[]],
    });
    this.UpdateNewsForm= this.fb.group({
        Id: [0, Validators.required],
        Title: ['', Validators.required],
        Description: ['', Validators.required],
    });
    this.DeleteNewsForm= this.fb.group({
        Id: [, Validators.required]
    });
  }
    
  submitAddData() {
    let fd = new FormData();
    fd.append('Title', this.AddNewsForm.value.Title);
    fd.append('Description', this.AddNewsForm.value.Description);
    Array.from(this.images).forEach((f: any) => {
      fd.append('Images', f);
    });
    this.newsService.addNews(fd).subscribe((response) => {
      console.log('News Data Added Successfully', response);
    });
  }
  onFileSelected(event: any) {
    this.AddNewsForm.patchValue({ Images: event.target.files });
  }

  submitUpdateData() {
    let fd = new FormData();
    fd.append('Id', this.UpdateNewsForm.value.Id);
    fd.append('Title', this.UpdateNewsForm.value.Title);
    fd.append('Description', this.UpdateNewsForm.value.Description);
    this.newsService.updateNews(fd).subscribe((response) => {
        console.log('News Data Updated Successfully', response);
      });
  }
  submitDeleteData() {
    let fd = new FormData();
    fd.append('Id', this.DeleteNewsForm.value.Id);
    this.newsService.deleteNews(fd).subscribe((response) => {
        console.log('News Data deleted Successfully', response);
      });
  }
}
