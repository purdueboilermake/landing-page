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
import ApplyButton from '../../components/ApplyButton';
import Image from 'next/image';
import { useResize } from '@react-spring/web';
import ActivityPreview from '@/components/Event/ActivityPreview';

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

const activities = [
  {
    title: 'Opening Ceremony',
    startDate: "2025-02-21T19:00:00",
    endDate: "2025-02-21T20:00:00",
    location: 'Frances A. Cordova Recreational Sports Center',
    description: 'Introduction to BoilerMake'
  }, 
  {
    title: 'Carnival',
    startDate: "2025-02-22T21:00:00",
    endDate: "2025-02-23T00:00:00",
    location: 'Frances A. Cordova Recreational Sports Center',
    description: 'Event filled with fun games and activities'
  }, 
  {
    title: 'Judging',
    startDate: "2025-02-23T10:00:00",
    endDate: "2025-02-23T14:00:00",
    location: 'Frances A. Cordova Recreational Sports Center',
    description: 'First round of judging (all submitted projects)'
  }, 
  {
    title: 'Closing Ceremony',
    startDate: "2025-02-23T14:15:00",
    endDate: "2025-02-23T15:00:00",
    location: 'Frances A. Cordova Recreational Sports Center',
    description: 'Final round of judging and all prize winners announced'
  }
]

const questions = [
  {
    question: 'What is a Hackathon?',
    answer: "The BoilerMake hackathon is a 36-hour event where you can learn, build, and share a cool technology-based project! On top of your project work, you'll get free food, swag, and opportunities to win some of our $4,000 in prizes offered! We offer numerous events and activties as well to keep the fun going, and provide a platform to network with companies in the tech sector and other likeminded individuals from numerous backgrounds."
  },
  {
    question: 'Who can attend and how much experience do I need to participate?',
    answer: 'Any undergraduate university student 18 or older from any school or major can attend BoilerMake! No experience or technical background is required to participate, and we have mentors on site to assist with any technical needs. We also have unique and enriching experiences available to more skilled hackers, with special technologies and tech talks offered.'
  },
  {
    question: 'How does the application process work?',
    answer: 'Once applications open, try to submit as soon as possible make sure to write thoughtful responses in the application and provide a good resume you want recruiters to see — these are sent to tech companies! Once your application is submitted, you can add your team members through the Teams portal — applicants in a Team will be preferred. After you are accepted through one of our acceptance rounds, you are REQUIRED to RSVP to attend the event. If you are Waitlisted, you are REQUIRED to RSVP to the waitlist to have a good chance at getting a spot. More details will be sent out based on your situation.'
  },
  {
    question: 'What projects can I make at BoilerMake?',
    answer: 'You can build any project you want at BoilerMake! We have no strict project requirements, other than that it was built at the hackathon itself. Every year, we see a wide variety of technologies and applications with different projects made, and even see hardware-based projects — the possibilities are endless!'
  },
  {
    question: 'Does BoilerMake offer travel reimbursements?',
    answer: 'Unfortunately, BoilerMake is not able to offer travel reimbursements at this time to those attending from other universities. We do provide all meals while you are at the hackathon, and offer parking passes to those who need them. The BoilerMake hackathon venue will be open during the entire duration of the hackathon, and there are many nearby locations which can offer housing over the course of the two nights.'
  }
];

// Define screen breakpoint types
type ScreenSize = 'sm' | 'md' | 'lg' | 'xl' | '2xl';

// Define page counts for different screen sizes
const PAGES_BY_SCREEN: Record<ScreenSize, number> = {
  'sm': 4.25,  // mobile (will be same as 'md')
  'md': 4.25,     // tablet (will be same as 'sm')
  'lg': 7.5,   // desktop (will be same as 'xl')
  'xl': 7.5,   // large desktop (will be same as 'lg')
  '2xl': 7.5   // extra large desktop (will be same as 'lg')
};

