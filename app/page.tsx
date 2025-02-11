"use client"
import React, { useEffect, useState } from 'react';
import { IParallax, Parallax, ParallaxLayer } from '@react-spring/parallax'
import Header from '@/components/Header';
import HeroText from '@/components/HeroText';
import AboutSection from '@/components/AboutSection';
import ScheduleSign from '@/components/Signs/ScheduleSign';
import Statistic from '@/components/Statistic';
import FAQSign from '@/components/Signs/FAQSign';
import SponsorSign from '@/components/Signs/SponsorSign';
import SponsorCard from '@/components/SponsorCard';
import FAQAccordian from '@/components/FAQAccordian';
import ApplyButton from '@/components/ApplyButton';
import Image from 'next/image';
import { useResize } from '@react-spring/web';
import ActivityPreview from '@/components/Event/ActivityPreview';
import { LAYER_OFFSETS, PAGES_BY_SCREEN, ScreenSize } from '@/utils/parallaxOffset';

const sponsors = [
  [ // XL logos
    {
      name: 'CAT',
      logo: "/assets/sponsors/cat.png",
      url: 'https://www.caterpillar.com/'
    },
  ],
  [ // LG logos
  ],
  [ // MD logos
    {
      name: 'D.E. Shaw',
      logo: "/assets/sponsors/deshaw.png",
      url: 'https://www.deshaw.com/'
    },
    {
      name: 'RCAC',
      logo: "/assets/sponsors/RCAC_Logo.png",
      url: 'https://www.rcac.purdue.edu/'
    },
  ],
  [ // SM logos
    {
      name: 'CoE',
      logo: "/assets/sponsors/coe.svg",
      url: 'https://engineering.purdue.edu/Engr'
    },
    {
      name: 'Purdue Innovates',
      logo: "/assets/sponsors/purdue_innovates.png",
      url: 'https://purdueinnovates.org/'
    },
    {
      name: 'Roboflow',
      logo: "/assets/sponsors/roboflow.png",
      url: 'https://roboflow.com/'
    },
    {
      name: 'Runpod',
      logo: "/assets/sponsors/runpod_color.png",
      url: 'https://www.runpod.io/'
    }
  ],
  [
    {
      name: 'Klaviyo',
      logo: "/assets/sponsors/klaviyo.png",
      url: 'https://www.klaviyo.com/'
    },
    {
      name: 'Blip',
      logo: "/assets/sponsors/blip.png",
      url: 'https://www.blippayments.com/'
    },
    {
      name: 'Sync',
      logo: "/assets/sponsors/sync.png",
      url: 'https://sync.so/'
    }, 
    {
      name: 'Modal',
      logo: "/assets/sponsors/modal.svg",
      url: 'https://modal.com/'
    },

  ],
  [
    {
      name: 'Taco Bell',
      logo: "/assets/sponsors/TacoBell.svg",
      url: 'https://www.yum.com/wps/portal/yumbrands/Yumbrands/company/our-brands/taco-bell'
    },
    {
      name: 'Cartesia',
      logo: "/assets/sponsors/cartesia.svg",
      url: 'https://www.cartesia.ai/'
    },
    {
      name: 'Warp',
      logo: "/assets/sponsors/warp.png",
      url: 'https://www.warp.dev/'
    },
    {
      name: 'Wolfram',
      logo: "/assets/sponsors/wolfram.png",
      url: 'https://www.wolfram.com/'
    },
  ]
];

const activities = [
  {
    title: 'Opening Ceremony',
    startDate: "2025-02-21T19:00:00",
    endDate: "2025-02-21T20:00:00",
    location: 'Frances A. Cordova Recreational Sports Center',
    description: 'Introduction to BoilerMake.'
  },
  {
    title: 'Hacking Starts',
    startDate: "2025-02-21T20:00:00",
    endDate: "2025-02-21T20:00:00",
    location: 'Frances A. Cordova Recreational Sports Center',
    description: 'Hackers can start coding.'
  },
  {
    title: 'Carnival',
    startDate: "2025-02-22T21:00:00",
    endDate: "2025-02-23T00:00:00",
    location: 'Frances A. Cordova Recreational Sports Center',
    description: 'Event filled with fun games and activities.'
  },
  {
    title: 'Hacking Ends',
    startDate: "2025-02-23T08:00:00",
    endDate: "2025-02-23T08:00:00",
    location: 'Frances A. Cordova Recreational Sports Center',
    description: 'Hackers must stop coding.'
  },
  {
    title: 'Judging',
    startDate: "2025-02-23T10:00:00",
    endDate: "2025-02-23T14:00:00",
    location: 'Frances A. Cordova Recreational Sports Center',
    description: 'First round of judging (all submitted projects).'
  },
  {
    title: 'Closing Ceremony',
    startDate: "2025-02-23T14:15:00",
    endDate: "2025-02-23T15:00:00",
    location: 'Frances A. Cordova Recreational Sports Center',
    description: 'Final round of judging and all prize winners announced.'
  }
]

