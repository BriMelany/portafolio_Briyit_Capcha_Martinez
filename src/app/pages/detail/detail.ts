import {Component,inject,signal} from '@angular/core';
import {ActivatedRoute,RouterLink} from '@angular/router';
import {PROJECTS} from '../../data';
@Component({selector:'app-detail',imports:[RouterLink],templateUrl:'./detail.html'})
export class Detail{p=signal(PROJECTS.find(x=>x.id===inject(ActivatedRoute).snapshot.paramMap.get('id')));}
