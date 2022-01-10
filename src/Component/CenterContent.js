import { Routes, Route } from "react-router"
import AirplanePage from "./AirplanePage"
import CarPage from "./CarPage"
import HomePage from "./HomePage"

const CenterContent = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/mail/airplane' element={<AirplanePage />} />
                <Route path='/mail/car' element={<CarPage />} />
            </Routes>
        </>
    )
}

export default CenterContent;