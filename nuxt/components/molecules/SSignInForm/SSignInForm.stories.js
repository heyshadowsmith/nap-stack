import {
  storiesOf
} from '@storybook/vue'
import Stage from '../../presentation/Stage'
import SSignInForm from './SSignInForm'
import '../../../assets/css/main.css'

storiesOf('SSignInForm', module)
  .add('Sign In Form', () => ({
    components: {
      Stage,
      SSignInForm
    },
    template: `<Stage><SSignInForm /></Stage>`
  }))
