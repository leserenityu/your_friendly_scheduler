
// Mock data storage (in real app, this would be a database)
let users = [];
let currentUser = null;
let userSchedules = {};

// Sample users for demo
const sampleUsers = [
    { id: 1, name: 'Alex Johnson', major: 'Computer Science', year: 'sophomore', email: 'alex.johnson@utdallas.edu' },
    { id: 2, name: 'Sarah Kim', major: 'Business', year: 'junior', email: 'sarah.kim@utdallas.edu' },
    { id: 3, name: 'Mike Rodriguez', major: 'Engineering', year: 'freshman', email: 'mike.rodriguez@utdallas.edu' },
    { id: 4, name: 'Emma Chen', major: 'Psychology', year: 'senior', email: 'emma.chen@utdallas.edu' }
];

// Initialize sample schedules
userSchedules = {
    1: [
        { course: 'CS 1336 - Programming Fundamentals', days: 'MWF', start: '09:00', end: '10:00', location: 'ECSS 2.306' },
        { course: 'MATH 2417 - Calculus I', days: 'TR', start: '11:00', end: '12:30', location: 'ECSW 1.315' }
    ],
    2: [
        { course: 'BCOM 3310 - Business Communication', days: 'MW', start: '14:00', end: '15:30', location: 'JSOM 1.118' },
        { course: 'ACCT 2301 - Accounting I', days: 'TR', start: '09:30', end: '11:00', location: 'JSOM 2.904' }
    ],
    3: [
        { course: 'ECS 1100 - Intro to Engineering', days: 'F', start: '10:00', end: '11:00', location: 'ECSW 1.365' },
        { course: 'PHYS 2325 - Physics I', days: 'MWF', start: '13:00', end: '14:00', location: 'SCI 1.116' }
    ],
    4: [
        { course: 'PSY 2301 - General Psychology', days: 'TR', start: '15:30', end: '17:00', location: 'GR 2.302' },
        { course: 'STAT 2332 - Statistics', days: 'MW', start: '10:00', end: '11:30', location: 'FO 2.702' }
    ]
};

function switchTab(tabName) {
    // Hide all tab contents
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
    });
            
    // Remove active class from all tabs
    document.querySelectorAll('.tab').forEach(tab => {
        tab.classList.remove('active');
    });
            
    // Show selected tab content
    document.getElementById(tabName + '-tab').classList.add('active');
            
    // Add active class to clicked tab
    event.target.classList.add('active');
}

function showStatusMessage(message, type) {
    const statusDiv = document.getElementById('status-message');
    statusDiv.innerHTML = `<div class="status-message ${type}">${message}</div>`;
    setTimeout(() => {
        statusDiv.innerHTML = '';
    }, 3000);
}

function login() {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
            
    if (!email || !password) {
        showStatusMessage('Please fill in all fields', 'error');
        return;
    }
            
    // Mock login - in real app, verify credentials
    const user = sampleUsers.find(u => u.email === email);
    if (user) {
        currentUser = user;
        showApp();
    } else {
        showStatusMessage('Invalid credentials', 'error');
    }
}

function signup() {
    const name = document.getElementById('signup-name').value;
    const email = document.getElementById('signup-email').value;
    const major = document.getElementById('signup-major').value;
    const year = document.getElementById('signup-year').value;
    const password = document.getElementById('signup-password').value;
            
    if (!name || !email || !major || !year || !password) {
        showStatusMessage('Please fill in all fields', 'error');
        return;
    }
            
    if (!email.includes('@utdallas.edu')) {
        showStatusMessage('Please use your UTD email address', 'error');
        return;
    }
            
    // Mock signup - in real app, save to database
    const newUser = {
        id: Date.now(),
        name,
        email,
        major,
        year
    };
            
    users.push(newUser);
    currentUser = newUser;
    userSchedules[newUser.id] = [];
            
    showStatusMessage('Account created successfully!', 'success');
    setTimeout(() => {
        showApp();
    }, 1500);
}

