import {Component} from '@angular/core';


import {signal,HostListener,ElementRef,viewChild,AfterViewInit} from '@angular/core';
@Component({selector:'app-process',imports:[],templateUrl:'./process.html'})
export class Process implements AfterViewInit{
steps=[{n:'01',t:'Investigación y análisis',d:'Comprendo las necesidades del negocio, los objetivos y el público para definir el enfoque del proyecto.'},{n:'02',t:'Estrategia y planificación',d:'Organizo la estructura, los contenidos y las funcionalidades para crear una experiencia clara y coherente.'},{n:'03',t:'Diseño y desarrollo',d:'Creo interfaces atractivas y funcionales, con identidad visual y pensadas para la experiencia del usuario.'},{n:'04',t:'Pruebas y optimización',d:'Verifico el funcionamiento, la adaptabilidad y la usabilidad para mejorar la experiencia en distintos dispositivos.'}];
tx=signal(0);flat=signal(false);ph=signal<number|null>(null);top=signal<number|null>(null);
pin=viewChild<ElementRef<HTMLElement>>('pin');stick=viewChild<ElementRef<HTMLElement>>('stick');ptrack=viewChild<ElementRef<HTMLElement>>('ptrack');
ngAfterViewInit(){setTimeout(()=>this.onScroll());}
@HostListener('window:scroll')@HostListener('window:resize')onScroll(){
 const s=this.pin()?.nativeElement,k=this.stick()?.nativeElement,t=this.ptrack()?.nativeElement;if(!s||!k||!t)return;
 // En tablet/móvil (<=900px) las tarjetas se apilan: sin scroll horizontal ni altura extra
 // Tablet/móvil o pantallas verticales/muy altas (iPad Pro, Surface en vertical): tarjetas en cuadrícula, sin scroll fijado ni espacio vacío
 const flat=innerWidth<=900||innerHeight>=innerWidth||innerHeight>1000;this.flat.set(flat);
 if(flat){this.ph.set(null);this.top.set(null);this.tx.set(0);return;}
 const hh=parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--hh'))||76;
 const sh=k.offsetHeight,travel=Math.max(0,t.scrollWidth-innerWidth),range=travel*1.1;
 const top=Math.max(hh,(innerHeight+hh-sh)/2);
 // La altura del bloque = contenido + recorrido horizontal real (sin espacio sobrante)
 this.top.set(top);this.ph.set(sh+range);
 const r=s.getBoundingClientRect(),p=range>0?Math.min(1,Math.max(0,(top-r.top)/range)):0;
 this.tx.set(-p*travel);
}
}
