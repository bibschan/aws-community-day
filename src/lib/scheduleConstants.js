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
  { id: 3, name: "Hackathon Work Time" },
];

export const scheduleEvents = [
  // Main Stage Events
  { id: 1, title: "Welcome", startTime: "11:00 AM", endTime: "11:15 AM", stage: 1, location: "Main Stage (Level 2)", talkTitle: "" },
  { id: 2, title: "Keynote - Usman Khalid", startTime: "11:15 AM", endTime: "11:45 AM", stage: 1, location: "Main Stage (Level 2)", talkTitle: "" },
  { id: 3, title: "Break", startTime: "11:45 AM", endTime: "12:00 PM", stage: 1, location: "Main Stage (Level 2)", talkTitle: "" },
  { id: 4, title: "Amit Bajaj", startTime: "12:00 PM", endTime: "12:30 PM", stage: 1, location: "Main Stage (Level 2)", talkTitle: "" },
  { id: 5, title: "Long Break (Hackathon Level 5)", startTime: "12:30 PM", endTime: "1:00 PM", stage: 1, location: "Main Stage (Level 2)", talkTitle: "" },
  { id: 6, title: "Nurdan Almazbekov", startTime: "1:00 PM", endTime: "1:30 PM", stage: 1, location: "Main Stage (Level 2)", talkTitle: "" },
  { id: 7, title: "Break", startTime: "1:30 PM", endTime: "1:45 PM", stage: 1, location: "Main Stage (Level 2)", talkTitle: "" },
  { id: 8, title: "Laura Salinas (AWS)", startTime: "1:45 PM", endTime: "2:15 PM", stage: 1, location: "Main Stage (Level 2)", talkTitle: "" },
  { id: 9, title: "Long Break (Hackathon Level 5)", startTime: "2:15 PM", endTime: "2:45 PM", stage: 1, location: "Main Stage (Level 2)", talkTitle: "" },
  { id: 10, title: "Denis Astahov", startTime: "2:45 PM", endTime: "3:15 PM", stage: 1, location: "Main Stage (Level 2)", talkTitle: "" },
  { id: 11, title: "Break", startTime: "3:15 PM", endTime: "3:30 PM", stage: 1, location: "Main Stage (Level 2)", talkTitle: "" },
  { id: 12, title: "Humberto Gonçalves", startTime: "3:30 PM", endTime: "4:00 PM", stage: 1, location: "Main Stage (Level 2)", talkTitle: "" },
  { id: 13, title: "eSports Hackathon Final Round", startTime: "4:00 PM", endTime: "4:45 PM", stage: 1, location: "Main Stage (Level 2)", talkTitle: "" },
  { id: 14, title: "Closing Remarks", startTime: "4:45 PM", endTime: "5:00 PM", stage: 1, location: "Main Stage (Level 2)", talkTitle: "" },

  // 2nd Stage Events
  { id: 15, title: "Live Stream - Welcome", startTime: "11:00 AM", endTime: "11:15 AM", stage: 2, location: "2nd Stage (Level 5)", talkTitle: "" },
  { id: 16, title: "Live Stream - Keynote (Usman Khalid)", startTime: "11:15 AM", endTime: "11:45 AM", stage: 2, location: "2nd Stage (Level 5)", talkTitle: "" },
  { id: 17, title: "Break", startTime: "11:45 AM", endTime: "12:00 PM", stage: 2, location: "2nd Stage (Level 5)", talkTitle: "" },
  { id: 18, title: "Live Stream - Amit Bajaj", startTime: "12:00 PM", endTime: "12:30 PM", stage: 2, location: "2nd Stage (Level 5)", talkTitle: "" },
  { id: 19, title: "Hackathon Round 1", startTime: "12:30 PM", endTime: "1:00 PM", stage: 2, location: "2nd Stage (Level 5)", talkTitle: "" },
  { id: 20, title: "Live Stream - Nurdan Almazbekov", startTime: "1:00 PM", endTime: "1:30 PM", stage: 2, location: "2nd Stage (Level 5)", talkTitle: "" },
  { id: 21, title: "Break", startTime: "1:30 PM", endTime: "1:45 PM", stage: 2, location: "2nd Stage (Level 5)", talkTitle: "" },
  { id: 22, title: "Live Stream - Laura Salinas (AWS)", startTime: "1:45 PM", endTime: "2:15 PM", stage: 2, location: "2nd Stage (Level 5)", talkTitle: "" },
  { id: 23, title: "Hackathon Round 2", startTime: "2:15 PM", endTime: "2:45 PM", stage: 2, location: "2nd Stage (Level 5)", talkTitle: "" },
  { id: 24, title: "Live Stream - Denis Astahov", startTime: "2:45 PM", endTime: "3:15 PM", stage: 2, location: "2nd Stage (Level 5)", talkTitle: "" },
  { id: 25, title: "Break", startTime: "3:15 PM", endTime: "3:30 PM", stage: 2, location: "2nd Stage (Level 5)", talkTitle: "" },
  { id: 26, title: "Live Stream - Humberto Gonçalves", startTime: "3:30 PM", endTime: "4:00 PM", stage: 2, location: "2nd Stage (Level 5)", talkTitle: "" },
  { id: 27, title: "Live Stream - eSports Hackathon Final Round", startTime: "4:00 PM", endTime: "4:45 PM", stage: 2, location: "2nd Stage (Level 5)", talkTitle: "" },
  { id: 28, title: "Closing Remarks", startTime: "4:45 PM", endTime: "5:00 PM", stage: 2, location: "2nd Stage (Level 5)", talkTitle: "" },

  // Hackathon Work Time
  { id: 29, title: "Hackathon Work Time #1", startTime: "11:00 AM", endTime: "12:30 PM", stage: 3, location: "Hackathon Work Space", talkTitle: "" },
  { id: 30, title: "Hackathon Work Time #2", startTime: "1:00 PM", endTime: "2:15 PM", stage: 3, location: "Hackathon Work Space", talkTitle: "" },
  { id: 31, title: "Hackathon Work Time #3", startTime: "2:45 PM", endTime: "4:00 PM", stage: 3, location: "Hackathon Work Space", talkTitle: "" },

];

// All-day activities
export const allDayActivities = [
  { id: 45, title: "Registration/Pass Check", startTime: "11:00 AM", endTime: "5:00 PM", location: "Level 2/5 Entry Areas", notes: "All day" },
  { id: 47, title: "Networking Chill Zone", startTime: "11:00 AM", endTime: "5:00 PM", location: "Lounge", notes: "All day" },
  { id: 49, title: "All Day Food", startTime: "11:00 AM", endTime: "5:00 PM", location: "Food Court", notes: "Pizza, Water and Pop" }
];
