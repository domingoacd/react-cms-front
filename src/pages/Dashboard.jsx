import React from 'react'; 
import MainContainer from '../containers/mainContainer';
const Dashboard = () => {
    return (
        <MainContainer>
            <div className="w-full flex-1">
                <nav className=" fixed top-0 left-0 bottom-0 w-44 h-screen bg-green-700">
                    <ul>
                       <li>
                            <a href="/"> Crear artículo</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </MainContainer>
    );
}

export default Dashboard;