/**
 * Interface for a collision model for a physics object.
 */
interface PhysicsCollisionModel {
    /**
     * Returns the mass center of the collision model as a Vector3.
     * @returns The mass center of the collision model as a Vector3.
     */
    GetMassCenter: () => Vector3
}
