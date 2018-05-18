import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-multilang',
  templateUrl: './multilang.component.html',
  styleUrls: ['./multilang.component.css']
})
export class MultilangComponent implements OnInit {

  arabic:boolean=false;
  english:boolean=true;
  russian:boolean=false;

constructor(private translate: TranslateService, private http: HttpClient, private router: Router) {
    translate.setDefaultLang('en');
  }


ngOnInit() {
    this.arabic=false;
    this.english=true;
    this.russian=false;

    this.languagechange("english");
  }
 

 send_req() {
    this.http.get('http://localhost:8080/api/locale/').subscribe(data => {
      console.log(data);
    });

    this.http.post('http://localhost:8080/api/locale/', {
      title: 'locale',
      body: '8945'
    })
      .subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log("Error occured");
        }
      );
  }

  switchLanguage(language: string) {
    this.translate.use(language);
  }



languagechange(value){
  var p1 = document.getElementById("p1");
  if(value=="arabic"){
    this.arabic=true;
    this.english=false;
    this.russian=false;
     
    p1.setAttribute("dir", "rtl");
this.translate.use('ar');
    console.log("arabic is declared: ");
  }

  if(value=="english"){
    this.english=true;
    this.arabic=false;
    this.russian=false;
    console.log("english is declared eng: ");
    this.translate.use('en');
     p1.setAttribute("dir", "ltr");
    
  }
  if(value=="russian"){
    this.english=false;
    this.arabic=false;
    this.russian=true;
    console.log("english is declared eng: ");
    this.translate.use('ru');
     p1.setAttribute("dir", "ltr");
    
  }

}

}
