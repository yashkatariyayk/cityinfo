import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cname',
  templateUrl: './cname.component.html',
  styleUrls: [ './cname.component.scss']
})
export class CnameComponent implements OnInit {
  

  showTA()
  {
    this.router.navigate(['cname/techavidus']);
    //this.router.navigate(['cname/radixweb']);
  }
 constructor(private router: Router) { }

  ngOnInit() {
  }

}
