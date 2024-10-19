import { log } from 'console'
import React from 'react'
type DOC = {
    id: number,
    name: string,
    status: "Signed" | "Draft" | "Expired"
}
export default function DocumentList({ mini }: {mini: boolean}) {
    const docs: DOC[] = [
        {id: 1, name:"Employement Agreement", status: "Signed"},
        {id: 2, name:"Acquirement Agreement", status: "Draft"},
        {id: 3, name:"Employement Agreement", status: "Signed"},
        {id: 4, name:"Acquirement Agreement", status: "Draft"},
    ]
    const displaydocs = mini? docs.slice(0,2): docs 
    
  return (
    <div className={`grid gap-2 grid-cols-1`}>
        {displaydocs.map((doc) => (
            <div key={doc.id} className='p-4 rounded-md bg-bgmint'>
                <h2 className='font-bold'>{doc.name}</h2>
                <p className='text-sm'>Status: {doc.status}</p>
            </div>
        ))}
    </div>
  )
}
