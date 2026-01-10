"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import {
  Ticket,
  Calendar,
  MapPin,
  Download,
  Share2,
  X,
  Search,
  Filter,
  ArrowRight,
  QrCode,
  User,
  CreditCard,
  Bell,
  Settings,
  Clock,
  CheckCircle2,
  XCircle,
  ArrowUpRight,
  ShoppingBag,
  History,
  Star,
  Sparkles,
} from "lucide-react";
import Image from "next/image";
import { useUser } from "@clerk/nextjs";
import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/nextjs";
import { GridPattern } from "@/components/ui/grid-pattern";

// ============================================
// TYPES
// ============================================
interface TicketData {
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
  status: "upcoming" | "completed" | "cancelled" | "transferred";
  price: number;
  qrCode: string;
  transferHistory?: TransferRecord[];
}

interface TransferRecord {
  date: string;
  from: string;
  to: string;
  status: "pending" | "completed";
}

// ============================================
// MOCK DATA
// ============================================
const mockTickets: TicketData[] = [
  {
    id: "TKT-001",
    eventId: "planitario-2026",
    eventName: "PLANITARIO 2026",
    eventDate: "March 15-16, 2026",
    eventLocation: "Nicosia, Cyprus",
    eventImage: "/Content/planitatio/The Cyprus Planetarium 2025.jpg",
    ticketType: "VIP Pass",
    quantity: 2,
    purchaseDate: "2026-01-10",
    status: "upcoming",
    price: 150,
    qrCode: "QR-CODE-001",
  },
  {
    id: "TKT-002",
    eventId: "kratiki-ekthesi-2026",
    eventName: "Kratiki Ekthesi",
    eventDate: "May 20-25, 2026",
    eventLocation: "Nicosia, Cyprus",
    eventImage:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop",
    ticketType: "General Admission",
    quantity: 4,
    purchaseDate: "2026-01-05",
    status: "upcoming",
    price: 80,
    qrCode: "QR-CODE-002",
  },
  {
    id: "TKT-003",
    eventId: "barcelona-trip-2026",
    eventName: "Barcelona Trip",
    eventDate: "April 20-25, 2026",
    eventLocation: "Barcelona, Spain",
    eventImage:
      "https://images.unsplash.com/photo-1583422409516-2895a77efded?w=800&h=600&fit=crop",
    ticketType: "Student Package",
    quantity: 1,
    purchaseDate: "2025-12-20",
    status: "upcoming",
    price: 450,
    qrCode: "QR-CODE-003",
  },
  {
    id: "TKT-004",
    eventId: "summer-festival-2025",
    eventName: "Summer Festival 2025",
    eventDate: "June 15-17, 2025",
    eventLocation: "Limassol, Cyprus",
    eventImage:
      "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&h=600&fit=crop",
    ticketType: "Weekend Pass",
    quantity: 2,
    purchaseDate: "2025-05-01",
    status: "completed",
    price: 120,
    qrCode: "QR-CODE-004",
  },
];

// ============================================
// COMPONENTS
// ============================================

