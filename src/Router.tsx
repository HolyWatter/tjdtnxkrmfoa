import AuthGuard from "components/auth-guard";
import Layout from "components/layout";
import EditPage from "pages/edit";
import Home from "pages/home";
import Post from "pages/post";
import PostList from "pages/post-list";
import Search from "pages/search";
import WritePost from "pages/write";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/post/:id" element={<Post />} />
          <Route path="/list/:cid" element={<PostList />} />
          <Route path="/list/" element={<PostList />} />
          <Route path="/search" element={<Search />} />
          <Route element={<AuthGuard />}>
            <Route path="/write" element={<WritePost />} />
            <Route path="/edit/:id" element={<EditPage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
