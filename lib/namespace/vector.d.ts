/** @noSelfInFile **/
/**
 * The `vector` library provides a simple way to manipulate 3D vectors.
 * You can use both Lua tables and Vector3 instances as arguments.
 */

declare namespace vector {
    /**
     * @param lhs - The first vector.
     * @param rhs - The second vector.
     * @returns The sum of the two vectors.
     */
    function Add(lhs: Vector, rhs: Vector): Vector

    /**
     * @param lhs - The first vector.
     * @param rhs - The second vector.
     * @returns The difference between the two vectors.
     */
    function Subtract(lhs: Vector, rhs: Vector): Vector

    /**
     * @param vector - The vector to multiply.
     * @param scalar - The scalar to multiply by.
     * @returns The product of the vector and the scalar.
     */
    function Multiply(vector: Vector, scalar: number): Vector

    /**
     * @param vector - The vector to divide.
     * @param scalar - The scalar to divide by.
     * @returns The quotient of the vector and the scalar.
     */
    function Divide(vector: Vector, scalar: number): Vector

    /**
     * @param vector - The vector.
     * @returns The length of the vector.
     */
    function Length(vector: Vector): number

    /**
     * Gets the squared length of a vector.
     * @param vector - The vector.
     * @returns The squared length of the vector.
     */
    function LengthSqr(vector: Vector): number

    /**
     * @param lhs - The first vector.
     * @param rhs - The second vector.
     * @returns The distance between the two vectors.
     */
    function Distance(lhs: Vector, rhs: Vector): number

    /**
     * @param vector - The vector to normalize.
     * @returns The normalized vector.
     */
    function Normalize(vector: Vector): Vector

    /**
     * Calculates the angles of a vector.
     * @param eulerAngles - The input vector.
     * @returns The angles of the input vector.
     */
    function Angles(eulerAngles: Euler): Euler

    /**
     * Calculates the forward vector angle of a vector.
     * @param eulerAngles - The input vector.
     * @returns The forward vector angle of the input vector.
     */
    function AngleForward(eulerAngles: Euler): Euler

    /**
     * Calculates the right vector angle of a vector.
     * @param eulerAngles - The input vector.
     * @returns The right vector angle of the input vector.
     */
    function AngleRight(eulerAngles: Euler): Euler

    /**
     * Calculates the up vector angle of a vector.
     * @param eulerAngles - The input vector.
     * @returns The up vector angle of the input vector.
     */
    function AngleUp(eulerAngles: Euler): Euler

    /**
     * Normalizes the angles of a vector.
     * @param eulerAngles - The input vector.
     * @returns The normalized angles of the input vector.
     */
    function AngleNormalize(eulerAngles: Euler): Euler
}

type Vector = Vector3 | [number, number, number]
type Euler = EulerAngles | [number, number, number]
