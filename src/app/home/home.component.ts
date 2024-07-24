import { Component, OnInit } from '@angular/core';
import { Product } from '../types';
import { MOCK_DATA } from '../../assets/MOCK_DATA';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  data: Product[] = MOCK_DATA;

  constructor() {}

  ngOnInit(): void {
    console.log(this.data);
  }
}
