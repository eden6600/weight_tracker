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
  constructor(private weightService: WeightService) {}

  ngOnInit() {
    this.weightService.getWeights().subscribe(weights => {
      this.weights = weights;
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
