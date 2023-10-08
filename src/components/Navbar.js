import Image from "next/image";
import React, { useState } from "react";
import Heading from "./Heading";
import Button from "./Button";
import Li from "./Li";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import MobileNavbar from "./MobileNav";
import { useGetCategoryQuery } from "@/Redux/category/categoryApi";

const Navbar = () => {
  const { data: session } = useSession();
  const [categoryShow, setCategoryShow] = useState(false);
  const { data, isLoading } = useGetCategoryQuery();
  if (isLoading) {
    return <h1 className="text-center my-2 font-semibold">Loading....</h1>;
  }

  const handleCategory = () => {
    setCategoryShow(!categoryShow);
  };

  return (
    <div className="bg-gray-100 ">
      <div className="hidden md:block">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <Link href={"/"} className="py-3">
            <Button>PC-Bulder</Button>
          </Link>
          <div>
            <ul className="flex items-center">
              <Link href={"/"}>
                <Li>Home</Li>
              </Link>
              <li
                onMouseEnter={handleCategory}
                onMouseLeave={handleCategory}
                className="mr-3 font-semibold cursor-pointer py-2"
              >
                <div className="relative">
                  <h1 className="">Category</h1>
                  <div>
                    {categoryShow && (
                      <ul className="absolute top-8 right-[-70px] duration-300 bg-white rounded-md pt-2  w-[200px] border">
                        {data?.data.map((category, i) => (
                          <Link
                            href={`/category/${category._id}`}
                            key={category._id}
                          >
                            <li
                              className={`px-3 cursor-pointer hover:text-[#4361ee] ${
                                i !== 0 && "mt-2 border-t"
                              } `}
                            >
                              {category.name}
                            </li>
                          </Link>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </li>
              {session?.user ? (
                <li>
                  <button
                    onClick={signOut}
                    className="bg-red-500 px-3 py-2 rounded-md text-white mr-3 hover:bg-gray-600 duration-300"
                  >
                    Log out
                  </button>
                </li>
              ) : (
                <Link href={"/login"}>
                  {" "}
                  <Li>Login</Li>
                </Link>
              )}
              <Link href={"/pc-build"}>
                <li>
                  <Button>PC Builder</Button>
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
      <MobileNavbar />
    </div>
  );
};

export default Navbar;
