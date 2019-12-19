export default {
  data() {
    return {
      dialogVisible: false
    };
  },
  methods: {
    handleClose(done) {
      console.log(done);
    },
    open() {
      if (this.dialogVisible) {
        console.log("真");
      } else {
        console.log("假");
      }
      console.log(this);
      console.log(this.dialogVisible);
    }
  }
};
