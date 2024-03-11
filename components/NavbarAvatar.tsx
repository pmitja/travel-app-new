import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"

export function NavbarAvatar() {
  return (
    <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" alt="Avatar image" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  )
}
