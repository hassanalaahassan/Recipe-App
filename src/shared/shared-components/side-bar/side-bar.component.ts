import { AfterViewInit, Component, QueryList, ViewChildren, viewChildren } from '@angular/core';
import { TransformUpDirective } from '../../dirctives/transform-up.directive';
import { LinkComponent } from "./link/link.component";

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [TransformUpDirective, LinkComponent],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.scss'
})
export class SideBarComponent  {


  linksData:{title:string,icon:string}[] = [
    {
      title:"Dashboard",
      icon:"sidebar/Links-icons/mail-open.png"
    },
    {
      title:"Products",
      icon:"sidebar/Links-icons/Products.png"
    },
    {
      title:"Invoices",
      icon:"sidebar/Links-icons/Reset.png"
    },
    {
      title:"Customers",
      icon:"sidebar/Links-icons/Users_Group_Rounded.png"
    },
    {
      title:"Analytics",
      icon:"sidebar/Links-icons/Pie_Chart.png"
    },
    {
      title:"Marketing",
      icon:"sidebar/Links-icons/Verified_Check.png"
    },
    {
      title:"Settings",
      icon:"sidebar/Links-icons/Settings.png"
    },
    {
      title:"Help",
      icon:"sidebar/Links-icons/User_Help.png"
    },
  ]
  activeLink:{title:string,icon:string}  = this.linksData[0]

  setActive(link:{title:string,icon:string}):void{
    this.activeLink = link
  }


}
