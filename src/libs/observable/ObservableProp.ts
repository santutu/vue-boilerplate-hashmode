import EventHandler from "@/libs/observable/EventHandler";

export default class ObservableProp<Sender, T> {

    private eventHandler: EventHandler<Sender, T> = new EventHandler<Sender, T>()


    constructor(private sender: Sender, private value: T) {

    }


    get() {
        return this.value
    }

    set(value: T) {
        this.value = value
        this.eventHandler.fire(this.sender, this.value)
    }

    off(cb: (sender: Sender, params: T) => void) {
        this.eventHandler.off(cb)
    }

    on(cb: (sender: Sender, params: T) => void) {
        this.eventHandler.on(cb)
    }

    allOff() {
        this.eventHandler.allOff()
    }


}

