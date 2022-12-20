import { Component, OnInit } from '@angular/core';
import { Socket } from 'ng-socket-io';

@Component({

   selector: 'app-app-user',
   templateUrl: './app-user.component.html',
   styleUrls: ['./app-user.component.css']
})
export class AppUserComponent implements OnInit {
   count: any = 0;

   message: any;

   constructor(private socket: Socket) {

      socket.on('new notification', (data) => {
         this.count = data
         console.log(this.count)

      });
   }

   ngOnInit() {
   }


}
