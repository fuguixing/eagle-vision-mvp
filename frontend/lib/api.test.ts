import api from './api'
test('api baseURL is defined', () => { expect((api as any).defaults.baseURL).toBeTruthy() })
