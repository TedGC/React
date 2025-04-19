import './globals.css';
import MealsHeader from '@/components/main-header/meals-header';



export const metadata = {
  title: 'NextLevel Food',
  description: 'Delicious meals, shared by a food-loving community.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MealsHeader />
        {children}
      </body>
    </html>
  );
}