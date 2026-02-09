# Sparq Games - AI-Powered Sports Gaming Platform

## Overview

Sparq Games is a revolutionary AI-powered sports gaming platform that creates mobile games featuring NCAA college athletes, universities, and NIL (Name, Image, Likeness) partnerships. The platform bridges the gap between college sports fans and gaming through innovative mobile experiences, starting with their flagship game "Crown U" - a multiplayer party knockout game.

## System Architecture

### Frontend Architecture
- **React with TypeScript** - Modern single-page application built with React 18+ and TypeScript for type safety
- **Wouter Router** - Lightweight client-side routing for navigation
- **Tailwind CSS + shadcn/ui** - Utility-first CSS framework with pre-built component library
- **Vite** - Fast build tool and development server
- **Responsive Design** - Mobile-first approach optimized for all devices

### Backend Architecture
- **Express.js** - Node.js web framework for API endpoints
- **TypeScript** - Full-stack type safety with shared types
- **RESTful API** - Clean API design for frontend-backend communication
- **Session Management** - PostgreSQL-based session storage using connect-pg-simple

### Database & ORM
- **PostgreSQL** - Primary database for production data
- **Drizzle ORM** - Type-safe database queries with TypeScript
- **Neon Database** - Serverless PostgreSQL hosting
- **Database Migration** - Automated schema management with Drizzle Kit

## Key Components

### Core Features
1. **Beta Signup System** - User registration for Crown U beta testing
2. **Partnership Inquiries** - University partnership application system
3. **Media Requests** - Press and media contact management
4. **Newsletter Subscriptions** - Email marketing integration
5. **Content Management** - News, team bios, and company information

### Database Schema
- **Users** - User authentication and profiles
- **Beta Signups** - Beta waitlist management with sports preferences
- **Partnership Inquiries** - University partnership applications
- **Media Requests** - Press and media contact requests
- **Subscribers** - Newsletter and update subscriptions

### UI Components
- **Form Handling** - React Hook Form with Zod validation
- **Animation System** - AOS (Animate on Scroll) for smooth transitions
- **Toast Notifications** - User feedback system
- **Responsive Navigation** - Mobile-optimized navigation
- **Video Integration** - Background videos and media content

## Data Flow

### User Interactions
1. **Beta Signup Flow**: User submits form → Validation → Database storage → Email notification
2. **Partnership Inquiry**: University submits partnership request → Admin notification → Follow-up process
3. **Media Requests**: Press contacts submit requests → Internal routing → Response handling
4. **Newsletter Signup**: Email subscription → Validation → Marketing system integration

### Content Delivery
- Static assets served via Vite in development
- Production builds optimized for CDN delivery
- Video content with lazy loading and optimization
- SEO-optimized meta tags and structured data

## External Dependencies

### Email Service
- **Nodemailer** - Email delivery system
- **Google Workspace SMTP** - Email sending infrastructure
- **Email Templates** - HTML email formatting for notifications

### Third-Party Services
- **TanStack Query** - Server state management and caching
- **Font Awesome** - Icon library
- **Google Fonts** - Typography (Inter, Bebas Neue)
- **AOS Library** - Scroll-based animations

### Development Tools
- **ESBuild** - Fast JavaScript bundler for production
- **PostCSS** - CSS processing with Tailwind
- **TypeScript Compiler** - Type checking and compilation

## Deployment Strategy

### Production Build
```bash
npm run build  # Vite frontend build + ESBuild backend bundle
npm start      # Production server
```

### Database Management
```bash
npm run db:push  # Deploy schema changes to production
```

### Environment Configuration
- `DATABASE_URL` - PostgreSQL connection string
- `GOOGLE_APP_PASSWORD` - Email service authentication
- `NODE_ENV` - Environment mode (development/production)

### Security Measures
- HTTPS enforcement in production
- Security headers (HSTS, XSS protection, content type sniffing)
- Input validation with Zod schemas
- SQL injection prevention via parameterized queries

## Changelog

- July 08, 2025: Initial setup
- July 08, 2025: Fixed SSL certificate issue for sparqgames.com by removing development SSL code and configuring clean server for Replit Deployments automatic SSL provisioning
- July 20, 2025: Resolved SSL certificate expiration issue - certificate is now valid and working. Removed problematic redirect code, enhanced HSTS security headers, and added SSL health check endpoint. Issue was primarily browser cache related.

## User Preferences

Preferred communication style: Simple, everyday language.