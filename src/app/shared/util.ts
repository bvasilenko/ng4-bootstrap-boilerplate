export interface ObjectMap<T> {
    [key: string]: T;
}

export function map2array<TInput, TValue>(
    map: ObjectMap<TInput>, 
    valueSelector: (string, TInput) => TValue = ((k: string, t: TInput) => t as any as TValue)) {

    return Object.keys(map).map(key => valueSelector(key, map[key]));
}

export function stringAscendingSorter(a: string, b: string) {
    var x = a.toLowerCase();
    var y = b.toLowerCase();
    return x < y ? -1 : x > y ? 1 : 0;
}