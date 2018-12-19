import { Component, OnInit } from '@angular/core';

import { Weight } from '../../models/weight';
import { WeightService } from '../../services/weight.service';

@Component({
  selector: 'app-weights-list',
  templateUrl: './weights-list.component.html',
  styleUrls: ['./weights-list.component.css']
})
export class WeightsListComponent implements OnInit {
  weights: Weight[];
  avgWeight: number;
  constructor(private weightService: WeightService) {}

  ngOnInit() {
    this.weightService.getWeights().subscribe(weights => {
      this.weights = weights;

      let totalWeight = 0;
      this.weights.forEach(weight => {
        totalWeight += weight.weight;
      });
      this.avgWeight = totalWeight / this.weights.length;
    });
  }

  onSelect(weight: Weight) {
    this.weightService.setFormWeight(weight);
  }

  onDelete(date: any) {
    if (confirm(`Delete weight of ${date.toLocaleDateString()}?`)) {
      this.weightService.deleteWeight(date);
    }
  }
}
