"use client";

import Header from '@/components/Header';
import Image from 'next/image';
import { useState, useMemo } from 'react';
import TeamCarousel from '@/components/TeamCarousel';

interface TeamMember {
  image: string;
}

interface Team {
  id: number;
  name: string;
  imgSrc: string;
  description: string;
  members: TeamMember[];
}

const getRandomCloud = () => {
  const cloudNumber = Math.floor(Math.random() * 4) + 1;
  return `/assets/pics/cloud_${cloudNumber}.png`;
};

export default function TeamsPage() {
  const [selectedTeam, setSelectedTeam] = useState<Team | null>(null);

  const teams: Team[] = [
    {
      id: 1,
      name: "Team Leads",
      imgSrc: "/assets/pics/leads.png",
      description: "Our dedicated team leads bring years of experience in hackathon organization and event management. They coordinate between different departments, establish strategic goals, and ensure smooth operation of the entire event while fostering an environment of innovation and collaboration.",
      members: [
        { image: "/assets/team/leads/daniel.png" },
        { image: "/assets/team/leads/varun.png" },
        { image: "/assets/team/leads/caleb.png" },
        { image: "/assets/team/leads/leon.png" },
        { image: "/assets/team/leads/nithin.png" },
        { image: "/assets/team/leads/sanjhee.png" },
        { image: "/assets/team/leads/sahiti.png" },


      ]
    },
    {
      id: 2,
      name: "Development Team",
      imgSrc: "/assets/pics/dev.png",
      description: "Creating and maintaining the BoilerMake website, application portal, and brand new mobile app, the Development team handles all of BoilerMake's technical needs.",
      members: [
        { image: "/assets/team/dev/varun.png" },
        { image: "/assets/team/dev/arushi.png" },
        { image: "/assets/team/dev/aryamaan.png" },
        { image: "/assets/team/dev/ashok.png" },
        { image: "/assets/team/dev/dylan.png" },
      ]
    },
    {
      id: 3,
      name: "Design Team",
      imgSrc: "/assets/pics/design.png",
      description: "Creating BoilerMake branding, swag, website design, and more, the Design team makes BoilerMake look impeccable.",
      members: [
        { image: "/assets/team/design/leon.png" },
        { image: "/assets/team/design/anika.png" },
        { image: "/assets/team/design/diya.png" },
        { image: "/assets/team/design/amy.png" },
        { image: "/assets/team/design/cailey.png" },
        { image: "/assets/team/design/rosie.png" },
      ]
    },
    {
      id: 4,
      name: "User Experience Team",
      imgSrc: "/assets/pics/ux.png",
      description: "From layout to schedule to prizes, the UX team handles all event planning, organzation, and coordination for BoilerMake.",
      members: [
        { image: "/assets/team/ux/caleb.png" },
        { image: "/assets/team/ux/sahiti.png" },
        { image: "/assets/team/ux/nelson.png" },
        { image: "/assets/team/ux/leonard.png" },
        { image: "/assets/team/ux/shreeya.png" },
        { image: "/assets/team/ux/richie.png" },
        { image: "/assets/team/ux/nihar.png" },
        { image: "/assets/team/ux/aryan.png" },
        { image: "/assets/team/ux/vivek.png" },
        
      ]
    },
    {
      id: 5,
      name: "Sponsorship Team",
      imgSrc: "/assets/pics/spons.png",
      description: "The Sponsorship Team maintains and develops connections with past, current, and future corporate partners and sponsors for BoilerMake.",
      members: [
        {  image: "/assets/team/spons/daniel.png" },
        {  image: "/assets/team/spons/sarthak.png" },
        { image: "/assets/team/spons/rygel.png" },
        { image: "/assets/team/spons/pratheek.png" },
        { image: "/assets/team/spons/shrinivas.png" },
        { image: "/assets/team/spons/puja.png" },
        { image: "/assets/team/spons/sam.png" },
      ]
    },
    {
      id: 6,
      name: "Outreach",
      imgSrc: "/assets/pics/outreach.png",
      description: "The Outreach team runs all BoilerMake social media and maintains connections across Purdue's campus and other universities.",
      members: [
        {  image: "/assets/team/outreach/nithin.png" },
        {  image: "/assets/team/outreach/anokhi.png" },
        {  image: "/assets/team/outreach/mouli.png" },
        {  image: "/assets/team/outreach/srihita.png" },
        {  image: "/assets/team/outreach/sonal.png" },
        {  image: "/assets/team/outreach/santosh.png" },


      ]
    },
  ];

  const teamClouds: { [key: number]: { left: string; right: string } } = useMemo(() => {
    return teams.reduce((acc, team) => ({
      ...acc,
      [team.id]: {
        left: getRandomCloud(),
        right: getRandomCloud(),
      }
    }), {});
  }, []);

  return (
    <div className="bg-blue-200 flex flex-col items-center h-full py-12 md:py-24 px-4 md:px-24 lg:px-32">
      <Header showNav={false} />
      <h1 className="text-4xl md:text-6xl font-bold mb-8 md:mb-12 font-dosis text-center">About Us</h1>
      <div className="grid grid-flow-row justify-center items-center gap-12 md:gap-20 w-full">
        {teams.map((team) => (
          <div key={team.id} className="flex flex-col md:flex-row items-center w-full gap-6 md:gap-12">
            <div
              className="relative flex items-center justify-center w-60 md:w-80 h-60 md:h-80 lg:w-96 lg:h-96"
              onClick={() => setSelectedTeam(team)}
            >
              {/* Main Team Image */}
              <Image
                src={team.imgSrc}
                alt={team.name}
                className="rounded-3xl shadow-lg cursor-pointer transition-transform duration-300 hover:scale-105"
                layout="fill"
                objectFit="cover"
              />
              {/* Left Cloud */}
              <div className="absolute left-0 bottom-0 transform translate-y-1/2 -translate-x-1/2 w-24 h-24 md:w-32 md:h-32 lg:w-48 lg:h-48">
                <Image
                  src={teamClouds[team.id].left}
                  alt="Cloud Left"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              {/* Right Cloud */}
              <div className="absolute right-0 bottom-0 transform translate-y-1/2 translate-x-1/2 w-24 h-24 md:w-32 md:h-32 lg:w-48 lg:h-48">
                <Image
                  src={teamClouds[team.id].right}
                  alt="Cloud Right"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </div>
            <div className="flex flex-col flex-1 gap-3 md:gap-4 text-center md:text-left">
              <h2 className="text-4xl lg:text-6xl font-bold text-gray-800 font-dosis tracking-wide">
                {team.name}
              </h2>
              <p className="text-sm md:text-base lg:text-lg text-gray-600 leading-relaxed max-w-xl">
                {team.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {selectedTeam && (
        <TeamCarousel
          team={selectedTeam}
          onClose={() => setSelectedTeam(null)}
        />
      )}
    </div>
  );
}