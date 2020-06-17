export default {
  template: `
    <div>{{ message | capitalise }}</div>
  `,

  props: ["message"], // for example: <notification message="Thanks so much">

  filters: {
    capitalise(message) {
      return message.toUpperCase();
    },
  },

  data() {
    return {
      message: "Hello World",
    };
  },
};
