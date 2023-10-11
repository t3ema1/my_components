import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContentComponent } from './content/content.component';
import { FeaturesComponent } from './features/features.component';
import { FormComponent } from './form/form.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { CalltoActionComponent } from './callto-action/callto-action.component';
import { ShowcaseComponent } from './showcase/showcase.component';
import { TeamComponent } from './team/team.component';
import { PricingtableComponent } from './pricingtable/pricingtable.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  standalone: true,
  selector: 'app-root',
  template: `
  <main>
 
  <section class ="content">
  <app-contact></app-contact>
  </section>
  <app-footer></app-footer>

 
  </main>
  `,
  styleUrls: ['./app.component.css'],
  imports: [HomeComponent, ContentComponent, FeaturesComponent, FormComponent, TestimonialComponent, CalltoActionComponent, ShowcaseComponent, TeamComponent, PricingtableComponent, ContactComponent, FooterComponent]
})
export class AppComponent {
  title = 'home';
}
