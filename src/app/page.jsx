'use client'
import Image from "next/image";
import { store } from "../store";
import { Provider } from "react-redux";
import ProductPage from "./component/ProductPage";
export default function Home() {
  return (
    <Provider store={store}>
      <main className="">
        <h1 className="font-bold text-3xl">Redux Tutorial</h1>
        <h2 className="text-2xl font-extrabold text-blue-800">Products</h2>
        <ProductPage/>
      
      </main>
    </Provider>
  );
}
