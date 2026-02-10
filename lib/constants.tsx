// lib/constants.ts

export type EventItem = {
    title: string;
    image: string;
    slug: string;
    location: string;
    date: string;
    time: string;
};

export const events: EventItem[] = [
    {
        title: "Google I/O 2026",
        slug: "google-io-2026",
        image: "/images/event1.png",
        location: "Mountain View, CA, USA",
        date: "May 14–15, 2026",
        time: "9:00 AM PST",
    },
    {
        title: "WWDC 2026",
        slug: "wwdc-2026",
        image: "/images/event2.png",
        location: "Cupertino, CA, USA",
        date: "June 8–12, 2026",
        time: "10:00 AM PST",
    },
    {
        title: "React Summit Amsterdam",
        slug: "react-summit-amsterdam-2026",
        image: "/images/event3.png",
        location: "Amsterdam, Netherlands",
        date: "April 17, 2026",
        time: "9:30 AM CET",
    },
    {
        title: "GitHub Universe",
        slug: "github-universe-2026",
        image: "/images/event4.png",
        location: "San Francisco, CA, USA",
        date: "October 21–22, 2026",
        time: "10:00 AM PST",
    },
    {
        title: "Techpoint Build Lagos",
        slug: "techpoint-build-lagos-2026",
        image: "/images/event5.png",
        location: "Lagos, Nigeria",
        date: "November 14, 2026",
        time: "9:00 AM WAT",
    },
    {
        title: "ETHGlobal Hackathon",
        slug: "ethglobal-hackathon-2026",
        image: "/images/event6.png",
        location: "Berlin, Germany",
        date: "July 5–7, 2026",
        time: "8:00 AM CET",
    },
];
