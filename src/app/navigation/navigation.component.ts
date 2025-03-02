import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css',
})
export class NavigationComponent implements OnInit {
  @Input() activeCharacter: string = 'Mina';
  @Input() characters: string[] = [];

  characterID: string | null = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.characterID = this.route.snapshot.paramMap.get('character');
  }
}
