import { Component, OnInit } from '@angular/core';
import { Catalog } from '../models/catalog.model';
import { CatalogService } from '../sevices/catalog.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {

  catalog: Catalog[] = [];

  constructor(private catalogService: CatalogService) { }

  ngOnInit(): void {
    this.catalogService.getCatalog().subscribe(res => {
      this.catalog = res;
    })
  }

}
