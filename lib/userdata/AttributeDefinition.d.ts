/**
 * The `AttributeDefinition` object contains information about an attribute in TF2.
 */
interface AttributeDefinition {
    /**
     * @returns The name of the attribute.
     */
    GetName: () => string

    /**
     * @returns The ID of the attribute.
     */
    GetID: () => number

    /**
     * @returns `true` if the attribute is stored as an integer, false if it is stored as a float.
     */
    IsStoredAsInteger: () => boolean
}
