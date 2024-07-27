import Car from './10-car.js';

/**
 * EVCar class that extends the Car class
 */
class EVCar extends Car {
  /**
   * Constructor for EVCar
   * @param {String} brand - The brand of the car
   * @param {String} motor - The motor type of the car
   * @param {String} color - The color of the car
   * @param {String} range - The range of the car
   */
  constructor(brand, motor, color, range) {
    super();
    this._brand = brand;
    this._motor = motor;
    this._color = color;
    this._range = range;
  }

  /**
   * Clone the car, but return a Car instance instead of EVCar
   * @return {Car} A new Car instance with the same attributes
   */
  cloneCar() {
    return new Car();
  }
}

export default EVCar;
