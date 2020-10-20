import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import MealsScreen from  './screens/MealsScreen'
import LoginScreen from './screens/login'
import RegisterScreen from './screens/Register'
import Modal from './screens/Modal'
import AuthLoading from './screens/AuthLoading'

const onBoardingNavigator = createStackNavigator({
  Login: LoginScreen,
  Register: RegisterScreen
}, {
  initialRouteName: 'Login'
})

const app_navigator = createStackNavigator({
  Meals: {
    screen: MealsScreen
  }
}, {
  initialRouteName: 'Meals'
})

const root_stack = createStackNavigator({
  Main: app_navigator,
  Modal: Modal
}, {
  mode: 'modal',
  headerMode: 'none'
})

const base_stack = createSwitchNavigator({
  AuthLoading,
  OnBoarding: onBoardingNavigator,
  Root: root_stack
}, {
  initialRouteName: 'AuthLoading'
})


export default createAppContainer(base_stack)