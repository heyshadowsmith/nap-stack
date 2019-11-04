import {
  configure
} from '@storybook/vue'
import '../assets/css/main.css'

function loadStories() {
  const req = require.context('../components', true, /\.stories\.js$/)
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module);
