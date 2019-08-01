<script>
  export let count = 100;
  export let incrementAction = () => {
    console.log("count +=1", this);
  };
  export let decrementAction = () => {
    console.log("count -=1", this);
  };
</script>

<style scoped>
  div {
    display: flex;
    margin: 0 auto;
    max-width: 50%;
    align-items: center;
    justify-content: space-around;
  }
</style>

<div>
  <button on:click={decrementAction}>-</button>
  <p>{count}</p>
  <button on:click={incrementAction}>+</button>
</div>
