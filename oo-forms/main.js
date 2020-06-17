class Errors {
  constructor() {
    this.errors = {};
  }

  has(field) {
    return this.errors.hasOwnProperty(field);
  }

  any() {
    return Object.keys(this.errors).length > 0;
  }

  get(field) {
    if (this.errors[field]) {
      return this.errors[field];
    }
  }

  record(error) {
    this.errors = error;
  }

  clear(field) {
    if (field) {
      delete this.errors[field];
      return;
    }
    this.errors = {};
  }
}

class Form {
  constructor(data) {
    this.originalData = data;

    for (let field in data) {
      this[field] = data[field];
    }

    this.errors = new Errors();
  }

  data() {
    let data = Object.assign({}, this);

    delete data.originalData;
    delete data.errors;

    return data;
  }

  reset() {
    for (let field in this.originalData) {
      this[field] = "";
    }
  }

  submit(requestType, url) {
    axios[requestType](url, this.data())
      .then(this.onSuccess.bind(this))
      .catch(this.onFail.bind(this));
  }

  onSuccess(response) {
    console.log(response.data.message);
    this.errors.clear();
    this.reset();
  }

  onFail(error) {
    this.errors.record({
      name: "name is required",
      description: "description is required",
    });
  }
}

new Vue({
  el: "#root",

  data: {
    form: new Form({
      name: "",
      description: "",
    }),
  },

  methods: {
    onSubmit() {
      this.form.submit("post", "http://dummy.restapiexample.com/api/v1/create");
    },
  },
});
