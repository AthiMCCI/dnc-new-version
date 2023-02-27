
import {useState} from 'react';
import '../App.css';
import { Button } from 'antd';

function Dashboard(props)
{
    const [cards] = useState
    ([
        {
            title : 'Gateways',
            text :  'Online=5 , Offline=4',
        },

        {
            title : 'Devices',
            text :  'Total = 10 , Assigned = 7'
        },
        {
            title : 'Locations',
            text :  'Total = 20 , Assigned = 7'
        },
        {
            title : 'Organization',
            text :  'Total = 10 '
        },
        {
            title : 'Users',
            text :  'Total = 20 , blocked = 4'
        },
       
    ])
    
    return(
    <div>
        <h1> Welcome </h1>
        <section>
            <div  className="dash">
                <div className = "cards">
                    {
                    cards.map((card, i) => (
                    <div key = {i} className= "card">
                        <h3>{card.title}</h3>
                        <p>{card.text}</p>
                        <Button  className="btn" href="Preferences" > view Details > </Button>
                    </div>
                    ))
                    }
                </div>
            </div>
        </section>
    </div>
    );
}

export default Dashboard;

