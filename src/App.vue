<template>
    <div id="app" class="has-background-white-ter">
        <main-header/>
        <div class="section">
            <div class="container">
                <datetime-panel/>
            </div>
        </div>
    </div>
</template>

<script>
  import DatetimePanel from './components/DatetimePanel'
  import MainHeader from './components/MainHeader'

  export default {
    name: 'app',
    components: {
      MainHeader,
      DatetimePanel
    }
  }
</script>

<style lang="scss">
    @import '~bulma/bulma';
</style>
