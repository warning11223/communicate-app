import {
    followUserAC,
    setCurrentPageAC,
    setFollowingUserAC,
    setLoadingAC,
    setTotalUsersCountAC,
    setUsersAC,
    unfollowUserAC,
    usersReducer,
    UsersStateType
} from './usersReducer';

let initialState: UsersStateType;

beforeEach(() => {
    initialState = {
        items: [
            {
                name: 'Cesium254',
                id: 28141,
                uniqueUrlName: null,
                photos: {
                    small: null,
                    large: null
                },
                status: '',
                followed: false
            },

        ],
        error: '',
        isLoading: false,
        followingInProgress: [1, 2, 3],
        pageSize: 1,
        currentPage: 1,
        totalUsersCount: 1
    }
})

test('should follow user by id', () => {
    const newState = usersReducer(initialState, followUserAC(28141))

    expect(newState.items[0].followed).toBe(true)
})

test('should unfollow user by id', () => {
    const newState = usersReducer(initialState, unfollowUserAC(28141))

    expect(newState.items[0].followed).toBe(false)
})

test('users should be setted', () => {
    const users = [
        {
            name: 'string',
            id: 1,
            uniqueUrlName: 'string',
            photos: {
                small: 'string',
                large: 'string',
            },
            status: 'string',
            followed: false,
        }
    ]

    const newState = usersReducer(initialState, setUsersAC(users));

    expect(newState.items[0].name).toBe('string')
    expect(newState.items.length).toBe(1)
})

test('current page should be set', () => {
    const newState = usersReducer(initialState, setCurrentPageAC(999))

    expect(newState.currentPage).toBe(999)
})

test('total users count should be set', () => {
    const newState = usersReducer(initialState, setTotalUsersCountAC(222))

    expect(newState.totalUsersCount).toBe(222)
})

test('loading value should be set', () => {
    const newState = usersReducer(initialState, setLoadingAC(true))

    expect(newState.isLoading).toBeTruthy()
})

test('current user should be followed', () => {
    const newState = usersReducer(initialState, setFollowingUserAC(false, 28141))

    expect(newState.items[0].followed).toBeFalsy()
})

