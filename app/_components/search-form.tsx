"use client";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import React, { useState } from "react";

const SearchForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState<string>("");

  function closeDialog() {
    setIsOpen(false);
    setSearchTerm("");
  }

  return (
    <Dialog
      open={isOpen}
      onOpenChange={(open) => {
        if (searchTerm == "") {
          closeDialog();
          setIsOpen(open);
        }
      }}
    >
      <DialogTrigger asChild onClick={() => setIsOpen(true)}>
        <button className="hidden lg:flex bg-secondary text-text2 py-2 rounded-md pl-5 pr-3 space-x-9">
          <span className="text-text1">What are you looking for?</span>
          <Image
            src={"/icons/search-black.svg"}
            height={24}
            width={24}
            alt="search-icon"
          />
        </button>
      </DialogTrigger>
      <DialogContent className="bg-white border-none" blur>
        <DialogHeader>
          <DialogTitle className="text-center text-xl">
            Search anything
          </DialogTitle>
          <DialogDescription className="sr-only">
            Search for products and more...
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col">
          <Input onChange={(e) => setSearchTerm(e.target.value)} />
          <div>
            <div className="h-30">{searchTerm}</div>
          </div>
        </div>

        <DialogClose onClick={() => closeDialog()}>
          <Image
            src={"/icons/cancel-icon.svg"}
            width={24}
            height={24}
            alt="cancel-icon"
          />
          <span className="sr-only">Close</span>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
};

export default SearchForm;
