import React from 'react'
import { Layout, Container } from '../components'
import tw, { styled } from 'twin.macro'
import { Services } from '../components/home_page'

const Centre = styled.button`
  ${tw`text-center text-6xl`}
`
export default function Service(): JSX.Element {
  return (
    <Layout>
      <Container>
        
          <Services/>
        
      </Container>
    </Layout>
  )
}
