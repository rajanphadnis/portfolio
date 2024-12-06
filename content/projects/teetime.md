+++
title = "Golf College Scheduler"
description = "If Google Calendar had a midlife crisis"
weight = 3
extra = {"link" = "https://github.com/rajanphadnis/pgcc", "link_name" = "GitHub", "img" = "/assets/teetime/teetime.png", "toc" = false}
+++

## Goal

A [Golf College](https://golfcollege.edu/) wanted a quick and easy way to manage and schedule tee times and instructor's lessons for each of their students, instructors, and managers.

Naturally, the students couldn't have access to the instructor's version of this tool, and instructors/managers needed a more robust toolset to manage events and collect rosters. Instructors also needed an easy way to export rosters for a day's work at the pro shop on receipt paper - allowing them to go tech-free during lessons.

In terms of features, the requirements were pretty simple: just make it fast, easily accessible to the College's students, and (crucially) don't allow gaps between lessons during an instructor's workday.

### Gapless Lesson Scheduling

Instructors didn't want to have multiple lesson availabilities throughout the day with gaps where they weren't doing anything. This makes sense from both a financial and time-efficiency perspective (it'd be pretty annoying to have an hour lesson scheduled at 9am and 11am - meaning an instructor would have to sit around from 10am-11am with nothing to do).

## Result

I wrote two separate webapps (an [Admin Console](https://admin.pgccteetimes.com/) and a [Scheduler](https://pgccteetimes.com/) webapp), neither of which used any framework or any webcomponents - just raw javascript and a ton of DOM calls (I did this right before my freshman year of college and hadn't really done any dev work before).

Data is instantly updated across all open webapps when changed in Firestore (each webapp attaches a listener to receive realtime updates and re-render whena change is detected).

Authentication is handled by Firebase Auth, and all database writes must be authenticated (also enforced at the database level, not just client-side).

### Scheduler Webapp

Here's what the scheduler webapp looks like:

![image alt ><](/assets/teetime/teetime.png)

#### Gapless Lesson Scheduling

This was implemented solely on the client-side to improve site performance and reduce developer overhead.

The algorithm is relatively simple: for each golf course, for each instructor that has lessons on a given day, only allow registering for their first lesson that isn't full, while sorting lessons by time. Apply this to every instructor for every day that's visible on the calendar

Code implemented [here](https://github.com/rajanphadnis/pgcc/blob/98af8b9974fb68d82534ca2ed6b642e8045a5e99/main/public/scripts/lessons.js#L489)

![image alt ><](/assets/teetime/teetimelessons.png)

### Admin Webapp

Aside from being able to manage individual events (both lessons and tee times), instructors are also able to check rosters for a day (and print to receipt paper):

![image alt ><](/assets/teetime/teetimeroster.png)

Of course, the admin webapp supports bulk tee time and lesson management (just to make it easier for the instructors and managers to input their availibility), and has a relatively basic permissions management system. All sites are also tagged for analytics via Google Analytics - insights available to instructors and managers through the admin console.
