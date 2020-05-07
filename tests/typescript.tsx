import * as React from 'react'

export const Test = () => (
  // eslint-disable-next-line react/jsx-no-useless-fragment
  <>
    <p>test</p>
  </>
)

Test.displayName = 'Ok'

// eslint-disable-next-line fp/no-mutation
Test.hello = 'bye'

export const TestA11y = () => (
  // eslint-disable-next-line jsx-a11y/alt-text
  <img src="https://example.com" />
)

type Union = 'a' | 'b' | 'c'

export function test(u: Union) {
  // eslint-disable-next-line @typescript-eslint/switch-exhaustiveness-check
  switch (u) {
    case 'a':
      return true
  }

  return false
}
