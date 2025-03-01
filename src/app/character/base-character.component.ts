import { Component, OnInit, OnDestroy, Renderer2 } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-base-character',
  templateUrl: './base-character.component.html',
  styleUrl: './base-character.component.css',
})
export class BaseCharacterComponent implements OnInit, OnDestroy {
  characterID: string | null = null;

  constructor(private renderer: Renderer2, private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.characterID = this.route.snapshot.paramMap.get('character');
    this.renderer.addClass(document.body, `${this.characterID}-bg-color`);
  }
  ngOnDestroy(): void {
    this.renderer.removeClass(document.body, `${this.characterID}-bg-color`);
  }
}
