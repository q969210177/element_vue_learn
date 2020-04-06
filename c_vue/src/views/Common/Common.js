/* eslint-disable no-unused-vars */
const reducer = (accumulator, currentValue) => accumulator + currentValue;
export default {
  data() {
    return {
      form: {
        groupBuyName: null,
        groupBuyUserName: "",
        groupBuyIdUserTel: "",
        groupBuyIdLouDong: "",
        groupBuyHouseNumber: "",
        groupBuytotalPrice: 0,
        userVegMenu: [],
        checkBoxStaus: [],
        numsControlsStatus: [],
        sizeNum: []
      },
      //后台返的活动信息
      tsertList: null,
      //模态框的参数
      commonDialog: {
        state: false,
        comDialogImgSrc: null,
        comDialogTitle: null,
        comDialogPrompt: null
      },
      //查看详情的图片路径
      comDialogImgSrc: null,
      //表单验证
      nanGupRules: {
        groupBuyUserName: [
          { required: true, message: "请输入姓名", trigger: "blur" },
          { min: 2, max: 5, message: "长度在 2 到 5 个字符", trigger: "blur" }
        ],
        groupBuyIdUserTel: [
          { required: true, message: "请填写手机号", trigger: "blur" },
          { min: 11, max: 11, message: "手机号长度不对", trigger: "blur" },
          {
            pattern: /^1(3|4|5|7|8|9)\d{9}$/,
            message: "暂时只支持大陆手机号",
            trigger: "blur"
          }
        ],
        groupBuyIdLouDong: [
          { required: true, message: "请选择楼栋", trigger: "change" }
        ],
        groupBuyHouseNumber: [
          { required: true, message: "请填写门牌号", trigger: "change" }
        ],
        userVegMenu: [
          {
            type: "array",
            required: true,
            message: "请至少选择一个套餐",
            trigger: "change"
          }
        ]
      },
      loudongList: [
        "1-1栋",
        "1-2栋",
        "2栋",
        "3栋",
        "4栋",
        "5栋",
        "6-1栋",
        "6-2栋",
        "7栋",
        "8栋",
        "9栋",
        "10-1栋",
        "10-2栋",
        "11栋",
        "12栋",
        "13栋",
        "14栋",
        "15栋",
        "16-1栋",
        "16-2栋",
        "17栋",
        "18栋",
        "19栋",
        "20栋",
        "21栋",
        "22栋",
        "23栋",
        "24栋",
        "25-1栋",
        "25-2栋",
        "26栋",
        "27栋",
        "28栋"
      ],
      tolPicArr: []
    };
  },
  beforeMount() {
    this.$get("/nanGuo/nanGuoUserUpdata.php", { nanGuoStatus: "user" }).then(
      res => {
        for (let index = 0; index < res.data.menuUserData.length; index++) {
          this.form.numsControlsStatus.push(true);
        }
        this.form.groupBuyName = res.data.tuanGouName;
        this.tsertList = res.data.menuUserData;
      }
    );
  },
  methods: {
    handSelect(item) {
      this.form.louDong = item.value;
    },
    lookDetails(k) {
      this.commonDialog.state = true;
      this.commonDialog.comDialogImgSrc = this.tsertList[k].imgSrc;
      this.commonDialog.comDialogTitle = this.tsertList[k].name;
    },
    nanGuoSumit(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$post("nanGuo/nanGuoUserUpdata.php", {
            userData: {
              groupBuyName: this.form.groupBuyName,
              groupBuyUserName: this.form.groupBuyUserName,
              groupBuyIdUserTel: this.form.groupBuyIdUserTel,
              groupBuyIdLouDong: this.form.groupBuyIdLouDong,
              groupBuyHouseNumber: this.form.groupBuyHouseNumber,
              groupBuytotalPrice: this.form.groupBuytotalPrice,
              userVegMenu: this.form.userVegMenu
            }
          }).then(res => {
            if (res.data.code !== 0) {
              this.commonDialog = {
                state: true,
                comDialogImgSrc: require("../../assets/img/error.png"),
                comDialogTitle: "提交失败",
                comDialogPrompt: res.data.msg
              };
            } else {
              this.commonDialog = {
                state: true,
                comDialogImgSrc: require("../../assets/img/sucess.png"),
                comDialogTitle: "提交成功",
                comDialogPrompt: res.data.msg
              };
            }
          });
        } else {
          this.$alertMessage({
            text: "表单验证未通过",
            type: "error",
            show: true,
            duration: 5000
          });
          return false;
        }
      });
    },
    //check状态改变的事件
    checkRow(v, k) {
      this.form.numsControlsStatus[k] = !this.form.numsControlsStatus[k];
      if (this.form.numsControlsStatus[k] === true) {
        //未选中的情况
        this.form.sizeNum[k] = 0;
        this.tolPicArr[k] = 0 * v.pic;
        this.buyTotaPic(this.tolPicArr);
      } else {
        //已选中的情况
        this.form.sizeNum[k] = 1;
        this.form.userVegMenu[k] = { id: v.groupbuyId - 1, num: 1 };
        this.tolPicArr[k] = 1 * v.pic;
        this.buyTotaPic(this.tolPicArr);
      }
    },
    //当数值改变的时候
    vegMenuChange(nums, v, k) {
      this.form.userVegMenu[k] = { id: v.groupbuyId - 1, num: nums };
      this.tolPicArr[k] = nums * v.pic;
      this.buyTotaPic(this.tolPicArr);
    },
    //总价计算
    buyTotaPic(arr) {
      this.form.groupBuytotalPrice = arr.reduce(reducer);
    }
  }
};
