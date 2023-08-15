interface Entity {
    /**
     * @returns Whether the weapon is a medigun
     */
    IsMedigun: () => boolean

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
}
