# Memora Experience Website - Product Requirements Document

> **Project:** Memora Experience Website  
> **Version:** 1.0  
> **Last Updated:** December 12, 2025  
> **Method:** Repository Planning Graph (RPG)

---

## Overview

### Problem Statement

Memora Experience, a Cyprus-based event planning company, currently lacks a unified digital presence to showcase their diverse event offerings. Their flagship Planitario event, student trips, business expos, and custom event services need a professional, modern website that:

1. **Centralizes information** about all Memora events and services in one place
2. **Enables online bookings** for student trips with secure payment processing
3. **Attracts sponsors and business partners** through compelling presentation
4. **Builds trust** through showcasing past events and experiences
5. **Generates leads** for custom event planning services

Currently, potential customers must rely on fragmented information sources, and there's no streamlined way to book student trips or inquire about sponsorships.

### Target Users

| Persona | Goals | Pain Points |
|---------|-------|-------------|
| **Students (18-25)** | Book exciting 3-day trips with friends | Unclear pricing, complex booking, trust concerns |
| **Parents/Families** | Find family-friendly events like Planitario | Need clear information about family vs adult activities |
| **Business Owners** | Exhibit at expos, reach Cypriot market | Unclear booth pricing, application process |
| **Corporate Clients** | Plan team events, conferences | Need to quickly assess capabilities |
| **Potential Sponsors** | Partner with growing events brand | Need audience data, sponsorship ROI info |

### Success Metrics

| Metric | Target | Measurement |
|--------|--------|-------------|
| Student trip booking conversion | 5%+ of page visitors | Stripe transactions / page views |
| Sponsor inquiry rate | 10+ inquiries/month | Contact form submissions |
| Time to booking completion | < 5 minutes | Analytics funnel tracking |
| Mobile responsiveness score | 95+ Lighthouse | Automated testing |
| Page load time | < 3 seconds | Core Web Vitals |

---

## Functional Decomposition

### Capability: Design System & UI Foundation

Establishes the visual language, component library, and reusable UI elements that ensure consistency across all pages.

#### Feature: Theme Configuration
- **Description**: Define color palette, typography, spacing, and design tokens for the entire application
- **Inputs**: Brand guidelines (white background, modern minimal, vibrant accents)
- **Outputs**: Tailwind CSS configuration, CSS variables, theme tokens
- **Behavior**: Apply design system tokens globally; support light theme with playful accent colors

#### Feature: Core UI Components
- **Description**: Build reusable primitive components (buttons, cards, inputs, badges)
- **Inputs**: Design tokens, component specifications
- **Outputs**: Exported React components with TypeScript types
- **Behavior**: Components follow accessibility guidelines (WCAG 2.1 AA); support hover/focus states

#### Feature: Animated Components Integration
- **Description**: Integrate Magic UI, Aceternity UI components (Shimmer Button, Moving Border, Marquee, etc.)
- **Inputs**: Component library documentation, design requirements
- **Outputs**: Configured animated components ready for use
- **Behavior**: Lazy-load heavy animations; respect reduced-motion preferences

#### Feature: Layout Components
- **Description**: Create header, footer, page layout wrappers, and section containers
- **Inputs**: Navigation structure, footer requirements
- **Outputs**: Header, Footer, PageLayout, SectionWrapper components
- **Behavior**: Responsive design; sticky header; mobile navigation menu

---

### Capability: Homepage

Serves as the main entry point showcasing Planitario, services, student trips, and building trust through past events.

#### Feature: Hero Section (Planitario Focus)
- **Description**: Eye-catching hero promoting flagship Planitario event with video/image and CTA to external site
- **Inputs**: Planitario media assets, headline copy, CTA URL
- **Outputs**: Rendered hero with Hero Video Dialog, Spotlight/Aurora Background effects
- **Behavior**: Autoplay video preview; animated text reveal; prominent CTA button

#### Feature: Services Section
- **Description**: Display 4 service offerings (Event Planning, Venue Sourcing, Vendor Coordination, Corporate Events)
- **Inputs**: Service data (title, description, icon)
- **Outputs**: Bento Grid or Wobble Card layout with service cards
- **Behavior**: Card hover animations; link to Contact page with pre-selected subject

#### Feature: Student Trips Teaser
- **Description**: Promote student trips with engaging visuals and highlights
- **Inputs**: Trip imagery, what's-included bullet points
- **Outputs**: Visual showcase section with CTA to Student Trips page
- **Behavior**: Image carousel or 3D Card Effect; animated entrance on scroll

#### Feature: About Preview
- **Description**: Quick brand introduction with mission statement
- **Inputs**: About copy, brand imagery
- **Outputs**: Short text section with "Learn More" CTA
- **Behavior**: Text Generate Effect for headline; clean typography

#### Feature: Past Events Gallery
- **Description**: Social proof through curated event photos
- **Inputs**: Past event images with metadata (name, date, type)
- **Outputs**: Grid gallery with Focus Cards effect
- **Behavior**: Lazy-load images; click to expand or navigate to Experiences page

#### Feature: Sponsors Showcase
- **Description**: Display partner/sponsor logos with CTA to become sponsor
- **Inputs**: Sponsor logo images
- **Outputs**: Marquee scrolling logos section
- **Behavior**: Infinite scroll animation; responsive logo sizing

