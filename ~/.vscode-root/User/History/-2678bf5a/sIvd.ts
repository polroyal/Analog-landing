import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';

import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

@Component({
  selector: 'green-cabs-analog-welcome',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule, MatCardModule, MatSidenavModule, MatListModule, MatToolbarModule],
  template: `
    <mat-sidenav-container class="sidenav-container">
      <!-- Sidebar -->
      <mat-sidenav #sidenav mode="side" class="sidenav" [opened]="true">
        <mat-toolbar class="text-white bg-green-700">Menu</mat-toolbar>
        <mat-nav-list>
          <a mat-list-item href="#">Home</a>
          <a mat-list-item href="#">Taxi Services</a>
          <a mat-list-item href="#">Car Hire</a>
          <a mat-list-item href="#">Car Sales</a>
          <a mat-list-item href="#">Fleet</a>
          <a mat-list-item href="#">Testimonials</a>
          <a mat-list-item href="#">Blog</a>
          <a mat-list-item href="#">Contact Us</a>
        </mat-nav-list>
      </mat-sidenav>

      <!-- Main Content -->
      <mat-sidenav-content>
        <mat-toolbar color="primary">
          <button mat-icon-button (click)="sidenav.toggle()">
            <mat-icon>menu</mat-icon>
          </button>
          <span>Green Cabs</span>
        </mat-toolbar>

        <!-- Hero Section -->
        <section class="min-h-screen bg-green-600 text-white flex items-center justify-center"
                 style="background-image: url('/public/3.jpeg'); background-size: cover; background-position: center;">
          <div class="text-center p-6 bg-opacity-90 bg-green-800 rounded-lg shadow-2xl">
            <h1 class="text-5xl font-bold mb-4 mat-display-1 text-shadow-xl"
                style="text-shadow: 2px 2px 8px rgba(0,0,0,0.7);">
              Move Smarter, Ride Better: Your Trusted Ride-Hailing App in Rwanda
            </h1>
            <p class="text-lg mb-6">Fast, reliable, and flexible rides at your fingertips...</p>
            <div class="flex justify-center space-x-4">
              <button mat-raised-button color="primary" class="px-6 py-3 hover:bg-green-700 hover:scale-105 shadow-lg">
                Download App
              </button>
              <button mat-raised-button color="accent" class="px-6 py-3 hover:bg-green-500 hover:scale-105 shadow-lg">
                Join as a Driver
              </button>
            </div>
          </div>
        </section>

        <!-- Features Section -->
        <section class="py-16 px-8 bg-white text-green-600">
          <div class="max-w-6xl mx-auto">
            <h2 class="text-3xl font-bold mb-8 text-center mat-headline">Features</h2>

            <h3 class="text-2xl font-bold mb-4">For Riders</h3>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div *ngFor="let riderFeature of riderFeatures" 
                  class="bg-gray-50 p-6 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300">
                <mat-icon class="text-green-600 text-5xl mb-4">{{ riderFeature.icon }}</mat-icon>
                <h4 class="text-xl font-semibold mb-2">{{ riderFeature.title }}</h4>
                <p>{{ riderFeature.description }}</p>
              </div>
            </div>

            <h3 class="text-2xl font-bold mb-4">For Drivers</h3>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div *ngFor="let driverFeature of driverFeatures" 
                  class="bg-gray-50 p-6 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300">
                <mat-icon class="text-green-600 text-5xl mb-4">{{ driverFeature.icon }}</mat-icon>
                <h4 class="text-xl font-semibold mb-2">{{ driverFeature.title }}</h4>
                <p>{{ driverFeature.description }}</p>
              </div>
            </div>
          </div>
        </section>

        <!-- How It Works Section -->
        <section class="py-16 px-8 bg-gray-50 text-green-600">
          <div class="max-w-6xl mx-auto text-center">
            <h2 class="text-3xl font-bold mb-12 mat-headline">How It Works</h2>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
              <!-- Step 1 -->
              <div class="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
                <mat-icon class="text-5xl text-green-600">download</mat-icon>
                <h3 class="text-xl font-semibold mb-4">Download the App</h3>
                <p>Get our app from the App Store or Google Play and sign up for free.</p>
              </div>

              <!-- Step 2 -->
              <div class="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
                <mat-icon class="text-5xl text-green-600">search</mat-icon>
                <h3 class="text-xl font-semibold mb-4">Book a Ride</h3>
                <p>Set your destination, choose a ride option, and confirm the ride.</p>
              </div>

              <!-- Step 3 -->
              <div class="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
                <mat-icon class="text-5xl text-green-600">local_taxi</mat-icon>
                <h3 class="text-xl font-semibold mb-4">Enjoy the Ride</h3>
                <p>Your driver will pick you up and take you to your destination safely and on time.</p>
              </div>
            </div>
          </div>
        </section>

        <!-- Competitive Edge Section -->
        <section class="py-16 px-8 bg-white text-green-600">
          <div class="max-w-6xl mx-auto text-center">
            <h2 class="text-3xl font-bold mb-12 mat-headline">Our Competitive Edge</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div class="bg-green-100 p-6 rounded-lg hover:shadow-2xl transition-all duration-300">
                <mat-icon class="text-green-600 text-4xl mb-4">support_agent</mat-icon>
                <h3 class="text-xl font-semibold mb-2">Dedicated Customer Support</h3>
                <p>We’re here to assist you 24/7.</p>
              </div>
              <div class="bg-green-100 p-6 rounded-lg hover:shadow-2xl transition-all duration-300">
                <mat-icon class="text-green-600 text-4xl mb-4">attach_money</mat-icon>
                <h3 class="text-xl font-semibold mb-2">Best Prices</h3>
                <p>Affordable rides with no hidden fees.</p>
              </div>
              <div class="bg-green-100 p-6 rounded-lg hover:shadow-2xl transition-all duration-300">
                <mat-icon class="text-green-600 text-4xl mb-4">dashboard</mat-icon>
                <h3 class="text-xl font-semibold mb-2">Innovative Technology</h3>
                <p>Our app is user-friendly and efficient.</p>
              </div>
              <div class="bg-green-100 p-6 rounded-lg hover:shadow-2xl transition-all duration-300">
                <mat-icon class="text-green-600 text-4xl mb-4">map</mat-icon>
                <h3 class="text-xl font-semibold mb-2">Wide Coverage</h3>
                <p>We operate across all major cities in Rwanda.</p>
              </div>
            </div>
          </div>
        </section>

        <!-- Customer Testimonials -->
        <section class="py-16 px-8 bg-gray-100 text-green-600">
          <div class="max-w-6xl mx-auto text-center">
            <h2 class="text-3xl font-bold mb-12 mat-headline">Testimonials</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
              <mat-card *ngFor="let testimonial of testimonials" class="shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <mat-card-content>
                  <p class="mb-4">{{ testimonial.content }}</p>
                  <h3 class="font-semibold">{{ testimonial.name }}</h3>
                  <p class="text-sm">{{ testimonial.title }}</p>
                </mat-card-content>
              </mat-card>
            </div>
          </div>
        </section>

        <!-- Swiper Section (App Screenshots) -->
        <section class="py-16 px-8 bg-white">
          <div class="max-w-6xl mx-auto text-center">
            <h2 class="text-3xl font-bold mb-12 mat-headline">App Screenshots</h2>
            <div class="swiper-container swiper">
              <div class="swiper-wrapper">
                <div *ngFor="let screenshot of screenshots" class="swiper-slide">
                  <img [src]="screenshot" alt="App screenshot" class="w-full">
                </div>
              </div>

              <!-- Swiper Controls -->
              <div class="swiper-pagination"></div>
              <div class="swiper-button-next"></div>
              <div class="swiper-button-prev"></div>
            </div>
          </div>
        </section>

        <!-- Footer -->
        <footer class="py-12 px-8 bg-gray-900 text-white">
          <div class="max-w-6xl mx-auto text-center">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 class="font-semibold text-xl mb-4">Company</h3>
                <ul>
                  <li><a href="#" class="hover:underline">About Us</a></li>
                  <li><a href="#" class="hover:underline">Contact</a></li>
                  <li><a href="#" class="hover:underline">Careers</a></li>
                </ul>
              </div>
              <div>
                <h3 class="font-semibold text-xl mb-4">Support</h3>
                <ul>
                  <li><a href="#" class="hover:underline">Help Center</a></li>
                  <li><a href="#" class="hover:underline">FAQs</a></li>
                  <li><a href="#" class="hover:underline">Terms & Conditions</a></li>
                </ul>
              </div>
              <div>
                <h3 class="font-semibold text-xl mb-4">Social Media</h3>
                <div class="flex justify-center space-x-4">
                  <a href="#" class="hover:text-green-500"><mat-icon>facebook</mat-icon></a>
                  <a href="#" class="hover:text-green-500"><mat-icon>twitter</mat-icon></a>
                  <a href="#" class="hover:text-green-500"><mat-icon>instagram</mat-icon></a>
                  <a href="#" class="hover:text-green-500"><mat-icon>linkedin</mat-icon></a>
                </div>
              </div>
            </div>
          </div>
        </footer>

      </mat-sidenav-content>
    </mat-sidenav-container>
  `,
  
})
export class AnalogWelcomeComponent {
  riderFeatures = [
    { icon: 'directions_car', title: 'Fast Rides', description: 'Quick and easy bookings.' },
    { icon: 'payments', title: 'Affordable', description: 'Best pricing in the market.' },
    { icon: 'verified', title: 'Secure Payments', description: 'Safe and convenient payment options.' }
  ];

  driverFeatures = [
    { icon: 'local_shipping', title: 'Fleet Management', description: 'Manage your vehicles effectively.' },
    { icon: 'attach_money', title: 'Great Earnings', description: 'Maximize your income.' },
    { icon: 'support_agent', title: '24/7 Support', description: 'Dedicated support for drivers.' }
  ];

  testimonials = [
    { content: 'Best app ever! Fast rides, great prices.', name: 'John Doe', title: 'Rider' },
    { content: 'This app made my driving business so much easier!', name: 'Jane Smith', title: 'Driver' }
  ];

  screenshots = [
    '/public/screenshot1.png',
    '/public/screenshot2.png',
    '/public/screenshot3.png'
  ];

  ngOnInit() {
    // Swiper Initialization
    const swiper = new Swiper('.swiper', {
      modules: [Navigation, Pagination],
      direction: 'horizontal',
      loop: true,
      pagination: { el: '.swiper-pagination', clickable: true },
      navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }
    });
  }
}
