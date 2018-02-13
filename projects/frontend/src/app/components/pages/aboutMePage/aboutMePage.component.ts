import {Component, OnInit} from '@angular/core';

import {Achievement} from "../textsPage/classes/achievement";

@Component({
  selector: 'about-me-page-component',
  templateUrl: './aboutMePage.component.html',
  styleUrls: ['./aboutMePage.component.scss']
})
export class AboutMePageComponent implements OnInit{
  public furtherDevelopments: Achievement[];
  public awards: Achievement[];
  public inThePress: Achievement[];

  ngOnInit() {
    // TODO: Receive from backend
    this.furtherDevelopments = [
      <Achievement>{date: 'Juli 2017', title: 'Digital Humanities Oxford Summer School: Workshop in „Corpus and Computational Linguistics“', location: 'Oxford'},
      <Achievement>{date: 'Oktober 2015', title: 'Amnesty International Workshop: Lokale Pressearbeit', location: 'Augsburg'},
      <Achievement>{date: '2014', title: 'Heidelberg National Model United Nations Conference: Teilnahme General Assembly: Consequences of Climate Change', location: 'Heidelberg'},
      <Achievement>{date: 'Juli 2017', title: 'Digital Humanities Oxford Summer School: Workshop in „Corpus and Computational Linguistics“', location: 'Stuttgart'},
      <Achievement>{date: 'Oktober 2013', title: 'Zeitungsworkshop "Gemeinsam 23" zum Tag der Deutschen Einheit', location: ''},
      <Achievement>{date: 'Juli 2011', title: 'Schreibwerkstatt "Süßes oder Saures!" mit der Schriftstellerin Jagoda Marinić', location: 'Bad Herrenalb'},
    ];
    this.awards = [
      <Achievement>{date: 'seit 2017', title: 'Förderung durch die Studienstiftung des deutschen Volkes', location: ''},
      <Achievement>{date: '2011-2015', title: 'Förderung durch das Deutschlandstipendium', location: ''},
      <Achievement>{date: '2013', title: 'Gewinner beim Schreibwettbewerb "Junge Menschen schreiben Geschichte"', location: ''},
      <Achievement>{date: '2013', title: 'Auszeichnung beim "Go out!"-Essaywettbewerb des DAAD zum Thema "Was ist für mich ein Weltbürger?"', location: ''},
      <Achievement>{date: '2011', title: 'Scheffel-Preis und Förderpreis im Fach Geschichte', location: ''},
      <Achievement>{date: '2008', title: 'Sieger beim Schreibwettbewerb "ich schlag nicht mehr im selben takt" des Literaturbüros Freiburg', location: ''},
    ];
    this.inThePress = [
      // TODO
    ];
  }
}
