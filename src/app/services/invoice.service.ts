import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {
  public invoiceList = [
    {
      title: 'アクエリアス',
      url: 'aquarius',
      icon: 'mail',
      imgPath: 'assets/img/aquarius.png'
    },
    {
      title: 'ビックゼリー',
      url: 'big-zeri',
      icon: 'warning'
    },
    {
      title: 'チロルチョコ',
      url: 'chiroru-choko',
      icon: 'alert-circle'
    }
  ];

  constructor() { }

  getInvoiceList() {
    return this.invoiceList;
  }

  getInvoice(key: string) {
    for (const invoice of this.invoiceList) {
      if (invoice.url === key) {
        return invoice;
      }
    }
  }
}
