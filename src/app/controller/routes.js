import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LoginPage } from "../../auth/controller/login_page";
import { RegisterPage } from "../../auth/controller/register_page";
import { MyBooksPage } from "../../books/controller/my_books_page";
import { BookInfoPage } from "../../books/controller/book_info_page";
import { Navbar } from "../view/navbar";
import { AllBooksPage } from "../../books/controller/all_books_page";
import { BookAttributesPage } from "../../books/controller/book_attributes/book_attributes_page";
import { MainPage } from "./main_page";


const authenticatedRouter = createBrowserRouter([
    {
      path: "/main",
      element: <>
      <Navbar/>
      <MainPage/>
    </>
    },
    {
      path: "/books-read",
      element: <>
      <Navbar/>
      <MyBooksPage/>
    </>
    },
    {
      path: "/books",
      element: <>
      <Navbar/>
      <AllBooksPage/>
    </>
    },
    {
      path: "/book/:id",
      element: <>
      <Navbar/>
      <BookInfoPage/>
    </>
    },
    {
      path: "/book-attributes",
      element: <>
      <Navbar/>
      <BookAttributesPage/>
    </>
    },
    {
      path: "*",
      element: <>
      <Navbar/>
      <MainPage/>
    </>
    },
  ]);

  const unauthenticatedRouter = createBrowserRouter([
    {
      path: "/register",
      element: <>
        <Navbar/>
        <RegisterPage/>
      </>
    },
    {
      path: "/login",
      element: <>
      <Navbar/>
      <LoginPage/>
    </>
    },
    {
      path: "*",
      element: <>
      <Navbar/>
      <LoginPage/>
    </>
    },
  ]);

export const useRoutes = isAuthenticated => {
    return <RouterProvider router={isAuthenticated ? authenticatedRouter : unauthenticatedRouter}/>
    
}