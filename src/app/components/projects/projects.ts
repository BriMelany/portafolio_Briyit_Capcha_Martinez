import {Component} from '@angular/core';
import {RouterLink} from '@angular/router';

import {signal,computed} from '@angular/core';
import {PROJECTS} from '../../data';
@Component({selector:'app-projects',imports:[RouterLink],templateUrl:'./projects.html'})
export class Projects{
filters=[{k:'',l:'Todos'},{k:'Landing',l:'Landings'},{k:'Web Corporativa',l:'Webs corporativas'},{k:'E-commerce',l:'E-commerce'},{k:'Proyectos académicos',l:'Proyectos académicos'}];
flt=signal('');viewing=signal('');
list=computed(()=>PROJECTS.filter(p=>!this.flt()||p.cat===this.flt()||(this.flt()==='Proyectos académicos'&&p.label==='Proyecto académico')));
}
