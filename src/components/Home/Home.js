import React from 'react';
import Header from '../Header/Header';
import { Link } from 'react-router-dom';

function Home() {
    {
        let shelves = ['A', 'B', 'C', 'D']
        shelves = shelves.map((x, i) => {
            return (
                <div key={i}>
                    <Link to={"/Shelf/" + x}>
                        <button className='bigButton'>{"Shelf " + x}</button>
                    </Link>
                </div>
            )
        })
        return (
            <div className='Home'>
                <Header title='SHELFIE'/>
                {shelves}
            </div>
        )
    }

}

export default Home;