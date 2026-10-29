import {Component} from '@angular/core';
import {RouterLink} from '@angular/router';

import {WA,GH,LI,MAIL,CV} from '../../config';
@Component({selector:'app-footer',imports:[RouterLink],templateUrl:'./footer.html'})
export class Footer{
cv=CV;gh=GH;li=LI;mail='mailto:'+MAIL;wa='https://wa.me/'+WA;
}
