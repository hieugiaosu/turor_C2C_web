import {Route, Routes, BrowserRouter} from 'react-router-dom'
import App from '../App';
import AdminPage from '../pages/admin/AdminPage';

function WebRouter(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App></App>}>
                    
                    {/* <Route index element={<Home></Home>} /> */}
                </Route>
                <Route path="/admin/" element={<AdminPage></AdminPage>}>
                    <Route index element={<></>} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default WebRouter;