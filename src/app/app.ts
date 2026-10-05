import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FlowbiteService } from './services/flowbite';
import { Navbar } from './formularios/navbar/navbar';
import { Usuarios } from './formularios/usuarios/usuarios';

@Component({
  imports: [RouterOutlet, Navbar, Usuarios],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  title = 'segundoparcialAngular';
  private flowbiteService = inject(FlowbiteService);

  ngOnInit(): void {
    this.flowbiteService.loadFlowbite((flowbite) => {
      flowbite.initFlowbite();
    });
  }
}