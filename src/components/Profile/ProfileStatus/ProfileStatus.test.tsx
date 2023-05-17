// import {create} from 'react-test-renderer'
// import ProfileStatus from './ProfileStatus';
//
// describe('ProfileStatus component', () => {
//     test('after creation input shouldn\'t be displayed', () => {
//         const component = create(<ProfileStatus status={'new status'} changeStatus={ () => {} }/>)
//         const root = component.root
//         expect(async () => {
//             let input = await root.findByType('input')
//         }).toThrow()
//     })
//     test('status from props should be in the state', async () => {
//         const component = create(<ProfileStatus status={'new status'} changeStatus={ () => {} }/>)
//         const root = component.root
//         let span = await root.findByType('span')
//         expect(span).not.toBeNull()
//     })
//     test('after creation span should contains correct status', () => {
//         const component = create(<ProfileStatus status={'new status'} changeStatus={ () => {} }/>)
//         let span = component.root
//         console.log(span.children[0])
//     })
//     test('input should be displayed in editMode instead of span', async () => {
//         const component = create(<ProfileStatus status={'new status'} changeStatus={ () => {} }/>)
//         let root = component.root
//         let span = await root.findByType('span')
//         span.props.onDoubleClick()
//         let input = await root.findByType('input')
//         expect(input.props.value).toBe('new status')
//     })
// })
export {}
