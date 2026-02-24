import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function InputInline() {
  return (
    <div className="mt-20 flex justify-center">
      <div className="flex w-full max-w-2xl gap-2 text-neutral-50 mb-20 ">
        <Input
          type="search"
          placeholder="Buscar fotógrafos ou agências..."
          className="h-15 flex-1 text-base"
        />
        <Button
          size="lg"
          variant="neutral"
         className="h-15 px-6  border p0.5">
          Buscar
        </Button>
      </div>
    </div>
  )
}
