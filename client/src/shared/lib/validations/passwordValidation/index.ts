import { REQUIRED_FIELD } from "@/shared/lib/constants";

const passwordValidation = {
  required: REQUIRED_FIELD,
  pattern: {
    value: /^.{6,}$/,
    message: "Некорректный пароль",
  },
}

export default passwordValidation