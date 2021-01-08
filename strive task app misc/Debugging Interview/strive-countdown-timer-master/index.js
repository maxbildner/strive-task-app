const CountdownTimer = require('./countdown-timer');

const startTime = process.argv.length >= 3 ? process.argv[2] : 185;

const timer = new CountdownTimer({
  startTime: startTime,
  onFinish: () => {
    console.log('All done!');
  }
});

console.log(`Starting timer for ${startTime} seconds.`);

timer.start();
