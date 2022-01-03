import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div class="min-h-screen bg-local bg-gradient-to-b from-red-500 to-pink-400 via-red-400 via-red-375 saturate-125 flex items-center justify-center">
      <button class="p-6 mt-34 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4 ring-1  bg-gradient-to-br from-green-300 via-blue-400 to-purple-300 saturate-200 drop-shadow-xl ">
        <div class="flex-shrink-0">
          <img class="h-40 w-40" src="/seafoomtransparent.svg" alt="me"></img>
        </div>
        <div>
          <div class="text-xl font-medium text-black">OO</div>
          <p class="text-gray-500">Check me out!</p>
        </div>
      </button>
    </div>
  );
}
