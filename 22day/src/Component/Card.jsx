function Card() {
  

    return (
      <>
        <div className="cardbody">
            <div className="card">
                <div style={{textAlign:"center",color:"grey"}}>FREE</div>
                <h1 className="card-price">$0/month</h1>
                <div style={{textAlign:"center",color:"lightgrey", paddingBottom:"10px"}}>_______________________</div>
                <div className="card-features">
                <div>✔ Single User </div> <br/>
                <div>✔ 50GB Storage</div> <br/>
                <div>✔ Unlimited Public Projects</div> <br/>
                <div>✔ Comunity Access</div> <br/>
                <div style={{color:"lightgray"}}>✘ Unlimited Private Projects</div> <br/>
                <div style={{color:"lightgray"}}>✘ Dedicated Phone Support</div> <br/>
                <div style={{color:"lightgray"}}>✘ Free Subdomain</div> <br/>
                <div style={{color:"lightgray"}}>✘ Monthly Status Reports</div> 
                </div>
                <button className="card-button">Buy Now</button><br/>
            </div>
            <div className="card">
                <div style={{textAlign:"center",color:"grey"}}>FREE</div>
                <h1 className="card-price">$9/month</h1>
                <div style={{textAlign:"center",color:"lightgrey", paddingBottom:"10px"}}>_______________________</div>
                <div className="card-features">
                <div>✔ Single User </div> <br/>
                <div>✔ 50GB Storage</div> <br/>
                <div>✔ Unlimited Public Projects</div> <br/>
                <div>✔ Comunity Access</div> <br/>
                <div>✔ Unlimited Private Projects</div> <br/>
                <div>✔ Dedicated Phone Support</div> <br/>
                <div>✔ Free Subdomain</div> <br/>
                <div style={{color:"lightgray"}}>✘ Monthly Status Reports</div> 
                </div>
                <button className="card-button">Buy Now</button><br/>
            </div>
            <div className="card">
                <div style={{textAlign:"center",color:"grey"}}>FREE</div>
                <h1 className="card-price">$49/month</h1>
                <div style={{textAlign:"center",color:"lightgrey", paddingBottom:"10px"}}>_______________________</div>
                <div className="card-features">
                <div>✔ Single User </div> <br/>
                <div>✔ 50GB Storage</div> <br/>
                <div>✔ Unlimited Public Projects</div> <br/>
                <div>✔ Comunity Access</div> <br/>
                <div>✔ Unlimited Private Projects</div> <br/>
                <div>✔ Dedicated Phone Support</div> <br/>
                <div>✔ Free Subdomain</div> <br/>
                <div>✔ Monthly Status Reports</div> 
                </div>
                <button className="card-button">Buy Now</button><br/>
            </div>
        

            
        </div>
      
      </>
    )
  }
  
  export default Card;