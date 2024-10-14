import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button'; // Import Angular Material Button Module
import { MatIconModule } from '@angular/material/icon'; // Import Angular Material Icon Module
import { MatCardModule } from '@angular/material/card'; // Import Angular Material Card Module
import { CommonModule } from '@angular/common'; // Import CommonModule for *ngFor and basic directives

@Component({
  selector: 'green-cabs-analog-welcome',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule, MatCardModule],
  template: `
    <!-- Hero Section -->
    <section class="min-h-screen bg-green-600 text-white flex items-center justify-center" style="background-image: url('/public/3.jpeg'); background-size: cover;">
      <div class="text-center p-6 bg-opacity-75 bg-green-700 rounded-lg shadow-lg">
        <h1 class="text-5xl font-bold mb-4 mat-display-1">Move Smarter, Ride Better: Your Trusted Ride-Hailing App in Rwanda</h1>
        <p class="text-lg mb-6">Fast, reliable, and flexible rides at your fingertips. Get where you need to go—whether it’s a quick trip across town or a carpool with friends.</p>
        <button mat-raised-button color="primary" class="mr-4">Download App</button>
        <button mat-raised-button color="accent">Join as a Driver</button>
      </div>
    </section>

    <!-- Features Section -->
    <section class="py-16 px-8 bg-white text-green-600">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-3xl font-bold mb-8 text-center mat-headline">Features</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div *ngFor="let feature of features" class="bg-gray-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <mat-icon class="text-green-600 text-4xl mb-4">{{ feature.icon }}</mat-icon>
            <h3 class="text-xl font-semibold mb-2">{{ feature.title }}</h3>
            <ul class="list-disc list-inside">
              <li *ngFor="let item of feature.bullets" class="text-gray-700">{{ item }}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>


    <!-- How It Works Section -->
    <section class="py-16 px-8 bg-gray-100 text-gray-800">
      <div class="max-w-6xl mx-auto text-center">
        <h2 class="text-3xl font-bold mb-8">How It Works</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <!-- For Riders -->
          <div>
            <h3 class="text-xl font-bold mb-4">For Riders</h3>
            <div class="space-y-4">
              <div class="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <mat-icon class="text-green-600 text-3xl mb-2">download</mat-icon>
                <h4 class="font-semibold">1. Download the App</h4>
                <p>Sign up and create your profile.</p>
              </div>
              <div class="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <mat-icon class="text-green-600 text-3xl mb-2">location_on</mat-icon>
                <h4 class="font-semibold">2. Enter Pickup & Destination</h4>
                <p>Set your pickup location and destination.</p>
              </div>
              <div class="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <mat-icon class="text-green-600 text-3xl mb-2">emoji_transportation</mat-icon>
                <h4 class="font-semibold">3. Get Matched with a Driver</h4>
                <p>We’ll connect you with a nearby driver.</p>
              </div>
              <div class="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <mat-icon class="text-green-600 text-3xl mb-2">my_location</mat-icon>
                <h4 class="font-semibold">4. Track the Driver</h4>
                <p>Watch your driver’s arrival in real-time.</p>
              </div>
              <div class="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <mat-icon class="text-green-600 text-3xl mb-2">star_rate</mat-icon>
                <h4 class="font-semibold">5. Rate Your Experience</h4>
                <p>Tell us how your ride went!</p>
              </div>
            </div>
          </div>
          <!-- For Drivers -->
          <div>
            <h3 class="text-xl font-bold mb-4">For Drivers</h3>
            <div class="space-y-4">
              <div class="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <mat-icon class="text-green-600 text-3xl mb-2">verified</mat-icon>
                <h4 class="font-semibold">1. Sign Up & Get Verified</h4>
                <p>Complete the sign-up process and verification.</p>
              </div>
              <div class="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <mat-icon class="text-green-600 text-3xl mb-2">drive_eta</mat-icon>
                <h4 class="font-semibold">2. Go Online</h4>
                <p>Start accepting ride requests in your area.</p>
              </div>
              <div class="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <mat-icon class="text-green-600 text-3xl mb-2">people</mat-icon>
                <h4 class="font-semibold">3. Pick Up Passengers</h4>
                <p>Arrive at the pickup location and start the ride.</p>
              </div>
              <div class="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <mat-icon class="text-green-600 text-3xl mb-2">carpool</mat-icon>
                <h4 class="font-semibold">4. Switch to Carpool Mode</h4>
                <p>Offer carpool rides for added earnings.</p>
              </div>
              <div class="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <mat-icon class="text-green-600 text-3xl mb-2">monetization_on</mat-icon>
                <h4 class="font-semibold">5. Track Your Earnings</h4>
                <p>Manage your rides and earnings in the app.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


   <!-- Competitive Edge Section -->
    <section class="py-16 px-8 bg-white text-green-600">
      <div class="max-w-6xl mx-auto text-center">
        <h2 class="text-3xl font-bold mb-8">Our Competitive Edge</h2>
        <p class="text-lg mb-6">
          What sets Green Cabs apart from the competition? Here are a few reasons to choose us:
        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div class="bg-green-100 p-6 rounded-lg shadow-md">
            <mat-icon class="text-green-600 text-4xl mb-4">support_agent</mat-icon>
            <h3 class="text-xl font-semibold mb-2">Dedicated Customer Support</h3>
            <p>We’re here to assist you 24/7.</p>
          </div>
          <div class="bg-green-100 p-6 rounded-lg shadow-md">
            <mat-icon class="text-green-600 text-4xl mb-4">attach_money</mat-icon>
            <h3 class="text-xl font-semibold mb-2">Best Prices</h3>
            <p>Affordable rides with no hidden fees.</p>
          </div>
          <div class="bg-green-100 p-6 rounded-lg shadow-md">
            <mat-icon class="text-green-600 text-4xl mb-4">dashboard</mat-icon>
            <h3 class="text-xl font-semibold mb-2">Innovative Technology</h3>
            <p>Our app is user-friendly and efficient.</p>
          </div>
          <div class="bg-green-100 p-6 rounded-lg shadow-md">
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
    <footer class="bg-green-800 text-white py-6 text-center">
      <p>© 2024 Green Cabs Rwanda. All rights reserved.</p>
    </footer>
  `,
  host: {
    class: 'flex flex-col min-h-screen',
  },
})
export class AnalogWelcomeComponent {

  features = [
    {
      title: 'Flexible Payment Options',
      icon: 'payments',
      bullets: [
        'Pay via Credit/Debit Card',
        'Cash Payment',
        'Wallet Integration',
      ],
    },
    {
      title: 'Real-Time Tracking',
      icon: 'location_on',
      bullets: [
        'Track drivers in real time',
        'Get ETA notifications',
        'Share ride details with friends',
      ],
    },
    {
      title: 'Ride Pooling',
      icon: 'carpool',
      bullets: [
        'Save on fares',
        'Meet new people',
        'Choose between private or shared rides',
      ],
    },
    // Add more features as needed
  ];

}
