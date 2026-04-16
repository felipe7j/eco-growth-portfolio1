import type {Metadata} from 'next';
import { Inter, Poppins } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Eco Growth - Agência de Marketing Digital',
  description: 'Sua marca cresce com a gente de forma sustentável.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${poppins.variable}`}>
      <body suppressHydrationWarning className="font-inter bg-[#F5F5F5] text-[#333] selection:bg-[#4CAF50] selection:text-white">
        {children}
      </body>
    </html>
  );
}
