import { bis_systemsettingtype } from '../../dataverse-gen/enums/bis_systemsettingtype'

export class ConfigurationReader {
    public static getString(key: string, defaultValue: string, storage: Storage): Promise<string> {
        return new Promise(resolve => {
            ConfigurationReader.get(key, storage).then(result => {
                if (result !== null && result.bis_value !== null)
                    resolve(result.bis_value);
                else
                    resolve(defaultValue);
            });
        });
    }

    public static async getBool(key: string, defaultValue: boolean, storage: Storage): Promise<boolean> {
        return new Promise(resolve => {
            ConfigurationReader.get(key, storage).then(result => {
                let ret = defaultValue;
                if (result !== null && result.bis_value !== null) {
                    const val = result.bis_value.toLowerCase()
                    if (val === "true") ret = true;
                    else if (val === "false") ret = false
                }
                resolve(ret);
            });
        });
    }

    public static async getNumber(key: string, defaultValue: number, storage: Storage): Promise<number> {
        return new Promise(resolve => {
            ConfigurationReader.get(key, storage).then(result => {
                let ret = defaultValue;
                if (result !== null && result.bis_value !== null) {
                    const val = Number(result.bis_value);
                    if (!Number.isNaN(val)) ret = val;
                }
                resolve(ret);
            });
        });
    }

    public static async getList(key: string, defaultValue: Array<string>, storage: Storage): Promise<Array<string>> {
        return new Promise(resolve => {
            ConfigurationReader.get(key, storage).then(result => {
                let ret = defaultValue;
                if (result !== null && result.bis_value !== null) {
                    const separator: string = ',';
                    ret = result.bis_value.split(separator);
                }
                resolve(ret);
            });
        });
    }

    public static async getObject(key: string, defaultValue: any, storage: Storage): Promise<any> { // eslint-disable-line
        return new Promise(resolve => {
            ConfigurationReader.get(key, storage).then(result => {
                if (result !== null && result.mwo_value !== null) {
                    try {
                        if (result.bis_type === bis_systemsettingtype.JSON || result.bis_value.startsWith("{") || result.bis_value.startsWith("[")) 
                            resolve(JSON.parse(result.bis_value));

                        else if (result.bis_type === bis_systemsettingtype.XML || result.bis_value.StartsWith("<"))
                            resolve(new window.DOMParser().parseFromString(result.bis_value, "text/xml").documentElement)

                        else resolve(defaultValue);
                    } catch (error) {
                        console.warn("Failed to generate Object: " + error);
                        resolve(defaultValue);
                    }
                }
                else resolve(defaultValue);
            });
        });
    }

    private static get(key: string, storage: Storage): Promise<any> {
        return new Promise(resolve => {
            const cache = this.getFromCache(key, storage);
            if (cache) resolve(cache);

            else Xrm.WebApi.retrieveMultipleRecords("bis_systemsettings", "?$select=bis_value,bis_systemsettingtype&$filter=bis_key eq '" + key + "'").then(result => {
                if (result.entities && result.entities.length > 0) {
                    this.saveToCache(key, result.entities[0], storage);
                    resolve(result.entities[0]);
                }
                else
                    resolve(null);
            });
        });
    }

    private static  getFromCache(key: string, storage: Storage): any {
        if (storage && storage.getItem("bbis_systemsettings_" + key))
            return JSON.parse(storage.getItem("bis_systemsettings_" + key));
        else return null;
    }

    private static  saveToCache(key: string, value: any, storage: Storage): void {
        if (storage) storage.setItem("bis_systemsettings_" + key, JSON.stringify(value));
    }
}