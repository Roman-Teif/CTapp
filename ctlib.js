// The library used by different pages and the service worker to exchange the data and messages
"use strict"

class Persistent {
 constructor (storage) { // 'idb' or 'cache' more storages may be developed later on
 }
 openStorage (storage) {
 }
 closeStorage (storage) {
 }
 read (storage, name) {
  return content;
 }
 write (storage, mode, name, content) {
 }
 manage (storage, op ) { // 'getQuota', 'askQuota'
 }
}

class Settings extends Persistent {
 constructor() {
  super("idb");
  this.deviceBound = false;
  this.partakerNodeURL = "";
  this.distributors = "";
  this.partakerDefaultMode = "Incognito";
  console.log ("in settings constructor: ", this.partakerDefaultMode);
 }
 set (property, value) {
 }
 get (property) {
  return value;
 }
}
  
class States extends Persistent {
 constructor() { 
  super ("idb");
  this.indicator = ""
  this.appInstalled = false;
  this.appInstalledVersion = "";
  this.partakerMode = "Incognito";
  this.bandwith = 0;
  console.log ("in states constructor: ", this.partakerMode);
  }
  set (property, value) {
  }
  get (property) {
   return value;
  }
  detect (property) {
  }
 }
  
class Process { //is it thread - TBD???
 constructor (type, id) {
  this.type = type; // 'worker', 'sw', 'page', ??tab
  this.ic = id; // 'index', 'node', 'sw'
  console.log ("in process constructor: ", this.type + " " + this.id);
  this.settings = new Settings ();
  this.states = new States (); 
 }
 
 swRegister () {
  console.log ("in swRegister");
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
     navigator.serviceWorker.register('sw.js').then(function(registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
     }, function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
     });
    });
   }
 }
 
 before() {
 // should be done befor the process loads
 // For example check if CT app is installed latest version
 // For pages register service Worker 
  console.log ("in pre");
 if (this.type === "page") { swRegister (); }
 }
 
 after() {
 // is to be done after the process loads
 // for example detect geolocation
 }
}
