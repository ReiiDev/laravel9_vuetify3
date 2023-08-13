import { defineStore } from 'pinia'

export const myOwnPinia = defineStore('about', {
  state: () => (
    {
      firstName: 'Rey',
      lastName: 'Bichayda',
      wholeName: "",
    }
  ),

  actions: {
    showMyName() {
      this.wholeName += " " + this.firstName + ' ' + this.lastName;
    },
  },
})