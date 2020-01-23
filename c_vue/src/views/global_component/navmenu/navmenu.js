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
      clickBol: false
    };
  },
  methods: {
    // eslint-disable-next-line no-unused-vars
    addHeader(item, bol) {
      // eslint-disable-next-line no-unused-vars
      let NavigationListId = sessionStorage.getItem("token");
      if (item.itemMenuId !== undefined) {
        NavigationListId = NavigationListId.replace(
          NavigationListId[9],
          item.itemMenuId
        );
        sessionStorage.setItem("token", NavigationListId);
      }

      let storeHeader = {
        name: item.itemMenuId ? item.itemMenuName : item.menuName,
        path: item.itemMenuId ? item.itemMenuPath : item.menuPath,
        id: item.itemMenuId ? item.itemMenuId : item.menuId
      };
      if (bol) {
        this.$router.push({
          path: item.menuPath
        });
      } else {
        this.$router.push({
          path: item.itemMenuPath + "/" + item.itemMenuId
        });
      }
      this.$store.state.breadcrumbData[0] = storeHeader;
      this.$store.state.NavigationListId = item.itemMenuId;
      // this.$router.push({
      //   path: item.itemMenuId ? item.itemMenuPath : item.menuPath,
      //   query: { id: item.itemMenuId }
      // });
    }
  },
  beforeMount() {}
};
