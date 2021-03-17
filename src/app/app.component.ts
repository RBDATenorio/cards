import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  posts = [
    { title: 'Neat Tree', 
      imageUrl: 'assets/tree.jpeg', 
      username: 'nature',
      content: 'Olha que árvore massa' 
    },
    { title: 'Montanhas nevadas', 
      imageUrl: 'assets/biking.jpeg', 
      username: 'biking', 
      content: 'Pedalando para manter saúde' 
    },
    { title: 'Pedalando de boas', 
      imageUrl: 'assets/mountain.jpeg',
      username: 'mountainGirl', 
      content: 'Corram para as colinas' }
  ];

}
