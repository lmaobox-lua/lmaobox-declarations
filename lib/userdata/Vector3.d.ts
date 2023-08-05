/**
 * Represents a point in 3D space. X and Y are the horizontal coordinates, Z is the vertical coordinate.
 */

/** @customConstructor Vector3 */
declare class Vector3 {
    /**
     * Creates a new Vector3 object.
     * @param x - The X coordinate.
     * @param y - The Y coordinate.
     * @param z - The Z coordinate.
     */
    constructor(x: number, y: number, z: number)

    /**
     * The X coordinate.
     */
    readonly x: number

    /**
     * The Y coordinate.
     */
    readonly y: number

    /**
     * The Z coordinate.
     */
    readonly z: number

    /**
     * @returns the X, Y, and Z coordinates as separate variables.
     */
    Unpack(): LuaMultiReturn<[number, number, number]>

    /**
     * @returns The length of the vector.
     */
    Length: () => number

    /**
     * @returns The squared length of the vector.
     */
    LengthSqr: () => number

    /**
     * @returns The length of the vector in 2D.
     */
    Length2D: () => number

    /**
     * @returns The squared length of the vector in 2D.
     */
    Length2DSqr: () => number

    /**
     * @param vector - The vector to calculate the dot product with.
     * @returns The dot product of the vector and the given vector.
     */
    Dot: (vector: Vector3) => number

    /**
     * @param vector - The vector to calculate the cross product with.
     * @returns The cross product of the vector and the given vector.
     */
    Cross: (vector: Vector3) => Vector3

    /**
     * Clears the vector to 0,0,0.
     */
    Clear: () => void

    /**
     * Normalizes the vector.
     */
    Normalize: () => void

    /**
     * @returns The right vector of the vector.
     */
    Right: () => Vector3

    /**
     * @returns The up vector of the vector.
     */
    Up: () => Vector3

    /**
     * @returns The angles of the vector.
     */
    Angles: () => Vector3
}