#### Feature: Final CTA Section
- **Description**: Conversion-focused call-to-action before footer
- **Inputs**: Headline copy, CTA button config
- **Outputs**: Bold CTA section with Wavy Background, Shimmer Button
- **Behavior**: Animated background; prominent button

---

### Capability: Student Trips

Complete booking flow for 3-day student experiences including listing, details, and payment.

#### Feature: Student Trips Landing Page
- **Description**: Main page showcasing what student trips are, upcoming trips, and testimonials
- **Inputs**: Trip overview content, upcoming trips data, testimonials
- **Outputs**: Full landing page with hero, explainer, trip cards, testimonials, FAQ
- **Behavior**: Apple Cards Carousel for trips; Infinite Moving Cards for testimonials

#### Feature: Individual Trip Pages
- **Description**: Dynamic pages for each trip with full details and booking capability
- **Inputs**: Trip data (slug, name, dates, location, itinerary, pricing, gallery)
- **Outputs**: Trip detail page with Timeline for itinerary, booking form
- **Behavior**: Day-by-day itinerary with Timeline component; urgency indicators for limited spots

#### Feature: Trip Booking Form
- **Description**: Multi-step form collecting attendee information before payment
- **Inputs**: User data (name, email, phone, emergency contact, dietary requirements)
- **Outputs**: Validated form data ready for Stripe checkout
- **Behavior**: Form validation; progress indicator; save progress locally

#### Feature: Stripe Payment Integration
- **Description**: Secure payment processing for trip bookings
- **Inputs**: Booking form data, trip pricing (including early bird/group discounts)
- **Outputs**: Stripe Checkout session; payment confirmation
- **Behavior**: Handle success/failure states; apply discount codes; store booking data

#### Feature: Student Trips FAQ
- **Description**: Accordion-style FAQ section for common questions
- **Inputs**: FAQ content (what to bring, alcohol, age, cancellation)
- **Outputs**: Expandable FAQ component
- **Behavior**: Smooth expand/collapse animations; anchor linking

---

### Capability: Kratiki Ekthesi (Business Expos)

Information hub for expo events targeting both visitors and exhibiting businesses.

#### Feature: Expo Landing Page
- **Description**: Dual-audience page explaining expos for visitors and businesses
- **Inputs**: Expo overview, visitor info, business info, upcoming dates
- **Outputs**: Split-focus landing page with clear sections for each audience
- **Behavior**: Visual separation between visitor/business content; dual CTAs

#### Feature: Exhibitor Information
- **Description**: Business-focused section with stand pricing, packages, and application process
- **Inputs**: Stand packages data, pricing, included features
- **Outputs**: Pricing cards/table with comparison; application CTA
- **Behavior**: Highlight recommended package; clear feature comparison

#### Feature: Past Expo Gallery
- **Description**: Showcase previous expo events with photos and exhibitor logos
- **Inputs**: Past expo images, exhibitor logos
- **Outputs**: Gallery grid with Parallax Scroll effect
- **Behavior**: Lazy-loaded images; hover effects on logos

---

### Capability: Events Hub

Central discovery page for all Memora events with filtering capabilities.

#### Feature: Events Listing Page
- **Description**: Filterable grid of all events (trips, expos, other)
- **Inputs**: All events data, filter options
- **Outputs**: Filterable event cards grid with badges
- **Behavior**: Filter by type (Student Trips, Expos, Other); toggle Upcoming/Past

#### Feature: Individual Event Pages
- **Description**: Dynamic pages for each event with full details
- **Inputs**: Event data (slug, type, details, pricing, gallery)
- **Outputs**: Event detail page with Images Slider hero
- **Behavior**: Conditional rendering based on event type; related events section

#### Feature: Planitario Teaser Card
- **Description**: Special card linking to external Planitario website
- **Inputs**: Planitario preview data, external URL
- **Outputs**: Highlighted card with external link indicator
- **Behavior**: Open in new tab; visual distinction from internal events

---

### Capability: About & Brand

Trust-building pages showcasing Memora's story, mission, and team.

#### Feature: About Page
- **Description**: Full brand story with mission, values, stats, and Cyprus focus
- **Inputs**: Brand story content, mission, values, stats data
- **Outputs**: Narrative page with Lamp Effect headers, Number Ticker stats
- **Behavior**: Animated stat counters on scroll; section transitions

#### Feature: Team Section (Optional)
- **Description**: Team member profiles if photos/bios provided
- **Inputs**: Team member data (name, role, photo, bio)
- **Outputs**: Team grid with Card Hover Effect
- **Behavior**: Hover to reveal bio; placeholder if no data

---

### Capability: Experiences (Past Events)

Visual-first showcase of past events for social proof.

#### Feature: Experiences Gallery Page
- **Description**: Masonry/grid gallery of past event photos with filtering
- **Inputs**: Past event images, event metadata, testimonials, videos
- **Outputs**: Visual gallery with Parallax Scroll, Focus Cards
- **Behavior**: Filter by event type; interspersed testimonials; video embeds

#### Feature: Event Gallery Lightbox
- **Description**: Full-screen image viewer with navigation
- **Inputs**: Gallery images for selected event
- **Outputs**: Modal lightbox with Images Slider
- **Behavior**: Keyboard navigation; swipe on mobile; zoom with Lens effect

---

