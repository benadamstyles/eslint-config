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
