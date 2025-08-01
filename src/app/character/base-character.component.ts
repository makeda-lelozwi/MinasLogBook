import { Component, OnInit, OnDestroy, Renderer2 } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-base-character',
  templateUrl: './base-character.component.html',
  styleUrl: './base-character.component.css',
})
export class BaseCharacterComponent implements OnInit, OnDestroy {
  activeCharacter: string = '';
  private previousBgClass: string = '';

  constructor(private renderer: Renderer2, private route: ActivatedRoute) {}
  ngOnInit(): void {
    // this.characterID = this.route.snapshot.paramMap.get('character');
    this.route.paramMap.subscribe((params) => {
      const newCharacter = params.get('character') || '';

      if (this.previousBgClass) {
        this.renderer.removeClass(document.body, this.previousBgClass);
      }

      this.activeCharacter = newCharacter;
      const newBgClass = `${this.activeCharacter}-bg-color`;
      this.renderer.addClass(document.body, newBgClass);
      this.previousBgClass = newBgClass;
    });
  }
  ngOnDestroy(): void {
    if (this.previousBgClass) {
      this.renderer.removeClass(document.body, this.previousBgClass);
    }
  }
}
