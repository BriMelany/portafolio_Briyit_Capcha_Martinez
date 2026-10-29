import {Component} from '@angular/core';

import {FormsModule} from '@angular/forms';
import {WA,GH,LI,MAIL,CV} from '../../config';
@Component({selector:'app-contact',imports:[FormsModule],templateUrl:'./contact.html'})
export class Contact{
mail='mailto:'+MAIL;wa='https://wa.me/'+WA;li=LI;gh=GH;name='';msg='';
send(){const text=`Hola Briyit, te escribo desde tu portafolio web. Soy ${this.name}.\n\n${this.msg}`;window.open(`https://wa.me/${WA}?text=${encodeURIComponent(text)}`,'_blank');}

}
