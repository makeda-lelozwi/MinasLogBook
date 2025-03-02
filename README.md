# MinasLog
Inspired by the daily lives of characters in Yoko Ogawa's novel, "Mina's Matchbox". Mina collects colourful matchboxes, Tomoko collects and returns books from the library for Mina to read, and Yoneda-san orders groceries throughout the month and keeps track of the boxes of Fressy in the pantry. I created this site to help each of them catalogue, plan and schedule their daily-tasks in a simple, secure online interface. 

I color-coded each 'logbook' to capture the character's essence but I also wanted to keep the design modern and easy-on-the-eyes. 

I would like to expand the functionality to cater to Kobayashi-san who looks after a delightful pygmy hippopotomous named Pochiko, Mina's mother who points out spelling and grammatical errors in any piece of writing she can get her hands on and Mina's father who is the household's handy-man when he is around. 

Other plans: 
  Use 3d-rendering tools like Blender to create avatars and incorporate more character design into the application. 
  Learn cloud storage by backing-up records

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. 
## Checkpoint Reflections

### Checkpoint One:  Base styles and navigation functionality
Date completed: 2025.03.02 
I created mock-ups using Figma which took 2 days to get a general idea of the page and user-flow. There were quite a few challenging moments in this initial stage:

  1. Loading Images
  I was surprised to hit a road-block so early-on in my development. The usual way of copying files into an assets folder and referencing that folder in a src attribute wasn't working. Since DeepSeek didn't provide any useful answers I found my answers in an issue relating to my same problem on Angular's GitHub. 
  
  2. Getting the blue gradient on the glass-effect on the home-page. 
  I had to grapple with gradients - which is something I glossed over during my coding bootcamp and I didn't come back to after. I really wanted the page to match as closely as possible with my Figma mockup and I couldn't do that without the blue gradient over the see-through layer to really give it the glass-effect. 
  
  3. Once I got that to work the next challenge was figuring out how to setup FontAwesome for Angular but also which method I would use to display the icons. I was tired by the time I got to this step so my brain was not up for reading through docs. Once I realised that the icon names on the FA website matched with the ones in the Angular package I got into a system of finding what I want on FA and then just typing it in to my project and seeing what Intellisense comes up with that matches. 

  4. The last challenge so far was getting the page colours and nav colors to switch when toggling between characters. With some help from DeepSeek I managed and now the project is off the ground. 

### Next step: Create C# CLasses to represent Mina's Matchbox Collection 


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.1.2.