### Capability: Sponsorship

Attract and convert potential sponsors with compelling information.

#### Feature: Become a Sponsor Page
- **Description**: Landing page for potential sponsors with benefits, audience stats, packages
- **Inputs**: Sponsorship benefits, audience data, packages (if defined), past sponsor logos
- **Outputs**: Conversion-focused page with stats, package cards, inquiry form
- **Behavior**: Number Ticker for audience stats; tiered package comparison

#### Feature: Sponsorship Inquiry Form
- **Description**: Lead capture form for sponsorship inquiries
- **Inputs**: Contact data, company info, sponsorship interests
- **Outputs**: Form submission stored; confirmation email sent
- **Behavior**: Form validation; Resend email confirmation

---

### Capability: Contact

Easy communication channel with Memora.

#### Feature: Contact Page
- **Description**: Contact form with direct info and quick links
- **Inputs**: Form fields, contact info, office location
- **Outputs**: Contact page with form, map embed, quick links
- **Behavior**: Subject dropdown (General, Student Trips, Sponsorship, Business/Expo, Other)

#### Feature: Contact Form Submission
- **Description**: Process and store contact form submissions
- **Inputs**: Form data (name, email, subject, message)
- **Outputs**: Stored submission; confirmation email to user; notification to Memora
- **Behavior**: Server-side validation; Resend for emails; success/error states

---

### Capability: Email System

Transactional email communications via Resend.

#### Feature: Email Templates
- **Description**: Branded HTML email templates for all transactional emails
- **Inputs**: Template content, dynamic data
- **Outputs**: Rendered HTML emails ready for sending
- **Behavior**: Responsive design; consistent branding

#### Feature: Booking Confirmation Email
- **Description**: Email sent after successful student trip booking
- **Inputs**: Booking data, trip details, payment receipt
- **Outputs**: Formatted confirmation email with all booking details
- **Behavior**: Immediate send after payment success

#### Feature: Contact Form Confirmation Email
- **Description**: Auto-reply to contact form submissions
- **Inputs**: Form submission data
- **Outputs**: Confirmation email to submitter; notification to Memora team
- **Behavior**: "We'll reply within 24 hours" message

---

### Capability: Data Management

Content storage and management for events, trips, and bookings.

#### Feature: Static Data Layer
- **Description**: Type-safe data files for initial content (events, trips, services)
- **Inputs**: Content data in TypeScript files
- **Outputs**: Typed data exports for components
- **Behavior**: Easy to update; type checking; no CMS dependency initially

#### Feature: Booking Storage
- **Description**: Store completed bookings with all attendee information
- **Inputs**: Booking form data, payment confirmation
- **Outputs**: Stored booking record
- **Behavior**: Secure storage; retrievable for admin viewing (future)

#### Feature: Contact Submissions Storage
- **Description**: Store contact form submissions
- **Inputs**: Contact form data
- **Outputs**: Stored submission record
- **Behavior**: Timestamped; categorized by subject

---

## Structural Decomposition

### Repository Structure

