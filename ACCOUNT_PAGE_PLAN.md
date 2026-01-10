# Account & Tickets Management Page - Implementation Plan

## Overview
A comprehensive account page where logged-in users can manage their tickets, view purchase history, modify bookings, and access account settings.

## Page Structure: `/app/account/page.tsx`

### 1. **Header Section**
- User greeting with name
- Account status badge (Active Member, VIP, etc.)
- Quick stats: Total tickets purchased, Upcoming events, Total spent

### 2. **Navigation Tabs**
- **My Tickets** (default) - View all purchased tickets
- **Purchase History** - Complete transaction history
- **Account Settings** - Profile, preferences, notifications
- **Saved Events** - Events user has favorited/bookmarked

### 3. **My Tickets Section** (Main Content)

#### Ticket Card Components:
Each ticket card should display:
- **Event Information**
  - Event name & date
  - Event image/thumbnail
  - Location (venue)
  - Event status badge (Upcoming, Completed, Cancelled)

- **Ticket Details**
  - Ticket type/name (VIP, General Admission, etc.)
  - Quantity purchased
  - Seat numbers (if applicable)
  - Ticket ID/Reference number
  - Purchase date

- **Quick Actions**
  - View Details (expand to see full ticket info)
  - Download Ticket (PDF with QR code)
  - Transfer Ticket (send to another person)
  - Cancel Ticket (if allowed)
  - Upgrade Ticket (if available)

#### Ticket States:
- **Upcoming** - Active tickets for future events
- **Completed** - Past events (view-only)
- **Cancelled** - Cancelled tickets
- **Transferred** - Tickets transferred to others

### 4. **Ticket Detail Modal/Expanded View**
When clicking "View Details":
- Full ticket information
- QR code for entry
- Event details (full description, schedule, venue info)
- Transfer history (if transferred)
- Cancellation policy
- Contact support button

### 5. **Quick Actions Section**
- **Buy More Tickets** - Link to events page with filter
- **Browse Events** - Link to events page
- **Contact Support** - Link to contact page with pre-filled ticket reference

### 6. **Purchase History Section**
- List of all transactions
- Transaction date, amount, event name
- Receipt download
- Refund status (if applicable)

### 7. **Account Settings Section**
- Profile information (name, email - from Clerk)
- Notification preferences
- Payment methods (saved cards)
- Address information
- Privacy settings

## Features to Implement

### Core Features:
1. ✅ View all purchased tickets
2. ✅ Filter tickets by status (Upcoming, Past, Cancelled)
3. ✅ Search tickets by event name
4. ✅ View ticket details with QR code
5. ✅ Download ticket as PDF
6. ✅ Transfer ticket to another user
7. ✅ Cancel ticket (with refund policy info)
8. ✅ Upgrade ticket (if upgrade options available)
9. ✅ View purchase history
10. ✅ Download receipts

### UI/UX Considerations:
- Responsive design (mobile-friendly)
- Loading states for async operations
- Empty states (no tickets, no history)
- Error handling and user feedback
- Smooth animations and transitions
- Consistent with site design system

### Data Structure (Mock for now):
```typescript
interface Ticket {
  id: string;
  eventId: string;
  eventName: string;
  eventDate: string;
  eventLocation: string;
  eventImage: string;
  ticketType: string;
  quantity: number;
  seatNumbers?: string[];
  purchaseDate: string;
  status: 'upcoming' | 'completed' | 'cancelled' | 'transferred';
  price: number;
  qrCode: string;
  transferHistory?: TransferRecord[];
}

interface TransferRecord {
  date: string;
  from: string;
  to: string;
  status: 'pending' | 'completed';
}
```

## Implementation Steps:
1. Add Account button to header (only visible when SignedIn)
2. Create `/app/account/page.tsx` with basic structure
3. Create ticket card component
4. Create ticket detail modal/expanded view
5. Add filtering and search functionality
6. Implement quick actions
7. Add purchase history section
8. Add account settings section
9. Style and polish

## Notes:
- Clerk handles authentication, so we use `SignedIn` component
- For now, use mock data - backend integration comes later
- Focus on UI/UX first, functionality can be connected to API later
- Ensure all actions have proper user feedback (toasts, modals, etc.)
