import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {
  
  targetDate = new Date('January 25, 2024 09:00:00').getTime();
  days: number = 0;
  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;

  constructor() {}

  ngOnInit(): void {
    // Update the countdown every 1 second
    setInterval(() => {
      this.updateCountdown();
    }, 1000);
  }

  updateCountdown() {
    const currentDate = new Date().getTime();
    const timeLeft = this.targetDate - currentDate;

    this.days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    this.hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    this.minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    this.seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
  }

  showAlert: boolean = true;

  // Function to show the alert
  showAlertBox() {
    this.showAlert = true;
  }

  // Function to close the alert
  closeAlert() {
    this.showAlert = false;
  }

}
