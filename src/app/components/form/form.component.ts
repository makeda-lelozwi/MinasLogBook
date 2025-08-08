import { Component } from '@angular/core';
import { SharedSoriesService } from '../../services/shared/shared-sories.service';
import { StoryRecord } from '../../models/story.model';
import { Router, ActivatedRoute  } from '@angular/router';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent {
  currentRecord: StoryRecord = {
    title: '',
    plot: '',
  };
  
  constructor(private sharedServ: SharedSoriesService, private router: Router, private route: ActivatedRoute) {}

  private isFormValid(): boolean {
    return (
      this.currentRecord.title.trim() !== '' &&
      this.currentRecord.plot.trim() !== ''
    );
  }

  saveStory() {
    if (this.isFormValid()) {
      this.sharedServ.createStory(this.currentRecord).subscribe({
        next: (createdStory) => {
          console.log('Successfully saved record', createdStory);
          this.resetForm();
          this.goBack();
        },
        error: (error) => {
          console.error('Error saving story:', error);
          // Optionally show error to user
        },
      });
      // console.log('Successfully saved record');
    } else {
      console.error('Invalid form submission');
      return;
    }

    // this.resetForm();
    // this.goBack();
  }

  resetForm() {
    this.currentRecord = {
      title: '',
      plot: '',
    };
  }

  goBack() {
   const character = this.route.parent?.snapshot.params['character'] || 'mina';
    this.router.navigate(['/log', character]);
  }
}
