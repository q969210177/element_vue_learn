export default {
  data() {
    return {
      articleDataList: ""
    };
  },
  beforeMount() {
    this.getNavigationList(this.$store.state.NavigationListId);
  },
  mounted() {},
  methods: {
    getNavigationList(id) {
      this.$get("/articlelist/articlelist.php", {
        articleId: id
      }).then(res => {
        this.articleDataList = res.data;
        //console.log(res);
      });
    }
  },
  watch: {
    $route() {
      this.getNavigationList(this.$store.state.NavigationListId);
    }
  }
};
