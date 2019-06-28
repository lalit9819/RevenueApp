import { ModalController } from '@ionic/angular';
import { ApiService } from './../api.service';
import { Bill } from '../tabs/tab1/bill.model';
import { Component, OnInit } from '@angular/core';
import { ReplayComponent } from '../replay/replay.component';

@Component({
  selector: 'app-chart-details',
  templateUrl: './chart-details.page.html',
  styleUrls: ['./chart-details.page.scss'],
})
export class ChartDetailsPage implements OnInit {

  bill: Bill ;
  replayMessage: string;
  status = false;

  constructor(private api: ApiService, private modalCtrl: ModalController) { }

  ngOnInit() {
    //this.bill = new Bill('12/10/19', '12346', '789456 ', 'Lalit', 'MD signature', 'cmapus', 'biller name')

    this.getBillDetails();
  }

  async getBillDetails() {
   await this.api.getBillDetailsAPI('1').subscribe(
     (res) => {
        this.bill = res;
        console.log('success bill details:' + JSON.stringify(res));
     }, (error) => {
      console.log(error);
     });
  }

  openModal() {
    console.log('Open Model !!');
    this.modalCtrl.create({component: ReplayComponent})
    .then(modalE1 => {
      modalE1.present();
      return modalE1.onDidDismiss();
    })
    .then(resultData => {
      console.log(JSON.stringify(resultData.data) + '-' + resultData.role);
      if (resultData.role === 'ItemClick') {
        this.status = true;
      }
    });
  }

}
