import { FormsModule } from '@angular/forms';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer=false;
  serverCreationStatus='No server created!!';
  serverName= 'TestServer';
  userName='';
  serverCreated=false;
  servers=['TestServer1', 'TestServer2'];

  constructor() { 
    setTimeout(() => {
      this.allowNewServer=true
    },2000);
  }
  ngOnInit(): void {
  }
  onCreateServer(){
    this.serverCreated=true;
    this.servers.push(this.serverName);
    this.serverCreationStatus='Server created!!! Name of server is' + this.serverName
  }
    onUpdateServerName(event:Event ){
      this.serverName=(<HTMLInputElement>event.target).value;
    }
}
