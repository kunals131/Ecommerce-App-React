const INITIAL_STATE={
    sections: [
        {
            title : 'hats',
            img : 'https://i.ibb.co/cvpntL1/hats.png',
            id : 1,
            linkUrl : 'shop/hats'
            

        },
        {
            title : 'jackets',
            img : 'https://i.ibb.co/px2tCc3/jackets.png',
            id : 2,
            linkUrl : 'shop/jackets'
        },
        {
            title : 'sneakers',
            img : 'https://i.ibb.co/0jqHpnp/sneakers.png',
            id : 3,
            linkUrl : 'shop/sneakers'
        },
        {
            title : 'womens',
            size : 'large',
            img : 'https://i.ibb.co/GCCdy8t/womens.png',
            id : 4,
            linkUrl : 'shop/womens',
        },
        {
            title : 'Mens',
            size : 'large',
            img : 'https://i.ibb.co/R70vBrQ/men.png',
            id : 5,
            linkUrl : 'shop/mens'
        },
    
    ]
}
const directoryReducer = (state= INITIAL_STATE, action)=>{
    switch(action.type ){
        default : 
            return state;
    }

}
export default directoryReducer