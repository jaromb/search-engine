import React, {useState, useEffect} from 'react';
import Senators from '../Data/senators.json'



function Profile(props) {

return(
    <div>
        
        {Senators.filter(senator => senator.person.bioguideid === props.match.params.id).length === 0 ? 
        <p style={{color: 'red', fontSize: 30}}>Error: Invalid request</p>
        :
        Senators.filter(senator => senator.person.bioguideid === props.match.params.id).map(senator => 
        <div style={{textAlign: 'center', lineHeight: .3}}>
            <h2>Senator Profile</h2>
            <div style={{fontSize: 18}}>
                <p>First Name: {senator.person.firstname}</p>
                <p>Last Name: {senator.person.lastname}</p>
                <p>State: {senator.state}</p>
                <p>Rank: {senator.senator_rank_label}</p>
                <p>Address: {senator.extra.address}</p>
                <p>Phone: {senator.phone}</p>
                <p>Website: <a href={senator.website}>Click here</a></p>
                <p>Contact this senator <a href={senator.extra.contact_form}>here</a></p>
            </div>
        </div>    

        )}
    </div>
)
}

export default Profile;