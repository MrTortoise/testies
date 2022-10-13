import * as O from 'fp-ts/Option'
import { pipe } from 'fp-ts/function'

describe("if only Option would", () => {
  it('will work', () => {
    const a = O.fromNullable('dave')
    console.log(a)
  })
})