import { Component, OnInit, LOCALE_ID, Inject } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, @Inject(LOCALE_ID) protected localeId: string) { }

  ngOnInit() {
    this.localeId="en";
  }

   username: string =  "rapids";
  pwd:string = "rapids";

  
login()
{
  console.log("username ",this.username)
  console.log("password", this.pwd)
  if(this.username=="rapids" && this.pwd=="rapids"){
  this.router.navigate(['/multilang']);
}
// else{
//   let alert = this.alertService.create({
//         subTitle: 'Invalid Username/Password',
//         buttons: ['OK']
//     });

//     alert.present();
//}

}

}
