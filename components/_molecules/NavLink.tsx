"use client"
import Link from "next/link"
import { DownArrow } from "../_atoms/Icons/DownArrow"
import { UpArrow } from "../_atoms/Icons/UpArrow"
import { useState } from "react"

export function NavLink({ menuItems }: { menuItems: any }) {
  const itemsArray = menuItems?.items ?? []
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const mainItems = itemsArray.filter((item: any) =>
    Array.isArray(item["machine-name"])
      ? item["machine-name"].includes("main")
      : item["machine-name"] === "main"
  )

  const sortedItems = mainItems.sort((a: any, b: any) => {
    const aParent = Number(
      Array.isArray(a.hierarchy) ? a.hierarchy[0] : (a.hierarchy ?? 0)
    )
    const bParent = Number(
      Array.isArray(b.hierarchy) ? b.hierarchy[0] : (b.hierarchy ?? 0)
    )
    const aChild = Number(
      Array.isArray(a.hierarchy) && a.hierarchy[1] ? a.hierarchy[1] : 0
    )
    const bChild = Number(
      Array.isArray(b.hierarchy) && b.hierarchy[1] ? b.hierarchy[1] : 0
    )
    return aParent !== bParent ? aParent - bParent : aChild - bChild
  })

  const menuTree: any[] = []
  const parentMap: Record<number, any> = {}

  sortedItems.forEach((item: any) => {
    const hierarchy = Array.isArray(item.hierarchy)
      ? item.hierarchy
      : [item.hierarchy ?? 0]
    const parentIndex = Number(hierarchy[0])
    const childIndex = hierarchy[1] !== undefined ? Number(hierarchy[1]) : null

    if (childIndex === null) {
      parentMap[parentIndex] = { ...item, children: [] }
      menuTree.push(parentMap[parentIndex])
    } else {
      if (parentMap[parentIndex]) {
        parentMap[parentIndex].children.push(item)
      } else {
        menuTree.push({ ...item, children: [] })
      }
    }
  })

  const toggleMenu = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index))
  }

  return (
    <>
      {menuTree.map((parent: any, idx: number) => (
        <li key={idx} className="relative">
          <div className="flex items-center justify-between px-2 py-2 text-white hover:text-gray-300">
            <Link href={parent.href} className="flex-1">
              {parent.title}
            </Link>

            {parent.children.length > 0 && (
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault()
                  e.stopPropagation()
                  toggleMenu(idx)
                }}
                className={`mx-2 transition-transform duration-200 ${
                  openIndex === idx ? "rotate-180" : "rotate-0"
                }`}
              >
                {openIndex ? <UpArrow /> : <DownArrow />}
              </button>
            )}
          </div>

          {parent.children.length > 0 && openIndex === idx && (
            <ul className="absolute mt-1 text-white rounded">
              {parent.children.map((child: any, cIdx: number) => (
                <li
                  key={cIdx}
                  className="relative px-4 py-2 my-2 rounded-full bg-white/10 backdrop-blur hover:bg-white/20 hover:text-gray-200 ring-2 ring-red-900"
                >
                  <Link
                    className="whitespace-nowrap text-ellipsis max-w-full block"
                    href={child.href}
                    onClick={(e) => setOpenIndex(null)}
                  >
                    {child.title}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </>
  )
}
