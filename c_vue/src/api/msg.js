import { Message } from "element-ui";

export function Msg(option, fn = null) {
  Message({
    message: option.text,
    type: option.type,
    showClose: option.show,
    duration: option.duration,
    onClose: fn
  });
}

// console.log(option);
