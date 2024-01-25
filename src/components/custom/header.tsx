import { Card } from "../ui/card"
import { ModeToggle } from "./mode-toggle"

interface DashboardHeaderProps {
    heading: string
    text?: string
    children?: any
  }
  
  export function Header({
    heading,
    text,
    children,
  }: DashboardHeaderProps) {
    return (
     <Card className="p-5  m-1 mt-2 rounded-sm">
         <div className="flex items-center justify-between px-2">
        <div className="grid gap-1">
          <h1 className="font-heading text-3xl md:text-4xl">{heading}</h1>
          {/* {text && <p className="text-lg text-muted-foreground">{text}</p>} */}
        </div>
      <div className="flex items-center justify-between px-2 gap-10">
      {children?.map((child:any)=>(
            <a href="#">{child?.name}</a>
        ))}
            <ModeToggle/>
      </div>
      </div>
     </Card>
    )
  }