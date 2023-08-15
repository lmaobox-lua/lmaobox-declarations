interface Entity {
    /**
     * @returns Whether the weapon can shoot projectile or hitscan
     */
    IsShootingWeapon: () => boolean

    /**
     * Returns the starting position and direction of the projectile.
     * @param player - The player entity firing the projectile.
     * @param vecOffset - The offset of the projectile from the player's eye position.
     * @param bHitTeammates - Whether the projectile can hit teammates.
     * @param flEndDist - The distance the projectile can travel before it disappears.
     * @returns An object containing the starting position and direction of the projectile.
     */
    GetProjectileFireSetup: (
        player: Entity,
        vecOffset: Vector3,
        bHitTeammates: boolean,
        flEndDist: number
    ) => { vecSrc: Vector3; angForward: Vector3 }

    /**
     * Returns the type of projectile fired by the weapon.
     * @returns The type of projectile fired by the weapon, or null if the weapon is not a projectile weapon.
     */
    GetWeaponProjectileType: () => string | null

    /**
     * Returns the spread of the weapon.
     * @returns The spread of the weapon, or null if the weapon is not a gun weapon.
     */
    GetWeaponSpread: () => number | null

    /**
     * Returns the speed of the projectile fired by the weapon.
     * @returns The speed of the projectile fired by the weapon, or null if the weapon is not a projectile weapon. Can return 0 if the speed is hardcoded somewhere else.
     */
    GetWeaponProjectileSpeed: () => number | null

    /**
     * Returns the gravity of the projectile fired by the weapon.
     * @returns The gravity of the projectile fired by the weapon, or null if the weapon is not a projectile weapon. Can return 0 if the gravity is hardcoded somewhere else.
     */
    GetWeaponProjectileGravity: () => number | null

    /**
     * Returns the spread of the projectile fired by the weapon.
     * @returns The spread of the projectile fired by the weapon, or null if the weapon is not a projectile weapon.
     */
    GetProjectileSpread: () => number | null

    /**
     * @returns Whether the weapon can be charged up.
     */
    CanCharge: () => boolean

    /**
     * @returns The time the weapon started charging up, or null if the weapon is not a charge up weapon.
     */
    GetChargeBeginTime: () => number | null

    /**
     * @returns The max charge time of the weapon, or null if the weapon is not a charge up weapon.
     */
    GetChargeMaxTime: () => number | null

    /**
     * @returns The current charge of the weapon, or null if the weapon is not a charge up weapon.
     */
    GetCurrentCharge: () => number | null
}
