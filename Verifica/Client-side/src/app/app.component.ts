import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Client-side';
  results : Object[];
  obs: Observable<Object>;
  constructor(private http:HttpClient, private sanitizer: DomSanitizer){}

  getwebcompanies(){
    this.obs = this.http.get("https://3000-a3586a24-9d16-40f5-97e8-c12ce65a84c5.ws-eu01.gitpod.io/web");
    this.obs.subscribe(this.getdata);

  }

  photoURL(urltoSanitize) {
    console.log(urltoSanitize);
    return this.sanitizer.bypassSecurityTrustUrl(urltoSanitize);
  }


  getdata = (data) => {
    this.results = data;
  }
}


