import logo from '../assets/logo-in-orbit.svg'
import background from '../assets/background-illustration.svg'
import { Plus } from 'lucide-react'
import { Button } from '../componets/ui/button'
import {
    DialogTrigger
  } from '../componets/ui/dialog'
   

export function EmptyGoals() {
    return (
        <div className="h-screen flex flex-col items-center justify-center gap-8">
        <img src={logo} alt="in.orbit" />
        <img src={background} alt="illustration" />
        <p className="text-zinc-300 leading-relaxed max-w-80 text-center">
          Você ainda não cadastrou nenhuma meta, que tal cadastrar um agora
          mesmo?
        </p>

        <DialogTrigger asChild>
          <Button>
            <Plus className="size-4" />
            Cadastrar meta
          </Button>
        </DialogTrigger>
      </div>
    )
}