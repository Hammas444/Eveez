import { notFound } from 'next/navigation';
import { EV_CARS_DATA } from '@/data/evCars';
import InteractiveGallery from '@/components/InteractiveGallery';

interface CarDetailPageProps {
  params: Promise<{ id: string }>;
}

export default async function CarDetailPage({ params }: CarDetailPageProps) {
  const { id } = await params;
  const car = EV_CARS_DATA.find((c) => c.id === id);

  if (!car) {
    notFound();
  }

  return (
    <main className="bg-zinc-950 min-h-screen">
      
          
      {/* The main visual gallery and spec layout */}
      <InteractiveGallery car={car} />
      
      
    </main>
  );
}