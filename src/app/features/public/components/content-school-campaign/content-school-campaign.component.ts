import { Component, OnInit } from '@angular/core';

interface Countdown {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

@Component({
  selector: 'app-content-school-campaign',
  templateUrl: './content-school-campaign.component.html',
  styleUrls: ['./content-school-campaign.component.scss']
})
export class ContentSchoolCampaignComponent implements OnInit {

  date: Date = new Date();

  schoolCampaign!: Countdown;

  message: string = 'Cargando cuenta regresiva ...';

  constructor() { }

  ngOnInit(): void {

    console.log(this.schoolCampaign);
    
  }

  x = setInterval(()=>{

    // future date or end date
    let futureDate  = new Date("Nov 30, 2021 12:30:00").getTime(); // Tue Nov 30 2021 22:45:00 GMT-0300 (hora estándar de Argentina)    
    // actual date
    let today       = new Date().getTime();                        // Fri Nov 26 2021 00:28:21 GMT-0300 (hora estándar de Argentina)
    // difference
    let distance = futureDate - today;

    this.schoolCampaign = {
      // get days hours minutes seconds
      days      : Math.floor( distance / (1000 * 60 * 60 * 24)),
      hours     : Math.floor( (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes   : Math.floor( (distance % (1000 * 60 * 60)) / (1000 * 60)),
      seconds   : Math.floor( (distance % (1000 * 60)) / (1000))
    }

    // When it ends
    if(distance < 0){
      clearInterval(this.x);
      this.schoolCampaign = undefined!
      this.message = 'Campaña finalizada!';
    }

  }, 1000);

  

}
