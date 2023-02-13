import { AllowedResourceType } from 'App'
import { Orders } from './Orders'
import { Skus } from './Skus'
import { Prices } from './Prices'
import { AllFilters } from 'AppForm'

interface Props {
  resourceType: AllowedResourceType
  onChange: (filters: AllFilters) => void
}

export const resourcesWithFilters = ['orders', 'skus', 'prices']

export function Filters({ resourceType, onChange }: Props): JSX.Element | null {
  if (resourceType === 'orders') {
    return <Orders onChange={onChange} />
  }

  if (resourceType === 'skus') {
    return <Skus onChange={onChange} />
  }

  if (resourceType === 'prices') {
    return <Prices onChange={onChange} />
  }

  return null
}