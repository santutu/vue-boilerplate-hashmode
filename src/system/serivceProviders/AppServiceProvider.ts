import BaseServiceProvider from "@/system/serivceProviders/BaseServiceProvider";
import Logger from "@/system/Logger";
import {injectable} from "inversify";

@injectable()
export default class AppServiceProvider extends BaseServiceProvider {
    async register() {
        Logger.debug("AppServiceProvider")
    }

}