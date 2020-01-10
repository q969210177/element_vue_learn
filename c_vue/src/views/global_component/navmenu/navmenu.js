/* eslint-disable no-console */
export default {
  name: "navmenu",
  data() {
    return {
      menu: null,
      publicBol: {
        true: true,
        false: false
      },
      clickBol: false,
      defaultPath: window.location.hash.substring(1)
    };
  },
  methods: {
    // eslint-disable-next-line no-unused-vars
    addHeader(name, path, id) {
      let storeHeader = { name: name, path: path, id: id };
      this.$store.state.breadcrumbData[1] = storeHeader;
    }
  },
  beforeMount() {}
};
