/**
 * Class that contains parameters for a physics object.
 */
interface PhysicsObjectParameters {
    /**
     * The mass of the physics object.
     */
    mass: number

    /**
     * The inertia of the physics object.
     */
    inertia: number

    /**
     * The damping of the physics object.
     */
    damping: number

    /**
     * The rotational damping of the physics object.
     */
    rotdamping: number

    /**
     * The rotational inertia limit of the physics object.
     */
    rotInertiaLimit: number

    /**
     * The volume of the physics object.
     */
    volume: number

    /**
     * The drag coefficient of the physics object.
     */
    dragCoefficient: number

    /**
     * Whether or not the physics object should collide with other physics objects.
     */
    enableCollisions: boolean
}
