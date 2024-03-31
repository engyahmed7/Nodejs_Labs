
class FlightReservation {
    constructor(seatNum, flightNum, departureAirport, arrivalAirport, travellingDate) {
        this.seatNum = seatNum;
        this.flightNum = flightNum;
        this.departureAirport = departureAirport;
        this.arrivalAirport = arrivalAirport;
        this.travellingDate = travellingDate;
    }

    displayInfo() {
        console.log(`Seat Number: ${this.seatNum}`);
        console.log(`Flight Number: ${this.flightNum}`);
        console.log(`Departure Airport: ${this.departureAirport}`);
        console.log(`Arrival Airport: ${this.arrivalAirport}`);
        console.log(`Travelling Date: ${this.travellingDate}`);
    }

    getSeatNum() {
        return this.seatNum;
    }

    getFlightNum() {
        return this.flightNum;
    }

    getDepartureAirport() {
        return this.departureAirport;
    }

    getArrivalAirport() {
        return this.arrivalAirport;
    }

    getTravellingDate() {
        return this.travellingDate;
    }

    updateInfo(seatNum, flightNum, departureAirport, arrivalAirport, travellingDate) {
        this.seatNum = seatNum;
        this.flightNum = flightNum;
        this.departureAirport = departureAirport;
        this.arrivalAirport = arrivalAirport;
        this.travellingDate = travellingDate;
    }
}

module.exports = {FlightReservation};

