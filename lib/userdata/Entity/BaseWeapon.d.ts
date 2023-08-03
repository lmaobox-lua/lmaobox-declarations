interface Entity {
    /**
     * @returns {boolean} Whether the entity is a weapon.
     */
    IsWeapon: () => boolean

    /**
     * @returns The swing range of the weapon, or null if the weapon is not a melee weapon
     */
    GetSwingRange: () => number | null

    /**
     * @returns The Trace object result of the weapon's swing
     */
    DoSwingTrace: () => Trace

    /**
     * @returns The heal rate of the medigun, or null if the weapon is not a medigun
     */
    GetMedigunHealRate: () => number | null

    /**
     * @returns The healing stick range of the medigun, or null if the weapon is not a medigun
     */
    GetMedigunHealingStickRange: () => number | null

    /**
     * @returns The healing range of the medigun, or null if the weapon is not a medigun
     */
    GetMedigunHealingRange: () => number | null

    /**
     * @param target - The entity to check if the medigun is allowed to heal
     * @returns Whether the medigun is allowed to heal the target, or null if the weapon is not a medigun
     */
    IsMedigunAllowedToHealTarget: (target: Entity) => boolean | null

    /**
     * @returns The current crit token bucket value
     */
    GetCritTokenBucket: () => number

    /**
     * @returns The current crit check count
     */
    GetCritCheckCount: () => number

    /**
     * @returns The current crit seed request count
     */
    GetCritSeedRequestCount: () => number

    /**
     * @returns The current crit seed
     */
    GetCurrentCritSeed: () => number

    /**
     * @returns The time until the current rapid fire crit is over
     */
    GetRapidFireCritTime: () => number

    /**
     * @returns The time of the last rapid fire crit check
     */
    GetLastRapidFireCritCheckTime: () => number

    /**
     * @returns The base damage of the weapon
     */
    GetWeaponBaseDamage: () => number

    /**
     * This crit chance changes during gameplay based on player's recently dealt damage.
     * @returns The weapon's current crit chance (0, 1)
     */
    GetCritChance: () => number

    /**
     * Calculates the cost of a crit based on the given crit parameters.
     * You can either use the GetCritTokenBucket(), GetCritCheckCount(), and GetCritSeedRequestCount() methods to get the current crit parameters,
     * or you can pass your own if you are simulating crits.
     * @param tokenBucket - The crit token bucket value
     * @param critSeedRequestCount - The crit seed request count
     * @param critCheckCount - The crit check count
     * @returns The cost of a crit based on the given crit parameters
     */
    GetCritCost: (
        tokenBucket: number,
        critSeedRequestCount: number,
        critCheckCount: number
    ) => number

    /**
     * The observed crit chance is calculated on the server from the damage you deal across a game round.
     * It is only rarely sent to the client, but is important for crit calculations.
     * @returns The estimated observed crit chance
     */
    CalcObservedCritChance: () => number

    /**
     * @param commandNumber - The command number to check
     * @returns Whether the given command number would result in a crit
     */
    IsAttackCritical: (commandNumber: number) => boolean

    /**
     * @returns The current damage stats table
     */
    GetWeaponDamageStats: () => {
        total: number
        critical: number
        melee: number
    }
}
