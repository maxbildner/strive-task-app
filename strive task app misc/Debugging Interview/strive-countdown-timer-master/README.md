# Strive Countdown Timer Exercise

This project is meant to be used as an initial screen for engineering candidates at [Strive Talent](https://www.strivetalent.com).  It contains a buggy countdown timer implementation in JavaScript.  The candidate's goal is to identify, describe, and fix the bug.

## Installing and Running the Project

You can install the project locally with

```
npm install strive-countdown-timer
```

You can run the timer via `npm start` from inside the project directory.  This should display a clock ticking down from 185 seconds.  You can also supply an initial time to the timer (in seconds) via the command line, e.g.,

```
npm start 20
```

will start a timer counting down from 20 seconds.

## Module Location

By default, `npm install strive-countdown-timer` will install `strive-countdown-timer` in the the `node_modules` directory in the current working directory.  If you install it globally, however, it's not always obvious where the package gets installed.  To find the global `node_modules` directory run the following command:

```
npm root --global
```

## Identifying, Describing, and Fixing the Bug

1. Identify the bug

   Run the program with `npm start`.  The bug should be visible within a few seconds.  Watch closely, because the bug only appears for about a second.

1. Describe the bug from the user's perspective

   What is happening?  What should happen instead?

1. Form hypotheses about the potential cause

   Without looking at the code, can you form any hypotheses about what might be broken?

1. Find the bug

   Where in the code is the bug likely to be located?  Find it.  Add whatever debugging statements you think are necessary.  Feel free to use the node repl, documentation, StackOverflow, etc.

1. Describe the bug from a technical perspective

   Now that you've found the bug, what is happening, technically?  What was the original author of this code mistaken about?

1. Fix the bug

   How would you fix the bug?  If you have time, implement the fix and verify that it works.
