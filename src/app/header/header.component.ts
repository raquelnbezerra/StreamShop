import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  icon = faArrowLeft;
  isHome = false;

  constructor(private router: Router) {

    //Exibe a seta para voltar somente em Detail
    router.events.subscribe((val) => {
      if (this.router.url === '/') {
        this.isHome = true;
      } else {
        this.isHome = false;
      }
    });

  }

  ngOnInit(): void { }

}
