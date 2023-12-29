import AuthGuard from "components/auth-guard";
import Layout from "components/layout";
import { ModalContextProvider } from "context/ModalContext";
import EditPage from "pages/Edit";
import Home from "pages/Home";
import Post from "pages/Post";
import PostList from "pages/PostList";
import Search from "pages/SearchPage";
import WritePost from "pages/WritePostPage";
import { Suspense } from "react";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Router = () => {
  return (
    <Suspense fallback={<></>}>
      <BrowserRouter>
        <HelmetProvider>
          <ModalContextProvider>
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
          </ModalContextProvider>
        </HelmetProvider>
      </BrowserRouter>
    </Suspense>
  );
};

export default Router;
