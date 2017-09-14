module.exports = (context, event) => {

  const eventType = event.eventName;
  delete event.eventName;

  context.bindings.eventBags = {
    timestamp: Date.now.toISOString(),
    type : eventType,
    eventData : event
  };
  // Slack notify
  
  context.done();
}