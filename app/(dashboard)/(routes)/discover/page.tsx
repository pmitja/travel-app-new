import DashboardHeaderCard from '@/components/dashboard-header-card';
import SelectCard from '@/components/select-card';
import TripTeaser from '@/components/trip-teaser';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';

export default function Discover() {
  return (
    <main className="flex min-h-full flex-col items-center justify-between pt-20">
      <div className="bg-meshBanner bg-cover w-full min-h-1/3">
        <div className="container my-12 mx-auto flex flex-col gap-3 min-w-[85%] flex-wrap">
          <h2 className="text-3xl font-bold text-textColor">
            Start planning next trip
          </h2>
          <div className="flex gap-6 flex-wrap">
            <DashboardHeaderCard
              title="Generate my random next trip"
              badgeText="I don't know where"
              button={{ text: 'Start', to: '/discover/random-trip' }}
            />
            <DashboardHeaderCard
              title="Generate my next trip"
              badgeText="I exactly know where to go"
              button={{ text: 'Start', to: '/discover/random-trip' }}
            />
          </div>
        </div>
      </div>
      <section className="container mx-auto flex flex-wrap gap-20 min-w-[85%] my-9">
        <TripTeaser
          title="Previous trips"
          button={{ text: 'See more', link: '#' }}
          cards={[
            {
              title: 'Asia',
              text: "Discover Africa's diverse wonders – from stunning safaris to vibrant markets. Your adventure begins now!",
              imageData: { src: '/locations/asia.webp', alt: 'Asia' },
            },
            {
              title: 'South america',
              text: "Discover Africa's diverse wonders – from stunning safaris to vibrant markets. Your adventure begins now!",
              imageData: {
                src: '/locations/south_america.webp',
                alt: 'South america',
              },
            },
          ]}
        />
        <TripTeaser
          title="Saved trips"
          button={{ text: 'See more', link: '#' }}
          cards={[
            {
              title: 'Africa',
              text: "Discover Africa's diverse wonders – from stunning safaris to vibrant markets. Your adventure begins now!",
              imageData: { src: '/locations/africa.webp', alt: 'Africa' },
            },
            {
              title: 'Europe',
              text: "Discover Africa's diverse wonders – from stunning safaris to vibrant markets. Your adventure begins now!",
              imageData: { src: '/locations/europe.webp', alt: 'Europe' },
            },
          ]}
        />
      </section>
    </main>
  );
}
