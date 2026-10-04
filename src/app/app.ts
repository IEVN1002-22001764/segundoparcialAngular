import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Zodiaco } from './formularios/zodiaco/zodiaco';
import { FlowbiteService } from './services/flowbite.service';

@Component({
  imports: [RouterOutlet, Zodiaco],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  title = 'segundoparcialAngular';

  constructor(private flowbiteService: FlowbiteService) {}

  ngOnInit(): void {
    this.flowbiteService.loadFlowbite((flowbite) => {
      flowbite.initFlowbite();
    });
  }
}