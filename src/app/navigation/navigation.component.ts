import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css',
})
export class NavigationComponent {
  @Input() activeCharacter: string = 'Mina';
  characters: string[] = ['mina', 'tomoko', 'yoneda'];
}
