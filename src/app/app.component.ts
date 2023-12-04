import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  generatedPass: string  ='';

  getAlpha :boolean = false;
  getNum :boolean = false;
  getSym : boolean = false;

  getAlphabet(){
    this.getAlpha = !this.getAlpha;
    // console.log(this.getAlpha);

  }

  getNumber(){
    this.getNum = !this.getNum;
    // console.log(this.getNum);
  }

  getSymbol(){
    this.getSym = !this.getSym;
    // console.log(this.getSym);
  }

  passLength : number = 0;

  getLength(length : string){
    this.passLength = +length;

  }

  getPass(){
    this.generatedPass = '';
    let validChar = '';

    if(this.getAlpha){
      validChar += 'qwertyuiopasdfghjklzxcvbnm';
    }

    if(this.getNum){
      validChar += '1234567890';
    }

    if(this.getSym){
      validChar += '!@#$%^&*()~_+<>?';
    }

    console.log(validChar);


    for(var i = 0; i < this.passLength; i++ ){
      this.generatedPass += validChar.charAt(Math.round(Math.random()*validChar.length))
    }
    // console.log(this.generatedPass);
  }

}
