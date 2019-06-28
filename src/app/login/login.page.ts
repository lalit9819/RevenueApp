import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
import { Login } from './login.model';
import { AlertController } from '@ionic/angular';
import { Utils } from '../Utility/Util';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginResponse: Login;

  constructor(private router: Router, private service: LoginService, private alertController: AlertController) { }

  ngOnInit() {}

  onSubmit(form: NgForm) {

    if (!form.valid) {
      return;
    }

    this.service.authAPI(form)
    .subscribe((res: Login) => {
        this.loginResponse = res;
        console.log('Login : Success' + JSON.stringify(res));
        this.router.navigateByUrl('/dashboard');

    }, (error) => {
      Utils.presentAlert('Error', 'Authentication failed', 'OK', this.alertController);
    });
  }

  onRegister() {
    console.log('onRegister');
  }

}
