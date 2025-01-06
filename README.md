# Africanies Shipping managemnet App
## Overview

This is a simple Angular app built for Angular developer role take-home assignment. It includes:

A Dashboard showing shipping information.

An Add Shipment feature where users can input shipment details using a multistep form.

This document will help you set up and run the app.

## Features

## Dashboard

Shows key information:

Total Revenue, Total Shipments, Total Deliveries, Total Transactions

Charts: Shipments Delivered and Delivery Rate

Dropdown for Our Warehouses: Select and copy warehouse addresses

Top Addresses: Displays 5 frequently used addresses

Recent Shipping List: A table showing shipments with details like status, destination, source, and weight

Reusable Components: Metric cards

Fully responsive for all screen sizes

## Add Shipment

A multistep form with validation to add new shipments.
Reusable Components: Address form

## Prerequisites

Install Node.js (version 14 or higher)

Install Angular CLI

To check installation, run these in your terminal:

`node -v`
`ng version`

## Setup

## Download/Clone Project:

git clone [Africanies](https://github.com/yeanca/Africanies/)

## Open Project Folder:

`cd Africanies`

## Install Dependencies:

`npm install`

## Run the App

## Start the server:

`ng serve`

## Open in your browser:

Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Key Files

src/app: Main app code (Dashboard and Add Shipment components)

src/assets/data/**: JSON files with dummy data

src/app/services/shipping-service: API key for fetching country list (uncomment before use)

## Additional Info

Angular Version: version 17.3.7.

Styling: Tailwind CSS

Data: Mostly from assets folder; countries fetched from [CountryStateCity](https://api.countrystatecity.in)

Status: The app uses dummy data and is not fully complete (out of scope for this test).

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Troubleshooting

"Command not found" errors: Install Node.js and Angular CLI

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


## Conclusion

This app demonstrates Angular development skills. Please share any feedback or questions!

