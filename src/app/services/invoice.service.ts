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
      imgPath: 'assets/img/qrCode/aquarius.png',
      itemImagePath: 'assets/img/itemImage/aquariusImage.png',
      xym: '10 円',
      priceImagePath: 'assets/img/priceImage/yenImage.png',
      coinImagePath: 'assets/img/priceImage/coin.png'
    },
    {
      title: 'ビックゼリー',
      url: 'big-zeri',
      icon: 'warning',
      imgPath: 'assets/img/qrCode/big-zeri.png',
      xym: '20 円',
      priceImagePath: 'assets/img/priceImage/yenImage.png',
      coinImagePath: 'assets/img/priceImage/coin.png'
    },
    {
      title: 'チロルチョコ',
      url: 'chiroru-choko',
      icon: 'alert-circle',
      imgPath: 'assets/img/qrCode/chiroru-choko.png',
      xym: '20 円'
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
