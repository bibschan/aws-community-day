export const timeSlots = [
  "11:00 AM",
  "11:15 AM",
  "11:45 AM",
  "12:00 PM",
  "12:30 PM",
  "1:00 PM",
  "1:30 PM",
  "1:45 PM",
  "2:15 PM",
  "2:45 PM",
  "3:15 PM",
  "3:30 PM",
  "4:00 PM",
  "4:45 PM",
  "5:00 PM"
];

export const stages = [
  { id: 1, name: "Main Stage" },
  { id: 2, name: "2nd Stage (Level 5)" },
  { id: 3, name: "Workshop Room" },
  { id: 4, name: "Breakout Room 1" },
  { id: 5, name: "Breakout Room 2" }
];

export const scheduleEvents = [
  // Main Stage Events
  { id: 1, title: "Welcome", startTime: "11:00 AM", endTime: "11:15 AM", stage: 1, location: "Main Stage (Level 2)", notes: "2 cordless mics, camera live feed to Level 5" },
  { id: 2, title: "Keynote Talk (AWS)", startTime: "11:15 AM", endTime: "11:45 AM", stage: 1, location: "Main Stage (Level 2)", notes: "2 cordless mics, camera live feed to Level 5" },
  { id: 3, title: "Break", startTime: "11:45 AM", endTime: "12:00 PM", stage: 1, location: "Main Stage (Level 2)", notes: "" },
  { id: 4, title: "Talk #2", startTime: "12:00 PM", endTime: "12:30 PM", stage: 1, location: "Main Stage (Level 2)", notes: "2 cordless mics, camera live feed to Level 5" },
  { id: 5, title: "Extra Break", startTime: "12:30 PM", endTime: "1:00 PM", stage: 1, location: "Main Stage (Level 2)", notes: "Lunch" },
  { id: 6, title: "Talk #3", startTime: "1:00 PM", endTime: "1:30 PM", stage: 1, location: "Main Stage (Level 2)", notes: "2 cordless mics, camera live feed to Level 5" },
  { id: 7, title: "Break", startTime: "1:30 PM", endTime: "1:45 PM", stage: 1, location: "Main Stage (Level 2)", notes: "" },
  { id: 8, title: "Talk #4", startTime: "1:45 PM", endTime: "2:15 PM", stage: 1, location: "Main Stage (Level 2)", notes: "2 cordless mics, camera live feed to Level 5" },
  { id: 9, title: "Extra Break (Hackathon Round 2)", startTime: "2:15 PM", endTime: "2:45 PM", stage: 1, location: "Main Stage (Level 2)", notes: "" },
  { id: 10, title: "Panel", startTime: "2:45 PM", endTime: "3:15 PM", stage: 1, location: "Main Stage (Level 2)", notes: "5 cordless mics, camera live feed to Level 5" },
  { id: 11, title: "Break", startTime: "3:15 PM", endTime: "3:30 PM", stage: 1, location: "Main Stage (Level 2)", notes: "" },
  { id: 12, title: "Talk #5", startTime: "3:30 PM", endTime: "4:00 PM", stage: 1, location: "Main Stage (Level 2)", notes: "2 cordless mics, camera live feed to Level 5" },
  { id: 13, title: "eSports Hackathon Final Round", startTime: "4:00 PM", endTime: "4:45 PM", stage: 1, location: "Main Stage (Level 2)", notes: "2 cordless mics, camera live feed to Level 5" },
  { id: 14, title: "Closing Remarks", startTime: "4:45 PM", endTime: "5:00 PM", stage: 1, location: "Main Stage (Level 2)", notes: "2 cordless mics, camera live feed to Level 5" },

  // 2nd Stage Events
  { id: 15, title: "Live Stream", startTime: "11:00 AM", endTime: "11:15 AM", stage: 2, location: "2nd Stage (Level 5)", notes: "2 cordless mics, camera live feed to Level 5" },
  { id: 16, title: "Live Stream", startTime: "11:15 AM", endTime: "11:45 AM", stage: 2, location: "2nd Stage (Level 5)", notes: "Streamed from level 2" },
  { id: 17, title: "Break", startTime: "11:45 AM", endTime: "12:00 PM", stage: 2, location: "2nd Stage (Level 5)", notes: "" },
  { id: 18, title: "Live Stream", startTime: "12:00 PM", endTime: "12:30 PM", stage: 2, location: "2nd Stage (Level 5)", notes: "Streamed from level 2" },
  { id: 19, title: "Hackathon Round 1", startTime: "12:30 PM", endTime: "1:00 PM", stage: 2, location: "2nd Stage (Level 5)", notes: "" },
  { id: 20, title: "Live Stream", startTime: "1:00 PM", endTime: "1:30 PM", stage: 2, location: "2nd Stage (Level 5)", notes: "Streamed from level 2" },
  { id: 21, title: "Break", startTime: "1:30 PM", endTime: "1:45 PM", stage: 2, location: "2nd Stage (Level 5)", notes: "" },
  { id: 22, title: "Live Stream", startTime: "1:45 PM", endTime: "2:15 PM", stage: 2, location: "2nd Stage (Level 5)", notes: "Streamed from level 2" },
  { id: 23, title: "Hackathon Round 2", startTime: "2:15 PM", endTime: "2:45 PM", stage: 2, location: "2nd Stage (Level 5)", notes: "" },
  { id: 24, title: "Live Stream", startTime: "2:45 PM", endTime: "3:15 PM", stage: 2, location: "2nd Stage (Level 5)", notes: "Streamed from level 2" },
  { id: 25, title: "Break", startTime: "3:15 PM", endTime: "3:30 PM", stage: 2, location: "2nd Stage (Level 5)", notes: "" },
  { id: 26, title: "Live Stream", startTime: "3:30 PM", endTime: "4:00 PM", stage: 2, location: "2nd Stage (Level 5)", notes: "Streamed from level 2" },
  { id: 27, title: "Live Stream", startTime: "4:00 PM", endTime: "4:45 PM", stage: 2, location: "2nd Stage (Level 5)", notes: "Streamed from level 2" },
  { id: 28, title: "Closing Remarks", startTime: "4:45 PM", endTime: "5:00 PM", stage: 2, location: "2nd Stage (Level 5)", notes: "Streamed from level 2" },

  // Workshop Room Events
  { id: 29, title: "AWS Builder Workshop #1", startTime: "12:00 PM", endTime: "12:45 PM", stage: 3, location: "Large Workshop Room", notes: "" },
  { id: 30, title: "AWS Builder Workshop #2", startTime: "1:00 PM", endTime: "1:45 PM", stage: 3, location: "Large Workshop Room", notes: "" },
  { id: 31, title: "AWS Builder Workshop #3", startTime: "2:00 PM", endTime: "2:45 PM", stage: 3, location: "Large Workshop Room", notes: "" },
  { id: 32, title: "AWS Builder Workshop #4", startTime: "3:00 PM", endTime: "3:45 PM", stage: 3, location: "Large Workshop Room", notes: "" },

  // Breakout Room 1 Events
  { id: 33, title: "Platinum Talk #1", startTime: "12:00 PM", endTime: "12:30 PM", stage: 4, location: "Breakout Room 1 (Level 5)", notes: "" },
  { id: 34, title: "Community Talk #2", startTime: "1:00 PM", endTime: "1:30 PM", stage: 4, location: "Breakout Room 1 (Level 5)", notes: "" },
  { id: 35, title: "Platinum Talk #3", startTime: "1:30 PM", endTime: "2:00 PM", stage: 4, location: "Breakout Room 1 (Level 5)", notes: "" },
  { id: 36, title: "Community Talk #4", startTime: "2:45 PM", endTime: "3:15 PM", stage: 4, location: "Breakout Room 1 (Level 5)", notes: "" },
  { id: 37, title: "Platinum Talk #5", startTime: "3:30 PM", endTime: "4:00 PM", stage: 4, location: "Breakout Room 1 (Level 5)", notes: "" },
  { id: 38, title: "Community Talk #6", startTime: "4:00 PM", endTime: "4:30 PM", stage: 4, location: "Breakout Room 1 (Level 5)", notes: "" },

  // Breakout Room 2 Events
  { id: 39, title: "Platinum Talk/Workshop #1", startTime: "12:00 PM", endTime: "12:30 PM", stage: 5, location: "Breakout Room 2 (Level 5)", notes: "" },
  { id: 40, title: "Community Talk/Workshop #2", startTime: "1:00 PM", endTime: "1:30 PM", stage: 5, location: "Breakout Room 2 (Level 5)", notes: "" },
  { id: 41, title: "Platinum Talk/Workshop #3", startTime: "1:30 PM", endTime: "2:00 PM", stage: 5, location: "Breakout Room 2 (Level 5)", notes: "" },
  { id: 42, title: "Community Talk/Workshop #4", startTime: "2:45 PM", endTime: "3:15 PM", stage: 5, location: "Breakout Room 2 (Level 5)", notes: "" },
  { id: 43, title: "Platinum Talk/Workshop #5", startTime: "3:30 PM", endTime: "4:00 PM", stage: 5, location: "Breakout Room 2 (Level 5)", notes: "" },
  { id: 44, title: "Community Talk/Workshop #6", startTime: "4:00 PM", endTime: "4:30 PM", stage: 5, location: "Breakout Room 2 (Level 5)", notes: "" }
];

// All-day activities
export const allDayActivities = [
  { id: 45, title: "Registration/Pass Check", startTime: "11:00 AM", endTime: "5:00 PM", location: "Level 2/5 Entry Areas", notes: "All day" },
  { id: 46, title: "Community/Sponsor Booths", startTime: "11:00 AM", endTime: "5:00 PM", location: "Hallways", notes: "All day" },
  { id: 47, title: "Networking Chill Zone", startTime: "11:00 AM", endTime: "5:00 PM", location: "Lounge", notes: "All day" },
  { id: 48, title: "Attendee Interview Clips", startTime: "11:45 AM", endTime: "4:45 PM", location: "Attendee Interview Room", notes: "30-second videos throughout the day" }
];
