import {
  storiesOf
} from '@storybook/vue'
import Stage from '../../presentation/Stage'
import SButton from './SButton'
import '../../../assets/css/main.css'

storiesOf('SButtons', module)
  .add('Primary', () => ({
    components: {
      Stage,
      SButton
    },
    template: `<Stage><SButton>Primary</SButton></Stage>`
  }))
  .add('Disabled', () => ({
    components: {
      Stage,
      SButton
    },
    template: `<Stage><SButton type="disabled">Disabled</SButton></Stage>`
  }))
  .add('Block', () => ({
    components: {
      Stage,
      SButton
    },
    template: `<Stage><SButton display="block">Block</SButton></Stage>`
  }))
