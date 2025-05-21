import React, { useState } from 'react'
import { toast } from 'react-toastify';

const Create = (props) => {
   let feeds = (props.feeds);
   let setfeeds = props.setfeeds

    const [userFeed, setuserFeed] = useState({
        name:"",
        phone:"",
        image:"",
        message:""
    })

    const handleOnChange = (e) => {
      let {name , value} = e.target
      setuserFeed({...userFeed , [name]:value})
    }

    const handleOnSubmit = (e) => {
        e.preventDefault()
       console.log(userFeed);
       let newfeeds = [...feeds]
       newfeeds.push(userFeed)
       setfeeds(newfeeds)
       setuserFeed({
        name:"",
        phone:"",
        image:"",
        message:""
       })
       toast.success("Comment added sucessfully")
    }
    console.log(feeds);
    const handleClear = (e) => {
    //      setuserFeed({
    //     name:"",
    //     phone:"",
    //     image:"",
    //     message:""
    //    })
    }

  return (
    <div className='h-full w-[50%] bg-[#fff]  p-10'>
        <h1 className='text-center text-3xl'>Add Comment</h1>
        <form  onSubmit={handleOnSubmit} action="">
            <div className="item flex flex-col mb-3">
                <h4 className='text-[12px] text-start px-1 '>Name</h4>
                <input onChange={handleOnChange} value={userFeed.name} name='name' className='border-2 px-3 py-2.5 w-full rounded-md mt-2 border-slate-800 outline-none' type="text" placeholder='Enter Your name hare' />
            </div>

             <div className="item flex flex-col mb-3 ">
                <h4 className='text-[12px] text-start px-1 '>Phone</h4>
                <input onChange={handleOnChange} value={userFeed.phone} name='phone' className='border-2 px-3 py-2.5 w-full rounded-md mt-2 border-slate-800 outline-none' type="number" placeholder='Enter Your Phone hare' />
            </div>

              <div className="item flex flex-col mb-3">
                <h4 className='text-[12px] text-start px-1 '>Image</h4>
                <input onChange={handleOnChange} value={userFeed.image} name='image' className='border-2 px-3 py-2.5 w-full rounded-md mt-2 border-slate-800 outline-none' type="text" placeholder='Enter Your Image Address hare' />
            </div>

             <div className="item flex flex-col mb-3">
                <h4 className='text-[12px] text-start px-1 '>Image</h4>
                <textarea required minLength={10} onChange={handleOnChange} value={userFeed.message} name='message' style={{resize:"none"}} rows={7} className='border-2 px-3 py-2.5 w-full rounded-md mt-2 border-slate-800 outline-none' type="text" placeholder='Enter Your Message Address hare' />
            </div>

            <div onClick={handleClear} className="buttons w-full flex items-center justify-around">
                <span className='py-2.5 px-10 w-80 bg-red-500 text-white flex items-center justify-center rounded-md'>Cancel</span>
                <button type='submit' className='py-2.5 px-10 w-80 bg-blue-500 text-white rounded-md'>Submit</button>
            </div>

        </form>
    </div>
  )
}

export default Create