```
memora-experience/
├── src/
│   ├── app/                          # Next.js App Router
│   │   ├── layout.tsx                # Root layout with Header/Footer
│   │   ├── page.tsx                  # Homepage
│   │   ├── globals.css               # Global styles
│   │   ├── student-trips/
│   │   │   ├── page.tsx              # Student trips landing
│   │   │   └── [slug]/
│   │   │       └── page.tsx          # Individual trip page
│   │   ├── kratiki-ekthesi/
│   │   │   └── page.tsx              # Expo page
│   │   ├── events/
│   │   │   ├── page.tsx              # Events hub
│   │   │   └── [slug]/
│   │   │       └── page.tsx          # Individual event page
│   │   ├── about/
│   │   │   └── page.tsx              # About page
│   │   ├── experiences/
│   │   │   └── page.tsx              # Past events gallery
│   │   ├── become-a-sponsor/
│   │   │   └── page.tsx              # Sponsorship page
│   │   ├── contact/
│   │   │   └── page.tsx              # Contact page
│   │   └── api/
│   │       ├── checkout/
│   │       │   └── route.ts          # Stripe checkout API
│   │       ├── webhook/
│   │       │   └── route.ts          # Stripe webhook handler
│   │       ├── contact/
│   │       │   └── route.ts          # Contact form API
│   │       └── sponsor-inquiry/
│   │           └── route.ts          # Sponsorship inquiry API
│   ├── components/
│   │   ├── ui/                       # Base UI components
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── input.tsx
│   │   │   ├── badge.tsx
│   │   │   ├── accordion.tsx
│   │   │   └── index.ts
│   │   ├── animated/                 # Magic UI / Aceternity components
│   │   │   ├── hero-video-dialog.tsx
│   │   │   ├── spotlight.tsx
│   │   │   ├── aurora-background.tsx
│   │   │   ├── lamp-effect.tsx
│   │   │   ├── text-generate-effect.tsx
│   │   │   ├── word-rotate.tsx
│   │   │   ├── bento-grid.tsx
│   │   │   ├── 3d-card.tsx
│   │   │   ├── focus-cards.tsx
│   │   │   ├── wobble-card.tsx
│   │   │   ├── marquee.tsx
│   │   │   ├── infinite-moving-cards.tsx
│   │   │   ├── parallax-scroll.tsx
│   │   │   ├── apple-cards-carousel.tsx
│   │   │   ├── images-slider.tsx
│   │   │   ├── timeline.tsx
│   │   │   ├── shimmer-button.tsx
│   │   │   ├── moving-border.tsx
│   │   │   ├── number-ticker.tsx
│   │   │   ├── wavy-background.tsx
│   │   │   ├── dot-pattern.tsx
│   │   │   └── index.ts
│   │   ├── layout/                   # Layout components
│   │   │   ├── header.tsx
│   │   │   ├── footer.tsx
│   │   │   ├── mobile-nav.tsx
│   │   │   ├── section-wrapper.tsx
│   │   │   └── index.ts
│   │   ├── sections/                 # Page sections
│   │   │   ├── hero-section.tsx
│   │   │   ├── services-section.tsx
│   │   │   ├── trips-teaser-section.tsx
│   │   │   ├── about-preview-section.tsx
│   │   │   ├── gallery-section.tsx
│   │   │   ├── sponsors-section.tsx
│   │   │   ├── cta-section.tsx
│   │   │   ├── testimonials-section.tsx
│   │   │   ├── faq-section.tsx
│   │   │   └── index.ts
│   │   └── forms/                    # Form components
│   │       ├── booking-form.tsx
│   │       ├── contact-form.tsx
│   │       ├── sponsor-inquiry-form.tsx
│   │       └── index.ts
│   ├── lib/                          # Utilities and integrations
│   │   ├── utils.ts                  # cn() helper, general utils
│   │   ├── stripe.ts                 # Stripe client setup
│   │   ├── resend.ts                 # Resend client setup
│   │   └── validations.ts            # Zod schemas for forms
│   ├── data/                         # Static data files
│   │   ├── events.ts                 # Events data
│   │   ├── trips.ts                  # Student trips data
│   │   ├── services.ts               # Services data
│   │   ├── testimonials.ts           # Testimonials data
│   │   ├── sponsors.ts               # Sponsors data
│   │   ├── faq.ts                    # FAQ data
│   │   └── index.ts
│   ├── types/                        # TypeScript types
│   │   ├── event.ts
│   │   ├── trip.ts
│   │   ├── booking.ts
│   │   └── index.ts
│   └── emails/                       # Email templates (React Email)
│       ├── booking-confirmation.tsx
│       ├── contact-confirmation.tsx
│       ├── sponsor-inquiry-confirmation.tsx
│       └── components/
│           ├── email-layout.tsx
│           └── index.ts
├── public/
│   ├── images/
│   │   ├── events/
│   │   ├── trips/
│   │   ├── sponsors/
│   │   └── team/
│   └── videos/
├── tailwind.config.ts
├── next.config.ts
└── package.json
```

### Module Definitions

#### Module: `components/ui`
- **Maps to capability**: Design System & UI Foundation - Core UI Components
- **Responsibility**: Provide consistent, accessible base UI primitives
- **Exports**:
  - `Button` - Primary, secondary, ghost variants
  - `Card` - Container with optional hover effects
  - `Input` - Form input with label and error states
  - `Badge` - Status/category indicators
  - `Accordion` - Expandable FAQ component

#### Module: `components/animated`
- **Maps to capability**: Design System & UI Foundation - Animated Components
- **Responsibility**: Encapsulate third-party animated components with consistent API
- **Exports**: All animated components from Magic UI / Aceternity UI

#### Module: `components/layout`
- **Maps to capability**: Design System & UI Foundation - Layout Components
- **Responsibility**: Page structure and navigation
- **Exports**:
  - `Header` - Sticky nav with mobile menu
  - `Footer` - Full nav, socials, contact
  - `SectionWrapper` - Consistent section padding/spacing

#### Module: `components/sections`
- **Maps to capability**: Homepage, Student Trips, etc.
- **Responsibility**: Reusable page sections
- **Exports**: Section components for each major page area

#### Module: `components/forms`
- **Maps to capability**: Student Trips, Contact, Sponsorship
- **Responsibility**: Form components with validation
- **Exports**:
  - `BookingForm` - Multi-step trip booking
  - `ContactForm` - General contact form
  - `SponsorInquiryForm` - Sponsorship lead form

#### Module: `lib`
- **Maps to capability**: Data Management, Email System
- **Responsibility**: External service integrations and utilities
- **Exports**:
  - `cn()` - Tailwind class merge utility
  - `stripe` - Configured Stripe client
  - `resend` - Configured Resend client
  - Zod validation schemas

#### Module: `data`
- **Maps to capability**: Data Management - Static Data Layer
- **Responsibility**: Type-safe content data
- **Exports**: Typed arrays/objects for all static content

#### Module: `emails`
- **Maps to capability**: Email System - Email Templates
- **Responsibility**: React Email templates
- **Exports**: Email template components

---

## Dependency Graph

### Foundation Layer (Phase 0)
No dependencies - built first.

- **lib/utils**: Utility functions (cn, formatters)
- **types**: TypeScript type definitions
- **tailwind.config**: Design tokens and theme configuration

### UI Foundation Layer (Phase 1)
- **components/ui**: Depends on [lib/utils, types, tailwind.config]
- **components/animated**: Depends on [lib/utils, tailwind.config]
- **components/layout**: Depends on [components/ui, lib/utils]

