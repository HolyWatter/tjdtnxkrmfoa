import HomeContents from "components/home/HomeContents";
import SEO from "components/shared/SEO";

const Home = () => {
  return (
    <>
      <SEO
        title="성수로그"
        description="성수의 개발 성장일지"
        image="/favicon.png"
      />
      {/* <PostSkeleton /> */}
      <HomeContents />
    </>
  );
};

export default Home;
