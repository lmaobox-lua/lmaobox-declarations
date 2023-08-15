/**
 * Represents the context of a static prop being drawn.
 */
interface StaticPropRenderInfo {
    /**
     * Replace material used to draw the models.
     * @param mat - The material to use.
     */
    ForcedMaterialOverride: (mat: Material | undefined) => void

    /**
     * Redraws the models. Can be used to achieve various effects with different materials.
     */
    DrawExtraPass: () => void

    /**
     * Sets the color modulation of the models via StudioRender.
     * @param r - The red component of the color. (0-1)
     * @param g - The green component of the color. (0-1)
     * @param b - The blue component of the color. (0-1)
     */
    StudioSetColorModulation: (r: number, g: number, b: number) => void

    /**
     * Sets the alpha modulation of the models via StudioRender.
     * @param alpha - The alpha value to set. (0-1)
     */
    StudioSetAlphaModulation: (alpha: number) => void
}
