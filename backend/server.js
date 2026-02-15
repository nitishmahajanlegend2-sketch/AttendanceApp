const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// --- CONFIGURATION & MASTER DATA ---
const TEACHER_USER = "manraj"; // Replace with your desired name
const TEACHER_PASS = "manrajcr12321";    // Replace with your desired password

const MASTER_STUDENT_LIST = [
   { "rollNo": "17032500122", "name": "TANDRIKA RANI KUNDU" },
  { "rollNo": "17032500123", "name": "RISHITA" },
  { "rollNo": "17032500124", "name": "RIVANSHU BEHAL" },
  { "rollNo": "17032500125", "name": "SAHEJVEER SINGH" },
  { "rollNo": "17032500126", "name": "RAYAN CHANDEL" },
  { "rollNo": "17032500127", "name": "SUNDRAM KUMAR" },
  { "rollNo": "17032500128", "name": "SURYA DEY" },
  { "rollNo": "17032500129", "name": "SAHIL GUPTA" },
  { "rollNo": "17032500130", "name": "VARENYA MAHAJAN" },
  { "rollNo": "17032500131", "name": "VENU GOPAL SHARMA" },
  { "rollNo": "17032500132", "name": "SAWNI" },
  { "rollNo": "17032500133", "name": "NAVDEEP KAUR" },
  { "rollNo": "17032500134", "name": "NIRJALA" },
  { "rollNo": "17032500135", "name": "MOHIT SINGH" },
  { "rollNo": "17032500136", "name": "RASHMITA" },
  { "rollNo": "17032500137", "name": "SUNAKSHI MEHTA" },
  { "rollNo": "17032500138", "name": "SUKHMANPREET KAUR" },
  { "rollNo": "17032500139", "name": "NAVREET KAUR" },
  { "rollNo": "17032500140", "name": "PALAK SHARMA" },
  { "rollNo": "17032500141", "name": "ROHIT KUMAR" },
  { "rollNo": "17032500142", "name": "RUHI" },
  { "rollNo": "17032500143", "name": "SIYA" },
  { "rollNo": "17032500144", "name": "RUDRAKSH SHARMA" },
  { "rollNo": "17032500145", "name": "PAVITERPREET SINGH" },
  { "rollNo": "17032500146", "name": "PRITIKA" },
  { "rollNo": "17032500147", "name": "YOGITA" },
  { "rollNo": "17032500148", "name": "MANPREET KUMAR DHIR" },
  { "rollNo": "17032500149", "name": "TUSHAAR" },
  { "rollNo": "17032500150", "name": "PRANAV JOSHI" },
  { "rollNo": "17032500151", "name": "SAWAL PUSHKARNA" },
  { "rollNo": "17032500152", "name": "SHASHANK SHEKHAR SOLANKI" },
  { "rollNo": "17032500153", "name": "NAVNEET KAUR" },
  { "rollNo": "17032500154", "name": "PRABHNOOR SINGH" },
  { "rollNo": "17032500155", "name": "VAIBHAV MAHAJAN" },
  { "rollNo": "17032500156", "name": "RIDHAMPREET SINGH ARORA" },
  { "rollNo": "17032500157", "name": "VISHAL CHOUDHARY" },
  { "rollNo": "17032500158", "name": "TRIBHUVAN SINGH SENGAR" },
  { "rollNo": "17032500159", "name": "SUSHEN GUPTA" },
  { "rollNo": "17032500160", "name": "SIDARTH ATTRI" },
  { "rollNo": "17032500161", "name": "MOHIT SALWAN" },
  { "rollNo": "17032500162", "name": "SANCHI SHARMA" },
  { "rollNo": "17032500163", "name": "RUDRAKSH MEHRA" },
  { "rollNo": "17032500164", "name": "UJWAL" },
  { "rollNo": "17032500165", "name": "NIMISH SURI" },
  { "rollNo": "17032500166", "name": "YUVRAJ JASSI" },
  { "rollNo": "17032500167", "name": "PRIYANSHI" },
  { "rollNo": "17032500168", "name": "RANVIR SINGH" },
  { "rollNo": "17032500169", "name": "VINEET KUMAR" },
  { "rollNo": "17032500170", "name": "TEJAL CHOPRA" },
  { "rollNo": "17032500171", "name": "SACHIN KUMAR BHAGAT" },
  { "rollNo": "17032500172", "name": "RAVDEEP KAUR" },
  { "rollNo": "17032500173", "name": "MEHAKDEEP KAUR" },
  { "rollNo": "17032500174", "name": "SHAURYA THAKUR" },
  { "rollNo": "17032500175", "name": "VISHESH KUMAR" },
  { "rollNo": "17032500176", "name": "NAVJIT KAPIL" },
  { "rollNo": "17032500177", "name": "SHIVANG GUPTA" },
  { "rollNo": "17032500178", "name": "NAVYA" },
  { "rollNo": "17032500179", "name": "SHAGUN KAUR CHAHAL" },
  { "rollNo": "17032500180", "name": "SUKHMANI" },
  { "rollNo": "17032500181", "name": "ROOPANSHI SHARMA" },
  { "rollNo": "17032500182", "name": "SAKSHAM GUPTA" },
  { "rollNo": "17032500183", "name": "SUKHMANJEET SINGH" },
  { "rollNo": "17032500184", "name": "NITISH" },
  { "rollNo": "17032500185", "name": "SOURAV" },
  { "rollNo": "17032500186", "name": "SIRTAJ SINGH" },
  { "rollNo": "17032500187", "name": "SAMAIRA" },
  { "rollNo": "17032500188", "name": "PRABHNOOR KAUR" },
  { "rollNo": "17032500189", "name": "SUSHANK BALHOTRA" },
  { "rollNo": "17032500190", "name": "TANMYA MAHAJAN" },
  { "rollNo": "17032500191", "name": "SAKSHAM RATHOR" },
  { "rollNo": "17032500192", "name": "PAVNEET SINGH" },
  { "rollNo": "17032500193", "name": "MEHAK GUPTA" },
  { "rollNo": "17032500194", "name": "MANTHAN SHARMA" },
  { "rollNo": "17032500195", "name": "MRIDULA" },
  { "rollNo": "17032500196", "name": "MITHILESHWAR" },
  { "rollNo": "17032500197", "name": "SHIVANSH SHUKLA" },
  { "rollNo": "17032500198", "name": "PRINCE KUMAR" },
  { "rollNo": "17032500199", "name": "MANJOT KAUR" },
  { "rollNo": "17032500200", "name": "MEHAKPREET SINGH" },
  { "rollNo": "17032500201", "name": "MANJOT SINGH" },
  { "rollNo": "17032500202", "name": "NANDINI RATHORE" },
  { "rollNo": "17032500203", "name": "MISHTHI" },
  { "rollNo": "17032500204", "name": "SUNIDHI SOOD" },
  { "rollNo": "17032500205", "name": "RAHUL SHARMA" },
  { "rollNo": "17032500206", "name": "SUKHPAL SINGH" },
  { "rollNo": "17032500207", "name": "VARUN ALOONA" },
  { "rollNo": "17032500208", "name": "VAISHALI KUNDAL" },
  { "rollNo": "17032500209", "name": "SATYAK GUPTA" },
  { "rollNo": "17032500210", "name": "NEELESH KALIA" },
  { "rollNo": "17032500211", "name": "SHIVJOT SINGH" },
  { "rollNo": "17032500212", "name": "ROHINI SHARMA" },
  { "rollNo": "17032500213", "name": "RAGHAV SHARMA" },
  { "rollNo": "17032500214", "name": "MANRAJDEEP SINGH" },
  { "rollNo": "17032500215", "name": "MALHAR ARORA" },
  { "rollNo": "17032500216", "name": "SHREYANSH BHARGAV" },
  { "rollNo": "17032500217", "name": "LAKSHDEEP SINGH" },
  { "rollNo": "17032500218", "name": "SAMRIDHI SHARMA" },
  { "rollNo": "17032500219", "name": "MUSKAN" },
  { "rollNo": "17032500220", "name": "YASHIKA" },
  { "rollNo": "17032500221", "name": "MOULIK YADAV" },
  { "rollNo": "17032500222", "name": "VINOD PARMAR" },
  { "rollNo": "17032500223", "name": "MEHAR JOLLY" },
  { "rollNo": "17032500224", "name": "MANASVI" },
  { "rollNo": "17032500225", "name": "MANTHAN ATTRI" },
  { "rollNo": "17032500226", "name": "SANYAM GAUTAM" },
  { "rollNo": "17032500227", "name": "MOHIT" },
  { "rollNo": "17032500228", "name": "NAVJOT KAUR" },
  { "rollNo": "17032500229", "name": "NANDANI GARG" },
  { "rollNo": "17032500230", "name": "MEHAK PADWAL" },
  { "rollNo": "17032500231", "name": "UTTAMPREET KAUR" },
  { "rollNo": "17032400065", "name": "JATIN" }
];

