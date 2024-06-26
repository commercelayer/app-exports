import { getRelationshipsByResourceType } from './relationships'
import {
  exportRelationships,
  isResourceWithRelationship
} from '#data/relationships'

describe('getRelationshipsByResourceType', () => {
  test('Should retrieve a list of relationships', () => {
    expect(getRelationshipsByResourceType('bundles')).toMatchObject([
      'sku_list',
      'sku_list_items',
      'tags'
    ])
  })

  test('Should retrieve a list of relationships for all ResourceWithRelationship types', () => {
    Object.keys(exportRelationships).forEach((resourceType) => {
      if (!isResourceWithRelationship(resourceType)) {
        return false
      }

      expect(getRelationshipsByResourceType(resourceType)).toMatchObject(
        exportRelationships[resourceType]
      )
    })
  })
})
