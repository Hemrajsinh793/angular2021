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

  constructor() { 
    setTimeout(() => {
      this.allowNewServer=true
    },2000);
  }

  ngOnInit(): void {
  }

  onCreateServer(){
    this.serverCreationStatus='Server created!!! Name of server is' + this.serverName
  }
  // onAddUser(){
  //   this.userName='name of user is ' + this.userName;
  //   this.userName=''
  // }                      Assignment2

    onUpdateServerName(event:Event ){
      this.serverName=(<HTMLInputElement>event.target).value;
    }
}