### Data Layer (Phase 2)
- **data**: Depends on [types]
- **lib/validations**: Depends on [types]

### Integration Layer (Phase 3)
- **lib/stripe**: Depends on [types]
- **lib/resend**: Depends on [types]
- **emails**: Depends on [types, lib/utils]

### Components Layer (Phase 4)
- **components/sections**: Depends on [components/ui, components/animated, data]
- **components/forms**: Depends on [components/ui, lib/validations]

### API Layer (Phase 5)
- **api/checkout**: Depends on [lib/stripe, lib/validations, types]
- **api/webhook**: Depends on [lib/stripe, lib/resend, emails]
- **api/contact**: Depends on [lib/resend, lib/validations, emails]
- **api/sponsor-inquiry**: Depends on [lib/resend, lib/validations, emails]

### Pages Layer (Phase 6)
- **app/page (Homepage)**: Depends on [components/sections, components/layout, data]
- **app/student-trips**: Depends on [components/sections, components/forms, data, api/checkout]
- **app/kratiki-ekthesi**: Depends on [components/sections, components/layout, data]
- **app/events**: Depends on [components/sections, components/layout, data]
- **app/about**: Depends on [components/sections, components/layout, data]
- **app/experiences**: Depends on [components/sections, components/animated, data]
- **app/become-a-sponsor**: Depends on [components/sections, components/forms, data]
- **app/contact**: Depends on [components/sections, components/forms]

---

## Implementation Roadmap

### Phase 0: Project Foundation
**Goal**: Establish development environment, design system tokens, and core utilities

**Entry Criteria**: Clean Next.js project with Tailwind CSS

**Tasks**:
- [ ] Configure Tailwind with custom theme (colors, fonts, spacing) (depends on: none)
  - Acceptance criteria: Design tokens match requirements (white bg, vibrant accents)
  - Test strategy: Visual inspection of token output
  
- [ ] Create lib/utils.ts with cn() helper and common utilities (depends on: none)
  - Acceptance criteria: cn() correctly merges Tailwind classes
  - Test strategy: Unit tests for class merging
  
- [ ] Define TypeScript types for all data models (depends on: none)
  - Acceptance criteria: Types cover Event, Trip, Booking, Sponsor, Testimonial
  - Test strategy: TypeScript compilation passes

- [ ] Install and configure Framer Motion dependencies (depends on: none)
  - Acceptance criteria: framer-motion, clsx, tailwind-merge installed
  - Test strategy: Import test in component

**Exit Criteria**: Tailwind configured, utilities available, types defined

**Delivers**: Foundation for all subsequent development

---

### Phase 1: UI Component Library
**Goal**: Build reusable UI primitives and integrate animated components

**Entry Criteria**: Phase 0 complete

**Tasks**:
- [ ] Build base Button component with variants (depends on: [tailwind config, utils])
  - Acceptance criteria: Primary, secondary, ghost, sizes work correctly
  - Test strategy: Storybook or visual testing
  
- [ ] Build Card component with hover states (depends on: [tailwind config, utils])
  - Acceptance criteria: Consistent padding, optional hover effect
  - Test strategy: Visual inspection
  
- [ ] Build Input component with label/error states (depends on: [tailwind config, utils])
  - Acceptance criteria: Accessible, shows validation errors
  - Test strategy: Form integration test
  
- [ ] Build Badge component (depends on: [tailwind config, utils])
  - Acceptance criteria: Event type badges display correctly
  - Test strategy: Visual inspection

- [ ] Build Accordion component for FAQs (depends on: [tailwind config, utils])
  - Acceptance criteria: Smooth expand/collapse, accessible
  - Test strategy: Interaction test

- [ ] Integrate Magic UI Shimmer Button (depends on: [utils])
  - Acceptance criteria: Shimmer animation works, respects reduced-motion
  - Test strategy: Animation plays correctly

- [ ] Integrate Magic UI Marquee component (depends on: [utils])
  - Acceptance criteria: Infinite scroll works, pauses on hover
  - Test strategy: Animation test

- [ ] Integrate Magic UI Number Ticker (depends on: [utils])
  - Acceptance criteria: Numbers animate on scroll into view
  - Test strategy: Intersection observer test

- [ ] Integrate Aceternity Spotlight/Aurora Background (depends on: [utils])
  - Acceptance criteria: Background effects render, performant
  - Test strategy: Performance profiling

- [ ] Integrate Aceternity Text Generate Effect (depends on: [utils])
  - Acceptance criteria: Text animates word by word
  - Test strategy: Animation timing test

- [ ] Integrate Aceternity 3D Card Effect (depends on: [utils])
  - Acceptance criteria: Cards tilt on hover
  - Test strategy: Mouse interaction test

- [ ] Integrate Aceternity Focus Cards (depends on: [utils])
  - Acceptance criteria: Non-hovered cards blur
  - Test strategy: Hover state test

- [ ] Integrate Aceternity Timeline component (depends on: [utils])
  - Acceptance criteria: Vertical timeline with sticky headers
  - Test strategy: Scroll behavior test

- [ ] Integrate Aceternity Infinite Moving Cards (depends on: [utils])
  - Acceptance criteria: Cards scroll infinitely
  - Test strategy: Animation loop test

**Exit Criteria**: All UI components available and documented

**Delivers**: Complete component library for page building

