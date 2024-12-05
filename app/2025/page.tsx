"use client"
import React, { useEffect, useState } from 'react';
import { IParallax, Parallax, ParallaxLayer } from '@react-spring/parallax'
import Header from '../../components/Header';
import HeroText from '../../components/HeroText';
import AboutSection from '../../components/AboutSection';
import ScheduleSign from '../../components/Signs/ScheduleSign';
import Statistic from '../../components/Statistic';
import FAQSign from '../../components/Signs/FAQSign';
import SponsorSign from '../../components/Signs/SponsorSign';
import SponsorCard from '../../components/SponsorCard';
import FAQAccordian from '../../components/FAQAccordian';
import EventPreview from '../../components/Event/EventPreview';
import ApplyButton from '../../components/ApplyButton';
import Image from 'next/image';
import { useResize } from '@react-spring/web';

const sponsors = [
  {
    name: 'Sponsor 1',
    logo: "/images/logo.png",
    url: 'https://www.boilermake.org/'
  },
  {
    name: 'Sponsor 2',
    logo: "/images/logo.png",
    url: 'https://www.boilermake.org/'
  },
  {
    name: 'Sponsor 3',
    logo: "/images/logo.png",
    url: 'https://www.boilermake.org/'
  },
  {
    name: 'Sponsor 4',
    logo: "/images/logo.png",
    url: 'https://www.boilermake.org/'
  },
  {
    name: 'Sponsor 5',
    logo: "/images/logo.png",
    url: 'https://www.boilermake.org/'
  },
  {
    name: 'Sponsor 6',
    logo: "/images/logo.png",
    url: 'https://www.boilermake.org/'
  },
  {
    name: 'Sponsor 7',
    logo: "/images/logo.png",
    url: 'https://www.boilermake.org/'
  },
  {
    name: 'Sponsor 8',
    logo: "/images/logo.png",
    url: 'https://www.boilermake.org/'
  },
  {
    name: 'Sponsor 9',
    logo: "/images/logo.png",
    url: 'https://www.boilermake.org/'
  },
];

const questions = [
  {
    question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  },
  {
    question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  },
  {
    question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  },
  {
    question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  },
  {
    question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  }
];

