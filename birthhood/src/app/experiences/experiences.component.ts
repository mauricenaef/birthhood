import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.css']
})
export class ExperiencesComponent implements OnInit {

  items: Observable<any[]>;

  constructor(db: AngularFirestore) {
    this.items = db.collection('experiences').valueChanges();
  }
  ngOnInit() {

  }

}
