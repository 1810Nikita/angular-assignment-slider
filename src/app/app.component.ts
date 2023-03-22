import { Component } from '@angular/core';
import { Slide } from './model/slide.model';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  
})
export class AppComponent {
  //tilte
  title = 'assignment2';
  
  //slide array used for image and caption
  slides: Slide[] = [
    {
      imageUrl: 'https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      caption: 'Dynamic Angular slide',
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1592915388133-01d01750a974?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80',
      caption: 'Dynamic Angular slide',  
    },
    {
      imageUrl: 'https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      caption: 'Dynamic Angular slide',
    },
  ];

  newSlide: Slide = {
    imageUrl: '',
    caption: '', 
  };

  //add value to slide
  addSlide() {
    this.slides.push(this.newSlide);
    this.newSlide = {
      imageUrl: '',
      caption: ''
    };
  }

  ////delete value to slide
  deleteSlide(index: number) {
    this.slides.splice(index, 1);
  }
}