---

### Phase 2: Layout & Data Layer
**Goal**: Create layout components and populate static data

**Entry Criteria**: Phase 1 complete

**Tasks**:
- [ ] Build Header component with navigation (depends on: [Button, utils])
  - Acceptance criteria: Sticky, responsive, all nav links work
  - Test strategy: Navigation test across viewports

- [ ] Build mobile navigation menu (depends on: [Header])
  - Acceptance criteria: Hamburger menu, smooth animation, accessible
  - Test strategy: Mobile viewport test

- [ ] Build Footer component (depends on: [ui components])
  - Acceptance criteria: Full nav, socials, Planitario link, contact info
  - Test strategy: Link verification

- [ ] Build SectionWrapper component (depends on: [utils])
  - Acceptance criteria: Consistent padding, optional backgrounds
  - Test strategy: Visual consistency check

- [ ] Create root layout with Header/Footer (depends on: [Header, Footer])
  - Acceptance criteria: All pages wrapped correctly
  - Test strategy: Page navigation test

- [ ] Populate events data file with sample data (depends on: [types])
  - Acceptance criteria: Type-safe, includes all required fields
  - Test strategy: TypeScript validation

- [ ] Populate trips data file with sample data (depends on: [types])
  - Acceptance criteria: Includes itinerary, pricing, galleries
  - Test strategy: TypeScript validation

- [ ] Populate services data file (depends on: [types])
  - Acceptance criteria: 4 services with icons, descriptions
  - Test strategy: TypeScript validation

- [ ] Populate testimonials data file (depends on: [types])
  - Acceptance criteria: Mix of student and sponsor testimonials
  - Test strategy: TypeScript validation

- [ ] Populate sponsors data file (depends on: [types])
  - Acceptance criteria: Logo URLs, optional company links
  - Test strategy: TypeScript validation

- [ ] Create FAQ data for student trips (depends on: [types])
  - Acceptance criteria: Covers what to bring, alcohol, age, cancellation
  - Test strategy: Content review

**Exit Criteria**: Layout complete, all static data available

**Delivers**: Page structure and content ready

---

### Phase 3: Integrations Setup
**Goal**: Configure Stripe and Resend, create email templates

**Entry Criteria**: Phase 2 complete

**Tasks**:
- [ ] Configure Stripe client with environment variables (depends on: [types])
  - Acceptance criteria: Client connects to Stripe test mode
  - Test strategy: API connection test

- [ ] Create Zod validation schemas for all forms (depends on: [types])
  - Acceptance criteria: Booking, contact, sponsor forms validated
  - Test strategy: Unit tests with valid/invalid data

- [ ] Configure Resend client (depends on: [types])
  - Acceptance criteria: Client can send test emails
  - Test strategy: Send test email

- [ ] Create email layout component (depends on: [utils])
  - Acceptance criteria: Branded, responsive email wrapper
  - Test strategy: Email preview

- [ ] Create booking confirmation email template (depends on: [email layout, types])
  - Acceptance criteria: Shows all booking details, receipt
  - Test strategy: Email preview with sample data

- [ ] Create contact confirmation email template (depends on: [email layout])
  - Acceptance criteria: Thanks user, sets response expectation
  - Test strategy: Email preview

- [ ] Create sponsor inquiry confirmation email (depends on: [email layout])
  - Acceptance criteria: Confirms inquiry received
  - Test strategy: Email preview

**Exit Criteria**: Stripe and Resend configured, email templates ready

**Delivers**: Payment and email capabilities

---

### Phase 4: Page Sections
**Goal**: Build reusable section components for pages

**Entry Criteria**: Phase 3 complete

**Tasks**:
- [ ] Build Hero Section with video dialog and effects (depends on: [animated components, data])
  - Acceptance criteria: Video opens in modal, background effects work
  - Test strategy: Video playback test

- [ ] Build Services Section with Bento Grid (depends on: [animated components, data])
  - Acceptance criteria: 4 services displayed, hover effects work
  - Test strategy: Visual inspection

- [ ] Build Student Trips Teaser Section (depends on: [3D Card, data])
  - Acceptance criteria: Trip preview with engaging visuals
  - Test strategy: CTA links correctly

- [ ] Build About Preview Section (depends on: [Text Generate, data])
  - Acceptance criteria: Animated headline, CTA to About page
  - Test strategy: Animation plays

- [ ] Build Gallery Section with Focus Cards (depends on: [Focus Cards, data])
  - Acceptance criteria: Past events grid with hover effects
  - Test strategy: Image loading test

- [ ] Build Sponsors Section with Marquee (depends on: [Marquee, data])
  - Acceptance criteria: Logos scroll infinitely
  - Test strategy: Animation loop test

- [ ] Build CTA Section with Wavy Background (depends on: [Shimmer Button, animated])
  - Acceptance criteria: Animated background, prominent CTA
  - Test strategy: Visual inspection

- [ ] Build Testimonials Section (depends on: [Infinite Moving Cards, data])
  - Acceptance criteria: Testimonials scroll, show photo/quote
  - Test strategy: Animation test

- [ ] Build FAQ Section with Accordion (depends on: [Accordion, data])
  - Acceptance criteria: Expandable items, smooth animation
  - Test strategy: Interaction test

**Exit Criteria**: All page sections built and reusable

