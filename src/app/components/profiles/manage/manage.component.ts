import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.scss']
})
export class ManageComponent implements OnInit {

  users = [
    {
      img: 'assets/img/tigre.png',
      name: 'Lara Croft'
    },
    {
      img: 'assets/img/boneco.png',
      name: 'Ichigo Kurosaki'
    },
    {
      img: 'assets/img/catsz.png',
      name: 'Final Fantasy'
    },
    {
      img: 'assets/img/boneca.png',
      name: 'Alesandra & Zoe'
    },
    {
      img: 'assets/img/smile.png',
      name: 'Naruto Uzumaki'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
