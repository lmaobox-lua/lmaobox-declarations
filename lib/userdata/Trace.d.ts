/**
 * Return value of engine.TraceLine and engine.TraceHull funcs.
 */
interface Trace {
    /**
     * Fraction of the trace that was completed.
     */
    readonly fraction: number

    /**
     * The entity that was hit.
     */
    readonly entity: Entity

    /**
     * Plane normal of the surface hit.
     */
    readonly plane: Vector3

    /**
     * Contents of the surface hit.
     */
    readonly contents: number

    /**
     * Hitbox that was hit.
     */
    readonly hitbox: number

    /**
     * Hitgroup that was hit.
     */
    readonly hitgroup: number

    /**
     * Whether the trace completed in all solid.
     */
    readonly allsolid: boolean

    /**
     * Whether the trace started in a solid.
     */
    readonly startsolid: boolean

    /**
     * The start position of the trace.
     */
    readonly startpos: Vector3

    /**
     * The end position of the trace.
     */
    readonly endpos: Vector3
}
