/**
 * `Entity`
 * Represents an entity in the game world.
 */
interface Entity {
    /**
     * Returns whether the entity is valid.
     * This is done automatically and all other functions will return `undefined` if the entity is invalid.
     * Call this method only if you know what you're doing
     * @returns Whether the entity is valid.
     */
    IsValid: () => boolean

    /**
     * @returns The class of the entity.
     */
    GetClass: () => string

    /**
     * @returns The entity index.
     */
    GetIndex: () => number

    /**
     * @returns The team number of the entity.
     */
    GetTeamNumber: () => number

    /**
     * @returns The absolute position of the entity.
     */
    GetAbsOrigin: () => Vector3

    /**
     * @param origin - The absolute position to set for the entity.
     */
    SetAbsOrigin: (origin: Vector3) => void

    /**
     * Returns the mins of the entity, which must be combined with the origin.
     * @returns The mins of the entity.
     */
    GetMins: () => Vector3

    /**
     * Returns the maxs of the entity, which must be combined with the origin.
     * @returns The maxs of the entity.
     */
    GetMaxs: () => Vector3

    /**
     * @returns Whether the entity is alive.
     */
    IsAlive: () => boolean

    /**
     * @returns The health of the entity.
     */
    GetHealth: () => number

    /**
     * @returns The max health of the entity.
     */
    GetMaxHealth: () => number

    /**
     * @param modelPath - The path to the model
     * @returns Whether the model was set successfully
     */
    SetModel: (modelPath: string) => boolean

    /**
     * Releases the entity, making it invalid.
     * Calling this for networkable entities will kick you from the server.
     * This is only useful for non-networkable entities created with `entities.CreateEntityByName`
     */
    Release: () => void

    /**
     * Dormant entities are not drawn and shouldn't be interacted with.
     * @returns Whether the entity is dormant.
     */
    IsDormant: () => boolean
}
