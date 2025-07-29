import { Button } from "@/components/ui/button"; // apna custom button (shadcn/ui)
import { User } from "lucide-react";             // icon from lucide


export function Header() {
  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
         <div>
  <img
    src="/logo.jpg"
    alt="SABZA Logo"
    className="h-16 w-19"
  />
  
</div>
          <div>
        
            {/* <p className="text-lg  font-semibold text-gray-600">Project Validation Dashboard</p> */}
          </div>
        </div>
       <div className="flex items-center gap-3">
  
  <Button size="sm" className="bg-green-600 hover:bg-green-700 p-2">
    <User className="w-4 h-4 text-white" />
  </Button>
</div>

      </div>
    </header>
  )
}
