/**
 * Contains variables related to specifications of a weapon, such as firing speed, number of projectiles, etc. Some of them may not be used, or may be wrong.
 */
interface WeaponData {
    /**
     * Represents the damage value of the weapon.
     */
    readonly damage: number

    /**
     * Represents number of bullets per shot.
     */
    readonly bulletsPerShot: number

    /**
     * Represents range of the weapon.
     */
    readonly range: number

    /**
     * Represents spread of the weapon.
     */
    readonly spread: number

    /**
     * Represents punch angle of the weapon.
     */
    readonly punchAngle: number

    /**
     * Represents time fire delay of the weapon.
     */
    readonly timeFireDelay: number

    /**
     * Represents time idle of the weapon.
     */
    readonly timeIdle: number

    /**
     * Represents time idle empty of the weapon.
     */
    readonly timeIdleEmpty: number

    /**
     * Represents time reload start of the weapon.
     */
    readonly timeReloadStart: number

    /**
     * Represents time reload of the weapon.
     */
    readonly timeReload: number

    /**
     * Represents draw crosshair of the weapon.
     */
    readonly drawCrosshair: number

    /**
     * Represents projectile id of the weapon.
     */
    readonly projectile: number

    /**
     * Represents ammo per shot of the weapon.
     */
    readonly ammoPerShot: number

    /**
     * Represents projectile speed of the weapon.
     */
    readonly projectileSpeed: number

    /**
     * Represents smack delay of the weapon.
     */
    readonly smackDelay: number

    /**
     * Represents whether rapid fire crits are used for the weapon.
     */
    readonly useRapidFireCrits: boolean
}
