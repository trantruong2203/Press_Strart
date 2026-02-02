import {
  FaSearch,
  FaUser,
  FaShoppingCart,
  FaBars,
  FaTimes,
  FaSteam,
  FaGamepad,
  FaXbox,
  FaUserShield,
  FaBell,
} from "react-icons/fa";

import { SiEa } from "react-icons/si";
import { useContext, useEffect, useMemo, useState } from "react";
import logo from "../../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { ContextAuth } from "../../contexts/AuthContext";
import UserModal from "./modal/UserModal";
import { Badge } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../../store/store";
import { getOjectByEmail } from "../../services/FunctionRepone";
import { getAllCartItemsThunk } from "../../features/cart_items/CartItemsThunks";
import { setCartOpen } from "../../features/cart_items/CartItemsSlices";
import CartMenu from "./home/CartMenu";

function Header({ handleOpen }: { handleOpen?: () => void }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { accountLogin } = useContext(ContextAuth);
  const [openUserMenu, setOpenUserMenu] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const navigationItems = [
    {
      name: "Game Steam",
      icon: <FaSteam />,
    },
    {
      name: "Game Online",
      icon: <FaGamepad />,
    },
    {
      name: "Xbox Game Pass",
      icon: <FaXbox />,
    },
    {
      name: "Game EA",
      icon: <SiEa />,
    },
    {
      name: "Tài Khoản",
      icon: <FaUserShield />,
    },
  ];

  const cartItems = useSelector((state: RootState) => state.cartItems.cartItems);
  const isCartOpen = useSelector(
    (state: RootState) => (state.cartItems).isCartOpen
  );
  const products = useSelector((state: RootState) => state.product.products);
  const users = useSelector((state: RootState) => state.users.users);

  const userId = getOjectByEmail(users, accountLogin?.email ?? "")?.id;

  useEffect(() => {
    if (accountLogin) dispatch(getAllCartItemsThunk());
  }, [dispatch, accountLogin]);

  const cartItemsCount = useMemo(() => {
    if (!Array.isArray(cartItems)) return 0;
    if (userId) return cartItems.filter((i) => i.user_id === userId).length;
    return cartItems.filter((i) => i.user_id === 0).length;
  }, [cartItems, userId]);

  const userCartItems = useMemo(() => {
    if (!Array.isArray(cartItems)) return [];
    if (userId) return cartItems.filter((i) => i.user_id === userId);
    return cartItems.filter((i) => i.user_id === 0);
  }, [cartItems, userId]);

  const productById = useMemo(() => {
    const map: Record<number, { id: number; name?: string; banner_url?: string }> =
      {};
    products.forEach((p) => {
      map[p.id] = p;
    });
    return map;
  }, [products]);

  return (
    <header className="bg-[#152111] sticky top-0 z-50 border-b border-[#2d4625] shadow-lg">

      {/* Main top bar */}
      <div className="max-w-[1440px] mx-auto px-4 py-3 flex items-center justify-between">

        {/* Logo */}
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => navigate("/")}
        >
          <img
            src={logo}
            className="w-10 h-10 rounded-full object-cover"
          />
          <h1 className="hidden sm:block text-xl font-black tracking-tight text-white">
            GAME<span className="text-[#4cdf20]">MARKET</span>
          </h1>
        </div>

        {/* Search (desktop) */}
        <div className="hidden md:block flex-1 max-w-xl mx-4">
          <div className="relative">
            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search games, DLCs, or genres..."
              aria-label="Search games"
              className="w-full bg-[#1f2b1b] text-white rounded-full px-12 py-3 outline-none border-none focus:ring-2 focus:ring-[#4cdf20]"
            />
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">

          {/* Notifications */}
          <button
            className="relative text-gray-300 hover:text-white"
            aria-label="Notifications"
          >
            <FaBell className="text-lg" />
            <span className="absolute top-0 right-0 w-2 h-2 bg-[#4cdf20] rounded-full"></span>
          </button>

          {/* Cart */}
          <Badge badgeContent={cartItemsCount} color="success">
            <button
              onClick={() => dispatch(setCartOpen(true))}
              className="text-gray-300 hover:text-white"
              aria-label="Shopping Cart"
            >
              <FaShoppingCart className="text-lg" />
            </button>
          </Badge>

          {/* Avatar */}
          {accountLogin ? (
            <button
              onClick={() => setOpenUserMenu(true)}
              className="flex items-center gap-2"
              aria-label="User Menu"
            >
              <div className="w-10 h-10 rounded-full bg-gray-600" />
            </button>
          ) : (
            <Link
              to="/login"
              className="text-gray-300 hover:text-white transition"
              aria-label="Login"
            >
              <FaUser className="text-lg" />
            </Link>
          )}

          {/* Mobile menu toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-300 hover:text-white"
            aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile search */}
      {isMenuOpen && (
        <div className="md:hidden px-4 pb-3">
          <div className="relative">
            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search games..."
              aria-label="Search games"
              className="w-full bg-[#1f2b1b] text-white rounded-full px-12 py-3 outline-none"
            />
          </div>
        </div>
      )}

      {/* Desktop nav */}
      <div className="hidden lg:flex max-w-[1440px] mx-auto px-4 py-3 gap-4">
        <button
          onClick={handleOpen}
          className="flex items-center gap-2 text-gray-300 hover:text-white hover:scale-105 transition mr-4"
          aria-label="Open Categories"
        >
          <FaBars className="text-[#4cdf20]" />
          <span className="text-sm font-bold uppercase">Danh mục</span>
        </button>
        {navigationItems.map((item, idx) => (
          <button
            key={idx}
            className="flex items-center gap-2 text-gray-300 hover:text-white hover:scale-105 transition"
          >
            <span className="text-[#4cdf20]">{item.icon}</span>
            <span className="text-sm font-medium">{item.name}</span>
          </button>
        ))}
      </div>

      {/* Mobile nav */}
      {isMenuOpen && (
        <div className="lg:hidden px-4 pb-4 space-y-3">
          <h3 className="text-[#4cdf20] font-semibold">Danh mục</h3>
          <div className="grid grid-cols-2 gap-2">
            {navigationItems.map((item, idx) => (
              <button
                key={idx}
                className="flex items-center gap-2 bg-[#1f2b1b] px-3 py-2 rounded-lg text-gray-300 hover:bg-[#2d4625] transition"
              >
                <span className="text-[#4cdf20]">{item.icon}</span>
                <span className="text-xs">{item.name}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* User modal */}
      {accountLogin && (
        <UserModal
          openUserMenu={openUserMenu}
          accountLogin={accountLogin}
          onClose={() => setOpenUserMenu(false)}
        />
      )}

      {/* Cart menu */}
      <CartMenu
        open={!!isCartOpen}
        onClose={() => dispatch(setCartOpen(false))}
        userCartItems={userCartItems}
        productById={productById}
      />
    </header>
  );
}

export default Header;
