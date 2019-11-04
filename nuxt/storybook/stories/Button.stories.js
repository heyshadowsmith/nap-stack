import {
  storiesOf
} from '@storybook/vue'
import Button from '../../components/Button'
import '../../assets/css/main.css'

storiesOf('Buttons', module)
  .add('Button', () => ({
    components: {
      Button
    },
    template: '<Button class="bg-blue-400">Button</Button>'
  }))
