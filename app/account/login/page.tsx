
import { AnimatedGroup } from '@/components/ui/animated-group'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import Link from 'next/link'

export default function LoginPage() {
    return (
        <section className="relative flex min-h-screen items-center justify-center bg-neutral-950 px-4">

    {/* Background glow */}
    <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/3 h-72 w-72 -translate-x-1/2 rounded-full bg-indigo-600/20 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-72 w-72 rounded-full bg-purple-600/20 blur-3xl" />
    </div>

    <form
        className="w-full max-w-md rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 shadow-2xl shadow-black/40">

        {/* Header */}
        <div className="text-center">
            <h1 className="text-2xl font-semibold text-white">
                Bem-vindo de volta!
            </h1>
            <p className="mt-2 text-sm text-zinc-400">
                Faça login para continuar
            </p>
        </div>

        {/* Inputs */}
        <div className="mt-8 space-y-5">
            <div className="space-y-2">
                <Label htmlFor="email" className="text-sm text-zinc-300">
                    Email
                </Label>
                <Input
                    type="email"
                    required
                    id="email"
                    className="bg-white/5 border-white/10 focus-visible:ring-1 focus-visible:ring-indigo-500"
                />
            </div>

            <div className="space-y-2">
                <div className="flex justify-between">
                    <Label htmlFor="pwd" className="text-sm text-zinc-300">
                        Senha
                    </Label>
                    
                </div>

                <Input
                    type="password"
                    required
                    id="pwd"
                    className="bg-white/5 border-white/10 focus-visible:ring-1 focus-visible:ring-indigo-500"
                />
                <Link
                        href="#"

                        className="text-xs
                         text-neutral-400
                          hover:text-neutral-50 transition 
                          flex justify-end
                           pt-1">
                        Esqueceu a senha?
                    </Link>
            </div>

            <Button 
            variant='neutral'
            className="w-full font-medium border-white/10 bg-white/7 hover:bg-white/15 text-white hover:text-white/80 focus-visible:ring-neutral-900/50 active:scale-[0.98] transition-all duration-300 border p-0.5">
                Entrar
            </Button>
        </div>

       

        {/* NHConta */}
        <p className="mt-8 text-center text-sm text-zinc-400">
            Não tem uma conta?
            <Link
                href="./registrar"
                className="ml-1 text-zinc-300 hover:text-zinc-50 transition ">
                Criar uma
            </Link>
        </p>
    </form>
</section>

    )
}
