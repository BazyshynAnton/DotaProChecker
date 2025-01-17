'use client'

import { AppDispatch } from '@/store/store'
import { useDispatch } from 'react-redux'

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
