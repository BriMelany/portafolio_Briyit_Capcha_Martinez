import {Component} from '@angular/core';
import {Hero} from '../components/hero/hero';import {About} from '../components/about/about';import {Specialties} from '../components/specialties/specialties';
import {Skills} from '../components/skills/skills';import {Projects} from '../components/projects/projects';import {Process} from '../components/process/process';import {Contact} from '../components/contact/contact';
@Component({selector:'app-home',imports:[Hero,About,Specialties,Skills,Projects,Process,Contact],template:`<app-hero/><app-about/><app-specialties/><app-skills/><app-projects/><app-process/><app-contact/>`})
export class Home{}
