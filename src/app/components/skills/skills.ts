import {Component} from '@angular/core';


import {signal} from '@angular/core';
import {SKILLS} from '../../data';
@Component({selector:'app-skills',imports:[],templateUrl:'./skills.html'})
export class Skills{
skills=SKILLS;open=signal(0);
}
