import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.scss']
})
export class ImageSliderComponent implements OnInit {
  @Input() images: string[] = [];

  thumbWidth:number = 200;
  transulateX: number = 0;
  selected: number = 0;

  constructor() { }

  ngOnInit() {

  }


  handlePrev() {

    if(this.selected == 0) return;

    this.transulateX = (this.transulateX + this.thumbWidth);
    this.selected = this.selected - 1;

  }

  handleNext() {
    if(this.selected == (this.images.length -1)) return
    this.transulateX = (this.transulateX - this.thumbWidth);
    this.selected = this.selected + 1;

  }

  selectImage() {

  }

}
