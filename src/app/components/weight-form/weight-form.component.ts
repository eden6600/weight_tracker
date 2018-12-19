import { Component, OnInit } from '@angular/core';

import { Weight } from '../../models/weight';
import { WeightService } from '../../services/weight.service';

@Component({
  selector: 'app-weight-form',
  templateUrl: './weight-form.component.html',
  styleUrls: ['./weight-form.component.css']
})
export class WeightFormComponent implements OnInit {
  weight: number;
  date: any;
  isNew: boolean = true;

  constructor(private weightService: WeightService) {}

  ngOnInit() {
    this.weightService.selectedWeight.subscribe(weight => {
      if (weight.date !== null) {
        this.isNew = false;
        this.weight = weight.weight;
        this.date = weight.date;
      }
    });
  }

  onSubmit() {
    if (this.isNew) {
      const newWeight = {
        weight: this.weight,
        date: new Date()
      };
      this.weightService.addWeight(newWeight);
    } else {
      const updWeight = {
        weight: this.weight,
        date: this.date
      };
      this.weightService.updateWeight(updWeight);
    }

    this.clearState();
  }

  clearState() {
    this.weight = null;
    this.date = null;
    this.isNew = true;
  }

  onCancel() {
    this.isNew = true;
    this.weight = null;
    this.date = null;
  }
}
