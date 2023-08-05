interface Entity {
    /**
     * @returns If the entity is an item that can be in player's inventory, such as a wearable or a weapon, returns the Item object
     */
    ToInventoryItem: () => Item | undefined
}
