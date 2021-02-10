/**
 *
 * Combine all reducers in this file and export the combined reducers.
 *
 */

import { combineReducers } from '@reduxjs/toolkit'

import starships from './starships/getAll/slice'

/**
 * Merges the main reducer with the router state
 */
const rootReducer = combineReducers({
  starships,
})

export { rootReducer }
