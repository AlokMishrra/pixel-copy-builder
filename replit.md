# Zero's School Platform

## Overview

Zero's School is a comprehensive educational platform that connects educational institutions (schools and colleges) with corporate partners and mentors to create a holistic learning ecosystem. The platform serves as India's largest institutional chain, facilitating partnerships, memberships, mentorship programs, and career development opportunities for students. Built as a full-stack web application, it features a React-based frontend with a modern component library and an Express.js backend with PostgreSQL database integration.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
The client-side application is built using React with TypeScript, leveraging modern development practices and tools:

- **Component Framework**: React 18 with TypeScript for type safety and better development experience
- **UI Component Library**: Shadcn/ui components built on top of Radix UI primitives for accessibility and consistency
- **Styling**: Tailwind CSS with custom design system variables for theming and responsive design
- **State Management**: TanStack React Query for server state management and data fetching
- **Routing**: React Router for client-side navigation
- **Form Handling**: React Hook Form with Zod validation for type-safe form management
- **Build Tool**: Vite for fast development and optimized builds

The application follows a component-based architecture with clear separation of concerns. Components are organized into UI components, feature-specific components, and page components.

### Backend Architecture
The server-side application uses a Node.js runtime with Express.js framework:

- **Runtime**: Node.js with ES modules support
- **Framework**: Express.js for HTTP server and API routing
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Schema Management**: Drizzle Kit for database migrations and schema management
- **Session Management**: Connect-pg-simple for PostgreSQL-backed sessions
- **Development**: Hot module replacement and middleware integration with Vite

The backend follows a modular structure with separate concerns for routing, storage abstraction, and development tooling.

### Database Architecture
The application uses PostgreSQL as the primary database with a structured approach:

- **ORM**: Drizzle ORM for type-safe database queries and schema definitions
- **Schema**: Defined in TypeScript with automatic type inference
- **Migrations**: Managed through Drizzle Kit configuration
- **Connection**: Neon Database serverless PostgreSQL for cloud deployment

Current schema includes user management with username/password authentication. The storage layer provides an abstraction interface for CRUD operations with both in-memory and database implementations.

### Authentication & Authorization
The application implements a session-based authentication system:

- **Session Storage**: PostgreSQL-backed sessions using connect-pg-simple
- **User Management**: Username/password authentication with hashed passwords
- **Storage Interface**: Abstracted user operations through IStorage interface

### Component Design System
The UI follows a comprehensive design system approach:

- **Design Tokens**: CSS custom properties for colors, spacing, and typography
- **Color System**: HSL-based color palette with semantic naming
- **Component Library**: Reusable components built on Radix UI primitives
- **Theme Support**: Light/dark mode capability with CSS variables
- **Responsive Design**: Mobile-first approach with Tailwind CSS breakpoints

### Development Workflow
The development environment is optimized for rapid iteration:

- **Hot Reloading**: Vite dev server with React fast refresh
- **Type Safety**: Full TypeScript coverage across frontend and backend
- **Code Quality**: ESLint and Prettier integration for consistent code style
- **Development Tools**: Replit-specific plugins for enhanced development experience

## External Dependencies

### Database Services
- **Neon Database**: Serverless PostgreSQL hosting with connection pooling and automatic scaling
- **Drizzle ORM**: Type-safe database toolkit for PostgreSQL operations and migrations

### UI & Component Libraries
- **Radix UI**: Comprehensive collection of unstyled, accessible UI components
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- **Lucide React**: Modern icon library with React components

### Development & Build Tools
- **Vite**: Fast build tool with development server and hot module replacement
- **TypeScript**: Static type checking for enhanced developer experience
- **React Query**: Powerful data synchronization library for React applications

### Form Management
- **React Hook Form**: Performant forms with minimal re-renders
- **Zod**: TypeScript-first schema validation library
- **Hookform Resolvers**: Integration between React Hook Form and Zod validation

### Date & Time Handling
- **date-fns**: Modern JavaScript date utility library for parsing and formatting

### Session Management
- **Express Session**: Session middleware for Express applications
- **Connect PG Simple**: PostgreSQL session store for persistent sessions