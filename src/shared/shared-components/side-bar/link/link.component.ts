import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-link',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './link.component.html',
  styleUrl: './link.component.scss'
})
export class LinkComponent {

  @Input({required:true}) link:{title:string,icon:string} = {} as {title:string,icon:string}
  @Input({required:true}) isActive:boolean=false

}
