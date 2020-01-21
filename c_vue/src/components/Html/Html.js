export default {
  data() {
    return {
      test: "",
      articleDataList: ""
    };
  },
  mounted() {
    //let a = this.$store.state.NavigationListId;
    // this.test = this.$store.state.NavigationListId ;

    this.getNavigationList(this.$route.params.id);
  },
  methods: {
    changeInput() {
      let dom = document.getElementById("aaaa").value;
      console.log(dom);
    },
    getNavigationList(id) {
      this.$get("articlelist/articlelist.php", {
        articleId: id
      }).then(res => {
        this.articleDataList = res.data;
        //console.log(res);
      });
    }
  },
  watch: {
    $route() {
      this.getNavigationList(this.$route.params.id);
    }
  }
};
