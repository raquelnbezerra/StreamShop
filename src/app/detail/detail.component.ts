import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CatalogService } from '../sevices/catalog.service';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  private id: any;
  film: any;
  banner: any;
  faHeart = faHeart;

  constructor(private catalogService: CatalogService, private route: ActivatedRoute) {




    this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.getBanner();
    });

    this.catalogService.getMovieById(this.id).subscribe(res => {

      this.film = res;
    })

  }

  ngOnInit(): void {
  }

  getBanner() {
    this.catalogService.getCatalog().subscribe(res => {

      this.banner = res.find((x: any) => x.id == this.id)

      // item.find(x=> x.id == '23803')
    })
  }

}
