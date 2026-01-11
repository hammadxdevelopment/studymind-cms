import { ServiceCard } from './HeroCardGrid'
import LocalAuthoritiesImage from '../../assets/LocalAuthorities.png'
import SchoolImage from '../../assets/School.png'
import ParentsImage from '../../assets/Parents.png'
import MultiAcademyImage from '../../assets/MultiAcademy.png'

const cards: ServiceCard[] = [
  {
    id: 1,
    label: 'Local Authorities',
    image: LocalAuthoritiesImage,
  },
  {
    id: 3,
    label: 'Schools',
    image: SchoolImage,
  },
  {
    id: 2,
    label: 'Parents',
    image: ParentsImage,
  },
  {
    id: 4,
    label: 'Multi Academy Trusts',
    image: MultiAcademyImage,
  },
]

export default cards
