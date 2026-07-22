import { motion } from 'framer-motion'
import HeroSection from '../components/home/HeroSection'
import StatsSection from '../components/home/StatsSection'
import AboutPreview from '../components/home/AboutPreview'
import MarketsPreview from '../components/home/MarketsPreview'
import WhyChooseUs from '../components/home/WhyChooseUs'
import ServicesPreview from '../components/home/ServicesPreview'
import CTASection from '../components/home/CTASection'

export default function Home() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
      <HeroSection />
      <StatsSection />
      <AboutPreview />
      <MarketsPreview />
      <WhyChooseUs />
      <ServicesPreview />
      <CTASection />
    </motion.div>
  )
}
