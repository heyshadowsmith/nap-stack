import {
  storiesOf
} from '@storybook/vue'
import Stage from '../../presentation/Stage'
import SCard from './SCard'
import '../../../assets/css/main.css'

storiesOf('SCard', module)
  .add('Simple', () => ({
    components: {
      Stage,
      SCard
    },
    template: `<Stage><SCard /></Stage>`
  }))
