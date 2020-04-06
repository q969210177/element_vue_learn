import { Message } from "element-ui";

export function Msg(option, fn = null) {
  // console.log(option);
  Message({
    message: option.text,
    type: option.type ? option.type : "success",
    showClose: option.show ? option.showClose : false,
    duration: option.duration ? option.duration : 1500,
    onClose: fn
  });
}
