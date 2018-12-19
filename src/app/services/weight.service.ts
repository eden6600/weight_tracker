import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';
import { of } from 'rxjs';

import { Weight } from '../models/weight';

@Injectable({
  providedIn: 'root'
})
export class WeightService {
  weights: Weight[];

  private weightSource = new BehaviorSubject<Weight>({
    weight: null,
    date: null
  });
  selectedWeight = this.weightSource.asObservable();

  constructor() {
    this.weights = [];
  }

  getWeights(): Observable<Weight[]> {
    if (localStorage.getItem('weights') !== null) {
      this.weights = JSON.parse(localStorage.getItem('weights'));
    }

    return of(this.weights);
  }

  setFormWeight(weight: Weight) {
    this.weightSource.next(weight);
  }

  addWeight(newWeight: Weight) {
    this.removeDuplicate(newWeight.date);
    this.weights.push(newWeight);

    localStorage.setItem('weights', JSON.stringify(this.weights));
  }

  updateWeight(updWeight: Weight) {
    this.removeDuplicate(updWeight.date);
    this.weights.push(updWeight);

    localStorage.setItem('weights', JSON.stringify(this.weights));
  }

  deleteWeight(date: any) {
    this.removeDuplicate(date);

    localStorage.setItem('weights', JSON.stringify(this.weights));
  }

  removeDuplicate(date: any) {
    this.weights.forEach((weight, index) => {
      if (weight.date.toLocaleDateString() === date.toLocaleDateString()) {
        this.weights.splice(index, 1);
      }
    });
  }
}
