import { StateType } from '@src/types/stateType'

export class StateModel implements StateType {
    htmlClassName: string

    constructor() {
        this.htmlClassName = ''
    }
}