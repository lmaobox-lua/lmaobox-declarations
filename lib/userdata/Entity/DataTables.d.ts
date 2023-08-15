interface Entity {
    /**
     * @param propName - The name of the netvar
     * @returns The float value of the netvar
     */
    GetPropFloat: (propName: string, ...args: string[]) => number

    /**
     * @param propName - The name of the netvar
     * @returns The int value of the netvar
     */
    GetPropInt: (propName: string, ...args: string[]) => number

    /**
     * @param propName - The name of the netvar
     * @returns The bool value of the netvar
     */
    GetPropBool: (propName: string, ...args: string[]) => boolean

    /**
     * @param propName - The name of the netvar
     * @returns The string value of the netvar
     */
    GetPropString: (propName: string, ...args: string[]) => string

    /**
     * @param propName - The name of the netvar
     * @returns The vector value of the netvar
     */
    GetPropVector: (propName: string, ...args: string[]) => Vector3

    /**
     * For entity handle props (m_hXXXXX)
     * @param propName - The name of the netvar
     * @returns The entity value of the netvar
     */
    GetPropEntity: (propName: string, ...args: string[]) => Entity

    /**
     * @param value - The float value to set
     * @param propName - The name of the netvar
     */
    SetPropFloat: (value: number, propName: string, ...args: any[]) => void

    /**
     * @param value - The int value to set
     * @param propName - The name of the netvar
     */
    SetPropInt: (value: number, propName: string, ...args: any[]) => void

    /**
     * @param value - The bool value to set
     * @param propName - The name of the netvar
     */
    SetPropBool: (value: boolean, propName: string, ...args: any[]) => void

    /**
     * @param value - The entity value to set
     * @param propName - The name of the netvar
     */
    SetPropEntity: (value: Entity, propName: string, ...args: any[]) => void

    /**
     * @param value - The vector value to set
     * @param propName - The name of the netvar
     */
    SetPropVector: (value: Vector3, propName: string, ...args: any[]) => void

    /**
     * @param propName - The name of the netvar
     * @returns An array of floats
     */
    GetPropDataTableFloat: (propName: string, ...args: any[]) => number[]

    /**
     * @param propName - The name of the netvar
     * @returns An array of bools
     */
    GetPropDataTableBool: (propName: string, ...args: any[]) => boolean[]

    /**
     * @param propName - The name of the netvar
     * @returns An array of ints
     */
    GetPropDataTableInt: (propName: string, ...args: any[]) => number[]

    /**
     * @param propName - The name of the netvar
     * @returns An array of Entity
     */
    GetPropDataTableEntity: (propName: string, ...args: any[]) => Entity[]

    /**
     * @param value - The number value to set
     * @param index - The index of the value to set
     * @param propName - The name of the netvar
     */
    SetPropDataTableFloat: (
        value: number,
        index: number,
        propName: string,
        ...args: any[]
    ) => void

    /**
     * @param value - The bool value to set
     * @param index - The index of the value to set
     * @param propName - The name of the netvar
     */
    SetPropDataTableBool: (
        value: boolean,
        index: number,
        propName: string,
        ...args: any[]
    ) => void

    /**
     * @param value - The integer value to set
     * @param index - The index of the value to set
     * @param propName - The name of the netvar
     */
    SetPropDataTableInt: (
        value: number,
        index: number,
        propName: string,
        ...args: any[]
    ) => void

    /**
     * @param value - The Entity value to set
     * @param index - The index of the value to set
     * @param propName - The name of the netvar
     */
    SetPropDataTableEntity: (
        value: Entity,
        index: number,
        propName: string,
        ...args: any[]
    ) => void
}
