import { Component, Input } from '@angular/core';
import { NgIconComponent } from '@ng-icons/core';

@Component({
  selector: 'app-user-card',
  imports: [NgIconComponent],
  templateUrl: './user-card.html',
  styleUrl: './user-card.css',
})
export class UserCard {
  @Input() name: string = 'Name';
  @Input() email: string = 'email@example.com';
  @Input() role: string = 'Role';
}
