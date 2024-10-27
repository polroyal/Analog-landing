import { Component } from '@angular/core'; 
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import FooterPage from './(footer).page';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatCardModule, MatIconModule, 
                MatListModule, MatToolbarModule, FooterPage, RouterLink],
  template: `
    <mat-toolbar color="primary">
      <button mat-button [routerLink]="['/']">Home</button>
    </mat-toolbar>

    <section class="py-16 px-8 bg-white text-green-600 text-center">
      <h2 class="text-4xl font-bold mb-4">Taxi Services</h2>  
      <p>Get where you need to go, reliably and safely. Our eco-friendly taxi service covers the entire city and beyond, offering you peace of mind with every ride.</p>
    </section>

    <section class="py-16 px-8 bg-gray-100 text-green-600">
      <h2 class="text-3xl font-bold mb-8 text-center">Coverage Areas</h2>
      <ul class="list-disc pl-8">
        <li>Kigali City</li>
        <li>Ruhengeri</li>
        <li>Huye</li>
        <li>Gisenyi</li>
        <li>Nyamata</li>
      </ul>
    </section>

    <section class="py-16 px-8 bg-white text-center text-green-600">
      <h2 class="text-3xl font-bold mb-8">Book a Taxi</h2>
      <div class="flex justify-center space-x-4">
        <button mat-raised-button color="primary" class="px-6 py-3">Book Now</button>
        <button mat-raised-button color="accent" class="px-6 py-3">Download Our App</button>
      </div>
    </section>

    <section class="py-16 px-8 bg-gray-100 text-green-600">
      <h2 class="text-3xl font-bold mb-8 text-center">Pricing Structure</h2>
      <table class="table-auto w-full text-left">
        <thead>
          <tr>
            <th class="px-4 py-2">Service</th>
            <th class="px-4 py-2">Base Fare</th>
            <th class="px-4 py-2">Price per KM</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="border px-4 py-2">Standard Taxi</td>
            <td class="border px-4 py-2">1000 RWF</td>
            <td class="border px-4 py-2">500 RWF/km</td>
          </tr>
          <tr>
            <td class="border px-4 py-2">Eco-friendly Taxi</td>
            <td class="border px-4 py-2">1200 RWF</td>
            <td class="border px-4 py-2">600 RWF/km</td>
          </tr>
        </tbody>
      </table>
    </section>

    <section class="py-16 px-8 bg-white text-green-600">
      <h2 class="text-3xl font-bold mb-8 text-center">Features</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="bg-gray-50 p-6 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300">
          <mat-icon class="text-green-600 text-5xl mb-4">electric_car</mat-icon>
          <h3 class="text-xl font-semibold mb-2">Eco-Friendly Vehicles</h3>
          <p>Our fleet consists of hybrid and electric vehicles for a sustainable future.</p>
        </div>
        <div class="bg-gray-50 p-6 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300">
          <mat-icon class="text-green-600 text-5xl mb-4">track_changes</mat-icon>
          <h3 class="text-xl font-semibold mb-2">Real-Time Tracking</h3>
          <p>Track your ride live via our app for better time management.</p>
        </div>
        <div class="bg-gray-50 p-6 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300">
          <mat-icon class="text-green-600 text-5xl mb-4">credit_card</mat-icon>
          <h3 class="text-xl font-semibold mb-2">Flexible Payments</h3>
          <p>Pay via mobile money, credit card, or cash — it’s your choice.</p>
        </div>
        <div class="bg-gray-50 p-6 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300">
          <mat-icon class="text-green-600 text-5xl mb-4">shield</mat-icon>
          <h3 class="text-xl font-semibold mb-2">Safety Measures</h3>
          <p>Your safety is our priority, with background-checked drivers and sanitization protocols.</p>
        </div>
      </div>
    </section>

    <app-footer></app-footer>
  `,
})
export default class TaxiServicesPage {}
