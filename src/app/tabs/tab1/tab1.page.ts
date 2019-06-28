import { ApiService } from './../../api.service';
import { Component, OnInit } from '@angular/core';
import { Bill } from './bill.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  constructor(private router: Router, private api: ApiService) { }

  apiBillList: Bill[];

  // billList: Bill[] = [
  //   new Bill('12/10/19', '12346', '789456', 'Lalit', 'MD signature', 'cmapus', 'biller name'),
  //   new Bill('12/10/19', '12345', '123456', 'Abhi', 'ROR,MD signature', 'cmapus', 'biller name'),
  //   new Bill('12/10/19', '12345', '123456', 'Pratik', 'ROR,MD signature', 'cmapus', 'biller name')
  // ];

  ngOnInit() {
    this.getPendingBills();
  }

  async getPendingBills() {
    await this.api.pendingBillsAPI().subscribe(
      (res) => {
        this.apiBillList = res;
        console.log('pending success' + JSON.stringify(res));
      }
    , (error) => {
      console.log(error);
    });
  }

  segmentChanged(ev: any) {
    console.log('Segment changed', ev);
  }

  onListItemClick() {
    this.router.navigateByUrl('/chart-details');
    console.log('first bill' + JSON.stringify(this.apiBillList[0]));
  }

}
