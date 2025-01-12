import { AspectRatio } from "@/components/ui/aspect-ratio";
import { TeamMember } from "@/types/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const TeamMemberCard = ({
  image,
  name,
  designation,
  instagramLink,
  linkedInLink,
  twitterLink,
}: TeamMember) => {
  return (
    <div className="flex flex-col space-y-8">
      <AspectRatio ratio={8 / 10}>
        <Image
          src={image}
          alt={name + "image"}
          fill
          className="h-full w-full object-cover rounded-md"
        />
      </AspectRatio>
      <div>
        <h2 className="text-2xl font-medium">{name}</h2>
        <p className="text-base font-normal">{designation}</p>
        <div className="flex space-x-4 mt-4">
          <Link href={twitterLink}>
            <Image
              src={"/icons/twitter-black.svg"}
              alt={"twitter icon"}
              width={24}
              height={24}
            />
          </Link>
          <Link href={instagramLink}>
            <Image
              src={"/icons/instagram-black.svg"}
              alt={"instagram icon"}
              width={24}
              height={24}
            />
          </Link>
          <Link href={linkedInLink}>
            <Image
              src={"/icons/linkedin-black.svg"}
              alt={"linkedin icon"}
              width={24}
              height={24}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberCard;
