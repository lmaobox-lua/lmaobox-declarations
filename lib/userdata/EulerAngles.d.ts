/**
 * A class that represents a set of Euler angles.
 */
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
     * Returns the X, Y, and Z coordinates as separate variables.
     * @returns An object with the X, Y, and Z coordinates as separate variables.
     * undocumented
     */
    Unpack(): { x: number; y: number; z: number }

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
     * @returns An object with the X, Y, and Z components of the forward vector.
     * undocumented
     */
    Forward(): { x: number; y: number; z: number }

    /**
     * Returns the right vector of the angles.
     * @returns An object with the X, Y, and Z components of the right vector.
     * undocumented
     */
    Right(): { x: number; y: number; z: number }

    /**
     * Returns the up vector of the angles.
     * @returns An object with the X, Y, and Z components of the up vector.
     * undocumented
     */
    Up(): { x: number; y: number; z: number }
}
