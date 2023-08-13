import { defineStore } from 'pinia'



export const useCounterStore = defineStore('counter', {
  state: () => ({ count: 0, name: 'REYYYYYYYY POGI' }),
  getters: {
    doubleCount: (state) => state.count * 2,
  },
  actions: {
    increment() {
      this.count++
    },
  },
})




// (---------------OTHERRRRRRR WAY SETUP/COMPOSITION API-----------------)
// import { ref, computed } from 'vue';
// export const useCounterStore = defineStore('counter', () => {
//   const count = ref(0)
//   const name = ref('REYYYYYYYY POGI')
//   const doubleCount = computed(() => count.value * 2)
//   function increment() {
//     count.value++
//   }

//   return { count, name, doubleCount, increment }
// })

// In Composition Stores:
// ref()s become state properties
// computed()s become getters
// function()s become actions