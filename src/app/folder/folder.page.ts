import { InvoiceService } from './../services/invoice.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;
  public invoice;

  constructor(
    private activatedRoute: ActivatedRoute,
    public invoiceService: InvoiceService
    ) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(this.folder);
    this.invoice = this.invoiceService.getInvoice(this.folder);
    console.log(this.invoice);
  }

}
