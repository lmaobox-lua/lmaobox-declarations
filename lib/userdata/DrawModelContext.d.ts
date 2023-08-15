/**
 * Represents the context in which a model is being drawn in the DrawModel callback.
 */
interface DrawModelContext {
    /**
     * @returns The entity linked to the drawn model, or `undefined` if there is no linked entity.
     */
    GetEntity: () => Entity | undefined

    /**
     * @returns The name of the model being drawn.
     */
    GetModelName: () => string

    /**
     * Replaces the material used to draw the model.
     * @param mat - The material to use for drawing the model.
     */
    ForcedMaterialOverride: (mat: Material | undefined) => void

    /**
     * Redraws the model.
     * Can be used to achieve various effects with different materials.
     */
    DrawExtraPass: () => void

    /**
     * @param red -  The red component of the color (0-1).
     * @param green - The green component of the color (0-1).
     * @param blue - The blue component of the color (0-1).
     */
    StudioSetColorModulation: (red: number, green: number, blue: number) => void

    /**
     * @param alpha - The alpha modulation to set for the model.
     */
    StudioSetAlphaModulation: (alpha: number) => void

    /**
     * Sets the depth range of the scene.
     * Useful for drawing models in the background or other various effects. Should be reset to the default (0,1) when done.
     * @param start - The minimum depth value for the scene. (0-1)
     * @param end - The maximum depth value for the scene. (0-1)
     */
    DepthRange: (start: number, end: number) => void

    /**
     * Suppresses the engine lighting when drawing the model.
     * @param bool - Whether to suppress the engine lighting or not.
     */
    SuppressEngineLighting: (bool: boolean) => void
}