**Delivers**: Ready-to-assemble page components

---

### Phase 5: Forms & API Routes
**Goal**: Build forms and backend API routes

**Entry Criteria**: Phase 4 complete

**Tasks**:
- [ ] Build Booking Form component (depends on: [ui components, validations])
  - Acceptance criteria: Multi-step, validates all fields, stores progress
  - Test strategy: Form submission test

- [ ] Build Contact Form component (depends on: [ui components, validations])
  - Acceptance criteria: Subject dropdown, validation, submission
  - Test strategy: Form submission test

- [ ] Build Sponsor Inquiry Form (depends on: [ui components, validations])
  - Acceptance criteria: Company info, interests collected
  - Test strategy: Form submission test

- [ ] Create Stripe checkout API route (depends on: [stripe, validations])
  - Acceptance criteria: Creates checkout session, returns URL
  - Test strategy: API test with test card

- [ ] Create Stripe webhook handler (depends on: [stripe, resend, emails])
  - Acceptance criteria: Handles checkout.session.completed, sends email
  - Test strategy: Webhook test with Stripe CLI

- [ ] Create contact form API route (depends on: [resend, validations, emails])
  - Acceptance criteria: Validates, stores, sends confirmation
  - Test strategy: API test

- [ ] Create sponsor inquiry API route (depends on: [resend, validations, emails])
  - Acceptance criteria: Validates, stores, sends confirmation
  - Test strategy: API test

**Exit Criteria**: All forms and APIs functional

**Delivers**: Complete form submission capabilities

---

### Phase 6: Page Assembly
**Goal**: Assemble all pages using sections and components

**Entry Criteria**: Phase 5 complete

**Tasks**:
- [ ] Build Homepage (depends on: [all homepage sections, layout])
  - Acceptance criteria: All 8 sections render, CTAs work
  - Test strategy: Full page test, mobile responsiveness

- [ ] Build Student Trips landing page (depends on: [sections, forms, data])
  - Acceptance criteria: Overview, trip cards, testimonials, FAQ
  - Test strategy: Page render, navigation

- [ ] Build Individual Trip pages with dynamic routing (depends on: [Timeline, Booking Form, data])
  - Acceptance criteria: Itinerary timeline, booking flow works
  - Test strategy: Different trip slugs load correctly

- [ ] Build Kratiki Ekthesi page (depends on: [sections, data])
  - Acceptance criteria: Dual audience layout, expo info
  - Test strategy: Page render test

- [ ] Build Events hub page with filtering (depends on: [sections, data])
  - Acceptance criteria: Filter works, toggle upcoming/past
  - Test strategy: Filter interaction test

- [ ] Build Individual Event pages (depends on: [sections, data])
  - Acceptance criteria: Dynamic content based on event type
  - Test strategy: Multiple event types render

- [ ] Build About page (depends on: [Number Ticker, Lamp Effect, data])
  - Acceptance criteria: Story, stats animate, CTA works
  - Test strategy: Scroll animation test

- [ ] Build Experiences gallery page (depends on: [Parallax Scroll, Focus Cards, data])
  - Acceptance criteria: Visual gallery, filtering, lightbox
  - Test strategy: Gallery interaction test

- [ ] Build Become a Sponsor page (depends on: [sections, Sponsor Form, data])
  - Acceptance criteria: Benefits, stats, packages, form
  - Test strategy: Form submission test

- [ ] Build Contact page (depends on: [Contact Form, sections])
  - Acceptance criteria: Form, map, quick links, socials
  - Test strategy: Form submission test

**Exit Criteria**: All pages complete and functional

**Delivers**: Complete website ready for testing

---

### Phase 7: Polish & Launch Prep
**Goal**: Final testing, optimization, and deployment preparation

**Entry Criteria**: Phase 6 complete

**Tasks**:
- [ ] Implement reduced-motion preferences for all animations (depends on: [all pages])
  - Acceptance criteria: Animations respect prefers-reduced-motion
  - Test strategy: Media query test

- [ ] Add loading states and skeletons (depends on: [all pages])
  - Acceptance criteria: Smooth loading experience
  - Test strategy: Throttled network test

- [ ] Implement error boundaries and 404 page (depends on: [layout])
  - Acceptance criteria: Graceful error handling
  - Test strategy: Error simulation

- [ ] SEO optimization - meta tags, OG images (depends on: [all pages])
  - Acceptance criteria: All pages have proper metadata
  - Test strategy: SEO audit tool

- [ ] Performance optimization - image optimization, lazy loading (depends on: [all pages])
  - Acceptance criteria: Lighthouse performance 90+
  - Test strategy: Lighthouse audit

- [ ] Mobile responsiveness audit (depends on: [all pages])
  - Acceptance criteria: Works on all breakpoints
  - Test strategy: Device testing

- [ ] Accessibility audit (depends on: [all pages])
  - Acceptance criteria: WCAG 2.1 AA compliant
  - Test strategy: axe-core audit

- [ ] Configure deployment (Vercel) with environment variables (depends on: [all features])
  - Acceptance criteria: Production deployment works
  - Test strategy: Deploy preview

**Exit Criteria**: Website optimized, tested, and deployed

**Delivers**: Production-ready website

---

## Test Strategy

### Test Pyramid

