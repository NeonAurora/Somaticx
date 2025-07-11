import { ThemeProvider } from '@/context/ThemeContext';
import './globals.css';

export const metadata = {
  title: 'Somaticx - Bio-Tech Innovation',
  description: 'Transforming Bio-Industries Through Intelligent Innovation',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#16a34a" />
      </head>
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}