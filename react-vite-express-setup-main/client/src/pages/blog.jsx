import './pageStyle.css';

function Blog() {
    return (
        <div className="blog">
            <div className="blog_container">
                <div className="blog_item">
                    <img src="images/blog1.png" alt="blog1" className="blog_img" />
                    <div className="blog_text">
                        <h3>How to make your clothes last longer</h3>
                        <p>By: <span className="blog_author">Tehila Shoham</span></p>
                        <p>Posted on: <span className="blog_date">May 20, 2021</span></p>
                        <p>It is no secret that the fashion industry is one of the most polluting industries in the world.
                            The fashion industry is responsible for 10% of annual global carbon emissions, more than all international
                            flights and maritime shipping combined. The fashion industry is also the second-largest consumer of the world’s
                            water supply. It takes around 2,000 gallons of water to make a typical pair of jeans. The fashion industry is also
                            responsible for 20% of all industrial water pollution worldwide. The fashion industry is also responsible for 20%
                            of all industrial water pollution worldwide.</p>
                        <p>Read more...</p>
                    </div> 
                </div>
            </div>
        </div>
    );
}
export default Blog;