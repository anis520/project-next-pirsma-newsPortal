"use client";
import {
  addCategorys,
  getAllCategorys,
  getDeleteCategorys,
} from "@/store/features/news/newsApiSlice";
import { getNewsData, setMessageEmpty } from "@/store/features/news/newsSlice";
import cn from "@/utility/cn";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import {
  FaBars,
  FaChevronCircleRight,
  FaNewspaper,
  FaRegEdit,
  FaRegTrashAlt,
  FaSearch,
  FaTable,
  FaToggleOff,
  FaToggleOn,
  FaUserCircle,
} from "react-icons/fa";
import { MdAdd } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";

export default function Home() {
  const dispatch = useDispatch();
  const [addModel, setAddModel] = useState(false);
  const [input, setInput] = useState({ name: null });
  const { categorys, message, error } = useSelector(getNewsData);

  const handleCreateCategory = () => {
    dispatch(addCategorys(input));
  };

  useEffect(() => {
    if (message) {
      setInput({ name: null });
      toast.success(message);
      setAddModel(false);
    }
    if (error) {
      toast.error(error);
    }
    dispatch(setMessageEmpty());
  }, [error, message, dispatch]);

  const handleDeleteCategory = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "To delete category " + item.name,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",

      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(getDeleteCategorys(item));
      }
    });
  };

  return (
    <div className="p-5 w-10/12">
      <p className="text-gray-600 text-xl font-semibold my-2 flex justify-between items-center">
        All Categorys{" "}
        <button
          onClick={() => setAddModel(true)}
          className="text-white bg-cyan-400 text-sm px-3 py-1 rounded-md flex items-center justify-center "
        >
          <MdAdd /> Create
        </button>
      </p>
      <hr />

      <div class="relative overflow-x-auto mt-3">
        <table class="w-full text-sm text-left  rtl:text-right text-gray-500  bg-slate-100  ">
          <thead class="text-xs text-gray-700 uppercase       bg-white border ">
            <tr>
              <th scope="col" class="px-6 py-3 w-8/12">
                Categorys name
              </th>
              <th scope="col" class="px-6 py-3 w-2/12">
                Status
              </th>

              <th scope="col" class="px-6 py-3 w-2/12">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className=" ">
            {categorys?.map((item, index) => (
              <tr key={index} class="  border-b   ">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                >
                  {item?.name}
                </th>
                <td class="px-6 py-2 ">
                  {!item?.status ? (
                    <button className=" ">
                      <FaToggleOff size={25} />{" "}
                    </button>
                  ) : (
                    <button className="text-green-400">
                      {" "}
                      <FaToggleOn size={25} />
                    </button>
                  )}
                </td>
                <td class="px-6 text-lg py-4 flex gap-2">
                  <FaRegEdit className="text-blue-400 cursor-pointer" />
                  <FaRegTrashAlt
                    onClick={() => handleDeleteCategory(item)}
                    className="text-red-500 cursor-pointer"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* <=====================add model======================> */}
      {addModel && (
        <div className="fixed top-0 left-0   w-full h-full bg-black bg-opacity-40 flex items-center justify-center">
          <div
            className="absolute left-0 top-0 w-full h-full "
            onClick={() => setAddModel(false)}
          ></div>
          <div className={cn("w-5/12 p-5 bg-white rounded-md z-10")}>
            <p className="font-semibold text-gray-700">Add new</p>
            <hr />
            <div className="my-2">
              <label htmlFor="category">Name</label>
              <input
                id="category"
                className="w-full mt-2 border outline-cyan-400 p-2 rounded-md"
                type="text"
                value={input.name}
                onChange={(e) => setInput({ ...input, name: e.target.value })}
                name="name"
              />
            </div>

            <div className=" mt-4 flex items-center justify-end gap-4">
              <button
                onClick={handleCreateCategory}
                className="px-2 py-1 rounded-md bg-blue-400 text-white"
              >
                Save
              </button>
              <button
                onClick={() => setAddModel(false)}
                className="px-2 py-1 rounded-md border"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
