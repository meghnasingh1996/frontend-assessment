import { Component, OnInit } from '@angular/core';
import { ListComponentService} from './list-component.service';

@Component({
  selector: 'app-list-component',
  templateUrl: './list-component.component.html',
  styleUrls: ['./list-component.component.css']
})
export class ListComponentComponent implements OnInit {

let data : [] ;
let results : [];

  constructor(
    private list : ListComponentService
  ) { }

  ngOnInit(): void {
    getAll(){
  this.list.getAll().subscribe((results) => {
    this.data = results.results;
  });
}
}
  }


