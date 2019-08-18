import { Component,OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title           = 'Product List'; 
  cartItem        = 0;
  cartTotalAmt    = 0;
  cartList        = [];
  slideIndex      = 0;
  arrDisplay      = [];
  d               = {display: 'block;'};

  arrImageList  = [
    {
      url :"https://www.w3schools.com/howto/img_nature_wide.jpg",
      heading : "heading 1"
    },
    {
      url :"https://www.w3schools.com/howto/img_snow_wide.jpg",
      heading : "heading 2"
    },
    {
      url :"https://www.w3schools.com/howto/img_mountains_wide.jpg",
      heading : "heading 3"
    },
    {
      url :"https://www.w3schools.com/howto/img_mountains_wide.jpg",
      heading : "heading 4"
    },
    {
      url :"https://www.w3schools.com/howto/img_snow_wide.jpg",
      heading : "heading 5"
    }
  ]
 
  

  constructor() { }
   ngOnInit() {
    $(window).click(function () {
      alert('ok');
      });

      $("#slider4").responsiveSlides({
        auto: true,
        pager: false,
        nav: true,
        speed: 500,
        namespace: "callbacks",
      });
  }
   
}
