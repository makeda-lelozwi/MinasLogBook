import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CharacterSeviceMinaService } from '../character-services/character-sevice-mina.service';

@Component({
  selector: 'app-base-view',
  templateUrl: './base-view.component.html',
  styleUrl: './base-view.component.css',
})
export class BaseViewComponent implements OnInit {
  activeCharacter: string = '';
  text: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private minaServ: CharacterSeviceMinaService
  ) {}

  ngOnInit(): void {
    console.log('base view')
    this.route.paramMap.subscribe((params) => {
      const newCharacter = params.get('character') || '';
      this.activeCharacter = newCharacter;
      this.populateText(newCharacter);
    });
  }

  populateText(character: string) {
    switch (character) {
      case 'mina': {
        this.text = this.minaServ.introText;
        break;
      }
      default: {
        this.text = 'Coming Soon';
      }
    }
  }

  NavigateToNewStoryForm() {
      // Get the current character from the route parameter
    const character = this.route.parent?.snapshot.params['character'] || 'mina';
    this.router.navigate(['/log', character, 'new']);
  }
}
