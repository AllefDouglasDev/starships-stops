import {
  shallowEqual,
  TypedUseSelectorHook,
  useSelector as useReduxSelector,
} from 'react-redux'
import { RootState } from 'store/types'

export const useSelector: TypedUseSelectorHook<RootState> = <TSelected>(
  selector: (state: RootState) => TSelected
): TSelected => useReduxSelector(selector, shallowEqual)
