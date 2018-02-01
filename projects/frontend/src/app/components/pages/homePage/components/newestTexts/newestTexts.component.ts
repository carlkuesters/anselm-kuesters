import {Component, OnInit} from '@angular/core';
import {TextsService} from "../../../../../services/texts.service";

import {Text} from '../../../textsPage/classes/text';

@Component({
  selector: 'newest-texts-component',
  templateUrl: './newestTexts.component.html',
  styleUrls: ['./newestTexts.component.scss']
})
export class NewestTextsComponent implements OnInit {
  texts: Text[];

  constructor (private textsService: TextsService) {
  }

  ngOnInit(): void {
    const self = this;
    this.textsService.getNewestTexts(5).then(function (texts) {
      self.texts = texts;
    });
  }
}
