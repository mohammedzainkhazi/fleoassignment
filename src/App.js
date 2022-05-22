import React, { useState } from 'react';
import Card from './Card';
import './App.css';
import './Style.css';
import 'react-treeview/react-treeview.css';

function App() {
  const [factoryA, setfactoryA] = useState(false);
  const [factoryB, setfactoryB] = useState(false);
  const [root, setroot] = useState(false);


  return (
    <>
    <h1 style={{marginLeft:"20px",borderRadius:"20px",border:"2px solid black",opacity:"0.5",backgroundColor:"green",textAlign:"center",width:"600px",color:"white"}}>Tata Steel Statistics</h1>
    <div className="container">
			<div className="row">
				<div className="tree">
					<ul>
						<li onClick={()=>setroot(true)}> <a><Card name="TATA STEEL" total={300} target={400} status="Off Track" complete={50}/></a>
						{
              root && <ul id="root">
							<li onClick={()=>setfactoryA(true)}><a><Card name="Factory A" total={20} target={100} status="At Risk" complete={20}/></a>
							{
                factoryA && <ul id="level3">
								<li> <a><Card name="Godown A" total={20} target={100} status="At Risk" complete={20}/></a> </li>
								<li> <a><Card name="Godown B" total={70} target={100} status="On Track" complete={70}/></a> </li>
							</ul>
              }
						</li>
						  <li onClick={()=>setfactoryB(true)}><a><Card name="Factory B" total={150} target={200} status="On Track" complete={75}/></a>
							{
                factoryB && <ul id="level3">
								<li> <a><Card name="Godown A" total={20} target={100} status="At Risk" complete={20}/></a> </li>
								<li> <a><Card name="Godown B" total={150} target={200} status="On Track" complete={75}/></a> </li>
								<li> <a><Card name="Godown C" total={30} target={100} status="Off Track" complete={30}/></a> </li>
							</ul>
              }
						</li>
							<li id="level2"><a><Card name="Factory C" total={30} target={100} status="Off Track" complete={30}/></a></li>
						</ul>
            }
						</li>
					</ul>
				</div>
		</div>
	</div>
  </>
  );
}

export default App;