const questions = [
  {
    question: 'What is a Hackathon?',
    answer: "The BoilerMake hackathon is a 36-hour event where you can learn, build, and share a cool technology-based project! On top of your project work, you'll get free food, swag, and opportunities to win some of our $4,000 in prizes offered! We offer numerous events and activities as well to keep the fun going, and provide a platform to network with companies in the tech sector and other like-minded individuals from numerous backgrounds."
  },
  {
    question: 'Who can attend and how much experience do I need to participate?',
    answer: 'Any undergraduate university student age 18 or older from any school or major can attend BoilerMake! No experience or technical background is required to participate, and we have mentors on site to assist with any technical needs. We also have unique and enriching experiences available to more skilled hackers, with special technologies and tech talks offered.'
  },
  {
    question: 'How does the application process work?',
    answer: 'Once applications open, try to submit as soon as possible, make sure to write thoughtful responses in the application, and provide a good resume you want recruiters to see — these are sent to tech companies! Once your application is submitted, you can add your team members through the Teams portal — applicants in a Team will be preferred. After you are accepted through one of our acceptance rounds, you are REQUIRED to RSVP to attend the event. If you are Waitlisted, you are REQUIRED to RSVP to the waitlist to have a good chance at getting a spot. More details will be sent out based on your situation.'
  },
  {
    question: 'What projects can I make at BoilerMake?',
    answer: 'You can build any project you want at BoilerMake! We have no strict project requirements, other than that it was built at the hackathon itself. Every year, we see a wide variety of technologies used and various applications for projects, and even see hardware-based projects — the possibilities are endless!'
  },
  {
    question: 'Does BoilerMake offer travel reimbursements?',
    answer: 'Unfortunately, BoilerMake is not able to offer travel reimbursements at this time to those attending from other universities. We do provide all meals while you are at the hackathon, and offer parking to those who need it. The BoilerMake hackathon venue will be open during the entire duration of the hackathon, and there are many nearby locations which can offer housing over the course of the two nights.'
  }
];

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
        window.history.replaceState({}, '', '/');
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
    'activity1': "top-[5%] sm:top-[7%] md:top-[13%] lg:top-[11%] xl:top-[10%]",
    'activity2': "top-[7%] sm:top-[9%] md:top-[14%] lg:top-[10%] xl:top-[12%]",
    'activity3': "top-[15%] sm:top-[17%] md:top-[25%] lg:top-[35%] xl:top-[35%]",
    'activity4': "top-[20%] sm:top-[19%] md:top-[32%] lg:top-[40%] xl:top-[45%]", // change this one
    'activity5': "top-[42%] sm:top-[42%] md:top-[65%] lg:top-[80%] xl:top-[70%]", // change this one
    'activity6': "top-[50%] sm:top-[50%] md:top-[80%] lg:top-[85%] xl:top-[95%]",
  }

  return (
    <div className='App font-dosis' ref={containerRef}>
      <Header parallaxRef={parallaxRef} screenSize={screenSize} />
      <Parallax ref={parallaxRef} pages={PAGES_BY_SCREEN[screenSize]} style={{ top: '0', left: '0' }} className="animation" key={screenSize}>

        <ParallaxLayer offset={getOffset('about-background')} speed={0}>
          <div id="about-background"></div>
        </ParallaxLayer>

        <ParallaxLayer offset={getOffset('hero')} speed={0.25}>
          <div className="animation_layer parallax" id="hero"></div>
        </ParallaxLayer>

        <ParallaxLayer offset={getOffset('cliff')} speed={0.25}>
          <div id='cliff'>
            <Image
              src="/images/cliffside.png"
              alt="Cliff"
              height={0}
              width={0}
              sizes='100vh'
              className='w-full h-full object-cover'
            />
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={getOffset('hero-text')} speed={0.25}>
          <div className="animation_layer parallax">
            <div className="flex justify-end items-center p-4 sm:p-4 md:p-8 lg:p-16 xl:p-16">
              <div className="text-right">
                <div className="container mx-auto text-white">
                  <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl xl:text-8xl font-arvo font-bold">
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
          <div className="flex justify-end items-center p-4 sm:p-4 md:p-8 lg:p-16 xl:p-16">
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
          <div className='lg:mt-[175px] xl:mt-[-60px]'>
            <div className="animation_layer parallax" id="mini-cloud-left"></div>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={getOffset('mini-cloud-right')} speed={0.3}>
          <div className="animation_layer parallax" id="mini-cloud-right"></div>
        </ParallaxLayer>

        <ParallaxLayer offset={getOffset('stat1')} speed={0.1}>
          <div id='stat1' className='pt-16 sm:pt-0'>
            <Statistic statistic='9' variable='Universities Represented' />
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={getOffset('stat2')} speed={0.1}>
          <div id='stat2' className='pt-8 sm:pt-0'>
            <Statistic statistic='70' variable='Project Submissions' />
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={getOffset('stat3')} speed={0.1}>
          <div id='stat3'>
            <Statistic statistic='$4k' variable='In Prizes' />
          </div>
        </ParallaxLayer>

        {/* Tumbleweed */}
        <ParallaxLayer offset={getOffset('tumbleweed')} speed={0} style={{ zIndex: 15, pointerEvents: 'none' }}>
          <div className="absolute animate-tumble">
            <Image
              src="/images/tumbleweed.png"
              alt="Tumbleweed"
              width={200}
              height={200}
              className="w-[100px] h-[100px] sm:w-[150px] sm:h-[150px] md:w-[175px] md:h-[175px] lg:w-[200px] lg:h-[200px] animate-[tumble_8s_linear_infinite]"
              priority
            />
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
        <ParallaxLayer offset={getOffset('faq-accordion')} speed={0} style={{ zIndex: 50 }}>
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

        {/* Add tents layer */}
        {/* <ParallaxLayer offset={getOffset('tents')} speed={0} style={{ zIndex: 20, pointerEvents: 'none' }}>
          <div className="absolute left-6 sm:left-8 lg:left-16">
            <Image
              src="/images/tents.png"
              alt="Tents"
              width={50}
              height={50}
              className="w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] md:w-[275px] md:h-[275px] lg:w-[350px] lg:h-[350px]"
              priority
            />
          </div>
        </ParallaxLayer> */}

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

          {/* Tents */}
          <div className="absolute left-6 top-[30%] sm:left-8 lg:left-16 sm:top-[35%] md:top-[45%] lg:top-[60%] z-10">
            <Image
              src="/images/tents.png"
              alt="Tents"
              width={50}
              height={50}
              className="w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] md:w-[275px] md:h-[275px] lg:w-[350px] lg:h-[350px]"
              priority
            />
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
                size={index < 2 ? 'small' : index < 4 ? 'medium' : index < 5 ? 'large' : 'xlarge'}
                popup={(index === 2 || index === 5) ? 'right' : 'left'}
              />
            </div>
          ))}
        </ParallaxLayer>

        {/* Birds near About section */}
        <ParallaxLayer offset={getOffset('birds-about')} speed={0}>
          <div className="absolute w-full left-[80%] top-[5%] sm:top-[0] md:top-[10%]">
            <Image
              src="/images/bird1.png"
              alt="Bird 1"
              width={65}
              height={65}
              className="absolute w-[65px] h-[65px] animate-[float_3s_ease-in-out_infinite]"
              style={{ left: '0', top: '0' }}
            />
            <Image
              src="/images/bird2.png"
              alt="Bird 2"
              width={65}
              height={65}
              className="absolute  w-[65px] h-[65px] animate-[float_3s_ease-in-out_infinite]"
              style={{ left: '-10px', top: '40px', animationDelay: '0.5s' }}
            />
            <Image
              src="/images/bird3.png"
              alt="Bird 3"
              width={65}
              height={65}
              className="absolute w-[65px] h-[65px] animate-[float_3s_ease-in-out_infinite]"
              style={{ left: '50px', top: '20px', animationDelay: '1s' }}
            />
          </div>
        </ParallaxLayer>

        {/* Birds near Schedule section */}
        <ParallaxLayer offset={getOffset('birds-schedule')} speed={0}>
          <div className="absolute w-full left-[27%] top-[-7%] sm:top-[-4%] md:top-[10%]">
            <Image
              src="/images/bird2.png"
              alt="Bird 2"
              width={65}
              height={65}
              className="absolute w-[65px] h-[65px] animate-[float-flipped_3s_ease-in-out_infinite]"
              style={{ left: '50px', top: '15px', animationDelay: '0.8s' }}
            />
            <Image
              src="/images/bird1.png"
              alt="Bird 1"
              width={65}
              height={65}
              className="absolute w-[65px] h-[65px] animate-[float-flipped_3s_ease-in-out_infinite]"
              style={{ left: '15px', top: '0', animationDelay: '0.3s' }}
            />
            <Image
              src="/images/bird3.png"
              alt="Bird 3"
              width={45}
              height={45}
              className="absolute w-[65px] h-[65px] animate-[float-flipped_3s_ease-in-out_infinite]"
              style={{ left: '0', top: '40px', animationDelay: '1.2s' }}
            />
          </div>
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

        {/* Campfires layer */}
        <ParallaxLayer offset={getOffset('campfires')} speed={0} style={{ zIndex: 5, pointerEvents: 'none' }}>
          <div className="absolute -right-6 sm:-right-6 lg:-right-12">
            <Image
              src="/images/campfires.png"
              alt="Tents"
              width={50}
              height={50}
              className="w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] md:w-[275px] md:h-[275px] lg:w-[350px] lg:h-[350px]"
              priority
            />
          </div>
        </ParallaxLayer>

        {/* Background layer for Sponsors */}
        <ParallaxLayer offset={getOffset('sponsors-background')} speed={0}>
          <div id="sponsors" className='h-full w-full'>
          </div>
        </ParallaxLayer>

        {/* Sponsors Sign Layer */}
        <ParallaxLayer offset={getOffset('sponsors-sign')} speed={0} style={{ zIndex: 0 }}>
          <div className='h-full w-full'>
            <div className={`w-1/3 h-1/3`}>
              <SponsorSign />
            </div>
          </div>
        </ParallaxLayer>

        {/* Sponsors Content Layer */}
        <ParallaxLayer offset={getOffset('sponsors-content')} speed={0} style={{ zIndex: 10 }}>
          <div className='h-full w-full'>
            <div className={`w-1/3 h-1/3`}></div>

            <div className="px-8 sm:px-10 md:px-12 lg:px-16 xl:px-20 max-w-[1600px] mx-auto">
              <div className="flex flex-col gap-1 md:gap-2 lg:gap-4">
                { /* <h3 className='text-4xl font-bold'>Coming Soon!</h3> */ }
                {sponsors.map((sponsorRow, rowIndex) => (
                  <div
                    key={rowIndex}
                    className={`flex justify-center items-center ${
                      rowIndex === 0 ? 'gap-8 md:gap-16 lg:gap-20' :
                      rowIndex === 1 ? 'gap-6 md:gap-14 lg:gap-16' :
                      rowIndex === 2 ? 'gap-4 md:gap-12 lg:gap-14' :
                      'gap-3 md:gap-8 lg:gap-12'}`}
                  >
                    {sponsorRow.map((sponsor, index) => (
                      <SponsorCard
                        key={index}
                        sponsor={sponsor}
                        size={rowIndex === 0 ? "xl" : rowIndex === 1 ? "lg" : rowIndex === 2 ? "md" : "sm"}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={getOffset('footer')} speed={0}>
          <div id="footer" className="flex flex-col justify-end h-full w-full">
            <div className="animation_layer parallax" id="footer-background"></div>
            <footer id='textblock-footer' className="relative z-10">
              <div className='text-white'>
                Created With 💛 By&nbsp;
                <a href="/home">Boilermake</a>
              </div>
            </footer>
          </div>
        </ParallaxLayer>

      </Parallax>
    </div>
  );
}

export default App;
