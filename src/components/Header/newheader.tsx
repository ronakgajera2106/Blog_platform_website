import * as React from "react";

export default function Header() {
  return (
    <div className="flex gap-5 py-2 pl-8 bg-white max-w-[848px] rounded-[1000px] max-md:flex-wrap max-md:pl-5">
      <div className="flex flex-auto gap-5 my-auto">
        <div className="flex flex-col">
          <div className="text-xs font-semibold leading-4 text-black">
            Location
          </div>
          <div className="text-sm leading-5 text-gray-500">
            Where are you going?
          </div>
        </div>
        <div className="flex flex-col flex-1">
          <div className="text-xs font-semibold leading-4 text-black">
            Check in
          </div>
          <div className="text-sm leading-5 text-gray-500">Add dates</div>
        </div>
        <div className="flex flex-col flex-1">
          <div className="text-xs font-semibold leading-4 text-black">
            Check out
          </div>
          <div className="text-sm leading-5 text-gray-500">Add dates</div>
        </div>
      </div>
      <div className="flex flex-auto gap-5 max-md:flex-wrap max-md:max-w-full">
        <div className="flex flex-col flex-1 my-auto">
          <div className="text-xs font-semibold leading-4 text-black">
            Guests
          </div>
          <div className="text-sm leading-5 text-gray-500">Add guests</div>
        </div>
        <div className="flex flex-1 justify-center items-center p-2 h-12 bg-rose-600 shadow-sm rounded-[100px]">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/201c91b5f5a97f322cecce313bbda4b12c83296105a879c9df4ce8c44d4f2a45?"
            className="w-5 aspect-square"
          />
        </div>
        <div className="flex gap-4 justify-between items-center py-2 pr-2 pl-6 text-sm leading-5 text-gray-500 bg-white border border border-solid shadow-md rounded-[1000px]">
          <div className="self-stretch my-auto font-medium text-black">
            Bordeaux
          </div>
          <div className="self-stretch my-auto">Add dates</div>
          <div className="flex gap-4 self-stretch">
            <div className="my-auto">Add guests</div>
            <div className="flex-1 shrink-0 p-1 h-8 bg-rose-600 shadow-sm rounded-[100px]" />
          </div>
        </div>
      </div>
    </div>
  );
}
