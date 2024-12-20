"use client";

import Header from '@/components/Header';
import Image from 'next/image';
import { useState, useMemo } from 'react';
import TeamCarousel from '@/components/TeamCarousel';

interface TeamMember {
  name: string;
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
        { name: "John Doe", image: "/assets/team/leads/person1.jpg" },
        { name: "Jane Smith", image: "/assets/team/leads/person2.jpg" },
        // Add more team members as needed
      ]
    },
    {
      id: 2,
      name: "Development Team",
      imgSrc: "/assets/pics/dev.png",
      description: "The development team comprises of skilled programmers and technical experts who create and maintain our digital infrastructure. From website development to real-time event management apps, they ensure all technical aspects run seamlessly while providing support to participants during the hackathon.",
      members: [
        { name: "Dev One", image: "/assets/team/dev/person1.jpg" },
        { name: "Dev Two", image: "/assets/team/dev/person2.jpg" },
      ]
    },
    {
      id: 3,
      name: "Design Team",
      imgSrc: "/assets/pics/design.png",
      description: "Our creative design team crafts the visual identity of BoilerMake, ensuring a cohesive and engaging brand experience. They work on everything from marketing materials to event spaces, creating an immersive atmosphere that inspires innovation and creativity.",
      members: [
        { name: "Designer One", image: "/assets/team/design/person1.jpg" },
        { name: "Designer Two", image: "/assets/team/design/person2.jpg" },
      ]
    },
    {
      id: 4,
      name: "User Experience Team",
      imgSrc: "/assets/pics/ux.png",
      description: "The UX team focuses on creating seamless experiences for all hackathon participants. They conduct research, design intuitive interfaces, and optimize every touchpoint of the participant journey, from registration to project submission.",
      members: [
        { name: "UX One", image: "/assets/team/ux/person1.jpg" },
        { name: "UX Two", image: "/assets/team/ux/person2.jpg" },
      ]
    },
    {
      id: 5,
      name: "Sponsorship Team",
      imgSrc: "/assets/pics/spons.png",
      description: "Our sponsorship team builds and maintains valuable relationships with industry partners and sponsors. They secure resources, organize sponsor involvement, and create meaningful opportunities for companies to connect with talented participants.",
      members: [
        { name: "Sarthak Mangla", image: "/assets/team/spons/sarthak.png" },
        { name: "Sarthak Mangla2", image: "/assets/team/spons/sarthak.png" },
        { name: "Sarthak Mangla3", image: "/assets/team/spons/sarthak.png" },
        { name: "Sarthak Mangla4", image: "/assets/team/spons/sarthak.png" },
        { name: "Sarthak Mangla5", image: "/assets/team/spons/sarthak.png" },
        { name: "Sarthak Mangla6", image: "/assets/team/spons/sarthak.png" },
      ]
    },
    {
      id: 6,
      name: "Outreach",
      imgSrc: "/assets/pics/outreach.png",
      description: "The outreach team connects BoilerMake with the broader tech community. They manage social media, organize promotional events, and ensure diverse participation from schools across the country while building lasting relationships with student organizations.",
      members: [
        { name: "Outreach One", image: "/assets/team/outreach/person1.jpg" },
        { name: "Outreach Two", image: "/assets/team/outreach/person2.jpg" },
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