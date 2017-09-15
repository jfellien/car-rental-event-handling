const request = require('request-promise');

module.exports = (context, event) => {

  let message = event.eventName;

  if(event.eventName === 'car rented') { message = `Car with id: ${ event.carId } was rented` }
  else if(event.eventName === 'journey prepared') { message = `Journey ${ event.journeyId} prepared for CarId ${ event.carId }`}

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