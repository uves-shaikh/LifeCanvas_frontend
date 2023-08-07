import React from 'react'
import './post.css'

const Post = () => {
    return (
        <div className='post'>
            <div className="image">
                <img src="https://blogs.windows.com/wp-content/uploads/prod/sites/2/2023/07/MSFT_2023_B01_Static800.png" alt="" />
            </div>
            <div className="text">
                <h2>Is your IT team making trade-offs to support the new world of flexible work?</h2>
                <p className="info">
                    <a href="" className="author">Parth</a>
                    <time>03-08-2023 02:46 PM</time>
                </p>
                <p className='summary'>In the last few years, we’ve witnessed a significant shift in how IT decision makers support their organizations. With the rapid acceleration of distributed workforces, companies are dealing with a matrix of vendors and point solutions born out of necessity. But the need to improve security, provide employees with flexibility in device choice while keeping them productive, and get employees up and running more quickly to accelerate time to value is driving vendor consolidation with the goal of reducing costs and complexity.

                    Companies looking for integrated, flexible work solutions don’t need to make trade-offs: the right solution brings value to employees by giving them choice without sacrificing security and productivity. And IT teams can find value by focusing less on device management and more on strategic responsibilities that have been proven to boost employee satisfaction.</p>
            </div>
        </div>
    )
}

export default Post