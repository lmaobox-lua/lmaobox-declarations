/**
 * Class that represents a physics object. It has a position, angle, velocity, angular velocity, and is affected by gravity and air resistance. It can be simulated in time. Other parameters include class PhysicsObjectParameters.
 */
interface PhysicsObject {
    /**
     * Wakes up the physics object. It will become active in the physics environment and will be simulated in time if the physics environment is simulating.
     */
    Wake: () => void

    /**
     * Puts the physics object to sleep. It will become inactive in the physics environment and will not be simulated.
     */
    Sleep: () => void

    /**
     * Returns the position of the physics object as a Vector3 and the angle as a Vector3 second return value.
     * @returns The position of the physics object as a Vector3 and the angle as a Vector3 second return value.
     */
    GetPosition: () => LuaMultiReturn<[Vector3, Vector3]>

    /**
     * Sets the position and angle of the physics object. If isTeleport is true, the physics object will be teleported to the new position and angle.
     * @param position - The position to set.
     * @param angle - The angle to set.
     * @param isTeleport - Whether or not to teleport the physics object to the new position and angle.
     */
    SetPosition: (
        position: Vector3,
        angle: Vector3,
        isTeleport: boolean
    ) => void

    /**
     * Returns the velocity of the physics object as a Vector3 and the angular velocity as a Vector3 second return value.
     * @returns The velocity of the physics object as a Vector3 and the angular velocity as a Vector3 second return value.
     */
    GetVelocity: () => LuaMultiReturn<[Vector3, Vector3]>

    /**
     * Sets the velocity and angular velocity of the physics object.
     * @param velocity - The velocity to set.
     * @param angularVelocity - The angular velocity to set.
     */
    SetVelocity: (velocity: Vector3, angularVelocity: Vector3) => void

    /**
     * Adds the velocity and angular velocity to the physics object.
     * @param velocity - The velocity to add.
     * @param angularVelocity - The angular velocity to add.
     */
    AddVelocity: (velocity: Vector3, angularVelocity: Vector3) => void

    /**
     * Outputs debug information about the physics object to the console.
     */
    OutputDebugInfo: () => void
}
