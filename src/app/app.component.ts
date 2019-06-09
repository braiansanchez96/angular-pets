import { Component } from '@angular/core';
import { CatService } from './service/cat.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cat-facts';

  constructor(private catService: CatService) {}

  generate() {
    this.catService.getFact().subscribe(res => {
      console.log(res);
    })
  }
}
