import { FC } from 'react'
import {styled} from "./styles";

const Button = styled('button', {
  fontFamily: '$default',
  backgroundColor: '$ignite500',
  borderRadius: '$md',
  padding: '$4',
})

export const App: FC = () => {
  return <Button>Botão</Button>
}
