import {IS_DEV} from "@/constants";

export default class Logger {

    static debug(...log: any[]) {
        // if (IS_DEV) {
        console.log(...log)
        // }
    }

}