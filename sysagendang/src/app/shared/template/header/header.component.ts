import { Component } from '@angular/core';
import { NavService } from '../nav/nav.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(public nav:NavService){}
}
