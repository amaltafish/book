import { Component } from '@angular/core';

import { ServiceService } from '../service.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent {
  constructor(private serviceService: ServiceService) { }

  add = (formBody: any) => {
    this.serviceService.addBook(formBody);
  }
}
