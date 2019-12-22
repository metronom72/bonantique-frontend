import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ba-socials',
  templateUrl: './socials.component.html',
  styleUrls: ['./socials.component.scss']
})
export class SocialsComponent implements OnInit {

  constructor() { }

  socials = [
    {
      link: '',
      label: 'Telegram',
      icon: '/assets/images/telegram.svg',
    },
    {
      link: '',
      label: 'Instagram',
      icon: '/assets/images/instagram.svg',
    },
    {
      link: '',
      label: 'VK',
      icon: '/assets/images/vk.svg',
    }
  ];

  phone = '+7 911 812 26 53';

  ngOnInit() { }

}
