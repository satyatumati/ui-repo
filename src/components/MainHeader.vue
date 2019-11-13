<template>
    <div>
        <section class="hero is-primary">
            <div class="hero-body">
                <div class="container">
                    <h1 class="title">{{headerTitle}}</h1>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
  export default {
    props: {
      headerTitle: {type: String, default: 'Satya\'s Datepicker'}
    },
    data: function () {
      return {}
    }
  }
</script>

<style lang="scss" scoped>
</style>
