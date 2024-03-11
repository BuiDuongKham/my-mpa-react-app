import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen justify-between">
      <Header />
      <h1 className="text-center text-4xl">Contact us at 012.345.6789 </h1>
      <Footer />
    </div>
  );
}
