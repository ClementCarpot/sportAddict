import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import LanguageSwitcher from './LanguageSwitcher'
import { LeftContainer, Logo, NavbarContainer, NavbarInnerContainer, NavbarLink, NavbarLinkContainer, OpenLinksButton, RightContainer } from '../styles/StyledAppBar'
import LogoImg from "../assets/logo.svg"
import { faCog, faBell, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const NavBar = () => {
    const { t } = useTranslation()

    const [extendNavbar, setExtendNavbar] = useState(false)

    return (
        <NavbarContainer extendNavbar={extendNavbar}>
            <NavbarInnerContainer>
                <LeftContainer>
                <NavbarLink to='/'>
                    <Logo src={LogoImg}/>
                </NavbarLink>
                    <OpenLinksButton
                        onClick={() => {
                            setExtendNavbar((curr) => !curr)
                        }}
                    >
                        {extendNavbar ? <>&#10005;</> : <> &#8801;</>}
                    </OpenLinksButton>
                    <NavbarLinkContainer>
                        <NavbarLink to='/equipment'>{t('equipment')}</NavbarLink>
                        <NavbarLink to='/calendar'>{t('calendar')}</NavbarLink>
                        <NavbarLink to='/trainingPlan'>{t('trainingPlan')}</NavbarLink>
                        <NavbarLink to='/profil'>{t('myProfil')}</NavbarLink>
                    </NavbarLinkContainer>
                </LeftContainer>
                <RightContainer>
                    <NavbarLink to='/parameters'><FontAwesomeIcon icon={faCog} /></NavbarLink>
                    <NavbarLink to='/notifications'><FontAwesomeIcon icon={faBell} /></NavbarLink>
                    <NavbarLink to='/login'><FontAwesomeIcon icon={faUser} /></NavbarLink>
                    <LanguageSwitcher />
                </RightContainer>
                </NavbarInnerContainer>
        </NavbarContainer >
    )
}

export default NavBar