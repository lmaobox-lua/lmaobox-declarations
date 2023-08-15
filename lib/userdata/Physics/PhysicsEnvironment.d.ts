/**
 * Class that represents a physics environment. It has its own gravity, air resistance, and collision rules. It contains physics objects that can be simulated in time.
 */
interface PhysicsEnvironment {
    /**
     * Sets the gravity of the physics environment.
     * @param gravity - The gravity to set.
     */
    SetGravity: (gravity: Vector3) => void

    /**
     * Returns the gravity of the physics environment as a Vector3.
     * @returns The gravity of the physics environment as a Vector3.
     */
    GetGravity: () => Vector3

    /**
     * Sets the air density of the physics environment.
     * @param airDensity - The air density to set.
     */
    SetAirDensity: (airDensity: number) => void

    /**
     * Returns the air density of the physics environment.
     * @returns The air density of the physics environment.
     */
    GetAirDensity: () => number

    /**
     * Simulates the physics environment in time by the given delta time.
     * @param deltaTime - The delta time to simulate.
     */
    Simulate: (deltaTime: number) => void

    /**
     * Returns whether the physics environment is currently simulating.
     * @returns Whether the physics environment is currently simulating.
     */
    IsInSimulation: () => boolean

    /**
     * Returns the current simulation time of the physics environment.
     * @returns The current simulation time of the physics environment.
     */
    GetSimulationTime: () => number

    /**
     * Returns the current simulation timestep of the physics environment.
     * @returns The current simulation timestep of the physics environment.
     */
    GetSimulationTimestep: () => number

    /**
     * Sets the simulation timestep of the physics environment.
     * @param timestep - The simulation timestep to set.
     */
    SetSimulationTimestep: (timestep: number) => void

    /**
     * Returns a table of all active physics objects in the physics environment, as PhysicsObject objects.
     * @returns A table of all active physics objects in the physics environment, as PhysicsObject objects.
     */
    GetActiveObjects: () => PhysicsObject[]

    /**
     * Resets the simulation clock of the physics environment.
     */
    ResetSimulationClock: () => void

    /**
     * Creates a physics object from a collision model, surface property name, and physics object parameters. Returns a PhysicsObject object. Objects is created asleep, and must be woken up before simulation by calling PhysicsObject:Wake().
     * @param collisionModel - The collision model to create the physics object from.
     * @param surfacePropertyName - The surface property name of the physics object.
     * @param objectParams - The physics object parameters to use.
     * @returns A PhysicsObject object.
     */
    CreatePolyObject: (
        collisionModel: PhysicsCollisionModel,
        surfacePropertyName: string,
        objectParams: PhysicsObjectParameters
    ) => PhysicsObject

    /**
     * Destroys a physics object.
     * @param object - The physics object to destroy.
     */
    DestroyObject: (object: PhysicsObject) => void
}
