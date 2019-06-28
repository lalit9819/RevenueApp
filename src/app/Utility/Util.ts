import { AlertController } from '@ionic/angular';

export class Utils {

    static async presentAlert(header: string, message: string, btnText: string, alertController: AlertController) {
        const alert = await alertController.create({
          message : '' + message,
          header  : '' + header,
          buttons : [btnText]
        });
        await alert.present();
      }
}
