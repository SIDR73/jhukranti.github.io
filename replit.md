# JHU Kranti A Cappella Group Website

## Overview

This is a modern, responsive website for JHU Kranti, Johns Hopkins University's premier South Asian Fusion a cappella group. The application serves as the group's digital presence, showcasing their musical performances, team members, history, and providing a way for visitors to contact the group. Built as a full-stack web application with React frontend and Express backend, it features a clean, modern design with cultural aesthetics reflecting the group's South Asian heritage.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query (React Query) for server state management and caching
- **UI Components**: Shadcn/ui component library built on Radix UI primitives for accessibility
- **Styling**: Tailwind CSS with custom design system featuring Kranti-specific color palette
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **API Design**: RESTful API architecture with JSON responses
- **Data Storage**: In-memory storage using Map data structures (MemStorage class)
- **Schema Validation**: Zod for runtime type checking and API request validation
- **Development**: Hot module replacement via Vite integration in development mode

### Database Schema
The application uses Drizzle ORM with PostgreSQL dialect, though currently implements in-memory storage:
- **Users Table**: Basic user authentication schema with username/password
- **Contact Messages Table**: Stores contact form submissions with full contact details and timestamps
- **Schema Validation**: Drizzle-Zod integration for type-safe database operations

### Design System
- **Color Palette**: Custom Kranti brand colors including navy, gold, blue, and slate
- **Typography**: Clean, modern font choices with proper hierarchy
- **Responsive Design**: Mobile-first approach with Tailwind's responsive utilities
- **Dark Mode**: CSS custom properties setup for potential dark theme support

### Component Architecture
- **Modular Sections**: Page divided into reusable section components (Hero, About, Team, Music, Contact)
- **UI Components**: Comprehensive component library including forms, buttons, dialogs, and navigation
- **Accessibility**: Built on Radix UI primitives ensuring ARIA compliance and keyboard navigation

## External Dependencies

### Core Framework Dependencies
- **React Ecosystem**: React 18, React DOM for UI rendering
- **Routing**: Wouter for lightweight routing solution
- **State Management**: TanStack React Query for server state and caching

### UI and Styling
- **Component Library**: Radix UI primitives for accessible base components
- **Styling**: Tailwind CSS for utility-first styling
- **Icons**: Lucide React for consistent iconography
- **Utilities**: clsx and tailwind-merge for conditional styling

### Backend and Data
- **Database**: Drizzle ORM with PostgreSQL support via @neondatabase/serverless
- **Validation**: Zod for schema validation and type safety
- **Forms**: React Hook Form with Hookform resolvers for form management

### Development Tools
- **Build Tool**: Vite with React plugin for development and building
- **TypeScript**: Full TypeScript support across frontend and backend
- **Replit Integration**: Replit-specific plugins for development environment
- **Development Utilities**: Error overlay and cartographer plugins for enhanced development experience

### Production Considerations
- **Database**: Currently using in-memory storage; Drizzle configuration ready for PostgreSQL deployment
- **Environment**: Environment variable support for database URL and other configuration
- **Build Process**: Separate build processes for frontend (Vite) and backend (esbuild)