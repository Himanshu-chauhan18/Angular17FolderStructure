console.log("app.component.ts")
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';

const ComponentImports:any = [HeaderComponent,FooterComponent]
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule,CommonModule].concat(ComponentImports),
  // imports: [RouterModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  // providers: [AuthenticationService] // at component level
})
export class AppComponent {
  title = 'basicapp1';
  // constructor(private authservice: AuthenticationService){
  //   console.log(this.authservice.getLoggedInUser())
  // }
}
