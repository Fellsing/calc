import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calc';
   value: any="";
   mass: Array<number>;
 st = document.getElementById("current");
 dlina = document.createElement("span");

one():void{
    let b:any;
    var c:any = this.value;
    b = c + "1";
    this.value = b;
}
 two():void{
    let b:any;
    var c:any = this.value;
    b = c + "2";
    this.value = b;
}
three():void{
  let b:any;
  var c:any = this.value;
  b = c + "3";
  this.value = b;
}
four():void{
  let b:any;
  var c:any = this.value;
  b = c + "4";
  this.value = b;
}
five():void{
  let b:any;
  var c:any = this.value;
  b = c + "5";
  this.value = b;
}
six():void{
  let b:any;
  var c:any = this.value;
  b = c + "6";
  this.value = b;
}
seven():void{
  let b:any;
  var c:any = this.value;
  b = c + "7";
  this.value = b;
}
eight():void{
  let b:any;
  var c:any = this.value;
  b = c + "8";
  this.value = b;
}
nine():void{
  let b:any;
  var c:any = this.value;
  b = c + "9";
  this.value = b;
}
zero():void{
  let b:any;
  var c:any = this.value;
  b = c + "0";
  this.value = b;
}


 sum():void {
    let b:any;
    var c:any = this.value;
    b = c + "+";
    this.value = b;
}

 delenie():void {
    let b:any;
    var c:any = this.value;
    b = c + "/";
    this.value = b;
}

 umnojenie():void {
    let b:any;
    var c:any = this.value;
    b = c + "*";
    this.value = b;
}

 minus():void {
    let b:any;
    var c:any = this.value;
    b = c + "-";
    this.value = b;
}

 s1:boolean = true;
 s2:boolean = true;
 s3:boolean = true;

 p1:any;
 p2:any;
 p3:any;
 ravno():void {
    let b:any;
    let j:any;
    let c = this.value;
    let k:number;
    k = eval(c);
    b = c + " = " + k;

    if( this.s1 == true) {
        document.getElementById("last").innerHTML = k.toString();
        this.p1 = k;
        this.s1 = false;
    }else if(this.s2 == true) {
      document.getElementById("middle").innerHTML = this.p1;
      document.getElementById("last").innerHTML = k.toString();

        this.p2 = this.p1;
        this.p3 = k;
        this.s2 = false;
    }else if(this.s3 == true){
      document.getElementById("first").innerHTML = this.p2;
      document.getElementById("middle").innerHTML = this.p3;
      document.getElementById("last").innerHTML = k.toString();
        this.p2 = this.p3
        this.p3 = k;
     }
    
    this.value = "";
}
}
