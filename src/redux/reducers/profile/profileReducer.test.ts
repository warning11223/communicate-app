import {
    addPostAC,
    getStatusAC,
    profileReducer,
    ProfileStateType,
    setLoadingAC,
    setStatusAC,
    updateTextAreaAC,
    updateUserProfileAC
} from './profileReducer';

let initialState: ProfileStateType;

beforeEach(() => {
    initialState = {
        textArea: 'Add post',
        posts: [
            {id: 1, text: 'post1'},
            {id: 2, text: 'post2'},
            {id: 3, text: 'post3'},
            {id: 4, text: 'post4'},
            {id: 5, text: 'post5'},
            {id: 6, text: 'post6'},
        ],
        aboutMe: '',
        status: '',
        photos: {
            small: 'string',
            large: 'string'
        },
        userId: '',
        isLoading: false,
        lookingForAJobDescription: '',
        lookingForAJob: false,
        fullName: '',
        contacts: {
            facebook: 'string',
            website: '',
            vk: 'string',
            twitter: 'string',
            instagram: 'string',
            youtube: 'string',
            github: 'string',
            mainLink: 'string'
        },
        error: ''
    };
})

test('post should be added', () => {

    const newState = profileReducer(initialState, addPostAC('new post'))

    expect(newState.posts.length).toBe(7)
})

test('textarea should be updated', () => {

    const newState = profileReducer(initialState, updateTextAreaAC('1'))

    expect(newState.textArea).toBe('1')
})

test('user profile should be updated', () => {

    const newUserProfile = {
        aboutMe: 'string',
        contacts: {
            facebook: 'string',
            website: 'string',
            vk: 'string',
            twitter: 'string',
            instagram: 'string',
            youtube: 'string',
            github: 'string',
            mainLink: 'string',
        },
        fullName: 'string',
        lookingForAJob: false,
        lookingForAJobDescription: 'string',
        photos: {
            small: 'string',
            large: 'string',
        },
        userId: 1,
    }

    const newState = profileReducer(initialState, updateUserProfileAC(newUserProfile))

    expect(newState.contacts.vk).toBe('string')
    expect(newState.aboutMe).toBe('string')
})

test('loading should be correct value', () => {

    const newState = profileReducer(initialState, setLoadingAC(false))

    expect(newState.isLoading).toBeFalsy()
})

test('user status should be got correct', () => {

    const newState = profileReducer(initialState, getStatusAC('new status'))

    expect(newState.status).toBe('new status')
})

test('user status should be set correct', () => {

    const newState = profileReducer(initialState, setStatusAC('new status'))

    expect(newState.status).toBe('new status')
})

export {}
