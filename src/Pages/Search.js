import React, {useState, useEffect} from 'react';
import Senators from '../Data/senators.json'
import { Link, Redirect } from 'react-router-dom'
import Profile from '../Pages/Profile'

function Search() {

const [senators, setSenators] = useState(Senators)

/* party filter */
const [party, setParty] = useState('All')

const handlePartySelect = (e) => {
  setParty(e.target.value)
  setSenators(Senators.filter(e.target.value !== 'All' ? senator => senator.party === e.target.value : senator => senator.current === true)
    .filter(state !== 'All' ? senator => senator.state === state : senator => senator.current === true)
    .filter(rank !== 'All' ? senator => senator.senator_rank_label === rank : senator => senator.current === true)
    .filter(nameSearch !== '' ? senator => senator.person.name.toLowerCase().includes(nameSearch) : senator => senator.current === true)
    .filter(tweetSearch !== '' ? senator => senator.person.twitterid.toLowerCase().includes(nameSearch) : senator => senator.current === true)
    )
}

/* state filter */
const [state, setState] = useState('All')

const handleStateSelect = (e) => {
  setState(e.target.value)
  setSenators(Senators.filter(e.target.value !== 'All' ? senator => senator.state === e.target.value : senator => senator.current === true)
    .filter(rank !== 'All' ? senator => senator.senator_rank_label === rank : senator => senator.current === true)
    .filter(party !== 'All' ? senator => senator.party === party : senator => senator.current === true)
    .filter(nameSearch !== '' ? senator => senator.person.name.toLowerCase().includes(nameSearch) : senator => senator.current === true)
    .filter(tweetSearch !== '' ? senator => senator.person.twitterid.toLowerCase().includes(nameSearch) : senator => senator.current === true)
    )
}

/* rank filter */
const [rank, setRank] = useState('All')

const handleRankSelect = (e) => {
  setRank(e.target.value)
  setSenators(Senators.filter(e.target.value !== 'All' ? senator =>  senator.senator_rank_label === e.target.value : senator => senator.current === true)
    .filter(state !== 'All' ? senator => senator.state === state : senator => senator.current === true)
    .filter(party !== 'All' ? senator => senator.party === party : senator => senator.current === true)
    .filter(nameSearch !== '' ? senator => senator.person.name.toLowerCase().includes(nameSearch) : senator => senator.current === true)
    .filter(tweetSearch !== '' ? senator => senator.person.twitterid.toLowerCase().includes(nameSearch) : senator => senator.current === true)
    )
}

/* name filter */
const [nameSearch, setNameSearch] = useState('')

const handleSearchChange = (e) => {
  console.log('handleSearchChange')
  setNameSearch(e.target.value)
  setTweetSearch('')
  setSenators(Senators.filter(e.target.value !== '' ? senator => senator.person.name.toLowerCase().includes(e.target.value) : senator => senator.current === true)
    .filter(state !== 'All' ? senator => senator.state === state : senator => senator.current === true)
    .filter(party !== 'All' ? senator => senator.party === party : senator => senator.current === true)
    .filter(rank !== 'All' ? senator => senator.senator_rank_label === rank : senator => senator.current === true)
  )
}

const [tweetSearch, setTweetSearch] = useState('')

const handleTweetSearchChange = (e) => {
  console.log('handleTweetSearch')
  setTweetSearch(e.target.value)
  setNameSearch('')
  setSenators(Senators.filter(e.target.value !== '' ? senator => senator.person.twitterid.toLowerCase().includes(e.target.value) : senator => senator.current === true)
    .filter(state !== 'All' ? senator => senator.state === state : senator => senator.current === true)
    .filter(party !== 'All' ? senator => senator.party === party : senator => senator.current === true)
    .filter(rank !== 'All' ? senator => senator.senator_rank_label === rank : senator => senator.current === true)
  )
}

 /* sorting by name =>>>>>> */ Senators.sort((a, b) => a.person.sortname.localeCompare(b.person.sortname))
 
 const states = ['All','AK','AL','AR','AZ','CA','CO','CT','DE','FL','GA',
 'HI','IA','ID','IL','IN','KS','KY','LA','MA','MD','ME',
 'MI','MN','MO','MS','MT','NC','ND','NE','NH','NJ','NM','NV','NY',
 'OH','OK','OR','PA','RI','SC','SD','TN','TX','UT',
 'VA','VT','WA','WI','WV','WY'] 

  
  return (
   

    <div className="App">
      <body>
        <div class="search">
          <h2 style={{marginBottom: 0}}>SEARCH BY</h2>
          <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginBottom: 0}}>
            <div class="search-field">
              <h3 style={{marginBottom: 10}}>Name</h3>
              <input style={{width: "70%", fontSize: 20, border: '1px solid gray'}} value={nameSearch} onChange={handleSearchChange}></input>
            </div>
            <h3 style={{marginBottom: 10}}>OR</h3>
            <div class="search-field">
              <h3 style={{marginBottom: 10}}>TwitterID</h3>
              <input style={{width: "70%", fontSize: 20, border: '1px solid gray'}} value={tweetSearch} onChange={handleTweetSearchChange}></input>
            </div>
          </div>
          <div style={{display: 'flex', flexDirection: 'row', justifyContent:'center', alignItems: 'center', borderBottom: '2px solid black'}}>
            <p style={{marginRight: 20, fontSize: 18}}>Filters:</p>
            <p style={{fontSize: 15, marginRight: 5}}>Party</p>
            <select style={{fontSize: 10}} value ={party} onChange={handlePartySelect}>
              <option>All</option>
              <option>Republican</option>
              <option>Democrat</option>
            </select>
            <p style={{fontSize: 15, marginRight: 5, marginLeft: 15}}>State</p>
            <select style={{ fontSize: 10, }} value={state} onChange={handleStateSelect}>
                {states.map((state) => 
                <option>{state}</option>
                )}
            </select>
            <p style={{fontSize: 15, marginRight: 5, marginLeft: 15}}>Rank</p>
            <select style={{ fontSize: 10}} value={rank} onChange={handleRankSelect}>
                  <option>All</option>
                  <option>Senior</option>
                  <option>Junior</option>
            </select>
          </div>
        </div>

        <div class="senator-list">
          <h2 style={{marginBottom: 3, marginTop: 20}}>US Senators (2013-2019)</h2>
          <h3 style={{marginTop: 0, fontWeight: 400, marginBottom: 3}}>In alphabetical order by surname</h3>
          <h3 style={{marginTop: 0, fontWeight: 400, marginBottom: 3}}>({senators.length} Results)</h3>      

            <div style={{display: 'flex', flexDirection: 'column', flexWrap: 'wrap'}}>   
           
            {senators.length === 0 ? 
              <p style={{color: 'red'}}>No results matching your query</p>
              :
              senators.map(senator=>
              <div>
              <ul style={{listStyle:'none', padding: 0, display: 'flex', flexDirection: 'column', marginTop: 10, marginBottom: 3}}>
                <li style={{fontWeight: 500, fontSize: 20}}>{senator.person.name}</li>
                <li>{senator.description}</li>
                {/* <li style={{fontSize: 18, fontWeight: 480}}>{senator.party}</li> */}
                {/* <li style={{fontStyle: 'em', display: 'flex', flexDirection: 'column'}}>
                  <em style={{margin: 0}}>Address: {senator.extra.office}</em>
                  <i style={{margin: 0}}>Washington, DC 20510</i>
                </li> */}
                <li style={{fontStyle:'italic'}}>Twitter Handle: {senator.person.twitterid}</li>
                <Link
                  to={"/senator-profile/" + senator.person.bioguideid}>See more details</Link>
              </ul>
              {/* <Profile id={senator.person.bioguideid} /> */}
              </div>
            )}
       
            </div>   
        </div>
      </body>
    </div>
    
              
  );
}

export default Search;
