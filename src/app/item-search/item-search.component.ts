import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import {Router} from "@angular/router";

import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';

import { Item } from '../item';
import { ItemService } from '../item.service';
import { consumeBinding } from '@angular/core/src/render3/instructions';

@Component({
  selector: 'app-item-search',
  templateUrl: './item-search.component.html',
  styleUrls: ['./item-search.component.css']
})
export class ItemSearchComponent implements OnInit {

  items$: Observable<Item[]>;
  private searchTerms = new Subject<string>();

  constructor(
    private itemService: ItemService,
    private router: Router  
  ) {}

  search(term: string): void {
    this.searchTerms.next(term);
  }

  goDetail(id: number) {
    this.router.navigate(['detail', `${id}`])
  }

  ngOnInit(): void {
    this.items$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.itemService.searchItems(term)),
    );
  }
}
