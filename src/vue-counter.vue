<template>
  <div>
    <button @click="decrementAction">-</button>
    <p>{{ this.count }}</p>
    <button @click="incrementAction">+</button>
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
module.exports = {
  props: {
    count: { type: Number },
    incrementAction: { type: Function },
    decrementAction: { type: Function }
  }
};
</script>
