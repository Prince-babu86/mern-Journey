import React from 'react'

const Feed = (props) => {

     let feeds = (props.feeds);
   let setfeeds = props.setfeeds


   const handleDelete = (name) => {
    console.log(name);
   }

   let renderComments = feeds.map((feed , idx)=>{
    return  <div className="comment  flex bg-slate-100 p-4 rounded-md mb-2">
                <img className='w-10 h-10 mt-1 rounded-full object-cover object-top' src={feed.image} alt="" />
                <div className='ml-3 w-[90%]'>
                    <h3>{feed.name} : <span className='text-sm'>{feed.phone}</span></h3>
                    <h4 className='text-[12px] '>{feed.message}</h4>
                </div>
                <span onClick={()=>handleDelete(feed.name)} className='text-sm text-red-500'>Delete</span>
            </div>
   })

   console.log(renderComments);

  return (
    <div className='h-full w-[50%]  p-10'>
        <div className="comments">
            <h1 className='text-center text-3xl mb-5'>comments</h1>
           
{renderComments}
            
            
        </div>
    </div>
  )
}

export default Feed