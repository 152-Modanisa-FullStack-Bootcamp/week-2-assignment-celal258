<template>
<div id="spinner">
  <img src="../assets/Ajux_loader.gif"/>
</div>
</template>

<script>
export default {
  name: "LoadingSpinner"
}
</script>

<style scoped>
#spinner{
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(18,18,18);
}
</style>