import { classnames } from './classnames'

describe('classnames test', () => {
    test('concat string', () => {
        expect(classnames('class1', 'class2')).toBe('class1 class2')
    })
})
