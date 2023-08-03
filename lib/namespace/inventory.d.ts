/** @noSelfInFile **/
/**
 * The `inventory` library provides functions to access the player's inventory and the items in it. Every item is of type Item.
 */
declare namespace inventory {
    /**
     * @param callback - The callback function to call for each item. The item is passed as the first argument and is of type Item.
     */
    function Enumerate(callback: (item: Item) => void): void

    /**
     * @param position - The position of the item in the inventory.
     * @returns The item at the given position in the inventory.
     */
    function GetItemByPosition(position: number): Item

    /**
     * @returns The maximum number of items that can be in the inventory.
     */
    function GetMaxItemCount(): number

    /**
     * @param itemID - The 64bit item ID of the item.
     * @returns The item with the given 64bit item ID.
     */
    function GetItemByItemID(itemID: number): Item

    /**
     * @param classid - The class ID of the loadout slot.
     * @param slot - The slot of the loadout slot.
     * @returns The item that is in the given slot in the given class' loadout slot.
     */
    function GetItemInLoadout(classid: number, slot: number): Item

    /**
     * Equips the item that is in the given slot in the given class' loadout slot.
     * @param item - The item to equip.
     * @param classid - The class ID of the loadout slot.
     * @param slot - The slot of the loadout slot.
     */
    function EquipItemInLoadout(item: Item, classid: number, slot: number): void

    /**
     * Creates a fake item with the given parameters. The item definition is of type ItemDefinition. The pickupOrPosition parameter is the pickup method, if isNewItem parameter is `true`, and the inventory position of the item if isNewItem parameter is false. The itemID64 is the unique 64bit item ID of the item, you can use -1 to generate a random ID. For quality and origin you can use constants. The level is the item's level.
     * @param itemdef - The item definition.
     * @param pickupOrPosition - The pickup method, if isNewItem parameter is `true`, and the inventory position of the item if isNewItem parameter is false.
     * @param itemID64 - The unique 64bit item ID of the item.
     * @param quality - The quality of the item.
     * @param origin - The origin of the item.
     * @param level - The item's level.
     * @param isNewItem - Whether the item is new.
     */
    function CreateFakeItem(
        itemdef: ItemDefinition,
        pickupOrPosition: number,
        itemID64: number,
        quality: number,
        origin: number,
        level: number,
        isNewItem: boolean
    ): void
}
