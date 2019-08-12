
import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public form: any;
  
  constructor(private http: HttpClient) { }
  
  ngOnInit() {
    this.form = {
      domain: 'domain.com',
      url: 'https://www.youtube.com/watc'
    }
  }

  checkDomain(){
    // http://whoisapi.netfox.ru/api_v1/?domain=
    this.http.get(`${this.form.domain}`).subscribe(data => {
      //где data - респонс от сервера
      console.log(data)
    });
  }
}