// --- VOLATILE SESSION STATE ---
let attendance_start = false;
let teacherLocation = { lat: null, lng: null };
let currentSubject = "";
let present_student_data = []; 
let present_user_ids = [];

// Helper: Authentication Middleware
const authenticate = (req, res, next) => {
    const { authUser, authPass } = req.body.auth || req.query;
    if (authUser === TEACHER_USER && authPass === TEACHER_PASS) {
        next();
    } else {
        res.status(401).json({ message: "Unauthorized: Invalid Credentials" });
    }
};

// Start Session
app.post('/start-attendance', authenticate, (req, res) => {
    const { durationMinutes, lat, lng, subject } = req.body;
    
    attendance_start = true;
    teacherLocation = { lat, lng };
    currentSubject = subject;
    
    // Clear lists at the start of a new session just in case
    present_student_data = [];
    present_user_ids = [];
    
    setTimeout(() => { 
        attendance_start = false; 
        console.log(`Session for ${subject} ended.`);
    }, durationMinutes * 60000);

    res.json({ success: true });
});

// Student Submission (No auth required for students)
/**
app.post('/submit-attendance', (req, res) => {
    if (!attendance_start) return res.status(403).json({ message: "Session is closed." });
    
    const { name, rollNo, userId, lat, lng } = req.body;
    if (present_user_ids.includes(userId)) return res.status(400).json({ message: "Proxy Alert: Already marked!" });

    present_user_ids.push(userId);
    present_student_data.push({ name, rollNo });
    res.json({ success: true, message: "Attendance Marked Successfully" });
});*/
// Helper function to calculate distance in meters
function getDistance(lat1, lon1, lat2, lon2) {
    const R = 6371e3; // Earth's radius in meters
    const φ1 = lat1 * Math.PI / 180;
    const φ2 = lat2 * Math.PI / 180;
    const Δφ = (lat2 - lat1) * Math.PI / 180;
    const Δλ = (lon2 - lon1) * Math.PI / 180;

    const a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
              Math.cos(φ1) * Math.cos(φ2) *
              Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    return R * c; // returns distance in meters
}
app.post('/submit-attendance', (req, res) => {
    // 1. Check if session is active
    if (!attendance_start) {
        return res.status(403).json({ message: "Attendance is over." });
    }
    
    const { name, rollNo, userId, lat, lng } = req.body;

    // 2. Proxy Check: Unique Device ID
    if (present_user_ids.includes(userId)) {
        return res.status(400).json({ message: "Proxy Alert: You have already marked  attendance!" });
    }

    // 3. Location Auth: Geofencing
    if (!lat || !lng || !teacherLocation.lat || !teacherLocation.lng) {
        return res.status(400).json({ message: "Location data missing." });
    }

    const distance = getDistance(lat, lng, teacherLocation.lat, teacherLocation.lng);
    const ALLOWED_RADIUS = 50; // Distance in meters (Adjust as needed)

    if (distance > ALLOWED_RADIUS) {
        return res.status(401).json({ 
            message: `Too far! You are ${Math.round(distance)}m away. Please move closer to the class.` 
        });
    }

    // 4. Success: Store data
    present_user_ids.push(userId);
    present_student_data.push({ name, rollNo });
    
    res.json({ success: true, message: "Attendance Marked Successfully!" });
});

// Report & Reset Logic
// Using query params for auth since it's a GET request
app.get('/get-report', (req, res) => {
    const { authUser, authPass } = req.query;
  
    if (authUser !== TEACHER_USER || authPass !== TEACHER_PASS) {
        return res.status(401).json({ message: "Unauthorized access" });
    }

    if (present_student_data.length === 0) {
        return res.status(404).json({ message: "No attendance data available." });
    }

    const presentRolls = present_student_data.map(s => s.rollNo);
    const absent_students = MASTER_STUDENT_LIST.filter(s => !presentRolls.includes(s.rollNo));

    const report = {
        subject: currentSubject,
        present: [...present_student_data],
        absent: absent_students
    };

    // CLEANUP: Reset lists for the next session
    present_student_data = [];
    present_user_ids = [];
    attendance_start = false;
    currentSubject = "";

    res.json(report);
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));