# CPMS - Centralized Patient Management System

**Tagline:** Smart. Secure. Centralized Healthcare.

## 🏥 Overview

CPMS is a modern, fully responsive web application built for healthcare management. It provides comprehensive patient management features with role-based access for Admins, Doctors, and Patients.

## ✨ Features

### 🎯 Core Features
- **Role-Based Dashboards**: Separate interfaces for Admin, Doctor, and Patient roles
- **Patient Management**: Complete CRUD operations for patient records
- **QR Code System**: Generate and scan QR codes for quick patient identification
- **Medical Records**: Manage reports, prescriptions, and appointments
- **Analytics Dashboard**: Visual insights with charts and statistics
- **Theme Support**: Beautiful light and dark mode themes
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Smooth Animations**: Powered by Framer Motion for delightful UX

### 👥 User Roles

#### 🔧 Admin Dashboard
- Manage all patients and doctors
- View hospital resources and analytics
- Generate patient QR codes
- Monitor system statistics

#### 👨‍⚕️ Doctor Dashboard
- View and search patients
- Scan QR codes for quick patient lookup
- Manage appointments
- Add prescriptions and reports

#### 🤒 Patient Dashboard
- View personal QR code
- Access medical reports and prescriptions
- Manage appointments
- Update personal information

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or bun

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The application will open at `http://localhost:8080`

### Demo Credentials

#### Admin
- Email: `admin@cpms.test`
- Password: `admin123`

#### Doctor
- Email: `dr.rekha@cpms.test`
- Password: `doctor123`

#### Patient
- Email: `rahul@cpms.test`
- Password: `patient123`

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Smooth animations
- **React Router DOM** - Client-side routing

### UI Components
- **shadcn/ui** - Beautiful, accessible components
- **Radix UI** - Unstyled, accessible primitives
- **Lucide React** - Icon library

### Additional Libraries
- **react-qr-code** - QR code generation
- **recharts** - Data visualization
- **axios** - HTTP client
- **react-hook-form** - Form management
- **zod** - Schema validation
- **date-fns** - Date utilities

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # shadcn/ui components
│   ├── DashboardLayout.tsx
│   ├── DashboardSidebar.tsx
│   ├── DashboardTopbar.tsx
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── QRCodeDisplay.tsx
│   ├── StatCard.tsx
│   └── ProtectedRoute.tsx
├── contexts/           # React contexts
│   ├── AuthContext.tsx
│   └── ThemeContext.tsx
├── pages/             # Page components
│   ├── Home.tsx
│   ├── Login.tsx
│   ├── Register.tsx
│   ├── AdminDashboard.tsx
│   ├── DoctorDashboard.tsx
│   ├── PatientDashboard.tsx
│   ├── ManagePatients.tsx
│   ├── PatientProfile.tsx
│   ├── Settings.tsx
│   └── NotFound.tsx
├── utils/             # Utility functions
│   └── mockData.ts    # Mock data for demo
├── App.tsx            # Root component with routing
├── index.css          # Global styles and design system
└── main.tsx           # Application entry point
```

## 🎨 Design System

### Color Palette
- **Primary**: Teal (#0ea5e3) - Trust and healthcare
- **Secondary**: Light Blue - Professional medical
- **Accent**: Blue - Interactive elements
- **Success**: Green - Positive actions
- **Warning**: Orange - Cautions
- **Destructive**: Red - Dangerous actions

### Key Design Features
- **Healthcare-focused color scheme**
- **Smooth gradients and shadows**
- **Glass morphism effects**
- **Consistent spacing and typography**
- **Accessible contrast ratios**
- **Responsive breakpoints**

## 🔒 Security Features

- Role-based access control (RBAC)
- Protected routes with authentication checks
- Secure session management
- Input validation with Zod
- Password strength requirements

## 📱 Responsive Design

- **Mobile First**: Optimized for mobile devices
- **Tablet Support**: Adjusted layouts for tablets
- **Desktop**: Full-featured desktop experience
- **Touch-friendly**: Large tap targets and gestures

## 🎯 Key Components

### Authentication System
- Login and registration with role selection
- Session persistence with localStorage
- Protected routes for each role
- Automatic redirection based on role

### Dashboard Layouts
- Collapsible sidebar navigation
- Top bar with notifications and user menu
- Responsive grid layouts
- Real-time statistics cards

### QR Code System
- Generate unique QR codes for patients
- Download QR codes as images
- Quick patient lookup via QR scanning
- Secure patient identification

## 🚧 Future Enhancements

- [ ] Real backend API integration
- [ ] Database connectivity
- [ ] File upload for medical reports
- [ ] Real-time notifications
- [ ] Video consultation integration
- [ ] Multi-language support
- [ ] Export data as PDF
- [ ] Email notifications
- [ ] Advanced search filters
- [ ] Appointment scheduling system

## 📝 Development Notes

### Mock Data
The application currently uses mock data for demonstration. All CRUD operations are simulated in the frontend. In production, these should be connected to a real backend API.

### Authentication
Authentication is currently mocked with localStorage. For production:
- Implement JWT tokens
- Add refresh token mechanism
- Secure HTTP-only cookies
- Server-side session validation

### State Management
The app uses React Context for global state. For larger applications, consider:
- Redux Toolkit
- Zustand
- React Query for server state

## 🤝 Contributing

This is a demonstration project. Feel free to fork and customize for your needs.

## 📄 License

MIT License - feel free to use this project for learning or as a starting point for your healthcare application.

## 🙏 Acknowledgments

- Built with [Lovable](https://lovable.dev)
- UI components from [shadcn/ui](https://ui.shadcn.com)
- Icons from [Lucide](https://lucide.dev)
- Design inspiration from modern healthcare platforms

## 📞 Support

For questions or issues, please open an issue in the repository.

---

**Built with ❤️ for better healthcare management**
