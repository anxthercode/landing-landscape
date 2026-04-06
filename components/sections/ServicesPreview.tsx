"use client";

import Image from 'next/image';
import SectionLabel from '@/components/ui/SectionLabel';
import { Droplet, Lightbulb, Cuboid, Leaf, HardHat, Box } from 'lucide-react';

const majorServices = [
  {
    title: "Landscape Design",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDtrwyMxShg4MAdg1-vKISud56ydiSYDEUDIEyHsy4PlIkWoNiq8zZMRt7ZxgYdoJo-9keMyQLcZkEKjtZ-SX2ZeExI7jOaiQhbW_lO2pLVKdckfwJIY2fitoFKoXBWZ4HuL-wFmFbe1IlCOqwGtZ-zyGNE2HjCulvDjuPr3Jd6SualdowC9n7oTF6DTYtS--15HV2KAqgoyk5LHjYi4AS_AyvkKQ6OQ4m7jAKfKtTUd0YKvozigmo6r4khi0kVuu0sQp-OqdujB-s"
  },
  {
    title: "Planting & Greenery",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCNSWyAqRs3ndL9UfKYaGZL7E--2kIMBcEwVqQOTpPm8XO4F87l6XfVjeX8nn7cFo2Ok1E42mqG-4LjVoe5eStwpOS6f1C_HaiG_q0TzecKyh83ojjLdn1OnHeL2RjYrSe3exk7bChUUNe5uZA2886OFzHYdzTCU1UixEX35ZrPk78T1KqzDAt-8L6vzd4I-QEXNZeDxP9ILmK-9Dj7isKUKafnwscZnQhPcyboXJdIzkKnudltVkAmdV7gxyixqwjDYdSwn-USQnE"
  },
  {
    title: "Paving & Pathways",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAjbejB2lKLRcwqMIGx1GBiySAWIJ_xuonXD87qtzX91KPQxQWIGU6_9fkLXpCO_DQo1fIM8LZI1dAnnF_W949JMWp1bEdU7-yQf1aJtf1cG-Iwhm5o7XJ18x1_bJLOB1cRC-iCgB4kAmg3qWg_TeCDRW63Qgk2hLaTuMf3ANZgTYXPwy0m_nRcKElS6qujjo-unzaN7878xrbaaNWAe8zs_9K8tqrATj4uEpmWzy6emIcnJ0FMYyTcV8wZK0bujihPebh5bdioMxI"
  }
];

const minorServices = [
  { icon: Droplet, title: "Irrigation", desc: "Smart water management systems tailored to your local climate." },
  { icon: Lightbulb, title: "Outdoor Lighting", desc: "Atmospheric and functional illumination for nighttime elegance." },
  { icon: Cuboid, title: "Terraces", desc: "Expert foundation and construction for multi-level land." },
  { icon: Leaf, title: "Seasonal Care", desc: "Bespoke maintenance packages to keep growth vibrant." },
  { icon: HardHat, title: "Turnkey PM", desc: "Complete oversight from initial concept through final installation." },
  { icon: Box, title: "3D Visualisation", desc: "Photorealistic modeling to preview your finished garden." },
];

export default function ServicesPreview() {
  return (
    <section className="py-32 px-6 bg-surface overflow-hidden">
      <div className="max-w-screen-2xl mx-auto border-t border-surface-container-high pt-16">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div>
            <SectionLabel>WHAT WE DO</SectionLabel>
            <h2 className="font-display text-5xl text-primary mt-4">Elevating Every <br/> Green Detail</h2>
          </div>
          <p className="font-body text-on-surface-variant max-w-sm mb-2">From conceptual sketches to the final irrigation pulse, our studio provides a complete architectural journey for your land.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {majorServices.map((service, i) => (
            <div key={i} className="group relative h-[600px] overflow-hidden rounded-xl">
              <Image 
                src={service.img} 
                alt={service.title} 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-primary/40 group-hover:bg-primary/50 transition-colors"></div>
              <div className="absolute bottom-0 left-0 p-12 w-full text-surface text-center translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="font-display text-3xl">{service.title}</h3>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {minorServices.map((Item, i) => (
            <div key={i} className="p-8 bg-surface-container-low rounded-xl flex flex-col items-start hover:-translate-y-1 transition-transform duration-300">
              <Item.icon className="text-tertiary-container w-8 h-8 mb-6" strokeWidth={1.5} />
              <h4 className="font-headline font-semibold text-primary mb-2 text-lg">{Item.title}</h4>
              <p className="text-sm text-on-surface-variant">{Item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
