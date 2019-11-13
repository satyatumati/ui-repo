<template>
    <div class="tile is-ancestor is-vertical">
        <div class="tile is-parent is-vertical">
            <div class="tile is-child box">
                <datetime v-model="dateValue"></datetime>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    data: function () {
      return {
        dateValue: ''
      }
    }
  }
</script>

<style lang="scss" scoped>
</style>
