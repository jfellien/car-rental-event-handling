const request = require('request-promise');

module.exports = (context, event) => {

  let message = 'Hello Azure Meetup';

  if(event.eventName === 'car rented') { message = `Car with id: ${ event.carId } was rented` }

  const slackOptions = {
    method: 'POST',
    uri: process.env["SLACK_URI"],
    body: {
      icon_emoji: ':car:',
      text : message
    },
    json: true

  }

  return request(slackOptions);
}