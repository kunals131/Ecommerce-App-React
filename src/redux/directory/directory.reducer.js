const INITIAL_STATE={
    sections: [
        {
            title : 'Headphones',
            img : 'https://i.ibb.co/cvpntL1/hats.png',
            id : 1,
            linkUrl : 'headphones'
            

        },
        {
            title : 'Speakers',
            img : 'https://i.ibb.co/px2tCc3/jackets.png',
            id : 2,
            linkUrl : ''
        },
        {
            title : 'Phone Covers',
            img : 'https://i.ibb.co/0jqHpnp/sneakers.png',
            id : 3,
            linkUrl : ''
        },
        {
            title : 'Accessories',
            size : 'large',
            img : 'https://i.ibb.co/GCCdy8t/womens.png',
            id : 4,
            linkUrl : '',
        },
        {
            title : 'Smart Watches',
            size : 'large',
            img : 'https://i.ibb.co/R70vBrQ/men.png',
            id : 5,
            linkUrl : ''
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