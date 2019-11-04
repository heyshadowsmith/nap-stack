import {
  storiesOf
} from '@storybook/vue'
import Stage from '../../presentation/Stage'
import SInput from './SInput'
import '../../../assets/css/main.css'

storiesOf('SInput', module)
  .add('Simple', () => ({
    components: {
      Stage,
      SInput
    },
    template: `<Stage><SInput /></Stage>`
  }))
  .add('With label', () => ({
    components: {
      Stage,
      SInput
    },
    template: `<Stage><SInput label="Example label" /></Stage>`
  }))
  .add('With placeholder', () => ({
    components: {
      Stage,
      SInput
    },
    template: `<Stage><SInput label="Example label" placeholder="Example placeholder" /></Stage>`
  }))
