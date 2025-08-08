import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { StoryRecord } from '../../models/story.model';
import { SharedSoriesService } from '../../services/shared/shared-sories.service';
import { Router,ActivatedRoute } from '@angular/router';
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-story-detail',
  templateUrl: './story-detail.component.html',
  styleUrl: './story-detail.component.css',
})
export class StoryDetailComponent implements OnInit, OnDestroy {

  private sharedStoriesService = inject(SharedSoriesService);

  storyId: string | undefined = '';
  currentStory: StoryRecord | undefined;
  backLogo=faArrowLeftLong;
  constructor(private route: ActivatedRoute, private router:Router) {}


  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const newStory = params.get('story') || '';
      this.storyId = newStory;
    });

    const storyIdNumber = Number(this.storyId);

    this.sharedStoriesService.loadStory(storyIdNumber).subscribe((story) => {
      this.currentStory = story;
    });
  }

  ngOnDestroy(): void {}

  
  goBack() {
   const character = this.route.parent?.snapshot.params['character'] || 'mina';
    this.router.navigate(['/log', character]);
  }
}
