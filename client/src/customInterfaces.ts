interface IDictionary<TValue> {
    [key: string]: TValue
}

interface LooseObject {
    [key: string]: any
}

interface GenericObject<TValue> {
     property: TValue
} 

export { IDictionary, LooseObject, GenericObject } ;