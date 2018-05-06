import QuickStart from './pages/QuickStart.md'
import CheeseburgerButton from './pages/CheeseburgerButton.md'

export default [
  { path: '/quick-start', component: QuickStart },
  { path: '/cheeseburger-button', component: CheeseburgerButton },
  { path: '*', redirect: '/quick-start' }
]
