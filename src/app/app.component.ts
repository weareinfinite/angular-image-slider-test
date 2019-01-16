import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'image-slider';
  images: string[] =  [
    'http://lorempixel.com/150/150/food/',
    'http://lorempixel.com/150/150/sports/',
    'http://lorempixel.com/150/150/city/',
    'http://lorempixel.com/150/150/nature/',
    'http://lorempixel.com/150/150/animals/',
    'http://lorempixel.com/150/150/cats/',
  ]


}
