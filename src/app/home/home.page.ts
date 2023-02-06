import { Component, ViewChildren } from '@angular/core';
import { SwiperOptions } from 'swiper';

import { SwiperComponent } from 'swiper/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
@ViewChildren('swiper') swiper?: SwiperComponent
config: SwiperOptions = {
  speed: 800,
  slidesOffsetAfter:200,
  width:300
}
constructor() {}




}
