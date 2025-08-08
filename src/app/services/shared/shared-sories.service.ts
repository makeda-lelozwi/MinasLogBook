import { Injectable,inject } from '@angular/core';
import { BehaviorSubject, catchError, Observable, throwError } from 'rxjs';
import { StoryRecord } from '../../models/story.model';
import { StoryService } from '../story.service';

@Injectable({
  providedIn: 'root',
})
export class SharedSoriesService {
  private storyService = inject(StoryService);

  private storiesSubject = new BehaviorSubject<StoryRecord[]>([]);

  public stories$ = this.storiesSubject.asObservable();
  constructor() {}

  loadStories(): Observable<StoryRecord[]> {
    const storiesObservable = this.storyService.getStories();

    storiesObservable.subscribe({
      next: (stories) => {
        this.storiesSubject.next(stories);
      },
      error: (error) => {
        console.error('Error loading stories:', error);
      },
    });

    return storiesObservable;
  }

  loadStory(id: number): Observable<StoryRecord> {
    return this.storyService.getStory(id).pipe(
      catchError((error) => {
        console.error('Error loading stories:', error);
        return throwError(() => error);
      })
    );
  }

  getStoriesSnapshot(): StoryRecord[] {
    return this.storiesSubject.value;
  }

  removeStory(storyId: number): void {
    const currentStories = this.storiesSubject.value;
    //filtering out the story we want to remove from view then rerendering
    const updatedStories = currentStories.filter(
      (story) => story.id !== storyId
    );
    this.storiesSubject.next(updatedStories);
  }

  //used in the form component
  addStory(story: StoryRecord): void {
    const currentStories = this.storiesSubject.value;
    this.storiesSubject.next([...currentStories, story]);
  }

  createStory(story: StoryRecord): Observable<StoryRecord> {
    return new Observable((observer) => {
      this.storyService.createStory(story).subscribe({
        next: (createdStory) => {
          this.addStory(createdStory);
          observer.next(createdStory);
          observer.complete();
        },
        error: (error) => {
          observer.error(error);
        },
      });
    });
  }
}
