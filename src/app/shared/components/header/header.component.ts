import { NgClass, NgFor, NgIf, NgStyle, NgSwitch, NgSwitchCase, NgSwitchDefault, NgTemplateOutlet } from '@angular/common';
import { Component } from '@angular/core';

const CommonImports = [NgIf,NgFor,NgSwitch,NgSwitchCase ,NgSwitchDefault ,NgTemplateOutlet ,NgClass ,NgStyle]
@Component({
  selector: 'app-header',
  standalone: true,
  imports: CommonImports,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  // providers: [AuthenticationService]
})
export class HeaderComponent {

}