/*
import {followUserAC, setUsersAC, unfollowUserAC, usersReducer, UserType} from '../reducers/usersReducer';


test('should follow user by id', () => {
    const initialState = {
        items:  [
            {
                name: "Cesium254",
                id: 28141,
                uniqueUrlName: null,
                photos: {
                    small: null,
                    large: null
                },
                status: null,
                followed: false
            },

        ],
        totalCount: 23149,
        error: null
    }

    const newState = usersReducer(initialState, followUserAC(1))

    expect(newState.items[0].followed).toBe(true)
})

test('should unfollow user by id', () => {
    const initialState = {
        items:  [
            {
                name: "Cesium254",
                id: 28141,
                uniqueUrlName: null,
                photos: {
                    small: null,
                    large: null
                },
                status: null,
                followed: false
            },

        ],
        totalCount: 23149,
        error: null
    }

    const newState = usersReducer(initialState, unfollowUserAC(3))

    expect(newState.items[2].followed).toBe(false)
})

test('users should be setted', () => {
    const initialState = {
        items:  [
            {
                name: "Cesium254",
                id: 28141,
                uniqueUrlName: null,
                photos: {
                    small: null,
                    large: null
                },
                status: null,
                followed: false
            },

        ],
        totalCount: 23149,
        error: null
    }

    //const newState = usersReducer(initialState, setUsersAC());

    //expect(newState.items.length).toBe(4)
})
*/
export {}
