import { Component } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-components-add-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent {
  public character: Character = {
    name: '',
    power: 0
  };

  emitCharacter():void{
    console.log(this.character);
  }
}