/**
 * Represents the context of a static prop being drawn.
 */
interface StaticPropRenderInfo {
    /**
     * Replace material used to draw the models.
     * @param mat - The material to use.
     */
    ForcedMaterialOverride: (mat: Material) => void

    /**
     * Redraws the models. Can be used to achieve various effects with different materials.
     */
    DrawExtraPass: () => void

    /**
     * Sets the color modulation of the models via StudioRender.
     * @param color - The color to set.
     */
    StudioSetColorModulation: (r: number, g: number, b: number) => void

    /**
     * Sets the alpha modulation of the models via StudioRender.
     * @param alpha - The alpha value to set.
     */
    StudioSetAlphaModulation: (alpha: number) => void
}
