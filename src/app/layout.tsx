import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Ready Set ReDesign | Flat-Rate Interior Design · San Antonio TX',
  description: 'Affordable flat-rate interior decorating by Diane Haignere. Room makeovers, color consultations, Feng Shui & more. Serving San Antonio TX. 300+ 5-star reviews.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
