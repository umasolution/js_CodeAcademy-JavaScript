# Race Day

The task is to write a program that will register runners for the race and give them instructions on race day.

As a timeline, registration would look like this:
![image](https://user-images.githubusercontent.com/73076876/134794323-5cdcc890-11df-4f39-8d52-fbe8b1b61f0c.png)

Here’s how registration works. There are adult runners (over 18 years of age) and youth runners (under 18 years of age). They can register early or late. Runners are assigned a race number and start time based on their age and registration.

Race number:
  Early adults receive a race number at or above 1000.
  All others receive a number below 1000.

Start time:
  Adult registrants run at 9:30 am or 11:00 am.
  Early adults run at 9:30 am.
  Late adults run at 11:00 am.
  Youth registrants run at 12:30 pm (regardless of registration).
  
But didn’t plan for runners that are exactly 18! This is handles at the end of the project.
