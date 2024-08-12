import React from "react";
import { TeamMap, TeamMobileMap } from "../../../public/team/team-svg-map";

export default function ResponsiveImageMap() {
  const teamMap = TeamMap();
  const teamMobileMap = TeamMobileMap();
  return (
    <section className="w-full py-12 md:py-20" id="team">
      <div className="container px-4 md:px-6 m-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-[#0E6A65] text-white px-3 py-1 text-sm">
              Team
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Who's Behind the Event
            </h2>
            <p className="max-w-[900px] m-auto pb-10 text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Putting an event together can be a daunting task, but with the
              right people, anything is possible! The 2024 team is excited to
              welcome you to AWS Day!
            </p>
            <div className="w-full hidden lg:block">{teamMap}</div>
            <div className="w-full lg:hidden">{teamMobileMap}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
