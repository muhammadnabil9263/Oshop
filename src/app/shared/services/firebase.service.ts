import { Injectable } from '@angular/core';
import { Database, ref, set, get, child } from '@angular/fire/database';
import { getDatabase } from '@firebase/database';
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  private db: Database;

  constructor() {
    this.db = getDatabase();
  }

  // Method to save data
  async saveData(path: string, data: any): Promise<void> {
    const dbRef = ref(this.db, path);
    await set(dbRef, data);
  }

  // Method to get data
  getData<T>(path: string): Observable<T | null> {
    const dbRef = ref(this.db);
    const dataPromise = get(child(dbRef, path)).then(snapshot => {
      if (snapshot.exists()) {
        return snapshot.val() as T;
      } else {
        return null;
      }
    });

    return from(dataPromise);
  }

  
}
