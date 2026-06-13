#  Namlo Rides — Real-Time Ride-Sharing Simulator

A web-based real-time ride dispatch simulator built for the Namlo Technologies Frontend Intern Challenge using React, Firebase Realtime Database, MockAPI, and React Leaflet.

# Live Demo

https://namlo-rides-5xrx.vercel.app/

# Test Credentials

| Field                      | Value                |
| -------------------------- | ------------------------- |
| Email                      | intern@namlotech.com      |
|                            |                           |
| Password                   | namlo2026                 |


# Features

* Rider and Driver role selection
* Real-time ride synchronization using Firebase Realtime        Database
* Ride lifecycle management using a finite state machine
* Interactive map using React Leaflet
* Ride history persistence using MockAPI
* Responsive UI built with Tailwind CSS

# How to Test (Two-Tab Setup)

1. Open the application in two browser tabs.
2. Login in both tabs using the test credentials.
3. In Tab 1, select Rider.
4. In Tab 2, select Driver and click Go Online.
5. In Tab 1, enter pickup and destination locations and click   Request Ride.
6. Observe the ride request appear instantly in the Driver tab.
7. Accept, start, and complete the ride from the Driver tab.
8. Watch the Rider tab update automatically in real time.
9. View completed, rejected, or cancelled rides in the Ride History page.

# Architecture

 Firebase Realtime Database

Firebase is used for real-time communication between Rider and Driver dashboards.

Flow:

Rider → Firebase → Driver

Driver Actions → Firebase → Rider

# MockAPI

MockAPI is used to persist ride history records after rides are:

* Completed
* Cancelled
* Rejected

# State Machine

```text
IDLE
 ↓ Request Ride
SEARCHING
 ↓ Driver Accepts
ACCEPTED
 ↓ Driver Starts Ride
IN_PROGRESS
 ↓ Driver Completes Ride
COMPLETED

Alternative Paths

SEARCHING → CANCELLED
SEARCHING → REJECTED


 # Tech Stack

| Technology                 | Purpose                   |
| -------------------------- | ------------------------- |
| React + Vite               | Frontend framework        |
| React Router DOM           | Client-side routing       |
| Firebase Realtime Database | Real-time synchronization |
| React Leaflet              | Interactive maps          |
| MockAPI                    | Ride history persistence  |
| Tailwind CSS               | Styling                   |
| Vercel                     | Deployment                |

# Project Structure 
src
├── components
│   ├── DriverStatusCard.jsx
│   ├── MapView.jsx
│   ├── RideForm.jsx
│   └── RideStatusCard.jsx
│
├── hooks
│   ├── useDriverRide.js
│   ├── useFirebaseRide.js
│   └── useRideStatus.js
│
├── Pages
│   ├── DriverDashboard.jsx
│   ├── History.jsx
│   ├── Login.jsx
│   ├── RiderDashboard.jsx
│   └── RoleSelector.jsx
│
├── Routes
│   └── AppRoutes.jsx
│
├── Services
│   ├── firebase.js
│   └── mockApi.js
│
├── App.jsx
├── main.jsx
└── index.css


# Local Setup
git clone https://github.com/rakshya-gharti/namlo-rides.git
cd namlo-rides
npm install
npm run dev


Open:
http://localhost:5173


# Author
Rakshya Gharti
