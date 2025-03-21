import React from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    // const [data,setData]= useState([]) 
    // useEffect(() => {
    //     fetch('https://api.github.com/users/Pratikkp-code')
    //     .then(response => response.json())
    //     .then(data =>{
    //         console.log(data);
    //         setData(data)
    //     })
    // }, [])
  return (
    <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img
                            src="./src/assets/undraw_open-source_g069.png" alt="image2.png"
                            
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12 ">
                        <h1 className='text-center text-3xl text-gray-900 font-bold md:text-4xl'>
                          Github Follower : {data.followers}
                        </h1>
                        
                    </div>
                </div>
    
  )
}

export default Github

export const githubInfo = async () => {
  const res = await fetch('https://api.github.com/users/Pratikkp-code')
  return res.json()
}
