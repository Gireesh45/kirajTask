import * as React from 'react';
import './index.css'
import TemporaryDrawer from './drawer'
export const Header = () => {
    
    return (
        <div className='header-container'>
            <div>
                <TemporaryDrawer />
            </div>
            <div>
                <p className='header-text'>PIM</p>
            </div>
            <div className='user-profile'>
                <div className='user'>
               <img className='user-photo' src="https://res.cloudinary.com/dwsxbsjdc/image/upload/v1712816523/person_yqol94.jpg" alt="person"/>
                </div>
                <p className='header-text'>Shubham shirse v</p>
                <div>
                </div>
            </div>

        </div>
    )
}
