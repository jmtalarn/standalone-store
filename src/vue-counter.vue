export default {
<template>
  <div>
    <button>-</button>
    <p>{{ count }}</p>
    <button>+</button>
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
  data: function() {
    return { count: 0 };
  }
};
</script>

}
