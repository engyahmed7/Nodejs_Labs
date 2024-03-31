const {FlightReservation}  = require('./flightReservation');

const reservation = new FlightReservation('A1', 'ABC123', 'JFK', 'LAX', '2024-04-01');

reservation.displayInfo();
console.log('------------------------------------------------------------');

console.log('Before Update:');
console.log('Seat Number:', reservation.getSeatNum());
console.log('Flight Number:', reservation.getFlightNum());
console.log('Departure Airport:', reservation.getDepartureAirport());
console.log('Arrival Airport:', reservation.getArrivalAirport());
console.log('Travelling Date:', reservation.getTravellingDate());
console.log('------------------------------------------------------------');

reservation.updateInfo('B2', 'XYZ456', 'LAX', 'JFK', '2024-04-02');

console.log('After Update:');
console.log('Seat Number:', reservation.getSeatNum());
console.log('Flight Number:', reservation.getFlightNum());
console.log('Departure Airport:', reservation.getDepartureAirport());
console.log('Arrival Airport:', reservation.getArrivalAirport());
console.log('Travelling Date:', reservation.getTravellingDate());
console.log('------------------------------------------------------------');
