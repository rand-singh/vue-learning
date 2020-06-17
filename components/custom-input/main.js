Vue.component("coupon", {
  props: ["code"],

  template: `
    <input type="text" :value="code" @input="updateCode($event.target.value)">
  `,

  methods: {
    updateCode(code) {
      this.$emit("input", code);
    },
  },
});

new Vue({
  el: "#root",

  data: {
    coupon: "FREEBIE",
  },
});
