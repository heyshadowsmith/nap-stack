import {
  storiesOf
} from '@storybook/vue'
import Stage from '../../presentation/Stage'
import SPasswordInput from './SPasswordInput'
import '../../../assets/css/main.css'

storiesOf('SPasswordInput', module)
  .add('Simple', () => ({
    components: {
      Stage,
      SPasswordInput
    },
    template: `<Stage><SPasswordInput /></Stage>`
  }))
  .add('With label', () => ({
    components: {
      Stage,
      SPasswordInput
    },
    template: `<Stage><SPasswordInput label="Example label" /></Stage>`
  }))
  .add('With placeholder', () => ({
    components: {
      Stage,
      SPasswordInput
    },
    template: `<Stage><SPasswordInput label="Example label" placeholder="Example placeholder" /></Stage>`
  }))
