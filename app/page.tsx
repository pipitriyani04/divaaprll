import ContactForm from "./components/contactForm";
import FavColor from "./components/favColor";
import Hero from "./components/hero";
import InputKuis from "./components/inputKuis";
import RiwayatPekerjaan from "./components/riwayatPekerjaan";
import RiwayatPendidikan from "./components/riwayatPendidikan";
import "./diva-styles.css";


export default function CvOnline() {
  return (
    <section>
    <Hero />
    <RiwayatPendidikan />
    <RiwayatPekerjaan />
    <FavColor/>
    <ContactForm/>
    </section>
  );
}


