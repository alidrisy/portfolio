import { setRequestLocale } from 'next-intl/server';
import { HeroSection } from '@/components/sections/HeroSection';
import { AboutPreview } from '@/components/sections/AboutPreview';
import { ServicesPreview } from '@/components/sections/ServicesPreview';
import { ProjectsPreview } from '@/components/sections/ProjectsPreview';
import { ContactPreview } from '@/components/sections/ContactPreview';

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <HeroSection />
      <AboutPreview />
      <ServicesPreview />
      <ProjectsPreview />
      <ContactPreview />
    </>
  );
}
