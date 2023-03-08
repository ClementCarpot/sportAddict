import { t } from "i18next"
import { Outlet, Link } from "react-router-dom"

const Layout = () => {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/">{t('Home')}</Link>
                    </li>
                    <li>
                        <Link to="/trainingPlan">{t('TrainingPlan')}</Link>
                    </li>
                    <li>
                        <Link to="/calendar">{t('Calendar')}</Link>
                    </li>
                </ul>
            </nav>

            <Outlet />
        </>
    )
}

export default Layout