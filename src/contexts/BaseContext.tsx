import { createContext, Dispatch, SetStateAction, useState } from 'react'
import { BasePropsType } from '@src/types/bobPropsType'
import { StateModel } from '@src/models/stateModel'
import { StateType } from '@src/types/stateType'


export class BaseContextModel {
  state: StateType
  setState: Dispatch<SetStateAction<StateModel>>

  constructor() {
    this.state = new StateModel()
    this.setState = () => {}
  }
}

export const BaseContext = createContext<BaseContextModel>(new BaseContextModel())

export default function Context({ children }: BasePropsType) {
  const [state, setState] = useState<StateModel>(new StateModel())

  return (
    <BaseContext.Provider value={{ state, setState }}>
      { children }
    </BaseContext.Provider>
  )
}
