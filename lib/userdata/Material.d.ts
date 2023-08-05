/**
 * Represents a material in the Source engine. For more information about materials see the [Material](https://developer.valvesoftware.com/wiki/Material) page.
 */

type TextureGroup =
    | 'Lightmaps'
    | 'World textures'
    | 'Model textures'
    | 'VGUI textures'
    | 'Particle textures'
    | 'Decal textures'
    | 'SkyBox textures'
    | 'ClientEffect textures'
    | 'Other textures'
    | 'Precached'
    | 'CubeMap textures'
    | 'RenderTargets'
    | 'Runtime Composite'
    | 'Unaccounted textures'
    | 'Static Indices'
    | 'Displacement Verts'
    | 'Lighting Verts'
    | 'World Verts'
    | 'Model Verts'
    | 'Other Verts'
    | 'Dynamic Indices'
    | 'Dynamic Verts'
    | 'DepthBuffer'
    | 'ViewModel'
    | 'Pixel Shaders'
    | 'Vertex Shaders'
    | 'RenderTarget Surfaces'
    | 'Morph Targets'

interface Material {
    /**
     * @returns The material name.
     */
    GetName: () => string

    /**
     * @returns The texture group the material is part of.
     */
    GetTextureGroupName: () => TextureGroup

    /**
     * @param alpha - The alpha value to use for modulating the transparency of the material.
     */
    AlphaModulate: (alpha: number) => void

    /**
     * @param red - The red value to use for modulating the color of the material.
     * @param green - The green value to use for modulating the color of the material.
     * @param blue - The blue value to use for modulating the color of the material.
     */
    ColorModulate: (red: number, green: number, blue: number) => void

    /**
     * @param flag - The integer value of the flag enum to change.
     * @param set - Whether to set or unset the flag.
     * @see {@link https://developer.valvesoftware.com/wiki/Material_Flags}
     */
    SetMaterialVarFlag: (flag: number, set: boolean) => void

    /**
     * @param param - The name of the shader parameter to set.
     * @param value - The value to set for the shader parameter.
     * @see {@link https://developer.valvesoftware.com/wiki/Category:List_of_Shader_Parameters}
     */
    SetShaderParam: (param: string, value: number | string | Vector3) => void
}
