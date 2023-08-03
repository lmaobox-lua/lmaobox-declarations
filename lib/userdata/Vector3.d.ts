/**
 * Represents a point in 3D space. X and Y are the horizontal coordinates, Z is the vertical coordinate.
 */
interface Vector3 {
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
     * Creates a new Vector3 object.
     * @param {number} x - The X coordinate.
     * @param {number} y - The Y coordinate.
     * @param {number} z - The Z coordinate.
     */
    constructor: (x: number, y: number, z: number) => any

    /**
     * Returns the X, Y, and Z coordinates as separate variables.
     * @returns {[number, number, number]} An array containing the X, Y, and Z coordinates.
     * undocumented
     */
    Unpack: () => [number, number, number]

    /**
     * Returns the length of the vector.
     * @returns {number} The length of the vector.
     */
    Length: () => number

    /**
     * Returns the squared length of the vector.
     * @returns {number} The squared length of the vector.
     */
    LengthSqr: () => number

    /**
     * Returns the length of the vector in 2D.
     * @returns {number} The length of the vector in 2D.
     */
    Length2D: () => number

    /**
     * Returns the squared length of the vector in 2D.
     * @returns {number} The squared length of the vector in 2D.
     */
    Length2DSqr: () => number

    /**
     * Returns the dot product of the vector and the given vector.
     * @param {Vector3} vector - The vector to calculate the dot product with.
     * @returns {number} The dot product of the vector and the given vector.
     */
    Dot: (vector: Vector3) => number

    /**
     * Returns the cross product of the vector and the given vector.
     * @param {Vector3} vector - The vector to calculate the cross product with.
     * @returns {Vector3} The cross product of the vector and the given vector.
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
     * Returns the right vector of the vector.
     * @returns {Vector3} The right vector of the vector.
     */
    Right: () => Vector3

    /**
     * Returns the up vector of the vector.
     * @returns {Vector3} The up vector of the vector.
     */
    Up: () => Vector3

    /**
     * Returns the angles of the vector.
     * @returns {[number, number, number]} An array containing the angles of the vector.
     * undocumented
     */
    Angles: () => [number, number, number]
}