function showApp() {
    document.getElementById('auth-section').classList.add('hidden');
    document.getElementById('app-content').classList.remove('hidden');
            
    // Update user profile
    document.getElementById('user-name').textContent = currentUser.name;
    document.getElementById('user-details').textContent = `${currentUser.major} • ${currentUser.year}`;
            
    // Load user's schedule
    loadSchedule();
    findAvailableUsers();
}

function addClass() {
    const courseName = document.getElementById('course-name').value;
    const days = document.getElementById('course-days').value;
    const startTime = document.getElementById('start-time').value;
    const endTime = document.getElementById('end-time').value;
    const location = document.getElementById('location').value;
            
    if (!courseName || !days || !startTime || !endTime) {
        showStatusMessage('Please fill in all required fields', 'error');
        return;
    }
            
    if (startTime >= endTime) {
        showStatusMessage('End time must be after start time', 'error');
        return;
    }
            
    const classData = {
        course: courseName,
        days: days,
        start: startTime,
        end: endTime,
        location: location || 'TBD'
    };
            
    if (!userSchedules[currentUser.id]) {
        userSchedules[currentUser.id] = [];
    }
            
    userSchedules[currentUser.id].push(classData);
            
    // Clear form
    document.getElementById('course-name').value = '';
    document.getElementById('course-days').value = '';
    document.getElementById('start-time').value = '';
    document.getElementById('end-time').value = '';
    document.getElementById('location').value = '';
            
    showStatusMessage('Class added successfully!', 'success');
    loadSchedule();
    findAvailableUsers();
}

function loadSchedule() {
    const scheduleList = document.getElementById('schedule-list');
    const userClasses = userSchedules[currentUser.id] || [];
            
    if (userClasses.length === 0) {
        scheduleList.innerHTML = '<p style="color: #666; text-align: center; padding: 20px;">No classes added yet. Add your first class above!</p>';
        return;
    }
            
    scheduleList.innerHTML = userClasses.map(cls => `
        <div class="schedule-item">
            <h4>${cls.course}</h4>
            <p><strong>Days:</strong> ${cls.days}</p>
            <p><strong>Time:</strong> ${cls.start} - ${cls.end}</p>
            <p><strong>Location:</strong> ${cls.location}</p>
        </div>
    `).join('');
}

function findAvailableUsers() {
    const availableUsersDiv = document.getElementById('available-users');
    const currentTime = new Date();
    const currentHour = currentTime.getHours();
    const currentMinute = currentTime.getMinutes();
    const currentTimeStr = `${currentHour.toString().padStart(2, '0')}:${currentMinute.toString().padStart(2, '0')}`;
            
    // Get users who are currently free (mock logic)
    const availableUsers = sampleUsers.filter(user => {
        if (user.id === currentUser.id) return false;
                
        const userClasses = userSchedules[user.id] || [];
        const isInClass = userClasses.some(cls => {
            return currentTimeStr >= cls.start && currentTimeStr <= cls.end;
        });
                
        return !isInClass;
    });
            
    if (availableUsers.length === 0) {
        availableUsersDiv.innerHTML = '<p style="color: #666; text-align: center; padding: 20px;">No users available right now. Check back later!</p>';
        return;
    }
            
    availableUsersDiv.innerHTML = availableUsers.map(user => `
        <div class="user-card">
            <div class="user-info">
                <h4>${user.name}</h4>
                <p>${user.major} • ${user.year}</p>
                <p style="color: #28a745; font-size: 0.8em;">🟢 Available now</p>
            </div>
            <button class="connect-btn" onclick="connectWithUser('${user.name}')">Connect</button>
        </div>
    `).join('');
}

function connectWithUser(userName) {
    showStatusMessage(`Connection request sent to ${userName}!`, 'success');
    // In real app, this would open a chat or send a notification
}

function logout() {
    currentUser = null;
    document.getElementById('auth-section').classList.remove('hidden');
    document.getElementById('app-content').classList.add('hidden');
            
    // Clear login form
    document.getElementById('login-email').value = '';
    document.getElementById('login-password').value = '';
}

// Initialize the app
document.addEventListener('DOMContentLoaded', function() {
    // Auto-refresh available users every 30 seconds
    setInterval(findAvailableUsers, 30000);
});