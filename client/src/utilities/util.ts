import { TypedHash } from '../collections/collections';

export class Util {
        /**
     * Provides functionality to extend the given object by doing a shallow copy
     *
     * @param target The object to which properties will be copied
     * @param source The source object from which properties will be copied
     * @param noOverwrite If true existing properties on the target are not overwritten from the source
     *
     */
    public static extend(target: any, source: TypedHash<any>, noOverwrite = false): any {

        if (source === null || typeof source === "undefined") {
            return target;
        }

        // ensure we don't overwrite things we don't want overwritten
        const check: (o: any, i: string) => Boolean = noOverwrite ? (o, i) => !(i in o) : () => true;

        return Object.getOwnPropertyNames(source)
            .filter((v: string) => check(target, v))
            .reduce((t: any, v: string) => {
                t[v] = source[v];
                return t;
            }, target);
    }
}
