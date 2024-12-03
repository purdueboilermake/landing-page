"use client";

import Header from '@/components/Header';
import Image from 'next/image';

export default function TeamsPage() {
  const teams = [
    { id: 1, name: "Team Leads", imgSrc: "/assets/pics/leads.png", description: "Responsible for leading the team and making key decisions." },
    { id: 2, name: "Development Team", imgSrc: "/assets/pics/dev.png", description: "Focuses on developing and maintaining the software." },
    { id: 3, name: "Design Team", imgSrc: "/assets/pics/design.png", description: "Creates the visual aspects of the project." },
    { id: 4, name: "User Experience Team", imgSrc: "/assets/pics/ux.png", description: "Ensures the product is user-friendly and intuitive." },
    { id: 5, name: "Sponsorship Team", imgSrc: "/assets/pics/spons.png", description: "Handles sponsorships and partnerships." },
    { id: 6, name: "Outreach", imgSrc: "/assets/pics/outreach.png", description: "Focuses on community engagement and outreach." },
  ];
  return (
    <div id="teams-page" className="flex flex-col items-center justify-center min-h-screen">
      <Header showNav={false} />
      <h1 className="text-6xl font-bold mb-8">Teams Page</h1>
      <div className="flex flex-col items-center gap-16">
        {teams.map((team) => (
          <div key={team.id} className="flex flex-col items-center">
            <h3 className="text-2xl font-semibold mb-4">{team.name}</h3>
            <div className="relative flex items-center justify-center w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
              {/* Main Team Image */}
              <Image
                src={team.imgSrc}
                alt={team.name}
                className="rounded-lg"
                layout="fill"
                objectFit="cover"
              />
              {/* Left Cloud */}
              <div className="absolute left-0 bottom-0 transform translate-y-1/2 -translate-x-1/2 w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48">
                <Image
                  src="/assets/pics/cloud_left.png"
                  alt="Cloud Left"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              {/* Right Cloud */}
              <div className="absolute right-0 bottom-0 transform translate-y-1/2 translate-x-1/2 w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48">
                <Image
                  src="/assets/pics/cloud_right.png"
                  alt="Cloud Right"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </div>
            <p className="mt-4 text-center max-w-xs">{team.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}