import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChartComponent } from "./components/chart/chart.component";
import { TicketcardComponent } from "./components/ticketcard/ticketcard.component";
import { UserstableComponent } from "./components/userstable/userstable.component";
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ChartComponent, TicketcardComponent, UserstableComponent,ButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'A-technology-task';
}
