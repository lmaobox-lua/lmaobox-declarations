/** @noSelfInFile **/
/**
 * The `entities` library provides functions to access game entities.
 */
declare namespace entities {
    /**
     * Find and put into table all entities with given class name.
     * @param className - The class name of the entities to find.
     * @returns An array of entities with the given class name.
     */
    function FindByClass(className: string): LuaMap<number, Entity>

    /**
     * Return local player entity.
     * @returns The local player entity.
     */
    function GetLocalPlayer(): Entity

    /**
     * Return entity by index.
     * @param index - The index of the entity to get.
     * @returns The entity with the given index.
     */
    function GetByIndex(index: number): Entity | undefined

    /**
     * Return entity by user id.
     * @param userID - The user id of the entity to get.
     * @returns The entity with the given user id.
     */
    function GetByUserID(userID: number): Entity | undefined

    /**
     * Return player resources entity.
     * @returns The player resources entity.
     */
    function GetPlayerResources(): Entity

    /**
     * Creates a non-networkable entity by class name, returns entity.
     * Keep in mind that YOU are responsible for its entire lifecycle and for releasing the entity later by calling entity.Release.
     * @param className - The class name of the entity to create.
     * @returns The created entity.
     */
    function CreateEntityByName(className: string): Entity
}

declare namespace entities {}