// Ticket Card Component
function TicketCard({
  ticket,
  onViewDetails,
}: {
  ticket: TicketData;
  onViewDetails: (ticket: TicketData) => void;
}) {
  const statusConfig = {
    upcoming: {
      icon: Clock,
      color: "bg-blue-100 text-blue-700",
      borderColor: "border-blue-200",
    },
    completed: {
      icon: CheckCircle2,
      color: "bg-green-100 text-green-700",
      borderColor: "border-green-200",
    },
    cancelled: {
      icon: XCircle,
      color: "bg-red-100 text-red-700",
      borderColor: "border-red-200",
    },
    transferred: {
      icon: Share2,
      color: "bg-purple-100 text-purple-700",
      borderColor: "border-purple-200",
    },
  };

  const config = statusConfig[ticket.status];
  const StatusIcon = config.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all hover:shadow-lg hover:-translate-y-1"
    >
      <div className="flex flex-col sm:flex-row">
        {/* Event Image */}
        <div className="relative h-48 w-full overflow-hidden sm:h-auto sm:w-48">
          <Image
            src={ticket.eventImage}
            alt={ticket.eventName}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          {/* Status Badge */}
          <div className="absolute left-4 top-4">
            <span
              className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold ${config.color} shadow-sm`}
            >
              <StatusIcon className="h-3 w-3" />
              {ticket.status.charAt(0).toUpperCase() + ticket.status.slice(1)}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col p-6">
          <div className="mb-4">
            <h3 className="mb-2 text-xl font-bold text-slate-900">
              {ticket.eventName}
            </h3>
            <div className="mb-3 flex flex-wrap items-center gap-4 text-sm text-slate-600">
              <span className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4" />
                {ticket.eventDate}
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="h-4 w-4" />
                {ticket.eventLocation}
              </span>
            </div>
            <div className="flex items-center gap-4 text-sm">
              <span className="font-medium text-slate-700">
                {ticket.ticketType}
              </span>
              <span className="text-slate-500">
                Qty: {ticket.quantity}
              </span>
              {ticket.seatNumbers && (
                <span className="text-slate-500">
                  Seats: {ticket.seatNumbers.join(", ")}
                </span>
              )}
            </div>
          </div>

          {/* Actions */}
          <div className="mt-auto flex flex-wrap items-center gap-2">
            <button
              onClick={() => onViewDetails(ticket)}
              className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-orange-500 to-rose-500 px-4 py-2 text-sm font-semibold text-white transition-all hover:shadow-lg"
            >
              View Details
              <ArrowRight className="h-4 w-4" />
            </button>
            {ticket.status === "upcoming" && (
              <>
                <button className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition-all hover:bg-slate-50">
                  <Download className="h-4 w-4" />
                  Download
                </button>
                <button className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition-all hover:bg-slate-50">
                  <Share2 className="h-4 w-4" />
                  Transfer
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// Ticket Detail Modal
function TicketDetailModal({
  ticket,
  isOpen,
  onClose,
}: {
  ticket: TicketData | null;
  isOpen: boolean;
  onClose: () => void;
}) {
  if (!ticket) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
          />
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed left-1/2 top-1/2 z-50 w-full max-w-2xl -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-white p-6 shadow-2xl sm:p-8"
          >
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-slate-900">
                Ticket Details
              </h2>
              <button
                onClick={onClose}
                className="rounded-lg p-2 text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-900"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="space-y-6">
              {/* Event Info */}
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="mb-2 text-lg font-bold text-slate-900">
                  {ticket.eventName}
                </h3>
                <div className="space-y-2 text-sm text-slate-600">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    {ticket.eventDate}
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    {ticket.eventLocation}
                  </div>
                </div>
              </div>

              {/* Ticket Info */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-slate-500">Ticket Type</p>
                  <p className="font-semibold text-slate-900">
                    {ticket.ticketType}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-slate-500">Quantity</p>
                  <p className="font-semibold text-slate-900">
                    {ticket.quantity}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-slate-500">Ticket ID</p>
                  <p className="font-semibold text-slate-900">{ticket.id}</p>
                </div>
                <div>
                  <p className="text-sm text-slate-500">Purchase Date</p>
                  <p className="font-semibold text-slate-900">
                    {new Date(ticket.purchaseDate).toLocaleDateString()}
                  </p>
                </div>
              </div>

              {/* QR Code */}
              <div className="rounded-xl border-2 border-dashed border-slate-300 bg-slate-50 p-6 text-center">
                <QrCode className="mx-auto mb-4 h-24 w-24 text-slate-400" />
                <p className="text-sm font-medium text-slate-700">
                  {ticket.qrCode}
                </p>
                <p className="mt-2 text-xs text-slate-500">
                  Present this QR code at the event entrance
                </p>
              </div>

              {/* Actions */}
              <div className="flex flex-wrap gap-3">
                <button className="flex-1 rounded-lg bg-gradient-to-r from-orange-500 to-rose-500 px-4 py-3 font-semibold text-white transition-all hover:shadow-lg">
                  Download PDF
                </button>
                {ticket.status === "upcoming" && (
                  <>
                    <button className="flex-1 rounded-lg border border-slate-300 bg-white px-4 py-3 font-medium text-slate-700 transition-all hover:bg-slate-50">
                      Transfer Ticket
                    </button>
                    <button className="flex-1 rounded-lg border border-slate-300 bg-white px-4 py-3 font-medium text-slate-700 transition-all hover:bg-slate-50">
                      Upgrade Ticket
                    </button>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

// ============================================
// MAIN PAGE COMPONENT
// ============================================
export default function AccountPage() {
  const { user } = useUser();
  const [activeTab, setActiveTab] = useState<"tickets" | "history" | "settings" | "saved">("tickets");
  const [selectedTicket, setSelectedTicket] = useState<TicketData | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<
    "all" | "upcoming" | "completed" | "cancelled"
  >("all");

  const filteredTickets = mockTickets.filter((ticket) => {
    const matchesSearch =
      ticket.eventName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ticket.id.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === "all" || ticket.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const stats = {
    totalTickets: mockTickets.length,
    upcomingEvents: mockTickets.filter((t) => t.status === "upcoming").length,
    totalSpent: mockTickets.reduce((sum, t) => sum + t.price, 0),
  };

  const tabs = [
    { id: "tickets" as const, label: "My Tickets", icon: Ticket },
    { id: "history" as const, label: "Purchase History", icon: History },
    { id: "saved" as const, label: "Saved Events", icon: Star },
    { id: "settings" as const, label: "Settings", icon: Settings },
  ];

  return (
    <>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
      <SignedIn>
    <main className="relative min-h-screen w-full overflow-hidden bg-slate-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-900 pb-12 pt-32 sm:pb-16 sm:pt-40">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
        <div className="absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-orange-500/10 blur-[120px]" />
        <GridPattern
          className="absolute inset-0 z-0 opacity-20 [mask-image:radial-gradient(ellipse_at_center,white,transparent_70%)]"
          width={50}
          height={50}
          numSquares={30}
          maxOpacity={0.1}
        />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-rose-500 px-4 py-2 text-sm font-semibold text-white shadow-lg"
            >
              <User className="h-4 w-4" />
              My Account
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mb-4 text-4xl font-bold text-white sm:text-5xl"
            >
              Welcome back,
              <span className="block bg-gradient-to-r from-orange-400 to-rose-400 bg-clip-text text-transparent">
                {user?.firstName || "User"}
              </span>
            </motion.h1>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-8 grid grid-cols-3 gap-4 sm:gap-6"
            >
              {[
                { label: "Total Tickets", value: stats.totalTickets, icon: Ticket },
                { label: "Upcoming Events", value: stats.upcomingEvents, icon: Calendar },
                { label: "Total Spent", value: `€${stats.totalSpent}`, icon: CreditCard },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm"
                >
                  <stat.icon className="mx-auto mb-2 h-6 w-6 text-orange-400" />
                  <p className="text-2xl font-bold text-white">{stat.value}</p>
                  <p className="text-xs text-slate-400">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tabs */}
      <section className="sticky top-20 z-40 border-b border-slate-200 bg-white/95 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex gap-1 overflow-x-auto">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 whitespace-nowrap border-b-2 px-4 py-4 text-sm font-medium transition-colors ${
                    activeTab === tab.id
                      ? "border-orange-500 text-orange-600"
                      : "border-transparent text-slate-600 hover:border-slate-300 hover:text-slate-900"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {activeTab === "tickets" && (
            <>
              {/* Search and Filter */}
              <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Search tickets..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full rounded-lg border border-slate-300 bg-white py-2.5 pl-10 pr-4 text-sm focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <Filter className="h-5 w-5 text-slate-400" />
                  <select
                    value={statusFilter}
                    onChange={(e) =>
                      setStatusFilter(
                        e.target.value as typeof statusFilter
                      )
                    }
                    className="rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20"
                  >
                    <option value="all">All Status</option>
                    <option value="upcoming">Upcoming</option>
                    <option value="completed">Completed</option>
                    <option value="cancelled">Cancelled</option>
                  </select>
                </div>
              </div>

              {/* Tickets Grid */}
              {filteredTickets.length > 0 ? (
                <div className="space-y-6">
                  {filteredTickets.map((ticket) => (
                    <TicketCard
                      key={ticket.id}
                      ticket={ticket}
                      onViewDetails={(ticket) => {
                        setSelectedTicket(ticket);
                        setIsModalOpen(true);
                      }}
                    />
                  ))}
                </div>
              ) : (
                <div className="rounded-2xl border border-slate-200 bg-white p-12 text-center">
                  <Ticket className="mx-auto mb-4 h-12 w-12 text-slate-400" />
                  <h3 className="mb-2 text-lg font-semibold text-slate-900">
                    No tickets found
                  </h3>
                  <p className="mb-6 text-slate-600">
                    {searchQuery || statusFilter !== "all"
                      ? "Try adjusting your search or filters"
                      : "You haven't purchased any tickets yet"}
                  </p>
                  {!searchQuery && statusFilter === "all" && (
                    <a
                      href="/events"
                      className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-orange-500 to-rose-500 px-6 py-3 font-semibold text-white transition-all hover:shadow-lg"
                    >
                      <ShoppingBag className="h-4 w-4" />
                      Browse Events
                    </a>
                  )}
                </div>
              )}

              {/* Quick Actions */}
              <div className="mt-12 grid gap-6 sm:grid-cols-2">
                <a
                  href="/events"
                  className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-lg"
                >
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-rose-500">
                      <ShoppingBag className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900">
                      Buy More Tickets
                    </h3>
                  </div>
                  <p className="mb-4 text-slate-600">
                    Explore upcoming events and secure your spot
                  </p>
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-orange-600">
                    Browse Events
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </a>

                <a
                  href="/contact"
                  className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-lg"
                >
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-indigo-500">
                      <Sparkles className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900">
                      Need Help?
                    </h3>
                  </div>
                  <p className="mb-4 text-slate-600">
                    Contact our support team for assistance
                  </p>
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600">
                    Contact Support
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </a>
              </div>
            </>
          )}

          {activeTab === "history" && (
            <div className="rounded-2xl border border-slate-200 bg-white p-12 text-center">
              <History className="mx-auto mb-4 h-12 w-12 text-slate-400" />
              <h3 className="mb-2 text-lg font-semibold text-slate-900">
                Purchase History
              </h3>
              <p className="text-slate-600">
                Your complete transaction history will appear here
              </p>
            </div>
          )}

          {activeTab === "saved" && (
            <div className="rounded-2xl border border-slate-200 bg-white p-12 text-center">
              <Star className="mx-auto mb-4 h-12 w-12 text-slate-400" />
              <h3 className="mb-2 text-lg font-semibold text-slate-900">
                Saved Events
              </h3>
              <p className="text-slate-600">
                Events you've saved for later will appear here
              </p>
            </div>
          )}

          {activeTab === "settings" && (
            <div className="rounded-2xl border border-slate-200 bg-white p-8">
              <h2 className="mb-6 text-2xl font-bold text-slate-900">
                Account Settings
              </h2>
              <div className="space-y-6">
                <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                  <div>
                    <h3 className="font-semibold text-slate-900">
                      Profile Information
                    </h3>
                    <p className="text-sm text-slate-600">
                      Manage your personal information
                    </p>
                  </div>
                  <button className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50">
                    Edit
                  </button>
                </div>
                <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                  <div>
                    <h3 className="font-semibold text-slate-900">
                      Notification Preferences
                    </h3>
                    <p className="text-sm text-slate-600">
                      Control how you receive updates
                    </p>
                  </div>
                  <button className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50">
                    <Bell className="h-4 w-4" />
                  </button>
                </div>
                <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                  <div>
                    <h3 className="font-semibold text-slate-900">
                      Payment Methods
                    </h3>
                    <p className="text-sm text-slate-600">
                      Manage saved payment methods
                    </p>
                  </div>
                  <button className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50">
                    Manage
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Ticket Detail Modal */}
      <TicketDetailModal
        ticket={selectedTicket}
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedTicket(null);
        }}
      />
    </main>
      </SignedIn>
    </>
  );
}
