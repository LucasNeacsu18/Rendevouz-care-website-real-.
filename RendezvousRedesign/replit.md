# Rendezvous Care - Healthcare Website

## Overview

Rendezvous Care is a modern, responsive website for a healthcare service provider specializing in personal care and home support services. The application is built as a full-stack React application with a glass morphism design aesthetic, featuring animated components and a professional healthcare-focused user interface. The site provides information about care services, staff qualifications, and includes contact functionality for potential clients.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development practices
- **Routing**: Wouter for lightweight client-side routing with support for Home, About, Contact, and 404 pages
- **State Management**: TanStack React Query for server state management and API caching
- **Styling**: Tailwind CSS with custom CSS variables for theming and glass morphism effects
- **UI Components**: Comprehensive component library built on Radix UI primitives for accessibility
- **Animation**: Framer Motion for smooth page transitions and interactive animations
- **Build Tool**: Vite for fast development and optimized production builds

### Design System
- **Component Architecture**: Modular UI components following atomic design principles
- **Theming**: CSS custom properties for light/dark mode support and consistent design tokens
- **Glass Morphism**: Custom glass card components with backdrop blur effects for modern aesthetic
- **Typography**: Inter font family with custom font loading and fallbacks
- **Icons**: Lucide React for consistent iconography throughout the application

### Backend Architecture
- **Runtime**: Node.js with Express.js framework (inferred from package naming and build scripts)
- **Database ORM**: Drizzle ORM for type-safe database operations
- **Database Provider**: Configured for Neon Database (serverless PostgreSQL)
- **Session Management**: PostgreSQL-based session storage using connect-pg-simple
- **API Architecture**: RESTful API design with proper error handling and type validation

### Development Workflow
- **Type Checking**: Full TypeScript integration with strict compiler options
- **Development Server**: Hot module replacement and fast refresh for efficient development
- **Build Process**: Separate client and server build pipelines with esbuild for server optimization
- **Code Quality**: ESLint and Prettier integration for consistent code formatting

### Deployment Architecture
- **Platform**: Vercel deployment with optimized build configuration
- **Static Assets**: Client-side assets served from CDN with proper caching headers
- **Server Deployment**: Containerized server deployment with environment-based configuration
- **Asset Management**: Static image assets stored in attached_assets directory

## External Dependencies

### Database Services
- **Neon Database**: Serverless PostgreSQL database for scalable data storage
- **Drizzle ORM**: Type-safe database operations with schema validation
- **connect-pg-simple**: PostgreSQL session store for user session management

### UI and Styling
- **Radix UI**: Comprehensive set of accessible UI primitives including dialogs, dropdowns, navigation menus
- **Tailwind CSS**: Utility-first CSS framework with custom configuration for healthcare branding
- **Framer Motion**: Animation library for smooth transitions and micro-interactions
- **Lucide React**: Feather-inspired icon library for consistent iconography

### Development Tools
- **Vite**: Next-generation frontend build tool with hot module replacement
- **TanStack React Query**: Powerful data synchronization for React applications
- **React Hook Form**: Performant forms with easy validation
- **Zod**: TypeScript-first schema validation for form data and API responses

### Fonts and Assets
- **Google Fonts**: Inter, DM Sans, Architects Daughter, Fira Code, and Geist Mono for typography hierarchy
- **Custom Images**: Healthcare-related imagery stored in attached_assets directory
- **Logo Assets**: Company branding elements with transparent background support

### Deployment and Hosting
- **Vercel**: Frontend hosting and deployment platform with automatic deployments
- **Replit Integration**: Development environment integration with runtime error overlays and cartographer plugin