interface Entity {
    /**
     * @returns The swing range of the weapon, or null if the weapon is not a melee weapon
     */
    GetSwingRange: () => number | null

    /**
     * @returns The Trace object result of the weapon's swing
     */
    DoSwingTrace: () => Trace
}
