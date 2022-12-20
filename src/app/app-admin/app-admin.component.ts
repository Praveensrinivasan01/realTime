import { Component, OnInit } from '@angular/core';
import { Socket } from 'ng-socket-io';

@Component({
  selector: 'app-app-admin',
  templateUrl: './app-admin.component.html',
  styleUrls: ['./app-admin.component.css']
})
export class AppAdminComponent implements OnInit {
  count: number = 0;
  count1: number = 0;
  sum: any;

  constructor(private socket: Socket) {
    socket.on('new notification', (data) => {
      this.count1++
    });
  }


  sendNotification() {
    this.count++
    this.socket.emit('create notification', this.count);
  }

  ngOnInit() {
  }

}
