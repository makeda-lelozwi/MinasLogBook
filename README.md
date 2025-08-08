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

### Checkpoint Two: Create C# CLasses to represent Mina's Matchbox Collection 
Date completed: 2025.07.28
I first took a C# Masterclass on Udemy (still in-progress). Then read up on .NET Entity Framework before implementing it with an ASP.NET Web API. 

I didn't face many challenges because EF's documentation is very robust. I did use Cluade to help with installing certain .NET libraries and using the correct CLI commands but in general, the official documentation for Web API was very straight-forward. I spent some time also learning up on ADO.NET and how ORM's work overall.

### Checkpoint Three: CRUD Functionality with Styling for Mina
Still in progress
Updated on: 2025.08.08

The bulk of the work for Mina's 'dashbiards' are done. If she was a real person, she would be able to view all the stories that she comes up with for each matchbox, reread old stories, and add new ones. I'm also happy with the styles. I'm really happy with what I've worked on so far and I'm keen to keep the ball rolling and eventually complete this thing! There were a number of challenges for this checkpoint:

  1. The cards for each story were overlapping across the page so it took a while to finally figure out how to make that stop but still keep to my design. 

  2. Understanding RxJS and how to subscribe to the Observables and then use that data that comes back. I still slip up when using it and will need much more practice over time but I'm getting the gist. 

  3. Styling for the story detail was also a bit of a pain trying to get the text to take up a larger amount of space but also enable the scrollbar if need-be (that wasn't an issue, the issue was that it would immediately mess up my design)


### Next step: Update db to include image field and implement functionality to UPDATE the story entries 


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.1.2.