// Define offsets for each parallax layer by screen size
const LAYER_OFFSETS: Record<string, Record<ScreenSize, number>> = {
  'about-background': {
    'sm': 0.3,
    'md': 0.3,
    'lg': 0.5,
    'xl': 0.5,
    '2xl': 0.5
  },
  'hero': {
    'sm': 0,
    'md': 0,
    'lg': 0,
    'xl': 0,
    '2xl': 0
  },
  'apply': {
    'sm': 0.25,
    'md': 0,
    'lg': 0.25,
    'xl': 0,
    '2xl': 0
  },
  'sun': {
    'sm': 0.9,
    'md': 0.9,
    'lg': 1.15,
    'xl': 1.15,
    '2xl': 1.15
  },
  'cloud2': {
    'sm': 0.3,
    'md': 0.3,
    'lg': 0.75,
    'xl': 0.75,
    '2xl': 0.75
  },
  'cloud4': {
    'sm': 0.3,
    'md': 0.3,
    'lg': 0.75,
    'xl': 0.75,
    '2xl': 0.75
  },
  'cloud5': {
    'sm': 0.3,
    'md': 0.3,
    'lg': 0.75,
    'xl': 0.75,
    '2xl': 0.75
  },
  'cloud3': {
    'sm': 0.3,
    'md': 0.3,
    'lg': 0.75,
    'xl': 0.75,
    '2xl': 0.75
  },
  'cloud1': {
    'sm': 0.3,
    'md': 0.3,
    'lg': 0.75,
    'xl': 0.75,
    '2xl': 0.75
  },
  'mini-cloud-left': {
    'sm': 0.9,
    'md': 0.9,
    'lg': 1.3,
    'xl': 1.3,
    '2xl': 1.3
  },
  'mini-cloud-right': {
    'sm': 0.8,
    'md': 0.8,
    'lg': 1.3,
    'xl': 1.3,
    '2xl': 1.3
  },
  'stat1': {
    'sm': 0.28,
    'md': 0.28,
    'lg': 1.0,
    'xl': 1.0,
    '2xl': 1.0
  },
  'stat2': {
    'sm': 0.4,
    'md': 0.4,
    'lg': 1.0,
    'xl': 1.0,
    '2xl': 1.0
  },
  'stat3': {
    'sm': 0.4,
    'md': 0.4,
    'lg': 1.0,
    'xl': 1.0,
    '2xl': 1.0
  },
  'faq-background': {
    'sm': 2.08,
    'md': 2.08,
    'lg': 4.0,
    'xl': 4.0,
    '2xl': 4.0
  }, 
  'faq-sign': {
    'sm': 2.08,
    'md': 2.08,
    'lg': 4.0,
    'xl': 4.0,
    '2xl': 4.0
  },
  'faq-accordion': {
    'sm': 2.05,
    'md': 2.05,
    'lg': 4.0,
    'xl': 4.0,
    '2xl': 4.0
  },
  'schedule-background': {
    'sm': 1.25,
    'md': 1.25,
    'lg': 2.0,
    'xl': 2.0,
    '2xl': 2.0
  },
  'schedule-sign': {
    'sm': 1.25,
    'md': 1.25,
    'lg': 2.0,
    'xl': 2.0,
    '2xl': 2.0
  },
  'windyroad': {
    'sm': 1.35,
    'md': 1.4,
    'lg': 2.3,
    'xl': 2.3,
    '2xl': 2.3
  },
  'road': {
    'sm': 1.55,
    'md': 1.55,
    'lg': 2.3,
    'xl': 2.3,
    '2xl': 2.3
  },
  'about-text': {
    'sm': 0.85,
    'md': 0.85,
    'lg': 1.6,
    'xl': 1.6,
    '2xl': 1.6
  },
  'event1': {
    'sm': 1.33,
    'md': 1.33,
    'lg': 2.2,
    'xl': 2.2,
    '2xl': 2.2
  }, 
  'event2': {
    'sm': 1.47,
    'md': 1.47,
    'lg': 2.6,
    'xl': 2.6,
    '2xl': 2.6
  }, 
  'event3': {
    'sm': 1.73,
    'md': 1.73,
    'lg': 3.00,
    'xl': 3.00,
    '2xl': 3.00
  }, 
  'event4': {
    'sm': 1.87,
    'md': 1.87,
    'lg': 3.30,
    'xl': 3.30,
    '2xl': 3.30
  }, 
  'event5': {
    'sm': 1.98,
    'md': 1.98,
    'lg': 3.6,
    'xl': 3.6,
    '2xl': 3.6
  },  
  'sponsors': {
    'sm': 2.76,
    'md': 2.75,
    'lg': 5.0,
    'xl': 5.0,
    '2xl': 5.0
  }, 
  'footer': {
    'sm': 3.75,
    'md': 3.75,
    'lg': 6.5,
    'xl': 6.5,
    '2xl': 6.5
  },
  'schedule-section': {
    'sm': 1.25,
    'md': 1.25,
    'lg': 2.0,
    'xl': 2.0,
    '2xl': 2.0
  }
};

