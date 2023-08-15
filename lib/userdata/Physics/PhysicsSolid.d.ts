/**
 * Class that represents a solid of a given model. It is used to create a physics object.
 */
interface PhysicsSolid {
    /**
     * Returns the name of the solid.
     * @returns The name of the solid.
     */
    GetName: () => string

    /**
     * Returns the surface property name of the solid.
     * @returns The surface property name of the solid.
     */
    GetSurfacePropName: () => string

    /**
     * Returns the PhysicsObjectParameters object of the solid.
     * @returns The PhysicsObjectParameters object of the solid.
     */
    GetObjectParameters: () => PhysicsObjectParameters
}
