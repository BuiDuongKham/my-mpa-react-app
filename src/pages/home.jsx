import Footer from '../components/Footer';
import Header from '../components/Header';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen justify-between">
      <Header />
      <h1 className="text-center text-4xl">Welcome to FCJ 2024</h1>
      <Footer />
    </div>
  );
}
