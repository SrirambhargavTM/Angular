import { Component, OnInit } from '@angular/core';
import { RetriveService } from '../services/retrive.service';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {

  allProducts:any

  constructor(private prodService: RetriveService) { }

  ngOnInit() {
    this.getProducts()
  }

  getProducts = function () {
    this.prodService.getAllProducts().subscribe((response) => {
      console.log(response);
      this.allProducts = response
    })
  }

}
