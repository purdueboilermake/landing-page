"use client"
import React, { useEffect, useState } from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
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

const sponsors = [
  {
    name: 'Sponsor 1',
    logo: "/landing-page/images/logo.png",
    url: 'https://www.boilermake.org/'
  },
  {
    name: 'Sponsor 2',
    logo: "/landing-page/images/logo.png",
    url: 'https://www.boilermake.org/'
  },
  {
    name: 'Sponsor 3',
    logo: "/landing-page/images/logo.png",
    url: 'https://www.boilermake.org/'
  },
  {
    name: 'Sponsor 4',
    logo: "/landing-page/images/logo.png",
    url: 'https://www.boilermake.org/'
  },
  {
    name: 'Sponsor 5',
    logo: "/landing-page/images/logo.png",
    url: 'https://www.boilermake.org/'
  },
  {
    name: 'Sponsor 6',
    logo: "/landing-page/images/logo.png",
    url: 'https://www.boilermake.org/'
  },
  {
    name: 'Sponsor 7',
    logo: "/landing-page/images/logo.png",
    url: 'https://www.boilermake.org/'
  },
  {
    name: 'Sponsor 8',
    logo: "/landing-page/images/logo.png",
    url: 'https://www.boilermake.org/'
  },
  {
    name: 'Sponsor 9',
    logo: "/landing-page/images/logo.png",
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

  useEffect(() => {
    if (window.innerWidth <= 768) {
      setIsMobile(true);
    }
  }, []);
  return (
    <div className='App'>
      <Parallax pages={isMobile ? 4.25 : 7.5} style={{ top: '0', left: '0' }} className="animation" key={isMobile ? 'mobile' : 'desktop'}>
        <Header isMobile={isMobile} />
        <ParallaxLayer offset={isMobile ? 0.3 : 0.5} speed={0}>
          <div id="about-background"></div>
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={0.25}>
          <div className="animation_layer parallax" id="cliff">
            <div className={`flex justify-end items-center ${isMobile ? "p-16" : "p-36"}`}>
              <div className={`text-right`}>
                <HeroText isMobile={isMobile} />
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

        <ParallaxLayer offset={isMobile ? 0.32 : 0.63} speed={0.25}>
          <div className={`flex justify-end items-center ${isMobile ? "pr-12" : "pr-32"}`}>
            <ApplyButton size={isMobile ? "medium" : "large"} />
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={isMobile ? 0.9 : 1.3} speed={0.3}>
          <div className="animation_layer parallax" id="mini-cloud-left"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={isMobile ? 0.80 : 1.3} speed={0.3}>
          <div className="animation_layer parallax" id="mini-cloud-right"></div>
        </ParallaxLayer>

        <ParallaxLayer offset={isMobile ? 0.28 : 1.0} speed={0.1}>
          <div id='stat1'>
            <Statistic statistic='XX' variable='STATISTIC' />
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={isMobile ? 0.40 : 1.0} speed={0.1}>
          <div id='stat2'>
            <Statistic statistic='XX' variable='STATISTIC' />
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={isMobile ? 0.40 : 1.0} speed={0.1}>
          <div id='stat3'>
            <Statistic statistic='XX' variable='STATISTIC' />
          </div>
        </ParallaxLayer>


        <ParallaxLayer offset={isMobile ? 1.25 : 2} speed={0}>
          <div id="schedule" className='h-full w-full'>
            <div className='w-1/3 h-1/3'>
              <ScheduleSign isMobile={isMobile} />
            </div>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={isMobile ? 0.85 : 1.6} speed={0}>
          <div id="about" className="h-full w-full grid grid-cols-1 md:grid-cols-2 gap-8 p-12">
            {/* First Column: FAQSign (1/3 of the screen) */}
            <div className="col-span-1 h-1/3 flex justify-center items-center">
              <AboutSection />
            </div>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={isMobile ? 1.55 : 2.3} speed={0}>
          <div className="animation_layer parallax" id="road"></div>
        </ParallaxLayer>

        <ParallaxLayer offset={isMobile ? 1.33 : 2.2} speed={0}>
          <div id="event1">
            <EventPreview title='opening ceremony' date={new Date().toISOString()} location='Frances A. Cordova Recreational Sports Center' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' cardType={1} popupType={1} isMobile={isMobile} />
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={isMobile ? 1.47 : 2.6} speed={0}>
          <div id="event2">
            <EventPreview title='activity name' date={new Date().toISOString()} location='Frances A. Cordova Recreational Sports Center' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' cardType={2} popupType={2} isMobile={isMobile} />
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={isMobile ? 1.73 : 3.05} speed={0}>
          <div id="event3">
            <EventPreview title='activity name' date={new Date().toISOString()} location='Frances A. Cordova Recreational Sports Center' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' cardType={3} popupType={2} isMobile={isMobile} />
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={isMobile ? 1.87 : 3.35} speed={0}>
          <div id="event4">
            <EventPreview title='activity name' date={new Date().toISOString()} location='Frances A. Cordova Recreational Sports Center' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' cardType={2} popupType={2} isMobile={isMobile} />
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={isMobile ? 1.98 : 3.6} speed={0}>
          <div id="event5">
            <EventPreview title='activity name' date={new Date().toISOString()} location='Frances A. Cordova Recreational Sports Center' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' cardType={2} popupType={1} isMobile={isMobile} />
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={isMobile ? 2.25 : 4} speed={0}>
          <div id="faq" className="h-full w-full grid grid-cols-3 gap-8 p-12">
            {/* First Column: FAQSign (1/3 of the screen) */}
            <div className="col-span-1 h-1/3 flex justify-center items-center">
              <FAQSign />
            </div>
            {/* Second and Third Column: FAQAccordian (2/3 of the screen) */}
            <div className="col-span-2 pt-24">
              <FAQAccordian questions={questions} isMobile={isMobile} />
            </div>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={isMobile ? 3 : 5} speed={0}>
          <div id="sponsors" className='h-full w-full'>
            <div className={`w-1/3 h-1/${isMobile ? 4 : 3}`}>
              <SponsorSign />
            </div>
            {/* Sponsors */}
            <div className="grid grid-cols-3 gap-x-8 gap-y-20 justify-items-center">
              {sponsors.map((sponsor, index) => (
                <SponsorCard sponsor={sponsor} key={index} isMobile={isMobile} />
              ))}
            </div>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={isMobile ? 3.75 : 6.5} speed={0}>
          <div id="footer">
            <div className="animation_layer parallax" id="footer-background">
              {isMobile && <div className="flex justify-center items-center h-full pb-12 text-sm">
                <div className="text-white text-center">
                  Created With 💛 By&nbsp;
                  <a href="https://boilermake.org/">Boilermake</a>
                </div>
              </div>}
            </div>
            <footer id='textblock-footer'>
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
