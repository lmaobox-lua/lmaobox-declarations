/** @noSelfInFile **/
/**
 * The `itemschema` library provides functions for retrieving information about items.
 */
declare namespace itemschema {
    /**
     * @param id - The ID of the item to get the definition for.
     * @returns The `ItemDefinition` object or `undefined` if not found.
     */
    function GetItemDefinitionByID(id: number): ItemDefinition | undefined

    /**
     * @param name - The name of the item to get the definition for.
     * @returns The `ItemDefinition` object or `undefined` if not found.
     */
    function GetItemDefinitionByName(name: string): ItemDefinition | undefined

    /**
     * Calls the specified function for each item definition, passing in the `ItemDefinition` object as an argument.
     * @param callback - The function to call for each item definition.
     */
    function Enumerate(callback: (itemDefinition: ItemDefinition) => void): void

    /**
     * @param name - The name of the attribute to get the definition for.
     * @returns The `AttributeDefinition` object or `undefined` if not found.
     */
    function GetAttributeDefinitionByName(
        name: string
    ): AttributeDefinition | undefined

    /**
     * Calls the specified function for each attribute definition, passing in the `AttributeDefinition` object as an argument.
     * @param callback - The function to call for each attribute definition.
     */
    function EnumerateAttributes(
        callback: (attributeDefinition: AttributeDefinition) => void
    ): void
}
