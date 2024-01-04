import { Component } from '@angular/core';
import { faker } from '@faker-js/faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'typingApp';
  randomText:string=faker.internet.userName();
  inputText:string="";

  handleInput(event:any){
    this.inputText=event.target.value;
    console.log(this.inputText)
  }

  getClassName(letter:string,input:string){
    console.log(input)
    if(!input){
      return "greyCol";
    }

   return letter===input?"succCol":"danCol"
  }

}
