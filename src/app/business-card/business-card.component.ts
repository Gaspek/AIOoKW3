import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ShowDateComponent } from '../show-date/show-date.component';
import { CommonModule } from '@angular/common';
import { ManageInterestsComponent } from '../manage-interests/manage-interests.component';

@Component({
  selector: 'app-business-card',
  standalone: true,
  imports: [FormsModule,ShowDateComponent,CommonModule, ManageInterestsComponent],
  templateUrl: './business-card.component.html',
  styleUrl: './business-card.component.css'
})
export class BusinessCardComponent {
  name: string;
  surname: string;
  dateOfBirth: Date;
  interests: string[];
  selected:number=-1;
  savedInterests: string[];

  constructor() { 
    this.name = 'Joanna';
    this.surname = 'Krupa';
    this.dateOfBirth = new Date('2000-03-18');
    this.interests = ['tennis', 'programming', 'photography'];
    this.savedInterests = [];
  }

  selectInterest(which:number):void{
      this.selected=which;
      if(this.selected == -1 || this.savedInterests.length == 0){
        this.savedInterests = [...this.interests];  }
      }

  revertInterest(): void {
    if (this.selected !== -1) {
      this.interests =  [...this.savedInterests];
      this.selected = -1;
    }
  }

  
}
