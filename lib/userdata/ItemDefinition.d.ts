/**
 * The `ItemDefinition` object contains static information about an item. Static information refers to information that is not changed during the course of the game.
 */
interface ItemDefinition {
    /**
     * @returns {string} The name of the item.
     */
    GetName: () => string

    /**
     * @returns {number} The definition ID of the item.
     */
    GetID: () => number

    /**
     * @returns {string} The class of the item.
     */
    GetClass: () => string

    /**
     * @returns {number} The loadout slot that the item should be placed in.
     */
    GetLoadoutSlot: () => number

    /**
     * @returns {boolean} Wether the item is hidden.
     */
    IsHidden: () => boolean

    /**
     * @returns {boolean} Wether the item is a tool (ex: crate keys).
     */
    IsTool: () => boolean

    /**
     * @returns {boolean} Wether the item is a base item, such as a stock weapon.
     */
    IsBaseItem: () => boolean

    /**
     * @returns {boolean} Wether the item is a wearable.
     */
    IsWearable: () => boolean

    /**
     * @returns {string} The name of the item in the language of the current player.
     */
    GetNameTranslated: () => string

    /**
     * @returns {string} The type name of the item.
     */
    GetTypeName: () => string

    /**
     * @returns {string} The description of the item.
     */
    GetDescription: () => string

    /**
     * @returns {string} The icon name of the item.
     */
    GetIconName: () => string

    /**
     * @returns {string} The base item name of the item.
     */
    GetBaseItemName: () => string

    /**
     * Returns a table of static item attributes, where the keys are `AttributeDefinition` objects and the values are the values of the attributes.
     * If the item has no attributes, returns `undefined`.
     * @returns {LuaMap<AttributeDefinition, number | string> | undefined} A table containing `AttributeDefinition` objects as keys and their property values.
     * undocumented
     */
    GetAttributes: () =>
        | LuaMap<AttributeDefinition, number | string>
        | undefined
}
