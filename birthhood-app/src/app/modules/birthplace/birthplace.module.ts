import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BirthplacesComponent } from './components/birthplaces/birthplaces.component';
import { BirthplacesMapComponent } from './components/birthplaces-map/birthplaces-map.component';
import { BirthplacesListComponent } from './components/birthplaces-list/birthplaces-list.component';
import { BirthplaceDetailsComponent } from './components/birthplace-details/birthplace-details.component';
import { BirthplaceService } from './services/birthplace.service';
import { SearchComponent } from './components/search/search.component';
import { FilterComponent } from './components/filter/filter.component';
import { AgmCoreModule, GoogleMapsAPIWrapper} from '@agm/core';
import { OwlModule } from 'ngx-owl-carousel';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './../../app-routing.module';
@NgModule({
  imports: [
    AppRoutingModule,
    CommonModule,
    OwlModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDnyvyYQD2Kf70Qkxbmk0Q6RFBw-FKCJbU'
    })
  ],
  declarations: [
    BirthplacesComponent,
    BirthplacesMapComponent,
    BirthplacesListComponent,
    BirthplaceDetailsComponent,
    SearchComponent,
    FilterComponent
  ],
  providers: [ 
    BirthplaceService, GoogleMapsAPIWrapper,
  ]
})
export class BirthplaceModule { }
