
class EventEmit {
    constructor() {
        this.events = {};
    }

    on(eventName, listener) {
        if (!this.events[eventName]) {
            this.events[eventName] = [];
        }
        this.events[eventName].push(listener);
    }

    emit(eventName, ...args) {
        const listeners = this.events[eventName] || [];
        listeners.forEach(listener => listener(...args));
    }
}

module.exports = { EventEmit };