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
    this.deviceBound = false;
    this.partakerNodeURL = "";
    this.distributors = "";
    this.partakerDefaultMode = "Incognito";
 }
 set (property, value) {
 }
 get (property) {
  return value;
 }
}
  
class States extends Persistent {
 constructor() { 
  this.indicator = ""
  this.appInstalled = false;
  this.appInstalledVersion: = "";
  this.partakerMode = "Incognito";
  this.bandwith = 0;
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
  this.type = processType; // worker, service worker, page, ??tab
  this.ic = id; // 'index', 'node', 'sw'
  this.settings = new Settings () {
  }
  this.states = new States () {
  }
 }
 prerun () {
 // should be done befor the process loads
 // For example check if CT app is installed
 }
 postrun () {
 // is to be done after the process loads
 // for example detect geolocation
 }
}
