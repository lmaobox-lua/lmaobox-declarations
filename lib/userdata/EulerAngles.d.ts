/**
 * A class that represents a set of Euler angles.
 */

/** @customConstructor EulerAngles */
declare class EulerAngles {
    /**
     * Creates a new instance of EulerAngles.
     * @param pitch - The pitch angle in degrees.
     * @param yaw - The yaw angle in degrees.
     * @param roll - The roll angle in degrees.
     */
    constructor(pitch: number, yaw: number, roll: number)

    /**
     * The pitch angle in degrees.
     */
    x: number

    /**
     * The yaw angle in degrees.
     */
    y: number

    /**
     * The roll angle in degrees.
     */
    z: number

    /**
     * @returns the X, Y, and Z coordinates as separate variables.
     */
    Unpack(): LuaMultiReturn<[number, number, number]>

    /**
     * Clears the angles to 0, 0, 0.
     */
    Clear(): void

    /**
     * Clamps the angles to standard ranges.
     */
    Normalize(): void

    /**
     * Returns the forward vector of the angles.
     * @returns A Vector3 object with the X, Y, and Z components of the forward vector.
     */
    Forward(): Vector3

    /**
     * Returns the right vector of the angles.
     * @returns A Vector3 object with the X, Y, and Z components of the right vector.
     */
    Right(): Vector3

    /**
     * Returns the up vector of the angles.
     * @returns A Vector3 object with the X, Y, and Z components of the up vector.
     */
    Up(): Vector3
}
