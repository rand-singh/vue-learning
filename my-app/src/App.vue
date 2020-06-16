<template>
  <div id="app">
    <message>Hello there</message>
    <message>Hello there2</message>

    <counter></counter>
  </div>
</template>

<script>
import Message from './components/Message.vue';
import Counter from './components/Counter.vue';

export default {
  name: 'app',
  components: { Message, Counter },
  data () {
    return {
    }
  }
}
</script>

<style lang="scss">

</style>
