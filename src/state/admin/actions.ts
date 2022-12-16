import { createAction } from '@reduxjs/toolkit'
import { Owner } from './types'

export const setOwner = createAction<{ owner: string }>('admin/owner')
