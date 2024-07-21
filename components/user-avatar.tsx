"use client";

import { Avatar, AvatarImage } from "@/components/ui/avatar";

type Props = {
  src: string | null;
  email: string;
};

export const UserAvatar = ({ src, email }: Props) => {
  const avatarSrc = src ? src : `https://avatar.vercel.sh/${email}`;

  return (
    <Avatar className="border">
      <AvatarImage src={avatarSrc} />
    </Avatar>
  );
};
