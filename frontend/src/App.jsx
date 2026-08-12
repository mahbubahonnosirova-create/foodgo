import { useEffect } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Header from "./components/Header"
import BottomNav from "./components/BottomNav"

import Home from "./pages/Home"
import Menu from "./pages/Menu"
import Product from "./pages/Product"
import Cart from "./pages/Cart"
import Checkout from "./pages/Checkout"
import OrderSuccess from "./pages/OrderSuccess"
import Orders from "./pages/Orders"
import Favorites from "./pages/Favorites"
import Search from "./pages/Search"
import Profile from "./pages/Profile"
import Settings from "./pages/Settings"

import EditProfile from "./pages/EditProfile"
import Address from "./pages/Address"
import Help from "./pages/Help"
import About from "./pages/About"

export default function App() {

    useEffect(() => {

        const tg = window.Telegram?.WebApp

        if (!tg) return

        tg.ready()
        tg.expand()

    }, [])


    return (
        <BrowserRouter>

            <div className="min-h-screen bg-[#fafafa]">

                <Header />

                <Routes>

                    <Route
                        path="/"
                        element={<Home />}
                    />

                    <Route
                        path="/menu"
                        element={<Menu />}
                    />

                    <Route
                        path="/product/:id"
                        element={<Product />}
                    />

                    <Route
                        path="/cart"
                        element={<Cart />}
                    />

                    <Route
                        path="/checkout"
                        element={<Checkout />}
                    />

                    <Route
                        path="/order-success"
                        element={<OrderSuccess />}
                    />

                    <Route
                        path="/orders"
                        element={<Orders />}
                    />

                    <Route
                        path="/favorites"
                        element={<Favorites />}
                    />

                    <Route
                        path="/search"
                        element={<Search />}
                    />

                    <Route
                        path="/profile"
                        element={<Profile />}
                    />

                    <Route
                        path="/settings"
                        element={<Settings />}
                    />

                    <Route
                        path="/profile/edit"
                        element={<EditProfile />}
                    />

                    <Route
                        path="/profile/address"
                        element={<Address />}
                    />

                    <Route
                        path="/help"
                        element={<Help />}
                    />

                    <Route
                        path="/about"
                        element={<About />}
                    />

                </Routes>

                <BottomNav />

            </div>

        </BrowserRouter>
    )
}