```
        /\
       /E2E\       ← 10% (Critical user flows: booking, contact)
      /------\
     /Integration\ ← 20% (API routes, form submissions)
    /------------\
   /  Unit Tests  \ ← 70% (Components, utilities, validations)
  /----------------\
```

### Coverage Requirements
- Line coverage: 80% minimum
- Branch coverage: 75% minimum
- Function coverage: 85% minimum

### Critical Test Scenarios

#### Student Trip Booking Flow
**Happy path**:
- User views trip, fills form, completes Stripe payment
- Expected: Booking stored, confirmation email sent

**Error cases**:
- Payment fails
- Expected: User shown error, can retry

**Edge cases**:
- Early bird discount applied correctly
- Group discount calculated properly

#### Contact Form Submission
**Happy path**:
- User submits valid form
- Expected: Submission stored, confirmation sent

**Error cases**:
- Invalid email format
- Expected: Inline validation error shown

#### Component Animations
**Happy path**:
- Animations play on scroll/hover
- Expected: Smooth 60fps animations

**Accessibility**:
- prefers-reduced-motion: reduce
- Expected: Animations disabled or simplified

---

## Architecture

### System Components

```
┌─────────────────────────────────────────────────────────┐
│                    Next.js Frontend                      │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐     │
│  │   Pages     │  │ Components  │  │    Data     │     │
│  │  (App Dir)  │  │  (React)    │  │  (Static)   │     │
│  └─────────────┘  └─────────────┘  └─────────────┘     │
└─────────────────────────────────────────────────────────┘
                          │
         ┌────────────────┼────────────────┐
         ▼                ▼                ▼
┌─────────────┐  ┌─────────────┐  ┌─────────────┐
│   Stripe    │  │   Resend    │  │  Database   │
│  (Payments) │  │  (Emails)   │  │  (Future)   │
└─────────────┘  └─────────────┘  └─────────────┘
```

### Technology Stack

| Layer | Technology | Purpose |
|-------|------------|---------|
| Framework | Next.js 15 (App Router) | React framework with SSR/SSG |
| Styling | Tailwind CSS | Utility-first CSS |
| Animations | Framer Motion | Animation library |
| UI Components | Magic UI, Aceternity UI | Pre-built animated components |
| Payments | Stripe | Payment processing |
| Emails | Resend | Transactional emails |
| Validation | Zod | Schema validation |
| Deployment | Vercel | Hosting platform |

### Key Design Decisions

**Decision: Static data files over CMS**
- **Rationale**: Faster initial development, no external dependency, type-safe
- **Trade-offs**: Manual updates required, no admin interface
- **Alternatives considered**: Sanity, Contentful - deferred to future phase

**Decision: Stripe Checkout (hosted) over embedded form**
- **Rationale**: Faster implementation, PCI compliance handled by Stripe
- **Trade-offs**: Less customization, redirect away from site
- **Alternatives considered**: Stripe Elements - more work for same result

**Decision: React Email for templates**
- **Rationale**: Component-based emails, consistent with React codebase
- **Trade-offs**: Learning curve, build step required
- **Alternatives considered**: Plain HTML templates - harder to maintain

---

## Risks

### Technical Risks

**Risk**: Third-party animated components cause performance issues
- **Impact**: High - poor UX, high bounce rate
- **Likelihood**: Medium
- **Mitigation**: Test on lower-end devices, implement lazy loading
- **Fallback**: Replace heavy components with simpler CSS animations

**Risk**: Stripe integration complexity with discounts
- **Impact**: Medium - delayed booking feature
- **Likelihood**: Low
- **Mitigation**: Start with simple flat pricing, add discounts incrementally
- **Fallback**: Handle discounts manually initially

### Dependency Risks

**Risk**: Missing brand assets (logo, colors, photos)
- **Impact**: High - blocks visual design
- **Likelihood**: High (noted in open questions)
- **Mitigation**: Request assets early, use placeholders
- **Fallback**: Create temporary logo, define colors based on brief

**Risk**: No Planitario website URL for linking
- **Impact**: Low - affects hero CTA only
- **Likelihood**: Medium
- **Mitigation**: Use placeholder URL, update later
- **Fallback**: Link to social media instead

### Scope Risks

**Risk**: CMS requirement emerges mid-project
- **Impact**: Medium - requires architecture changes
- **Likelihood**: Medium
- **Mitigation**: Keep data layer decoupled, easy to swap
- **Fallback**: Document manual update process

---

## Appendix

### References
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Magic UI Components](https://magicui.design/docs/components)
- [Aceternity UI Components](https://ui.aceternity.com/components)
- [Stripe Checkout Documentation](https://stripe.com/docs/payments/checkout)
- [Resend Documentation](https://resend.com/docs)

### Glossary
- **Planitario**: Flagship 2-day/night event (has separate website)
- **Kratiki Ekthesi**: State Fair / Business expo venue in Nicosia
- **Student Trips**: 3-day experiences for young adults

### Open Questions (from Requirements)
1. Logo availability
2. Brand colors defined?
3. Physical office address?
4. Team photos/bios?
5. Photo/video assets from past events?
6. Sponsorship packages defined?
7. Social media accounts?
8. Planitario website URL?
9. Preferred CMS approach?
10. Existing booking system?

---

*PRD created using Repository Planning Graph (RPG) methodology for optimal Task Master parsing*

