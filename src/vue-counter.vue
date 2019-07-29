<template>
  <div>
    <button v-on:click="count--">-</button>
    <p>{{ this.count }}</p>
    <button v-on:click="count++">+</button>
  </div>
</template>
<style scoped>
div {
  display: flex;
  margin: 0 auto;
  max-width: 50%;
  align-items: center;
  justify-content: space-around;
}
</style>
<script>
console.log(this);
module.exports = {
  data: () => ({
    count: 0
  })
  // methods: {
  //   incrementAction: () => {
  //     this.count++;
  //   },
  //   decrementAction: () => {
  //     this.count--;
  //   }
  // }
  // props: {
  //   count: { type: Number },
  //   incrementAction: { type: Function },
  //   decrementAction: { type: Function }
  // }
};
</script>
