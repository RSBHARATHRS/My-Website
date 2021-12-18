import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { FooterComponent } from './common/footer/footer.component';
import { EducationComponent } from './education/education.component';
import { ProjectsComponent } from './projects/projects.component';
import { SocialMediaSidebarComponent } from './social-media-sidebar/social-media-sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CarouselComponent,
    ContactFormComponent,
    FooterComponent,
    EducationComponent,
    ProjectsComponent,
    SocialMediaSidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
