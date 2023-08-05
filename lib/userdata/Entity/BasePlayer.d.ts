interface Entity {
    /**
     * @returns Whether the entity is a player.
     */
    IsPlayer: () => boolean

    /**
     * @returns The name of the player entity, or an empty string if the entity is not a player.
     */
    GetName: () => string

    /**
     * @param condition - The condition to check
     * @returns Whether the player is in the specified condition
     */
    InCond: (condition: number) => boolean

    /**
     * @param condition - The condition to add
     * @param duration - The duration of the condition (optional, defaults to -1 for infinite)
     */
    AddCond: (condition: number, duration?: number) => void

    /**
     * @param condition - The condition to remove
     */
    RemoveCond: (condition: number) => void

    /**
     * @returns Whether the player is currently crit boosted
     */
    IsCritBoosted: () => boolean

    /**
     * @returns The current crit multiplier of the player
     * @see {@link https://wiki.teamfortress.com/wiki/Critical_hits}
     */
    GetCritMult: () => number

    /**
     * For game modes where players can carry runes, returns the type of rune the player is carrying.
     * @returns The type of rune the player is carrying
     */
    GetCarryingRuneType: () => number

    /**
     * @returns The max health of the player, including any buffs from items or medics.
     */
    GetMaxBuffedHealth: () => number

    /**
     * @param slot - The loadout slot to get the entity for
     * @returns The entity for the specified loadout slot
     */
    GetEntityForLoadoutSlot: (slot: number) => Entity

    /**
     * @returns Whether the player is currently in a freezecam
     */
    IsInFreezecam: () => boolean
}
