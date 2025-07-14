# Your Friendly Scheduler 🎓

A web application designed to help UTD students find classmates who are available to hang out based on their class schedules.

## 🎯 Problem Statement

College students often struggle to find friends who are free for hangouts. Current solutions like group chats and social media don't provide visibility into when people are actually available. This app solves that by letting students share their class schedules and automatically finding overlapping free time.

## 🚀 Features

### Current MVP (v1.0)
- **User Authentication** - UTD email-based signup and login
- **Class Schedule Management** - Add courses with times, days, and locations
- **Real-time Availability** - See who's free right now based on class schedules
- **User Discovery** - Find available students by major and year
- **Connection System** - Send connection requests to available users

### Planned Features (v2.0)
- **In-app Messaging** - Chat with matched users
- **Group Hangout Rooms** - Create public hangout events
- **Advanced Scheduling** - "Who's free Thursday 2-4pm?" queries
- **Accountability System** - Reduce flaky behavior with rescheduling prompts
- **Campus Integration** - UTD course catalog integration
- **Push Notifications** - Get notified when friends are available

## 📊 User Research

**Survey Results (July 2025):**
- 10 UTD freshman responses
- 80% comfortable sharing class schedules
- 80% experience "don't know who's free" problem regularly
- 50% prefer planning days ahead vs. spontaneous
- Strong interest from commuter students

**Key Pain Points Identified:**
- Last-minute cancellations
- Plans getting lost in group chats
- Scheduling conflicts with work/commitments
- Difficulty coordinating across different friend groups

## 🛠️ Technology Stack

**Frontend:**
- HTML5, CSS3, JavaScript (ES6+)
- Responsive design with CSS Grid/Flexbox
- Modern UI with smooth animations

**Backend (Planned):**
- Node.js with Express.js
- PostgreSQL database
- JWT authentication
- WebSocket for real-time features

**Future Integrations:**
- UTD course catalog API
- Push notification service
- Mobile app (React Native)

## 🎨 Design Philosophy

- **Mobile-first** - Designed for students on-the-go
- **Minimal friction** - Quick schedule input, instant availability
- **Visual clarity** - Clean cards, intuitive time displays
- **UTD branding** - University colors and campus-specific features

## 📱 Getting Started

### Prerequisites
- Web browser (Chrome, Firefox, Safari, Edge)
- UTD email address for signup

### Installation
1. Clone the repository
```bash
git clone https://github.com/yourusername/utd-hangout-finder.git
cd utd-hangout-finder
```

2. Open `index.html` in your web browser
3. Sign up with your UTD email
4. Add your class schedule
5. Start finding available classmates!

### Demo Accounts
For testing purposes, you can use these demo accounts:
- Email: alex.johnson@utdallas.edu
- Password: demo123

## 🔧 Development

### Current Architecture
- **Frontend-only MVP** with mock data simulation
- Local storage for user sessions
- Sample users and schedules for demonstration
- Time-based availability logic

### Next Development Phase
- Set up Node.js backend with Express
- Implement PostgreSQL database schema
- Add real user authentication
- Create API endpoints for schedule management
- Implement WebSocket for real-time updates

## 📈 Roadmap

### Phase 1: Core Functionality (Completed)
- [x] User authentication system
- [x] Class schedule input/management
- [x] Basic availability matching
- [x] User profile system
- [x] Responsive design

### Phase 2: Enhanced Features (In Progress)
- [ ] Backend API development
- [ ] Database integration
- [ ] Real-time messaging system
- [ ] Advanced availability queries
- [ ] Group hangout creation

### Phase 3: Campus Integration (Planned)
- [ ] UTD course catalog integration
- [ ] Campus location mapping
- [ ] Club and organization partnerships
- [ ] Push notification system
- [ ] Mobile app development

### Phase 4: Scale & Optimize (Future)
- [ ] Multi-campus support
- [ ] Advanced matching algorithms
- [ ] Analytics dashboard
- [ ] Gamification features

## 🤝 Contributing

This project is currently in early development. If you're a UTD student interested in contributing:

1. **Developers** - Help with frontend/backend development
2. **Designers** - UI/UX improvements and user flow optimization
3. **Researchers** - User interviews and feature validation
4. **Campus Ambassadors** - Social media and user acquisition

### How to Contribute
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Contact

**Project Creator:** [Serenity Le Underwood]
- Email: [le.serenityu@gmail.com]
- LinkedIn: [www.linkedin.com/in/leserenityu]
- GitHub: [leserenityu]

**Feedback & Suggestions:**
- Open an issue on GitHub
- Email feature requests to [le.serenityu@gmail.com]

## 🙏 Acknowledgments

- UTD freshman class of 2025 for initial user research
- Special thanks to survey participants: Nicholas, Pooja, Eliana, and others

## 📊 Project Status

**Current Version:** v1.0 (MVP)
**Status:** Active Development
**Last Updated:** July 2025
**Next Milestone:** Backend integration (August 2025)

---

*Made by UTD students, for UTD students*