import React, {useState} from 'react';
import Senators from '../Data/senators.json'

function Home() {

const [senators, setSenators] = useState(Senators)


/* party filter */
const [party, setParty] = useState('All')
  
  return (
    <div className="App">
      

        <div class="senator-list">
          <h2 style={{marginBottom: 3, marginTop: 20}}>US Senators (2013-2019)</h2>
          <h3 style={{marginTop: 0, fontWeight: 400, marginBottom: 3}}>In alphabetical order by surname</h3>   

            <div style={{display: 'flex', flexDirection: 'column', flexWrap: 'wrap'}}>   
           
            {
              senators.map(senator=>
              <ul style={{listStyle:'none', padding: 0, display: 'flex', flexDirection: 'column', marginTop: 10, marginBottom: 3}}>
                <li style={{fontWeight: 500, fontSize: 20}}>{senator.person.name}</li>
                <li>{senator.description}</li>
                {/* <li style={{fontSize: 18, fontWeight: 480}}>{senator.party}</li> */}
                {/* <li style={{fontStyle: 'em', display: 'flex', flexDirection: 'column'}}>
                  <em style={{margin: 0}}>Address: {senator.extra.office}</em>
                  <i style={{margin: 0}}>Washington, DC 20510</i>
                </li> */}
                <li style={{fontStyle:'italic'}}>Twitter Handle: {senator.person.twitterid}</li>
              </ul>
            )}
            </div>   
        </div>
      
    </div>
  );
}

export default Home;
