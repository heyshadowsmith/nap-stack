import {
  storiesOf
} from '@storybook/vue'
import Stage from '../../presentation/Stage'
import SSignUpForm from './SSignUpForm'
import '../../../assets/css/main.css'

storiesOf('SSignUpForm', module)
  .add('Sign Up Form', () => ({
    components: {
      Stage,
      SSignUpForm
    },
    template: `<Stage><SSignUpForm /></Stage>`
  }))
