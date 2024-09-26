import { Component } from '@angular/core';
import { FirebaseService } from '../../../shared/services/firebase.service';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent {
  dataToSave = { name: 'John Doe', age: 30 };

  constructor(private firebaseService: FirebaseService) {}

  async saveData() {
    try {
      await this.firebaseService.saveData('users/user1', this.dataToSave);
      console.log('Data saved successfully!');
    } catch (error) {
      console.error('Error saving data:', error);
    }
  }

  async fetchData() {
    try {
      const data = await this.firebaseService.getData<{ name: string; age: number }>('users/user1');
      if (data) {
        console.log('Data retrieved:', data);
      } else {
        console.log('No data exists at the specified path.');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
}
