import React from 'react';
import ContainerNoFooter from '../containers/containerNoFooter';

const Editor = (props) => {
    return(
        <ContainerNoFooter>
            <div className="p-16">
                <h1 contentEditable="true" className="focus:outline-none text-4xl border-b-2 pb-2 mb-8">
                    Title
                </h1>
                <div contentEditable="true" className=" w-full h-screen focus:outline-none text-2xl">

                </div>
            </div>
        </ContainerNoFooter>
    );
}

export default Editor;
