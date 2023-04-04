import { StateType } from '@src/types/stateType'

export class StateModel implements StateType {
    darkMode: boolean

    constructor() {
        this.darkMode = false
    }
}
