module.exports = (context, event, sourceCar) => {

  context.log.info(`EVENT: ${ JSON.stringify(event) }`);
  context.log.info(`SOURCE CAR: ${ JSON.stringify(sourceCar) }`)
  
  sourceCar.staus = "rented";

  context.bindings.sinkCar = sourceCar;

  context.done();
}