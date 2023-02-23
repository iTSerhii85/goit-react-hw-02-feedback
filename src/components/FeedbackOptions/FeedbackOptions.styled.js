import styled from 'styled-components';

export const Button = styled.button`
  font-size: 18px;
  font-weight: bold;
  color: rgb(35, 75, 83);
  background-color: rgb(217, 238, 242);
  background-image: linear-gradient(180deg, rgb(201, 194, 240) 30%, transparent 70%);
  background-repeat: no-repeat;
  background-position: center 45%;
  background-size: 100% 200%;
  padding: 8px 20px;
  border-radius: 30px;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 60px 40px -7px;
  position: relative;
  transition: all 0.5s ease;
  outline: none;

&::before, &::after {
  content: "";
  inset: 0;
  position: absolute;
  border-radius: 5em;
}

&::before {
  background-image: radial-gradient(ellipse, rgba(204, 246, 255, 0.8) 20%, transparent 50%, transparent 200%), linear-gradient(90deg, #404040 -10%, transparent 30%, transparent 70%, #404040 110%);
  box-shadow: inset 0 0.25em 0.75em rgba(0, 0, 0, 0.8), inset 0 -0.05em 0.2em rgba(255, 255, 255, 0.4), inset 0 -1px 3px rgba(25, 196, 230, 0.75);
  background-blend-mode: overlay;
  background-repeat: no-repeat;
  background-size: 200% 80%, cover;
  background-position: center 220%;
  mix-blend-mode: overlay;
  filter: blur(0);
}

&::after {
  background: linear-gradient(180deg, rgba(213, 204, 255, 0.726), rgba(92, 74, 181, 0.75) 40%, transparent 80%);
  top: 0.075em;
  left: 0.75em;
  right: 0.75em;
  bottom: 1.4em;
  filter: blur(1px);
  mix-blend-mode: screen;
}

&:hover, button:active, button:focus {
  outline: none;
  box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
  background-position: center calc( 45% - 0.75em );
}
`

export const ButtonBlock = styled.div`
display: flex;
gap: 15px;
`