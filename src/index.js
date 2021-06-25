// import { reactive } from '@vue/reactivity'
import { reactive } from './vue3/reactivity'
const user = reactive({
  name: 'z',
  age: 18,
  address: {
    province: 'jl',
    city: 'yb'
  }
})
// user.name = 'f'
/* user.hobbies = ['music', 'soccer']
user.hobbies[0] = 'basketball'
user.hobbies.push('music') */
user.education = [
  {
    name: 'school1'
  }
]
user.education[0]['name'] = 'school2'
