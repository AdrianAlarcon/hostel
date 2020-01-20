import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(window).on('scroll', function () {
      if ($(window).scrollTop()) {
        $('nav').addClass('scrollMenu');
      }
      else {
        $('nav').removeClass('scrollMenu');
      }
    })
  }

}
