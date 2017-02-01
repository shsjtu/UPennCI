# UPennCI
#### 1. Check out the code base at:
```
https://github.com/shsjtu/UPennCI.git
```

#### 2. Setup the platforms and plugins by running following command in cordova project root folder:
```
$ cordova prepare
```
#### 3. Build apps by running following command in cordova project root folder:
```
$ cordova build
```
#### 4. Run apps:
##### Android:
Please check the Android Studio, Android SDK and Google Play Service prerequisites [here](https://firebase.google.com/docs/android/setup).
Run the following command in cordova project root folder, after you have connecting your android device with your mac:
```
$ cordova run android --device
```
Also do not forget to turn on USB debugging on device.
##### iOS:
Coming soon.


#### 5. Send GCM from server side:
Just issue a http POST:
```
https://fcm.googleapis.com/fcm/send
Content-Type:application/json
Authorization:key=AIzaSyZ-1u...0GBYzPu7Udno5aA
```
Body json:
```json
{
  "to" : /topics/all",
  "priority" : "high",
  "notification" : {
    "body" : "Your message",
    "title" : "Your title",
  }
}
```
For the "Authorization:key=AI....5aA", please use the cloud messaging **Legacy Server key**, which can be found:
https://console.firebase.google.com/project/upennci-d9b1e/settings/cloudmessaging
