import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProductHighlight from './components/ProductHighlight'
import Features from './components/Features'
import CallToAction from './components/CallToAction'

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Navbar />
      <section id="home">
        <Hero />
      </section>
      <section id="products">
        <ProductHighlight />
      </section>
      <section id="features">
        <Features />
      </section>
      <section id="contact">
        <CallToAction />
      </section>
    </main>
  )
}

