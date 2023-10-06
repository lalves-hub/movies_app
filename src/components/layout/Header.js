import { Header as HeaderRNE } from '@rneui/themed'

const Header = ({title}) => {
    return(
        <HeaderRNE
            backgroundColor='#2c3e50'
            centerComponent={{
                text: title,
                style: {color: '#fff', fontSize: 18 }
            }} 
        />
    )
}

export default Header