function App() {
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = React.useRef<HTMLDivElement>(null);
  const parallaxRef = React.useRef<IParallax>(null);
  const [activeEventId, setActiveEventId] = useState<number | null>(null);
  const { width, height } = useResize({
    container: containerRef
  });
  
  

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Initial check
    checkMobile();

    // Add event listener for window resize
    window.addEventListener('resize', checkMobile);

    // Cleanup
    return () => {
      window.removeEventListener('resize', checkMobile);
    }
  }, []);
  
  const handleEventClick = (id: number) => {
    setActiveEventId(activeEventId === id ? null : id);
  };

  return (
    <div className='App font-dosis' ref={containerRef}>
      <Parallax ref={parallaxRef} pages={isMobile ? 4.25 : 7.5} style={{ top: '0', left: '0' }} className="animation" key={isMobile ? 'mobile' : 'desktop'}>
        <Header parallaxRef={parallaxRef} />
        <ParallaxLayer offset={isMobile ? 0.3 : 0.5} speed={0}>
          <div id="about-background"></div>
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={0.25}>
          <div className="animation_layer parallax" id="cliff">
            <div className={`flex justify-end items-center ${isMobile ? "p-16" : "p-36"}`}>
              <div className={`text-right`}>
                <div className="container mx-auto text-white">
                  <h1 className={`text-5xl md:text-8xl font-averia-libre font-bold ${isMobile ? 'text-2xl' : ''}`}>BOILERMAKE</h1>
                  <h2 className={`text-[100px] md:text-[200px] font-arvo leading-none font-extrabold ${isMobile ? 'text-5xl' : ''}`}>XII</h2>
                  <p className={`text-xl md:text-3xl font-body font-extrabold leading-none mb-4 ${isMobile ? 'text-sm' : ''}`}>1/19 - 1/23</p>
                </div>
              </div>
            </div>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={0.25} style={{ zIndex: 10 }}>
          <div className={`flex justify-end items-center ${isMobile ? "p-16" : "p-36"}`}>
            <div className={`text-right`}>
              <div className="container mx-auto">
                <div style={{paddingTop: isMobile ? '11rem' : '22rem' }}>
                  <ApplyButton size={isMobile ? 'medium' : 'large'} />
                </div>
              </div>
            </div>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={isMobile ? 0.9 : 1.15} speed={0.35}>
          <div className="animation_layer parallax" id="sun"></div>
        </ParallaxLayer>

        <ParallaxLayer offset={isMobile ? 0.3 : 0.75} speed={0.3}>
          <div className="animation_layer parallax" id="cloud2"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={isMobile ? 0.3 : 0.75} speed={0.25}>
          <div className="animation_layer parallax" id="cloud4"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={isMobile ? 0.3 : 0.75} speed={0.1}>
          <div className="animation_layer parallax" id="cloud5"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={isMobile ? 0.3 : 0.75} speed={0.4}>
          <div className="animation_layer parallax" id="cloud3"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={isMobile ? 0.3 : 0.75} speed={0.3}>
          <div className="animation_layer parallax" id="cloud1"></div>
        </ParallaxLayer>

        <ParallaxLayer offset={isMobile ? 0.9 : 1.3} speed={0.3}>
          <div className="animation_layer parallax" id="mini-cloud-left"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={isMobile ? 0.80 : 1.3} speed={0.3}>
          <div className="animation_layer parallax" id="mini-cloud-right"></div>
        </ParallaxLayer>

        <ParallaxLayer offset={isMobile ? 0.28 : 1.0} speed={0.1}>
          <div id='stat1'>
            <Statistic statistic='9' variable='Universities Represented' />
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={isMobile ? 0.40 : 1.0} speed={0.1}>
          <div id='stat2'>
            <Statistic statistic='70' variable='Project Submissions' />
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={isMobile ? 0.40 : 1.0} speed={0.1}>
          <div id='stat3'>
            <Statistic statistic='1:3' variable='Female:Male Ratio' />
          </div>
        </ParallaxLayer>

        {/* Background layer for FAQ */}
        <ParallaxLayer offset={isMobile ? 2.08 : 4} speed={0}>
          <div id="faq" className="h-full w-full grid grid-cols-3 gap-8 p-12">
            {/* First Column: FAQSign (1/3 of the screen) */}
            <div className="col-span-1 flex justify-center items-center h-[500px]">
              <FAQSign />
            </div>
            {/* Empty space for accordion */}
            <div className="col-span-2"></div>
          </div>
        </ParallaxLayer>

        {/* Floating accordion layer */}
        <ParallaxLayer offset={isMobile ? 2.05 : 4} speed={0} style={{ zIndex: 10 }}>
          <div className="h-full w-full grid grid-cols-3 gap-8 p-12">
            {/* Empty space matching sign width */}
            <div className="col-span-1"></div>
            {/* Accordion floating above */}
            <div className="col-span-2 pt-36">
              <FAQAccordian questions={questions} />
            </div>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={isMobile ? 1.25 : 2} speed={0}>
          <div id="schedule" className='h-full w-full'>
            <div className='w-1/3 h-1/3'>
              <ScheduleSign />
            </div>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={isMobile ? 1.55 : 2.3} speed={0}>
          <div className="absolute top-[-63vh] md:top-[-40vh] left-1/2 -translate-x-1/2 w-[170vw] md:w-[250vw] h-[175vh] md:h-[250vh]">
            <Image 
              src="/images/road.png" 
              alt="Road" 
              fill
              className={`object-contain ${isMobile ? 'scale-[1] sm:scale-[0.8]' : 'scale-[1]'} rotate-[20deg]`}
            />
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={isMobile ? 0.85 : 1.6} speed={0}>
          <div id="about" className="h-full w-full grid grid-cols-1 md:grid-cols-2 gap-8 p-12">
            <div className="col-span-1 h-1/3 flex justify-center items-center">
              <AboutSection />
            </div>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={isMobile ? 1.33 : 2.2} speed={0}>
          <div id="event1">
            <EventPreview 
              title='opening ceremony' 
              date={new Date().toISOString()} 
              location='Frances A. Cordova Recreational Sports Center' 
              description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' 
              cardType={1} 
              popupType={1}
              isActive={activeEventId === 1}
              onEventClick={() => handleEventClick(1)}
            />
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={isMobile ? 1.47 : 2.6} speed={0}>
          <div id="event2">
            <EventPreview 
              title='activity name' 
              date={new Date().toISOString()} 
              location='Frances A. Cordova Recreational Sports Center' 
              description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' 
              cardType={2} 
              popupType={2}
              isActive={activeEventId === 2}
              onEventClick={() => handleEventClick(2)}
            />
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={isMobile ? 1.73 : 3.00} speed={0}>
          <div id="event3">
            <EventPreview 
              title='activity name' 
              date={new Date().toISOString()} 
              location='Frances A. Cordova Recreational Sports Center' 
              description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' 
              cardType={3} 
              popupType={2}
              isActive={activeEventId === 3}
              onEventClick={() => handleEventClick(3)}
            />
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={isMobile ? 1.87 : 3.30} speed={0}>
          <div id="event4">
            <EventPreview 
              title='activity name' 
              date={new Date().toISOString()} 
              location='Frances A. Cordova Recreational Sports Center' 
              description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' 
              cardType={2} 
              popupType={2}
              isActive={activeEventId === 4}
              onEventClick={() => handleEventClick(4)}
            />
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={isMobile ? 1.98 : 3.6} speed={0}>
          <div id="event5">
            <EventPreview 
              title='activity name' 
              date={new Date().toISOString()} 
              location='Frances A. Cordova Recreational Sports Center' 
              description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' 
              cardType={2} 
              popupType={1}
              isActive={activeEventId === 5}
              onEventClick={() => handleEventClick(5)}
            />
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={isMobile ? 2.75 : 5} speed={0}>
          <div id="sponsors" className='h-full w-full'>
            <div className={`w-1/3 h-1/3`}>
              <SponsorSign />
            </div>
            {/* Sponsors */}
            <div className="grid grid-cols-3 gap-4 md:gap-x-8 md:gap-y-10 justify-items-center">
              {sponsors.map((sponsor, index) => (
                <SponsorCard sponsor={sponsor} key={index} />
              ))}
            </div>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={isMobile ? 3.75 : 6.5} speed={0}>
          <div id="footer" className="flex flex-col justify-end h-full w-full">
            <div className="animation_layer parallax" id="footer-background"></div>
            <footer id='textblock-footer' className="relative z-10">
              <div className='text-white'>
                Created With 💛 By&nbsp;
                <a href="https://boilermake.org/">Boilermake</a>
              </div>
            </footer>
          </div>
        </ParallaxLayer>

      </Parallax>
    </div>
  );
}

export default App;
