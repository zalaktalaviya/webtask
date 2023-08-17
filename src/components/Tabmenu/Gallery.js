import React, { Fragment, useState } from 'react'
import "../Tabmenu/tab.css";
import Menu from './Menu';

const Gallery = () =>{

    const allactur = new Set(Menu.map((curelem) => {
        return curelem.category;
    }));

    console.log(allactur);

    const [items, setItems] = useState(Menu);

    const fadeevent = (cateitem) => {
        const updateItem = items.filter((curelem) => {
            return curelem.category === cateitem;
        });

        setItems(updateItem);   
    }

    return(
        <>
            <h2 className='menu-title'>Order Your Favourite Dish</h2> 
            
            <div className='fade_button'>
                <button className='fde' onClick={()=>{ fadeevent('breakfast') }}>Brackfast</button>
                <button className='fde' onClick={()=>{ fadeevent('evening') }}>Evening</button>
                <button className='fde' onClick={()=>{ fadeevent('lunch') }}>Lunch</button>
                <button className='fde' onClick={()=>{ fadeevent('dinner') }}>Dinner</button>
                <button className='fde' onClick={()=>{ setItems(Menu) }}>All</button>
            </div>

            <div className='container'>
                <div className='menu-tabs'>

                    {
                        items.map((elem) => {
                            const {id, name, image, price, description} = elem;
                            return(
                                <>
                                <div className='menu-tab' key={id}>
                                <div className='image-ti'>
                                    <img src={image} alt='' className='image-tit'/>
                                </div>
        
                                {/* menu descriptio price */}
        
                                <div className='menu-contain'>
                                    <div className='menu-mane'>
                                        <h2 className='title-ti'>{name}</h2>
                                        <p className='price'>{price}</p>
                                        <button className='order-button'>Order Now</button>
                                    </div>
                                    <div>
                                        <p style={{ width:"247px" }}>{description}</p>
                                    </div>
                                </div>
                            </div>
                            </>
                            );
                        })
                    }

                </div>
            </div>
        </>
    );
}

export default Gallery