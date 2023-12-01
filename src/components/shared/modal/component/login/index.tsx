import axiosInstance from "apis/axios-instance";
import Input from "components/shared/input/default-input";
import useInput from "hooks/useInput";
import useHandleModal from "hooks/useOpenModal";
import { useSlidePopup } from "hooks/useSlidePopup";
import Cookies from "js-cookie";
import { useQueryClient } from "react-query";

const Login = () => {
  const queryClient = useQueryClient();
  const openPopup = useSlidePopup();
  const { closeModal } = useHandleModal();
  const [loginValue, inputLoginValue] = useInput<LoginValue>({
    email: "",
    password: "",
  });

  const submitLoginForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await axiosInstance.post("/auth/login", loginValue);
    if (res.status === 200) {
      Cookies.set("accessToken", res.data.accessToken);
      Cookies.set("refreshToken", res.data.refreshToken);
      openPopup("로그인 되었습니다.");
      queryClient.invalidateQueries("currentUser");
      closeModal();
    }
  };

  return (
    <form
      onSubmit={submitLoginForm}
      className="flex flex-col gap-5 px-7 py-16 xs:py-10"
    >
      <p className="text-center mb-10 text-3xl">로그인</p>
      <Input
        type="email"
        name="email"
        value={loginValue.email}
        onChange={inputLoginValue}
        placeholder="아이디를 입력해주세요"
      />
      <Input
        type="password"
        name="password"
        placeholder="비밀번호를 입력해주세요"
        value={loginValue.password}
        onChange={inputLoginValue}
      />
      <button className="bg-navy py-2 text-white rounded-md shadow-md mt-5">
        로그인 하기
      </button>
      <button
        onClick={closeModal}
        className="bg-gray-400 py-2 text-white rounded-md shadow-md"
      >
        닫기
      </button>
    </form>
  );
};

export default Login;

interface LoginValue {
  email: string;
  password: string;
}
