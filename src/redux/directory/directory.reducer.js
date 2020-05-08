const INITIAL_STATE = {
    sections: [
        {
            title: 'cookies',
            imageUrl: 'https://cosminanutrition.files.wordpress.com/2018/09/pexels-photo-205961.jpeg?w=960&h=1253&crop=1',
            id: 1,
            linkUrl: 'cookies'
        },
        {
            title: 'food',
            imageUrl: 'https://cosminanutrition.files.wordpress.com/2018/09/food-eating-potatoes-beer-8313.jpg?w=960&h=1253&crop=1',
            id: 2,
            linkUrl: 'food'
        },
        {
            title: 'crackers',
            imageUrl: 'https://defaultcustomheadersdata.files.wordpress.com/2016/07/food.jpg?resize=1800,720',
            id: 3,
            linkUrl: 'crackers'
        },
        {
            title: 'salads',
            imageUrl: 'https://cosminanutrition.files.wordpress.com/2018/09/food-salad-healthy-lunch.jpg?w=960&h=1253&crop=1',
            size: 'large',
            id: 4,
            linkUrl: 'salads'
        },
        {
            title: 'traditional',
            imageUrl: 'https://www.romanianfriend.com/uploads/media/romanian-food-1-homepage-favourites-gallery.jpeg',
            size: 'large',
            id: 5,
            linkUrl: 'traditional'
        }
    ]
}

const directoryReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default: 
        return state    
    }
}

export default directoryReducer;