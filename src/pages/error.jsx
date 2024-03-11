import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Error() {
  return (
    <div className="flex flex-col min-h-screen justify-between">
      <Header />
      <h1 className="text-center text-4xl">Page doesn't exist</h1>
      <Footer />
    </div>
  );
}
