import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { SharedSoriesService } from '../../services/shared/shared-sories.service';
import { Subject, takeUntil } from 'rxjs';
import { StoryRecord } from '../../models/story.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent implements OnInit, OnDestroy {
  private sharedStoriesService = inject(SharedSoriesService);
  private destroy$ = new Subject<void>();

  stories: StoryRecord[] = [];

  ngOnInit(): void {
    this.sharedStoriesService.stories$
      .pipe(takeUntil(this.destroy$))
      .subscribe((stories) => {
        this.stories = stories;
      });

    if (this.stories.length === 0) {
      this.sharedStoriesService.loadStories();
    }
  }

  deleteStory(story_index: number) {
    const story = this.stories[story_index];

    if (story.id) {
      console.log(`Deleting ${story.title}`);
      this.sharedStoriesService.removeStory(story.id);
    }
  }

  ngOnDestroy(): void {
     this.destroy$.next();
    this.destroy$.complete();
  }
}
