/**
 * Represents the context in which a model is being drawn in the DrawModel callback.
 */
interface DrawModelContext {
    /**
     * @returns {Entity | undefined} The entity linked to the drawn model, or `undefined` if there is no linked entity.
     */
    GetEntity: () => Entity | undefined

    /**
     * @returns {string} The name of the model being drawn.
     */
    GetModelName: () => string

    /**
     * Replaces the material used to draw the model.
     * @param {Material} mat - The material to use for drawing the model.
     */
    ForcedMaterialOverride: (mat: Material) => void

    /**
     * Redraws the model. 
     * Can be used to achieve various effects with different materials.
     
     */
    DrawExtraPass: () => void

    /**
     * @param {number} red -  The red component of the color (0-1).
     * @param {number} green - The green component of the color (0-1).
     * @param {number} blue - The blue component of the color (0-1).
     */
    StudioSetColorModulation: (red: number, green: number, blue: number) => void

    /**
     * @param {number} alpha - The alpha modulation to set for the model.
     */
    StudioSetAlphaModulation: (alpha: number) => void

    /**
     * Sets the depth range of the scene.
     * Useful for drawing models in the background or other various effects. Should be reset to the default (0,1) when done.
     * @param {number} start - The minimum depth value for the scene.
     * @param {number} end - The maximum depth value for the scene.
     */
    DepthRange: (start: number, end: number) => void

    /**
     * Suppresses the engine lighting when drawing the model.
     * @param {boolean} bool - Whether to suppress the engine lighting or not.
     */
    SuppressEngineLighting: (bool: boolean) => void
}
