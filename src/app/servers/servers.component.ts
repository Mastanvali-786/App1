import { Component, OnInit } from '@angular/core';

@Component({
 // selector: '[app-servers]',
 //selector: '.app-servers',
 selector: 'app-servers',
 // template: `
   //   <app-server></app-server>
     // <app-server></app-server>`,
     templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationstatus = 'No server was created!';
  serverName ='Testserver';
  serverCreated = false;
<<<<<<< HEAD
=======
  servers = ['Testserver', 'Testserver 2'];
>>>>>>> master

  constructor() { 
    setTimeout(()  => {
      this.allowNewServer = true;
    }, 2000);

  }
  
  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreated = true;
<<<<<<< HEAD
=======
    this.servers.push(this.serverName);
>>>>>>> master
    this.serverCreationstatus ='Server was created! Name is '  +this.serverName;
  }
  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
