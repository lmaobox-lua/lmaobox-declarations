/** @noSelfInFile **/
/**
 * This is a library for physics calculations in TF2.
 * You can use this to calculate the trajectory of projectiles, or perform any sort of physics calculations on physics objects in time, in your own environment, or in TF2's environment.
 */
declare namespace Physics {
    /**
     * Creates a new physics environment of class PhysicsEnvironment. By default it has no gravity, and no air resistance and no collisions.
     * @returns A new physics environment.
     */
    function CreateEnvironment(): PhysicsEnvironment

    /**
     * Destroys a physics environment.
     * @param environment - The physics environment to destroy.
     */
    function DestroyEnvironment(environment: PhysicsEnvironment): void

    /**
     * Returns the default physics environment. This is the environment that TF2 client uses for clientside physics calculations. Wouldnt recommend using, can cause odd side effects, but im not your mom.
     * @returns The default physics environment.
     */
    function DefaultEnvironment(): PhysicsEnvironment

    /**
     * Creates a collision model from a bounding box.
     * @param mins - The minimum coordinates of the bounding box.
     * @param maxs - The maximum coordinates of the bounding box.
     * @returns A PhysicsCollisionModel object.
     */
    function BBoxToCollisionModel(
        mins: Vector,
        maxs: Vector
    ): PhysicsCollisionModel

    /**
     * Creates a PhysicsSolid and a PhysicsCollisionModel from a model name.
     * @param modelName - The name of the model.
     * @returns A PhysicsSolid object and a PhysicsCollisionModel object.
     */
    function ParseModelByName(modelName: string): {
        solid: PhysicsSolid
        collisionModel: PhysicsCollisionModel
    }

    /**
     * Creates a PhysicsObjectParameters object with default values.
     * @returns A PhysicsObjectParameters object with default values.
     */
    function DefaultObjectParameters(): PhysicsObjectParameters
}
