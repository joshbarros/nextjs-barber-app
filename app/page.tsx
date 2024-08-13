import { SearchIcon } from "lucide-react"

import Header from "./_components/header"

import { Button } from "./_components/ui/button"
import { Input } from "./_components/ui/input"
import BarbershopItem from "./_components/barbershop-item"
import BookingItem from "./_components/booking-item"

import { db } from "./_lib/prisma"

const Home = async () => {
  const barbershops = await db.barbershop.findMany({})
  console.log(barbershops)

  return (
    <div>
      <Header />
      <div className="p-5">
        <h2 className="text-xl font-bold">Hi, Josh!</h2>
        <p>Tuesday, August 13th.</p>

        <div className="mt-6 flex items-center gap-2">
          <Input placeholder="Search for a service..." />
          <Button>
            <SearchIcon />
          </Button>
        </div>

        <div className="mt-6 flex gap-3 overflow-x-scroll [&::-webkit-scrollbar]:hidden">
          <Button className="gap-2" variant="secondary">
            Hair
          </Button>

          <Button className="gap-2" variant="secondary">
            Beard
          </Button>

          <Button className="gap-2" variant="secondary">
            Special
          </Button>
        </div>

        <div className="relative mt-6 h-[150px] w-full">
          {/* Add Banner Image */}
        </div>

        <BookingItem />

        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
          Recommended
        </h2>

        <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
          {barbershops.map((barbershop) => (
            <BarbershopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>

        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
          Popular
        </h2>

        <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
          {barbershops.map((barbershop) => (
            <BarbershopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home
