Vue.component("modal", {
  props: ["info"],
  data() {
    return {
      isVisible: true,
    };
  },
  template: `
      <div class="modal is-active">
        <div class="modal-background"></div>
        <div class="modal-content box">
          <slot></slot>
        </div>
        <button class="modal-close is-large" aria-label="close" @click="$emit('close')"></button>
      </div>
  `,
});

new Vue({
  el: "#root",

  data: {
    showModal: false,
  },
});

let store = {
  user: {
    name: "jon",
  },
};

new Vue({
  el: "#one",

  data: {
    foo: "bar",
    shared: store,
  },
});

new Vue({
  el: "#two",

  data: {
    foo: "bar",
    shared: store,
  },
});
