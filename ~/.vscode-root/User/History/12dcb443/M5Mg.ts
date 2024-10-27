import { Component } from "@angular/core";

@Component({
    standalone: true,
    template: `
      <h2>Taxi Services</h2>  
      <!-- Service Overview -->
        <section class="py-16 px-8 bg-white text-green-600">
            <div class="max-w-6xl mx-auto text-center">
                <h2 class="text-3xl font-bold mb-4">Taxi Services</h2>
                <p>Get where you need to go, reliably and safely. Our eco-friendly taxi service covers the entire city and beyond, offering you peace of mind with every ride.</p>
            </div>
            </section>


    <!-- Coverage Areas -->
        <section class="py-16 px-8 bg-gray-100 text-green-600">
            <div class="max-w-6xl mx-auto">
                <h2 class="text-3xl font-bold mb-8 text-center">Coverage Areas</h2>
                <ul class="list-disc pl-8">
                <li>Kigali City</li>
                <li>Ruhengeri</li>
                <li>Huye</li>
                <li>Gisenyi</li>
                <li>Nyamata</li>
                </ul>
            </div>
        </section>

    <!-- Booking Options -->
        <section class="py-16 px-8 bg-white text-center text-green-600">
        <div class="max-w-6xl mx-auto">
            <h2 class="text-3xl font-bold mb-8">Book a Taxi</h2>
            <div class="flex justify-center space-x-4">
            <button mat-raised-button color="primary" class="px-6 py-3 hover:bg-green-700 shadow-lg">
                Book Now
            </button>
            <button mat-raised-button color="accent" class="px-6 py-3 hover:bg-green-500 shadow-lg">
                Download Our App
            </button>
            </div>
        </div>
        </section>

    <!-- Pricing Structure -->
        <section class="py-16 px-8 bg-gray-100 text-green-600">
        <div class="max-w-6xl mx-auto text-center">
            <h2 class="text-3xl font-bold mb-8">Pricing Structure</h2>
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
        </div>
        </section>


    <!-- Features -->
        <section class="py-16 px-8 bg-white text-green-600">
        <div class="max-w-6xl mx-auto">
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
        </div>
        </section>



    `
})
export default class TaxiServicesPageComponent { }