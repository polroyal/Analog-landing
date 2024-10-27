import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router' with { analog: 'imports'};
import FooterPage from './(footer).page';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { SwiperOptions } from 'swiper/types';

@Component({
  selector: 'green-cabs-analog-welcome',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule, MatCardModule, 
            MatSidenavModule, MatListModule, MatToolbarModule, RouterLink, FooterPage],
  template: `
    <mat-sidenav-container class="sidenav-container">
      <mat-sidenav #sidenav mode="side" class="sidenav" [opened]="true">
        <mat-toolbar class="text-white bg-green-700">Menu</mat-toolbar>
        <mat-nav-list>
          <a mat-list-item [routerLink]="['/']">Home</a>
          <a mat-list-item routerLink="/taxi-services">Taxi Services</a>
          <a mat-list-item href="#">Car Hire</a>
          <a mat-list-item href="#">Car Sales</a>
          <a mat-list-item href="#">Fleet</a>
          <a mat-list-item href="#">Testimonials</a>
          <a mat-list-item href="#">Blog</a>
          <a mat-list-item href="#">Contact Us</a>
        </mat-nav-list>
      </mat-sidenav>

      <mat-sidenav-content>
        <mat-toolbar color="primary">
          <button mat-icon-button (click)="sidenav.toggle()">
            <mat-icon>menu</mat-icon>
          </button>
          <span>Green Cabs</span>
        </mat-toolbar>

        <!-- Hero Section -->
        <section class="hero-section">
          <swiper [config]="swiperConfig" class="swiper-container">
            <ng-template swiperSlide>
              <div class="hero-slide" style="background-image: url('/public/inclusions-customer-app.png');"></div>
            </ng-template>
            <ng-template swiperSlide>
              <div class="hero-slide" style="background-image: url('/public/mock1.png');"></div>
            </ng-template>
            <ng-template swiperSlide>
              <div class="hero-slide" style="background-image: url('/public/6.jpeg');"></div>
            </ng-template>
          </swiper>
          <div class="hero-content">
            <h1 class="hero-heading">Sustainable, Smart, and Reliable Transportation Solutions in Rwanda</h1>
            <p class="hero-subheading">From taxis to car rentals and sales, we’ve got you covered with eco-friendly options and outstanding service.</p>
            <div class="hero-buttons">
              <button mat-raised-button color="primary">Book a Ride</button>
              <button mat-raised-button color="accent">View Cars for Sale</button>
              <button mat-raised-button color="accent">Rent a Car</button>
            </div>
          </div>
        </section>

        <!-- App Screenshots Section -->
        <section class="app-screenshots-section">
          <div class="max-w-6xl mx-auto text-center">
            <h2 class="text-3xl font-bold mb-12">App Screenshots</h2>
            <swiper [config]="swiperConfig" class="swiper-container">
              <div class="swiper-wrapper">
                <div *ngFor="let screenshot of screenshots" class="swiper-slide">
                  <img [src]="screenshot" alt="App screenshot" class="w-full">
                </div>
              </div>
              <div class="swiper-pagination"></div>
              <div class="swiper-button-next"></div>
              <div class="swiper-button-prev"></div>
            </swiper>
          </div>
        </section>

        <app-footer></app-footer>
      </mat-sidenav-content>
    </mat-sidenav-container>
  `,
})
export class AnalogWelcomeComponent {
  swiperConfig: SwiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  };

  // Data for features, testimonials, and screenshots
  testimonials = [
    { content: 'Best app ever! Fast rides, great prices.', name: 'Kim', title: 'Rider' },
    { content: 'This app made my driving business so much easier!', name: 'Pol', title: 'Driver' }
  ];

  screenshots = [
    '/public/mock1.png',
    '/public/3700530.jpg',
    '/public/inclusions-customer-app.png'
  ];
}
