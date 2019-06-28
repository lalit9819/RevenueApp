import { ApiService } from './../api.service';
import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-replay',
  templateUrl: './replay.component.html',
  styleUrls: ['./replay.component.scss'],
})
export class ReplayComponent implements OnInit {
  replayList: string[];

  constructor(private api: ApiService, private modalCtrl: ModalController) { }

  // replayList1: string[] = ['patient demographic required!',
  // 'providers details required', 'DOS required', 'MRN required', 'Need correct visit number',
  // 'Nunc ultrices', 'Lorem ipsum dolor sit amet', 'curabitur' , 'Phasellus vel felis'];

  ngOnInit() {
    this.getReplayMessages();
  }

  async getReplayMessages() {
    await this.api.getReplyMessageAPI().subscribe(
      (res) => {
        this.replayList = res.messageList;
        console.log('success bill details:' + JSON.stringify(res.messageList));
      }, (error) => {
       console.log(error);
      });
   }

  onCancel() {
    this.modalCtrl.dismiss(null, 'cancel');
  }

  onListItemClick(replay: string) {
    this.modalCtrl.dismiss({message: replay}, 'ItemClick');
  }

}
