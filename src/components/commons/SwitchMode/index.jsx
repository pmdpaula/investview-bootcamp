import { useContext } from 'react'
import Switch from 'react-switch'
import { ThemeContext } from 'styled-components'

const SwitchMode = ({ toggleTheme }) => {
  const { title, colors } = useContext(ThemeContext)

  return (
    <Switch
      onChange={toggleTheme}
      checked={title === 'dark'}
      checkedIcon={false}
      uncheckedIcon={false}
      height={20}
      // weigth={200}
      handleDiameter={25}
      onColor={colors.backgroundColor}
      offColor={colors.backgroundColor}
      boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
      activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
    />
  )
}

export default SwitchMode
