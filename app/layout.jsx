import Navbar from '@components/Navbar';
import '@styles/globals.css';

export const metadata = {
  title: 'Promptopia',
  description: 'Share AI prompts',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <main className='w-[100vw] h-[100vh] bg-gradient-to-l from-[#FFC374] via-[#F9E897] to-[#7F9F80] flex flex-col items-center'>
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}
