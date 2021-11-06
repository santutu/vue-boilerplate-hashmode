import {serviceProviderClasses} from "@/system/config/app";
import {container} from "@/system/container";


export default class Bootstrap {

    async boot() {
        // const promises: any[] = []
        for (const serviceProviderClass of serviceProviderClasses) {
            const serviceProvider = container.get(serviceProviderClass)
            await serviceProvider.register()
            // promises.push();
        }
        // await Promise.all(promises)
    }
}

