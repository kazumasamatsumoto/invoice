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
      itemImagePath: 'assets/img/itemImage/bigZeriImage.png',
      xym: '20 円',
      priceImagePath: 'assets/img/priceImage/yenImage.png',
      coinImagePath: 'assets/img/priceImage/coin2.png'
    },
    {
      title: 'チロルチョコ',
      url: 'chiroru-choko',
      icon: 'alert-circle',
      imgPath: 'assets/img/qrCode/chiroru-choko.png',
      itemImagePath: 'assets/img/itemImage/chiroruChocoImage.png',
      xym: '20 円',
      priceImagePath: 'assets/img/priceImage/yenImage.png',
      coinImagePath: 'assets/img/priceImage/coin2.png'
    },
    {
      title: 'カードくじ',
      url: 'card',
      icon: 'alert-circle',
      imgPath: 'assets/img/qrCode/card.png',
      itemImagePath: 'assets/img/itemImage/cardImage.png',
      xym: '20 円',
      priceImagePath: 'assets/img/priceImage/yenImage.png',
      coinImagePath: 'assets/img/priceImage/coin2.png'
    },
    {
      title: 'ガム',
      url: 'gum',
      icon: 'alert-circle',
      imgPath: 'assets/img/qrCode/gum.png',
      itemImagePath: 'assets/img/itemImage/gumImage.png',
      xym: '10 円',
      priceImagePath: 'assets/img/priceImage/yenImage.png',
      coinImagePath: 'assets/img/priceImage/coin.png'
    },
    {
      title: 'うまい棒',
      url: 'umaibou',
      icon: 'alert-circle',
      imgPath: 'assets/img/qrCode/umaiBou.png',
      itemImagePath: 'assets/img/itemImage/umaiBouImage.png',
      xym: '10 円',
      priceImagePath: 'assets/img/priceImage/yenImage.png',
      coinImagePath: 'assets/img/priceImage/coin.png'
    },
    {
      title: '5円チョコ',
      url: '5yen',
      icon: 'alert-circle',
      imgPath: 'assets/img/qrCode/goYen.png',
      itemImagePath: 'assets/img/itemImage/goYenImage.png',
      xym: '5 円',
      priceImagePath: 'assets/img/priceImage/yenImage.png',
      coinImagePath: 'assets/img/priceImage/goYenCoin.png'
    },
    {
      title: 'わかばくじ',
      url: 'wakaba',
      icon: 'alert-circle',
      imgPath: 'assets/img/qrCode/wakaba.png',
      itemImagePath: 'assets/img/itemImage/wakabaImage.png',
      xym: '10 円',
      priceImagePath: 'assets/img/priceImage/yenImage.png',
      coinImagePath: 'assets/img/priceImage/coin.png'
    },
    {
      title: 'レアカラーおりがみ',
      url: 'origami',
      icon: 'alert-circle',
      imgPath: 'assets/img/qrCode/origami.png',
      itemImagePath: 'assets/img/itemImage/origamiImage.png',
      xym: '10 円',
      priceImagePath: 'assets/img/priceImage/yenImage.png',
      coinImagePath: 'assets/img/priceImage/coin.png'
    },
    {
      title: 'スーパーボールすくい',
      url: 'superBall',
      icon: 'alert-circle',
      imgPath: 'assets/img/qrCode/superBall.png',
      itemImagePath: 'assets/img/itemImage/superBallImage.png',
      xym: '20 円',
      priceImagePath: 'assets/img/priceImage/yenImage.png',
      coinImagePath: 'assets/img/priceImage/coin2.png'
    },
    {
      title: 'こんにゃくぜりー',
      url: 'connyaku',
      icon: 'alert-circle',
      imgPath: 'assets/img/qrCode/connyaku.png',
      itemImagePath: 'assets/img/itemImage/connyakuImage.png',
      xym: '20 円',
      priceImagePath: 'assets/img/priceImage/yenImage.png',
      coinImagePath: 'assets/img/priceImage/coin2.png'
    },
    {
      title: 'お食事券',
      url: 'oshokuji',
      icon: 'alert-circle',
      imgPath: 'assets/img/qrCode/oshokuji.png',
      itemImagePath: 'assets/img/itemImage/oshokujiImage.png',
      xym: '50 円',
      priceImagePath: 'assets/img/priceImage/yenImage.png',
      coinImagePath: 'assets/img/priceImage/50yen.png'
    },
    {
      title: 'かたぬき',
      url: 'katanuki',
      icon: 'alert-circle',
      imgPath: 'assets/img/qrCode/katanuki.png',
      itemImagePath: 'assets/img/itemImage/katanukiImage.png',
      xym: '20 円',
      priceImagePath: 'assets/img/priceImage/yenImage.png',
      coinImagePath: 'assets/img/priceImage/coin2.png'
    },
    {
      title: '射的',
      url: 'shateki',
      icon: 'alert-circle',
      imgPath: 'assets/img/qrCode/shateki.png',
      itemImagePath: 'assets/img/itemImage/shatekiImage.png',
      xym: '20 円',
      priceImagePath: 'assets/img/priceImage/yenImage.png',
      coinImagePath: 'assets/img/priceImage/coin2.png'
    },
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
