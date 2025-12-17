"use client";

import HeroSection9 from '@/components/ui/hero-section-9';
import { Users, Calendar, MapPin, ArrowRight, Sparkles } from 'lucide-react';

export function HeroV3Collage() {
  const heroData = {
    title: (
      <span className="text-slate-900">Experience Cyprus</span>
    ),
    sparkleTitle: "Like Never Before",
    subtitle: 'Join thousands who have discovered extraordinary events, unforgettable trips, and legendary nights with Memora Experience.',
    actions: [
      {
        text: 'Explore Events',
        onClick: () => console.log('Explore clicked'),
        variant: 'default' as const,
        className: 'bg-gradient-to-r from-orange-500 to-rose-500 hover:from-orange-600 hover:to-rose-600 text-white border-0',
        icon: <Sparkles className="h-4 w-4" />,
      },
      {
        text: 'Learn More',
        onClick: () => console.log('Learn more clicked'),
        variant: 'outline' as const,
        className: 'border-slate-300 hover:bg-slate-50 hover:border-orange-300 group',
        icon: <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />,
      },
    ],
    stats: [
      {
        value: '10K+',
        label: 'Happy Attendees',
        icon: <Users className="h-5 w-5 text-orange-500" />,
      },
      {
        value: '50+',
        label: 'Events Hosted',
        icon: <Calendar className="h-5 w-5 text-orange-500" />,
      },
      {
        value: 'Cyprus',
        label: 'Island-wide',
        icon: <MapPin className="h-5 w-5 text-orange-500" />,
      },
    ],
    images: [
      '/Content/planitatio/The Cyprus Planetarium 2025.jpg',
      '/Content/planitatio/Cyprus Planetarium Lobby.jpg',
      '/Content/planitatio/Cyprus Planetarium Cosmonaut Astronaut.jpg',
    ],
  };

  return (
    <HeroSection9
      title={heroData.title}
      sparkleTitle={heroData.sparkleTitle}
      subtitle={heroData.subtitle}
      actions={heroData.actions}
      stats={heroData.stats}
      images={heroData.images}
      className="bg-zinc-50"
    />
  );
}
