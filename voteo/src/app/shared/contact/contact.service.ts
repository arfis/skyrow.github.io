import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor() {
  }

  getOwnUserInfo() {
    return of(
      {
        name: 'Kamil Bitcoach',
        city: 'Bratislava',
        contacts: 3,
        email: 'info@bitcoach.net',
        picture: '/assets/img/bitcoachlogo.jpg',
        validated: true
      });
  }

  getContacts(): Observable<any> {
    return of([
      {
        name: 'Lukas Cader',
        picture: '/assets/img/bitcoachlogoblack.jpg',
        city: 'Bratislava',
        contacts: 4,
        email: 'info@bitcoach.net',
        validated: true
      },
      {
        name: 'Michal Sevcik',
        picture: '/assets/img/bitcoachlogoblack.jpg',
        city: 'Bratislava',
        contacts: 3,
        email: 'info@bitcoach.net',
        validated: true
      },
      {
        name: 'Branislav Mojsej',
        picture: '/assets/img/bitcoachlogoblack.jpg',
        city: 'Horna Dolna',
        contacts: 150,
        email: 'info@bitcoach.net',
        validated: false
      }
    ]);
  }
}
