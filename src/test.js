const cron = require('cron');

// Define a new cron job
const job = new cron.CronJob('* * * * * *', function () {
  console.log('Running cron job');
});

// Start the cron job
job.start();

// Check if the cron job is running
if (cron.job.includes(job)) {
  console.log('Cron job is running');
} else {
  console.log('Cron job is not running');
}