function App() {
  const [screenSize, setScreenSize] = useState<ScreenSize>('lg');
  const containerRef = React.useRef<HTMLDivElement>(null);
  const parallaxRef = React.useRef<IParallax>(null);
  const [activeEventId, setActiveEventId] = useState<number>(0);
  const { width, height } = useResize({
    container: containerRef
  });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const updateScreenSize = () => {
      const width = window.innerWidth;
      if (width < 640) setScreenSize('sm');
      else if (width < 768) setScreenSize('md');
      else if (width < 1024) setScreenSize('lg');
      else if (width < 1280) setScreenSize('xl');
      else setScreenSize('2xl');
    };

    updateScreenSize();
    window.addEventListener('resize', updateScreenSize);
    return () => window.removeEventListener('resize', updateScreenSize);
  }, []);

  useEffect(() => {
    // Set loaded state after component mounts
    setIsLoaded(true);

    // Check for scroll parameter in URL
    const params = new URLSearchParams(window.location.search);
    const scrollOffset = params.get('scroll');
    
    if (scrollOffset && parallaxRef.current && isLoaded) {
      // Small delay to ensure parallax is fully initialized
      setTimeout(() => {
        // Remove the parameter from URL without refreshing the page
        window.history.replaceState({}, '', '/2025');
        // Scroll to the specified offset
        parallaxRef.current?.scrollTo(parseFloat(scrollOffset));
      }, 100);
    }
  }, [isLoaded]); // Add isLoaded to dependency array

  // Helper function to get offset for a layer
  const getOffset = (layerId: string) => LAYER_OFFSETS[layerId][screenSize];

  const handleEventClick = (id: number) => {
    if (id === activeEventId) {
      setActiveEventId(0);
    } else {
      setActiveEventId(id);
    }
  };

  const activity_vertical_offset: { [key: string]: string } = {
    'activity1': "top-[7%] sm:top-[7%] md:top-[10%] lg:top-[10%] xl:top-[10%]",
    'activity2': "top-[5%] sm:top-[5%] md:top-[20%] lg:top-[25%] xl:top-[25%]",
    'activity3': "top-[15%] sm:top-[15%] md:top-[30%] lg:top-[50%] xl:top-[50%]",
    'activity4': "top-[50%] sm:top-[50%] md:top-[75%] lg:top-[95%] xl:top-[95%]"
  }

  return (
    <div className='App font-dosis' ref={containerRef}>
      <Header parallaxRef={parallaxRef} />
      <Parallax ref={parallaxRef} pages={PAGES_BY_SCREEN[screenSize]} style={{ top: '0', left: '0' }} className="animation" key={screenSize}>
        <ParallaxLayer offset={getOffset('about-background')} speed={0}>
          <div id="about-background"></div>
        </ParallaxLayer>

        <ParallaxLayer offset={getOffset('hero')} speed={0.25}>
          <div className="animation_layer parallax" id="cliff">
            <div className="flex justify-end items-center p-16 sm:p-16 md:p-24 lg:p-24 xl:p-36">
              <div className="text-right">
                <div className="container mx-auto text-white">
                  <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl xl:text-8xl font-averia-libre font-bold">
                    BOILERMAKE
                  </h1>
                  <h2 className="text-[100px] md:text-[200px] font-arvo leading-none font-extrabold">
                    XII
                  </h2>
                  <p className="text-xl md:text-3xl font-body font-extrabold leading-none mb-4">
                    2/21 - 2/23
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={getOffset('apply')} speed={0.25} style={{ zIndex: 10 }}>
          <div className="flex justify-end items-center p-16 sm:p-16 md:p-16 lg:p-24 xl:p-36">
            <div className="text-right">
              <div className="container mx-auto">
                <div className='sm:pt-[12rem] md:pt-[12rem] lg:pt-[22rem] xl:pt-[22rem]'>
                  <ApplyButton text="Apply Now!" link='https://boilermake-apply.web.app' size={screenSize === 'sm' ? 'medium' : screenSize === 'md' ? 'medium' : screenSize === 'lg' ? 'large' : screenSize === 'xl' ? 'large' : 'large'} />
                  <div className="h-4"></div>
                  <ApplyButton text="Mentor Interest Form" link='https://forms.gle/Vdhhjfmhg1v6XuTG9' size={screenSize === 'sm' ? 'medium' : screenSize === 'md' ? 'medium' : screenSize === 'lg' ? 'large' : screenSize === 'xl' ? 'large' : 'large'} />
                </div>
              </div>
            </div>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={getOffset('sun')} speed={0.35}>
          <div className="animation_layer parallax" id="sun"></div>
        </ParallaxLayer>

        <ParallaxLayer offset={getOffset('cloud2')} speed={0.3}>
          <div className="animation_layer parallax" id="cloud2"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={getOffset('cloud4')} speed={0.25}>
          <div className="animation_layer parallax" id="cloud4"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={getOffset('cloud5')} speed={0.1}>
          <div className="animation_layer parallax" id="cloud5"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={getOffset('cloud3')} speed={0.4}>
          <div className="animation_layer parallax" id="cloud3"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={getOffset('cloud1')} speed={0.3}>
          <div className="animation_layer parallax" id="cloud1"></div>
        </ParallaxLayer>

        <ParallaxLayer offset={getOffset('mini-cloud-left')} speed={0.3}>
          <div className="animation_layer parallax" id="mini-cloud-left"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={getOffset('mini-cloud-right')} speed={0.3}>
          <div className="animation_layer parallax" id="mini-cloud-right"></div>
        </ParallaxLayer>

        <ParallaxLayer offset={getOffset('stat1')} speed={0.1}>
          <div id='stat1'>
            <Statistic statistic='9' variable='Universities Represented' />
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={getOffset('stat2')} speed={0.1}>
          <div id='stat2'>
            <Statistic statistic='70' variable='Project Submissions' />
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={getOffset('stat3')} speed={0.1}>
          <div id='stat3'>
            <Statistic statistic='1:3' variable='Female:Male Ratio' />
          </div>
        </ParallaxLayer>

        {/* Background layer for FAQ */}
        <ParallaxLayer offset={getOffset('faq-background')} speed={0}>
          <div id="faq" className="h-full w-full grid grid-cols-3 gap-8 p-12">
            {/* Empty space matching sign width */}
            <div className="col-span-1"></div>
            {/* Empty space for accordion */}
            <div className="col-span-2"></div>
          </div>
        </ParallaxLayer>

        {/* Floating accordion layer */}
        <ParallaxLayer offset={getOffset('faq-sign')} speed={0} style={{ zIndex: 10 }}>
          <div className="h-full w-full grid grid-cols-3 gap-8 p-12">
            {/* First Column: FAQSign (1/3 of the screen) */}
            <div className="col-span-1 flex justify-center items-center h-[500px]">
              <FAQSign />
            </div>
            {/* Empty space for accordion */}
            <div className="col-span-2"></div>
          </div>
        </ParallaxLayer>

        {/* Floating accordion layer */}
        <ParallaxLayer offset={getOffset('faq-accordion')} speed={0} style={{ zIndex: 10 }}>
          <div className="h-full w-full grid grid-cols-3 gap-8 p-12">
            {/* Empty space matching sign width */}
            <div className="col-span-1"></div>
            {/* Accordion floating above */}
            <div className="col-span-2 pt-20 sm:pt-24 md:pt-28 lg:pt-32 xl:pt-36">
              <FAQAccordian questions={questions} />
            </div>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={getOffset('schedule-background')} speed={0}>
          <div id="schedule" className='h-full w-full'>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={getOffset('windyroad')} speed={0}>
          <div className="relative h-[600px] md:h-[800px] lg:h-[1000px] xl:h-[1200px] w-full">
            <Image
              src="/images/windyroad.png"
              alt="Road"
              fill
            />
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={getOffset('schedule-section')} speed={0} style={{ zIndex: 10 }}>
          {/* Schedule Sign */}
          <div id="schedule-sign" className='h-full w-full'>
            <div className='w-1/3 h-1/3'>
              <ScheduleSign />
            </div>
          </div>

          {/* Activities */}
          {activities.map((activity, index) => (
            <div 
              key={`activity${index + 1}`}
              id={`activity${index + 1}`}
              className={`absolute ${activity_vertical_offset[`activity${index + 1}`]}`}
            >
              <ActivityPreview 
                title={activity.title}
                startDate={activity.startDate}
                endDate={activity.endDate}
                location={activity.location}
                description={activity.description}
                isActive={activeEventId === index + 1}
                onEventClick={() => handleEventClick(index + 1)}
                size={index === 0 ? 'small' : index === 1 ? 'medium' : index === 2 ? 'large' : 'xlarge'}
              />
            </div>
          ))}
        </ParallaxLayer>

        {/* <ParallaxLayer offset={getOffset('road')} speed={0}>
          <div className="absolute top-[-63vh] md:top-[-40vh] left-1/2 -translate-x-1/2 w-[170vw] md:w-[250vw] h-[175vh] md:h-[250vh]">
            <Image
              src="/images/road.png"
              alt="Road"
              fill
              className={`object-contain ${screenSize === 'sm' ? 'scale-[1] sm:scale-[0.8]' : screenSize === 'md' ? 'scale-[1] sm:scale-[0.8]' : screenSize === 'lg' ? 'scale-[1] sm:scale-[0.8]' : screenSize === 'xl' ? 'scale-[1] sm:scale-[0.8]' : 'scale-[1]'} rotate-[20deg]`}
            />
          </div>
        </ParallaxLayer> */}

        <ParallaxLayer offset={getOffset('about-text')} speed={0}>
          <div id="about" className="h-full w-full grid grid-cols-1 md:grid-cols-2 gap-8 p-12">
            <div className="col-span-1 h-1/3 flex justify-center items-center">
              <AboutSection />
            </div>
          </div>
        </ParallaxLayer>

        {/* <ParallaxLayer offset={getOffset('event1')} speed={0}>
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
        <ParallaxLayer offset={getOffset('event2')} speed={0}>
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
        <ParallaxLayer offset={getOffset('event3')} speed={0}>
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
        <ParallaxLayer offset={getOffset('event4')} speed={0}>
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
        <ParallaxLayer offset={getOffset('event5')} speed={0}>
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
        </ParallaxLayer> */}

        <ParallaxLayer offset={getOffset('sponsors')} speed={0}>
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

        <ParallaxLayer offset={getOffset('footer')} speed={0}>
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
