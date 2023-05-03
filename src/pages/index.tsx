import Header from '@/components/header/header';
import Login from '@/pages/login';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Header />
      <Login />
    </main>
  );
}
