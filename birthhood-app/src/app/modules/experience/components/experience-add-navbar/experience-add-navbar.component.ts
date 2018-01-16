import { Component, OnInit, ElementRef, Renderer2 } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { NavigationEnd } from '@angular/router';
import { ExperienceFormDataService } from '../../services/experience-form-data.service';

@Component({
  selector: 'app-experience-add-navbar',
  templateUrl: './experience-add-navbar.component.html',
  styleUrls: ['./experience-add-navbar.component.scss']
})
export class ExperienceAddNavbarComponent implements OnInit {

  routersubscription: Subscription;
  current: string;

  constructor(
    private router: Router,
    private renderer: Renderer2,
    public elementRef: ElementRef,
    private formDataService: ExperienceFormDataService
  ) {

    this.routersubscription = this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        if (event.urlAfterRedirects == "/user-dashboard/experience/new") {
          this.current = 'bio';
        } else if (event.urlAfterRedirects == "/user-dashboard/experience/new/umgebung") {
          this.current = 'umgebung';
        } else if (event.urlAfterRedirects == "/user-dashboard/experience/new/emotional") {
          this.current = 'emotional';
        } else if (event.urlAfterRedirects == "/user-dashboard/experience/new/koerperlich") {
          this.current = 'koerperlich';
        } else if (event.urlAfterRedirects == "/user-dashboard/experience/new/mental") {
          this.current = 'mental';
        } else if (event.urlAfterRedirects == "/user-dashboard/experience/new/wochenbett") {
          this.current = 'wochenbett';
        } else {
          this.current = 'bio';
        }
      }
    });

   }

   reset() {
     this.formDataService.resetExperience();
     this.router.navigate(['/user-dashboard']);
   }

  ngOnInit() {
    
  }

  ngOnDestroy() {
    this.routersubscription.unsubscribe();
  }

}
