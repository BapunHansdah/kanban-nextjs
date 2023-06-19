import styles from "./Tab.module.css"

export default function Tab({children}) {
  return (
    <div className={"flex items-center gap-2 text-grey text-base font-medium border text-sm border-grey rounded-md py-[10px] px-[15px]"}>{children}</div>
  )
}
