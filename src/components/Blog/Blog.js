import React from 'react'
import './blog.css'
function Blog() {
  return (
    <section className="blog container section">
      <div className="secContainer">

        <div className="secIntro">
          <h2 className="secTitle">Our best Blog</h2>
          <p>An insight to the incredible experience in the world.rg</p>
        </div>

        <div className="mainContainer grid">
          <div className="singlePost grid">
            <div className="imgDiv">
              <img src='' alt='img name' />

            </div>
            <div className="postDetails">
              <h3>Title</h3>

              <p>
                lorem10
                

              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Blog