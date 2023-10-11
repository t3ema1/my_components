import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HousingLocationComponent } from "../housing-location/housing-location.component";
// import { MenuItemModel } from '@syncfusion/ej2-navigations';
// import { MenuModule } from '@syncfusion/ej2-angular-navigations';

@Component({
  selector: "app-home",
  standalone: true,
  imports: [CommonModule, HousingLocationComponent],
  templateUrl:"./Home.html",

  
  styleUrls: ["./home.component.css"],
})
export class HomeComponent { }
