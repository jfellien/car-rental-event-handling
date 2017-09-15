module.exports = (context, event, sourceCar) => {
  const rentedCar = sourceCar;

  rentedCar.staus = "rented";

  context.bindings.sinkCar = rentedCar;

  context.done();
}