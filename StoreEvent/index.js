module.exports = (context, event) => {

  const eventType = event.eventName;
  const now = new Date.toISOString();
  delete event.eventName;

  context.bindings.eventBags = {
    timestamp: now,
    type : eventType,
    eventData : event
  };
    
  context.done();
}