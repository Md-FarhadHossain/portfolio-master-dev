import React from 'react'
import blogimg from '../../assets/blog.jpg'

const Blog = () => {
  return (
    <div className='bg-white pl-8 py-5 rounded-lg mb-8'>
        <p >Blog</p>
        <div className='flex lg:flex-row md:flex-row flex-col'>
            <h1 className="text-3xl">How to organize your CSS</h1>
            <img className='rounded-l-lg w-80' src={blogimg} alt="" />
        </div>
        <div className='pr-8'>
        <p className='mt-5 mb-8'>In this article I tell the story about Proin eu justo sit amet lacus bibendum tincidunt. Vivamus non volutpat nisl, a luctus mi.</p>
        <p className='mb-16'>Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.</p>

        <div>
            <span className="link">dev.to</span>
        </div>
        </div>
    </div>
  )
}

export default Blog