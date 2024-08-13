"use client"

import {
  CalendarIcon,
  HomeIcon,
  LogInIcon,
  LogOutIcon,
  SearchIcon,
} from "lucide-react"
import { Button } from "./ui/button"
import { SheetClose, SheetContent, SheetHeader, SheetTitle } from "./ui/sheet"
import Link from "next/link"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog"
import { signIn, signOut, useSession } from "next-auth/react"
import { Avatar, AvatarImage } from "./ui/avatar"

const Sidebar = () => {
  const { data } = useSession()

  const handleLoginWithGoogle = () => signIn("google")
  const handleLogout = () => signOut()

  return (
    <SheetContent className="overflow-y-auto">
      <SheetHeader>
        <SheetTitle className="text-left">Menu</SheetTitle>
      </SheetHeader>

      <div className="flex items-center justify-between gap-3 border-b border-solid py-5">
        {data?.user ? (
          <div className="flex items-center">
            <Avatar>
              <AvatarImage src={data?.user?.image ?? ""} />
            </Avatar>

            <div>
              <p className="font-bold">{data.user.name}</p>
              <p className="text-sm">{data.user.email}</p>
            </div>
          </div>
        ) : (
          <>
            <h2 className="text-lg font-bold">Hello, please login!</h2>
            <Dialog>
              <DialogTrigger asChild>
                <Button size="icon">
                  <LogInIcon />
                </Button>
              </DialogTrigger>
              <DialogContent className="w-[90%]">
                <DialogHeader>
                  <DialogTitle>Please, login!</DialogTitle>
                  <DialogDescription>
                    You can login with your Google Account!
                  </DialogDescription>
                </DialogHeader>

                <Button
                  onClick={handleLoginWithGoogle}
                  variant="outline"
                  className="gap-1 font-bold"
                >
                  <SearchIcon />
                  Google
                </Button>
              </DialogContent>
            </Dialog>
          </>
        )}
      </div>

      <div className="flex flex-col gap-1 border-b border-solid py-5">
        <SheetClose asChild>
          <Button className="justify-start gap-2" asChild>
            <Link href="/">
              <HomeIcon size={18} />
              Home
            </Link>
          </Button>
        </SheetClose>

        <Button className="justify-start gap-2" variant="ghost">
          <CalendarIcon size={18} />
          Appointments
        </Button>
      </div>

      <div className="flex flex-col gap-1 border-b border-solid py-5">
        {/* Implement Service Options Later */}
      </div>

      <div className="flex flex-col gap-1 border-b border-solid py-5">
        <Button
          onClick={handleLogout}
          variant="ghost"
          className="justify-start gap-2"
        >
          <LogOutIcon size={18} />
          Log Out
        </Button>
      </div>
    </SheetContent>
  )
}

export default Sidebar
