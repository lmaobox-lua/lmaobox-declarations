interface Entity {
    /**
     * @returns {Vector3} The estimated absolute velocity of the entity.
     */
    EstimateAbsVelocity: () => Vector3

    /**
     * Returns the move type of the entity (the netvar property does not work).
     * @returns {number} The move type of the entity.
     */
    GetMoveType: () => number

    /**
     * Returns the hitbox surrounding box of the entity as a table of `Vector3` mins and maxs.
     * @returns {LuaMap<{mins: Vector3, maxs: Vector3}>} The hitbox surrounding box of the entity.
     * undocumented
     */
    HitboxSurroundingBox: () => LuaMap<{ mins: Vector3; maxs: Vector3 }>

    /**
     * Returns the hitbox surrounding box of the entity in entity space as a table of `Vector3` mins and maxs.
     * @returns {LuaMap<{mins: Vector3, maxs: Vector3}>} The hitbox surrounding box of the entity in entity space.
     * undocumented
     */
    EntitySpaceHitboxSurroundingBox: () => LuaMap<{
        mins: Vector3
        maxs: Vector3
    }>

    /**
     * Returns world-transformed hitboxes of the entity as a table of tables,
     * each containing 2 entries of `Vector3`: mins and maxs positions of each hitbox.
     * @param {number} [currentTime=0] - The current time to use for the transform. Defaults to 0.
     * @returns {LuaMap<{index: number, mins: Vector3, maxs: Vector3}>} The world-transformed hitboxes of the entity.
     * undocumented
     */
    GetHitboxes: (
        currentTime?: number
    ) => LuaMap<{ index: number; mins: Vector3; maxs: Vector3 }>
}
