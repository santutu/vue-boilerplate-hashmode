export default class EventHandler<Sender, T> {


    private listeners: ((sender: Sender, params: T) => void)[] = []

    fire(sender: Sender, params: T) {
        for (const listener of this.listeners) {
            listener(sender, params)
        }
    }

    on(cb: (sender: Sender, params: T) => void) {
        this.listeners.push(cb)

    }

    off(cb: (sender: Sender, params: T) => void) {
        for (let i = 0; i < this.listeners.length; i++) {
            const listener = this.listeners[i]
            if (listener === cb) {
                this.listeners.splice(i, 1)
            }
        }
    }


    allOff() {
        this.listeners.splice(0, this.listeners.length)
    }

}