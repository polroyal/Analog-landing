import { Component } from '@angular/core';
import { SwiperModule } from 'swiper/angular'; // Import SwiperModule for Angular
import 'swiper/swiper-bundle.css'; // Import Swiper CSS
import { MatButtonModule } from '@angular/material/button'; // Import Angular Material Button Module
import { MatIconModule } from '@angular/material/icon'; // Import Angular Material Icon Module
import { MatCardModule } from '@angular/material/card'; // Import Angular Material Card Module
import { CommonModule } from '@angular/common'; // Import CommonModule for *ngFor and basic directives


@Component({
  selector: 'green-cabs-analog-welcome',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule, MatCardModule, SwiperModule],
  template: `
    <!-- Hero Section -->
      <section class="min-h-screen bg-green-600 text-white flex items-center justify-center" style="background-image: url('/public/3.jpeg'); background-size: cover; background-position: center;">
        <div class="text-center p-6 bg-opacity-80 bg-green-700 rounded-lg shadow-lg">
          <h1 class="text-5xl font-bold mb-4 mat-display-1 text-shadow-lg">Move Smarter, Ride Better: Your Trusted Ride-Hailing App in Rwanda</h1>
          <p class="text-lg mb-6">Fast, reliable, and flexible rides at your fingertips. Get where you need to go—whether it’s a quick trip across town or a carpool with friends.</p>
          <div class="flex justify-center space-x-4">
            <button mat-raised-button color="primary" class="px-6 py-3 transition-transform duration-300 hover:scale-105">Download App</button>
            <button mat-raised-button color="accent" class="px-6 py-3 transition-transform duration-300 hover:scale-105">Join as a Driver</button>
          </div>
        </div>
      </section>

  <!-- Features Section -->
        <section class="py-16 px-8 bg-white text-green-600">
          <div class="max-w-6xl mx-auto">
          <h2 class="text-3xl font-bold mb-8 text-center mat-headline">Features</h2>

          <!-- Riders Features -->
          <h3 class="text-2xl font-bold mb-4">For Riders</h3>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div *ngFor="let riderFeature of riderFeatures" class="bg-gray-50 p-6 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
              <mat-icon class="text-green-600 text-5xl mb-4">{{ riderFeature.icon }}</mat-icon>
              <h4 class="text-xl font-semibold mb-2">{{ riderFeature.title }}</h4>
              <p>{{ riderFeature.description }}</p>
            </div>
          </div>

          <!-- Drivers Features -->
          <h3 class="text-2xl font-bold mb-4">For Drivers</h3>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div *ngFor="let driverFeature of driverFeatures" class="bg-gray-50 p-6 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
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
          <div class="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
            <div class="flex items-center justify-center mb-6">
              <mat-icon class="text-5xl text-green-600">download</mat-icon>
            </div>
            <h3 class="text-xl font-semibold mb-4">Download the App</h3>
            <p>Get our app from the App Store or Google Play and sign up for free.</p>
          </div>

          <!-- Step 2 -->
          <div class="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
            <div class="flex items-center justify-center mb-6">
              <mat-icon class="text-5xl text-green-600">search</mat-icon>
            </div>
            <h3 class="text-xl font-semibold mb-4">Book a Ride</h3>
            <p>Set your destination, choose a ride option, and confirm the ride.</p>
          </div>

          <!-- Step 3 -->
          <div class="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
            <div class="flex items-center justify-center mb-6">
              <mat-icon class="text-5xl text-green-600">local_taxi</mat-icon>
            </div>
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
        <p class="text-lg mb-6">
          What sets Green Cabs apart from the competition? Here are a few reasons to choose us:
        </p>
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


    <!-- Customer Testimonials Section -->
    <section class="py-16 px-8 bg-gray-100 text-gray-800">
      <div class="max-w-6xl mx-auto text-center">
        <h2 class="text-3xl font-bold mb-8">Customer Testimonials</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="p-6 bg-white shadow-md rounded-lg">
            <p class="mb-4">“I had a fantastic experience with Green Cabs! The driver was punctual and very friendly.”</p>
            <cite>- Alice M.</cite>
          </div>
          <div class="p-6 bg-white shadow-md rounded-lg">
            <p class="mb-4">“Affordable prices and great service. I highly recommend this app!”</p>
            <cite>- John D.</cite>
          </div>
          <div class="p-6 bg-white shadow-md rounded-lg">
            <p class="mb-4">“Easy to use and reliable. I’ll definitely use Green Cabs again.”</p>
            <cite>- Sarah K.</cite>
          </div>
          <div class="p-6 bg-white shadow-md rounded-lg">
            <p class="mb-4">“The app is user-friendly, and the drivers are professional!”</p>
            <cite>- Eric T.</cite>
          </div>
        </div>
      </div>
    </section>

    <!-- App Screenshots Section -->
     
        <section>
          <div class="swiper-container">
            <div class="swiper-wrapper">
              <div class="swiper-slide" *ngFor="let screenshot of screenshots">
                <mat-card>
                  <img [src]="screenshot" alt="App Screenshot" />
                </mat-card>
              </div>
            </div>
            <!-- Add pagination and navigation buttons if needed -->
            <div class="swiper-pagination"></div>
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
          </div>
        </section>

<!-- Download the App Section -->
    <section class="py-16 px-8 bg-green-600 text-white text-center">
      <h2 class="text-3xl font-bold mb-4">Ready to Ride? Get the App Now!</h2>
      <div class="flex justify-center space-x-4">
        <a href="https://play.google.com/store" target="_blank">
          <img src="/public/play_store_btn_hero_banner.png" alt="Download on Google Play" class="h-12">
        </a>
        <a href="https://www.apple.com/app-store/" target="_blank">
          <img src="/public/app_store_btn_hero_banner.png" alt="Download on the App Store" class="h-12">
        </a>
        <button mat-raised-button color="accent">Join as a Driver</button>
      </div>
    </section>

    <!-- About Us Section -->
    <section class="py-16 px-8 bg-white text-green-600">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-3xl font-bold mb-4">About Us</h2>
        <p class="text-lg">
          Green Cabs Rwanda provides safe, reliable, and affordable ride-hailing services
          across Rwanda. We are committed to offering seamless and convenient transportation solutions.
        </p>
      </div>
    </section>

   <!-- Footer Section -->
    <footer class="bg-green-800 text-white py-8">
      <div class="max-w-6xl mx-auto flex flex-col md:flex-row justify-between px-4">
        <div class="mb-4 md:mb-0">
          <h3 class="text-lg font-bold mb-2">Quick Links</h3>
          <ul class="space-y-1">
            <li><a href="#about" class="hover:underline">About Us</a></li>
            <li><a href="#faqs" class="hover:underline">FAQs</a></li>
            <li><a href="#privacy" class="hover:underline">Privacy Policy</a></li>
            <li><a href="#terms" class="hover:underline">Terms of Service</a></li>
            <li><a href="#contact" class="hover:underline">Contact Us</a></li>
          </ul>
        </div>
        
        <div class="mb-4 md:mb-0">
          <h3 class="text-lg font-bold mb-2">Follow Us</h3>
          <div class="flex space-x-4">
           <a href="https://facebook.com" target="_blank" aria-label="Facebook" class="hover:scale-110 transition-transform">
            <mat-icon class="text-white">facebook</mat-icon>
            </a>
            <a href="https://instagram.com" target="_blank" aria-label="Instagram">
              <mat-icon class="text-white">instagram</mat-icon>
            </a>
            <a href="https://twitter.com" target="_blank" aria-label="Twitter">
              <mat-icon class="text-white">twitter</mat-icon>
            </a>
          </div>
        </div>
        
        <div>
          <h3 class="text-lg font-bold mb-2">Contact Us</h3>
          <p class="mb-1">123 Green St, Kigali, Rwanda</p>
          <p>Email: <a href="mailto:support&#64;greencabs.rw" class="hover:underline">support&#64;greencabs.rw</a></p>
          <p>Phone: <a href="tel:+250123456789" class="hover:underline">+250 123 456 789</a></p>
        </div>
      </div>
      
      <div class="text-center mt-4">
        <p>© 2024 Green Cabs Rwanda. All rights reserved.</p>
      </div>
    </footer>

  `,
  host: {
    class: 'flex flex-col min-h-screen',
  },
})
export class AnalogWelcomeComponent {
  riderFeatures = [
    {
      icon: 'directions_car',
      title: 'Hassle-Free Rides',
      description: 'Book rides easily in just a few taps.',
    },
    {
      icon: 'attach_money',
      title: 'Fare Estimation',
      description: 'Know the price before confirming your trip.',
    },
    {
      icon: 'payment',
      title: 'Flexible Payments',
      description: 'Choose to pay with cash or wallet balance.',
    },
    {
      icon: 'security',
      title: 'Safety First',
      description: 'Features like SOS, driver ratings, and emergency contacts ensure rider safety.',
    },
    {
      icon: 'gps_fixed',
      title: 'Real-Time Tracking',
      description: 'Monitor your driver’s location live.',
    },
    {
      icon: 'language',
      title: 'Multi-Language Support',
      description: 'App available in English, French, and Kinyarwanda.',
    },
  ];

  driverFeatures = [
    {
      icon: 'account_balance_wallet',
      title: 'Manage Earnings',
      description: 'Track and withdraw earnings through the app.',
    },
    {
      icon: 'schedule',
      title: 'Flexible Schedule',
      description: 'Go online or offline as per your availability.',
    },
    {
      icon: 'star_rate',
      title: 'Driver Ratings',
      description: 'Build your reputation through rider ratings.',
    },
    {
      icon: 'map',
      title: 'Google Maps Integration',
      description: 'Get real-time navigation assistance.',
    },
    {
      icon: 'carpool',
      title: 'Carpool Flexibility',
      description: 'Switch between carpool or private rides to maximize earnings.',
    },
  ];

  screenshots = [
    'public/cabme-customer-4.png',
    'public/cabme-customer-3.png',
    'public/cabme-driver-6.png'
  ];

   // Initialize Swiper in the lifecycle hook
    ngAfterViewInit() {
      new Swiper('.swiper-container', {
        slidesPerView: 1,
        spaceBetween: 10,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        loop: true, // Optional: Loop through slides
      });
    }
  
 
}

