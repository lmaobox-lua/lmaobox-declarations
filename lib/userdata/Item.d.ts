/**
 * Represents an item in a player's inventory.
 */
interface Item {
    /**
     * There are instances where an item in the inventory is not valid, and you should account for them.
     * @returns Wether the item is valid.
     */
    IsValid: () => boolean | undefined

    /**
     * @returns The name of the item.
     */
    GetName: () => string

    /**
     * @returns The item's definition index.
     */
    GetDefIndex: () => number

    /**
     * @returns The ItemDefinition object.
     */
    GetItemDefinition: () => ItemDefinition

    /**
     * @returns The item's level.
     */
    GetLevel: () => number

    /**
     * This is a unique 64bit ID for the item that identifies it across the economy.
     * @returns The item's ID.
     */
    GetItemID: () => number

    /**
     * @returns The item's position in the inventory.
     */
    GetInventoryPosition: () => number

    /**
     * @param classid - The class ID to check.
     * @returns Wether the item is equipped for the given class.
     */
    IsEquippedForClass: (classid: number) => boolean

    /**
     * Some items may not have it, in which case, result is -1.
     * @returns The item's backpack image texture ID.
     */
    GetImageTextureID: () => number

    /**
     * Returns a table of static item attributes,
     * where the keys are `AttributeDefinition` objects and the values are the values of the attributes.
     * If the item has no attributes, returns `undefined`.
     * @returns A table containing `AttributeDefinition` objects as keys and their property values.
     */
    GetAttributes: () =>
        | LuaMap<AttributeDefinition, number | string>
        | undefined

    /**
     * Sets the value of the given attribute by its definition.
     * The value must be the correct type for the given attribute definition.
     * @param attrDef - The attribute definition to set the value of.
     * @param value - The value to set the attribute to.
     */
    SetAttribute: ((
        attrDef: AttributeDefinition,
        value: number | string
    ) => void) &
        ((attrName: string, value: number | string) => void)

    /**
     * @param attrDef - The attribute definition to remove.
     */
    RemoveAttribute: ((attrDef: AttributeDefinition) => void) &
        ((attrName: string) => void)
}
