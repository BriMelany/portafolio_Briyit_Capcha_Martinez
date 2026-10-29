import {Component,signal,HostListener,AfterViewInit} from '@angular/core';
import {RouterLink} from '@angular/router';
import {CV} from '../../config';
@Component({selector:'app-header',imports:[RouterLink],templateUrl:'./header.html'})
export class Header implements AfterViewInit{
cv=CV;m=signal(false);scrolled=signal(false);active=signal('');
links=[{id:'sobre-mi',t:'Sobre mí'},{id:'especialidades',t:'Especialidades'},{id:'habilidades',t:'Habilidades'},{id:'proyectos',t:'Proyectos'},{id:'proceso',t:'Proceso'},{id:'contacto',t:'Contacto'}];
ngAfterViewInit(){this.onScroll();}
@HostListener('window:scroll')@HostListener('window:resize')onScroll(){
 this.scrolled.set(scrollY>8);
 let a='';
 for(const l of this.links){const el=document.getElementById(l.id);if(el&&el.getBoundingClientRect().top<=innerHeight*.35)a=l.id;}
 if(innerHeight+scrollY>=document.documentElement.scrollHeight-4&&document.getElementById('contacto'))a='contacto';
 this.active.set(a);
}
}
