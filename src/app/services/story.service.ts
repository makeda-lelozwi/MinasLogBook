import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StoryRecord } from '../models/story.model'; 
@Injectable({
  providedIn: 'root'
})
export class StoryService {

  private http = inject(HttpClient);

  private apiUrl = 'https://localhost:7060/api/Stories'; //API endpoint URL
  
   getStories(): Observable<StoryRecord[]> {
    return this.http.get<StoryRecord[]>(this.apiUrl);
  }

  getStory(id: number): Observable<StoryRecord> {
    return this.http.get<StoryRecord>(`${this.apiUrl}/${id}`);
  }
  
  createStory(story: StoryRecord): Observable<StoryRecord> {
    return this.http.post<StoryRecord>(this.apiUrl, story);
  }

  deleteStory(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}

//TEMPLATE FOR REQUEST BODY
// {
//   "id": 0,
//   "title": "Story Test 2.1",
//   "plot": "Story Test 2 Updating Story (Changing Plot Test)",
//   "dateCreated": "2025-07-27T23:12:28.230Z"
// }
