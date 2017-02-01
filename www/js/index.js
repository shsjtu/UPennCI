/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
      console.log('Received Device Ready Event');
      console.log('Calling setup push');
      this.receivedEvent('deviceready');
      app.setupPush();
    },

    setupPush: function() {
      function openBrower() {
        var ref = cordova.InAppBrowser.open('http://sil.asc.upenn.edu/cigame/signup/direct-to-play/phone-test', '_blank', 'location=no,toolbar=no');
      }
      FCMPlugin.onTokenRefresh(function(token){
          console.log('Token refreshed');
      });
      FCMPlugin.getToken(function(token){
          console.log('Got token');
          openBrower();
      });
      FCMPlugin.onNotification(function(data){
        if(data.wasTapped){
          openBrower();
          //Notification was received on device tray and tapped by the user.
          console.log('Notification was received on device tray and tapped by the user');
        }else{
          //Notification was received in foreground. Maybe the user needs to be notified.
          console.log('Notification was received in foreground. Maybe the user needs to be notified');
        }
      });
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

app.initialize();
