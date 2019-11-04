import {
  storiesOf
} from '@storybook/vue'
import Stage from '../../presentation/Stage'
import SPasswordResetForm from './SPasswordResetForm'
import '../../../assets/css/main.css'

storiesOf('SPasswordResetForm', module)
  .add('Password Reset Form', () => ({
    components: {
      Stage,
      SPasswordResetForm
    },
    template: `<Stage><SPasswordResetForm /></Stage>`
  }))
