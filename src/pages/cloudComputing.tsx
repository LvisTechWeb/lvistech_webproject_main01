
import React, { useState, useEffect } from 'react'
import { Layout } from '../components'
import tw, { styled } from 'twin.macro'
import  colors  from '../components/colors'
import { useServices } from '../hooks'

const Centre = styled.button`
  ${tw`text-center text-6xl`}
`


const ServiceContainer = styled.div`
  ${tw`lg:px-20 static`}
  background-color: ${colors.accentLight};
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='36' height='72' viewBox='0 0 36 72'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M2 6h12L8 18 2 6zm18 36h12l-6 12-6-12z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
`

const Title = styled.p`
  ${tw`py-0 text-xl  m-0 text-center font-bold`}
`
const Back = styled.div`
  ${tw`absolute text-base w-full h-full flex flex-col  p-8 pt-10 m-0`}
  background-color: ${colors.accent};
  color: ${colors.accentLight};

  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  transform: rotateY(180deg);
`
const Front = styled.div`
  ${tw`absolute text-base w-full h-full flex flex-col lg:p-4 m-0`}
  background-color: ${colors.base};
  color: ${colors.accent};

  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  & > * {
    backface-visibility: inherit;
  }
`
const Container = styled.div`
  ${tw`w-full h-full text-center shadow-lg`}
  transition: transform 0.6s;
  transform-style: preserve-3d;
  height:70;
`
const Accord = styled.div`
  ${tw`w-full m-5 sm:mx-1 lg:w-1/4 rounded-lg bg-transparent cursor-pointer`}
  height: 20rem;

  &.flipper > div {
    transform: rotateY(180deg);
  }
`
export default function cloudComputing(): JSX.Element {

    const [services, setServices] = useState(useServices())
  const [largeScreen, setLargeScreen] = useState(false)
  useEffect(() => {
    if (typeof window !== 'undefined') setLargeScreen(window.matchMedia('(min-width: 768px)').matches)
  })

  return (
    
    <Layout>
      <Container>
          <ServiceContainer>
        <div tw="h-screen flex justify-center">
                                
          
     <Accord className={services[2].flip ? 'flipper' : ''}  onClick={() => {
                services[2].flip=true
                setServices([...services])
                console.log(services[2])
                }}
                
                onMouseLeave={() => {
                    services[2].flip=false
                    setServices([...services])
              
                
              }}
              onMouseEnter={() => {
                services[2].flip=true
                setServices([...services])
            
              
              }}
                
                
                
                
                
                
                
                
                
                
                >
              <Container>
                <Front>
                  <img tw="m-auto w-40 mt-8 mb-6" src={services[2].featuredImage.src} />
                  <Title>{services[2].title}</Title>
                  {/* <p tw="py-2 text-center">{service.description}</p> */}
                </Front>
                <Back>
                  {/* <Title>{service.title}</Title> */}
                  <p tw="py-2 text-center">{services[2].longDescription}</p>
                </Back>
              </Container>
            </Accord>
      
    
     
          
        </div>
        </ServiceContainer>
      </Container>
    </Layout>
  )
}
