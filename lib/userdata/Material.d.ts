/**
 * Represents a material in the Source engine. For more information about materials see the [Material](https://developer.valvesoftware.com/wiki/Material) page.
 */
interface Material {
    /**
     * @returns {string} The material name.
     */
    GetName: () => string

    /**
     * @returns {string} The texture group the material is part of.
     */
    GetTextureGroupName: () => string

    /**
     * @param {number} alpha - The alpha value to use for modulating the transparency of the material.
     */
    AlphaModulate: (alpha: number) => void

    /**
     * @param {number} red - The red value to use for modulating the color of the material.
     * @param {number} green - The green value to use for modulating the color of the material.
     * @param {number} blue - The blue value to use for modulating the color of the material.
     */
    ColorModulate: (red: number, green: number, blue: number) => void

    /**
     * @param {number} flag - The integer value of the flag enum to change.
     * @param {boolean} set - Whether to set or unset the flag.
     * @see {@link https://developer.valvesoftware.com/wiki/Material_Flags}
     */
    SetMaterialVarFlag: (flag: number, set: boolean) => void

    /**
     * @param {string} param - The name of the shader parameter to set.
     * @param {number | string | Vector3} value - The value to set for the shader parameter.
     * @see {@link https://developer.valvesoftware.com/wiki/Category:List_of_Shader_Parameters}
     */
    SetShaderParam: (param: string, value: number | string | Vector3) => void
}
