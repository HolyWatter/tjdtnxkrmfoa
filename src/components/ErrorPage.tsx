import Text from "./shared/Text";

const ErrorPage = () => {
  return (
    <div className="bg-gray-800 flex justify-center items-center fixed top-0 left-0 right-0 bottom-0 flex-col">
      <Text color="white" size="xl">
        시스템 오류입니다.
      </Text>
      <Text color="white" size="xl">
        불편을 끼쳐드려 죄송합니다.
      </Text>
      <button
        onClick={() => {
          window.location.href = window.origin;
        }}
        className="px-10 py-y rounded-md text-navy bg-gray-200 mt-10"
      >
        재시도
      </button>
    </div>
  );
};

export default ErrorPage;
