const { RtmClient, CLIENT_EVENTS } = require('@slack/client');

// An access token (from your Slack app or custom integration - usually xoxb)
const token = process.env.SLACK_TOKEN;

// Cache of data
const appData = {};

// Initialize the RTM client with the recommended settings. Using the defaults for these
// settings is deprecated.
const rtm = new RtmClient(token, {
  dataStore: false,
  useRtmConnect: true,
});

// The client will emit an RTM.AUTHENTICATED event on when the connection data is avaiable
// (before the connection is open)
rtm.on(CLIENT_EVENTS.RTM.AUTHENTICATED, (connectData) => {
  // Cache the data necessary for this app in memory
  appData.selfId = connectData.self.id;
  console.log(`Logged in as ${appData.selfId} of team ${connectData.team.id}`);
});

// The client will emit an RTM.RTM_CONNECTION_OPEN the connection is ready for
// sending and recieving messages
rtm.on(CLIENT_EVENTS.RTM.RTM_CONNECTION_OPEN, () => {
  console.log(`Ready`);
  console.log(arguments);
});

// Start the connecting process
rtm.start();


// const { WebClient } = require('@slack/client');
//
// // An access token (from your Slack app or custom integration - xoxp, xoxb, or xoxa)
// const token = process.env.SLACK_TOKEN;
//
// const web = new WebClient(token);
//
// // The first argument can be a channel ID, a DM ID, a MPDM ID, or a group ID
// const channelId = 'standupbot-testroom';
//
// // See: https://api.slack.com/methods/chat.postMessage
// web.chat.postMessage(channelId, "Hey, i'm dockerized now too")
//   .then((res) => {
//     // `res` contains information about the posted message
//     console.log('Message sent: ', res.ts);
//   })
//   .catch(console.error);


// WEBHOOK can use with postman
// POST: https://hooks.slack.com/services/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
