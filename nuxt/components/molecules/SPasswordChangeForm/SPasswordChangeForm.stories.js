import {
  storiesOf
} from '@storybook/vue'
import Stage from '../../presentation/Stage'
import SPasswordChangeForm from './SPasswordChangeForm'
import '../../../assets/css/main.css'

storiesOf('SPasswordChangeForm', module)
  .add('Password Change Form', () => ({
    components: {
      Stage,
      SPasswordChangeForm
    },
    template: `<Stage><SPasswordChangeForm /></Stage>`
  }))
