import { CommerceLayerStatic } from '@commercelayer/sdk'
import { type ApiError } from 'App'

export function parseApiError(err: any): ApiError[] {
  if (CommerceLayerStatic.isApiError(err) && Array.isArray(err.errors)) {
    console.error(err.errors)
    return err.errors
  } else {
    return [
      {
        title: err.message ?? 'Could not create the export task',
        detail: err.message ?? 'Could not create the export task'
      }
    ]
  }
}
