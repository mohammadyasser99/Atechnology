import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { QrcodeComponent } from "../qrcode/qrcode.component";
import { DividerModule } from 'primeng/divider';
import { TooltipModule } from 'primeng/tooltip';
import { Clipboard } from '@angular/cdk/clipboard';
@Component({
  selector: 'app-ticketcard',
  standalone: true,
  imports: [CardModule, ButtonModule, QrcodeComponent,DividerModule,TooltipModule],
  templateUrl: './ticketcard.component.html',
  styleUrl: './ticketcard.component.scss'
})
export class TicketcardComponent {
  constructor(private clipboard: Clipboard) { }
copyToClipboard() {
 
  const urlToCopy = 'https://www.tazkty.com/473847';
  this.clipboard.copy(urlToCopy);
  // Optionally, you can add a notification to show that the URL is copied
  alert('URL copied to clipboard!');
}

}
