import React from 'react'
import ReactMarkdown from 'react-markdown';


const MarkdownEdit = ({document, setDocument}) => {
  return (
      <div className='h-screen'><ReactMarkdown className='prose lg:prose-xl'>{document}</ReactMarkdown></div>
  )
}

export default MarkdownEdit
