​📍 Geo-Attend: Smart Location-Based Attendance
​A modern, full-stack attendance management system that ensures integrity by verifying the physical presence of users via geographic coordinates. No more "buddy punching"—if you aren't there, you can't check in.
​🚀 Features
​Real-time Geo-fencing: Users can only mark attendance if they are within a specific radius (e.g., 200m) of the designated location.
​Live Dashboard: View attendance logs, timestamps, and location status in a clean, responsive UI.
​Authentication: Secure login for both Administrators and Employees/Students.
​History Logs: Comprehensive history for users to track their punctuality.
​Responsive Design: Works seamlessly on mobile devices (crucial for GPS-based check-ins).
​🛠️ Tech Stack
Layer Technology
Frontend HTML5, CSS3 (Flexbox/Grid), Vanilla JavaScript
Backend Node.js, Express.js
APIs Geolocation API
📐 How It Works
The system calculates the distance between the user's current coordinates and the pre-defined "Office/Classroom" coordinates using the Haversine Formula.

​Request: User clicks "Check-in."
​Verify: The browser requests GPS permission and captures (\phi, \lambda).
​Validate: The backend compares coordinates. If distance d \le \text{threshold}, attendance is logged.
​Feedback: The user receives a success or "Out of Range" notification.
📥 Installation
git clone https://github.com/yourusername/attendance-app.git
cd attendance-app
Install dependencies
npm install
Environment Setup
Create a .env file in the root directory and add:
PORT=3000
DB_URI=your_database_connection_string
OFFICE_LAT=40.7128
OFFICE_LONG=-74.0060
RADIUS_METERS=200
Run the app
npm start
🛡️ Security Considerations
HTTPS Required: Most browsers (Chrome, Safari) will not allow Geolocation requests over insecure http connections.
Spoofing Protection: While client-side GPS can be faked, this app utilizes server-side distance validation to minimize tampering.
🤝 Contributing
Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated.
Fork the Project
Create your Feature Branch (git checkout -b feature/AmazingFeature)
Commit your Changes (git commit -m 'Add some AmazingFeature')
Push to the Branch (git push origin feature/AmazingFeature)
Open a Pull Request
