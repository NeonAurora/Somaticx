import { ThemeProvider } from '@/context/ThemeContext';
import MaterialUIProvider from '@/components/providers/MuiThemeProvider';
import { strings } from '@/data/strings';
import './globals.css';

export const metadata = {
  title: strings.app.title,
  description: strings.app.description,
};

export default function RootLayout({ children }) {
  return (
    <html lang={strings.app.lang}>
      <head>
        <meta name="theme-color" content={strings.app.themeColor} />
      </head>
      <body>
        <ThemeProvider>
          <MaterialUIProvider>
            {children}
          </MaterialUIProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}