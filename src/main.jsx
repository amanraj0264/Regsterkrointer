import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { FAQ } from './components/FAQ.jsx'
import Testimonials from './Testimonials.jsx'
import { Header } from './components/Header.jsx'
import { Banner } from './components/Banner.jsx'
import { About } from './components/About.jsx'
import { Services } from './components/Services.jsx'
import { Startups } from './components/Startups.jsx'
import { VideoIntroduction } from './components/VideoIntroduction.jsx'
import { HpyClint } from './components/HpyClint.jsx'
import { Blogs } from './components/Blogs.jsx'
import { WhyChoosejsx } from './components/WhyChoose.jsx'
import { Form } from './components/Form.jsx'
import { Footer } from './components/Footer.jsx'
import { Partner } from './components/Partner.jsx'
import { MobileServices } from './components/MobileServices.jsx'
import { Num } from './components/Num.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header/>
    <Banner />
    <Startups/>
    <Services/>
    <About/>
    <WhyChoosejsx/>
    <VideoIntroduction/>
    <HpyClint/>
    <Blogs/>
    <FAQ />
    <MobileServices/>
    <Num/>
    <Form/>
    <Partner/>
    <Footer/>

    
  </StrictMode>,
)
