import React from "react";
import { useAuthStore } from "../store/useAuthStore";
import { LogOut, MessageSquare, Settings, User } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { authUser, logout } = useAuthStore();

  return (
    <header className="border-b border-base-300 w-full sticky top-0 z-40 backdrop-blur-lg bg-base-100/80">
      <div className="container mx-auto h-16 px-4">
        <div className="flex items-center justify-between h-full">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2.5 hover:opacity-80 transition-all"
          >
            <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <MessageSquare className="size-5 text-primary" />
            </div>

            <h1 className="text-xl font-bold">WeTalk</h1>
          </Link>

          {/* Right Side */}
          <div className="flex items-center gap-2">
            <Link to="/settings">
              <button className="btn btn-sm gap-2">
                <Settings className="size-4" />
                <span className="hidden sm:inline">Settings</span>
              </button>
            </Link>

            {authUser && (
              <>
                <Link to="/profile">
                  <button className="btn btn-sm gap-2">
                    <User className="size-4" />
                    <span className="hidden sm:inline">
                      {authUser.username}
                    </span>
                  </button>
                </Link>

                <button
                  onClick={logout}
                  className="btn btn-sm btn-outline gap-2"
                >
                 <LogOut className="size-4" />
                 <span className="hidden sm:inline">Logout</span>
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;