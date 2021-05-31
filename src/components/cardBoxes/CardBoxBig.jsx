import React from 'react';
import { Link } from 'react-router-dom';
const CardBoxBig = ({ title, moreUrl, data }) => {
    return (
        <section className="my-8">
            { title ?
            <div className="flex justify-between mb-4 ">
                <h4 className=" font-bold text-text-dark">{title}</h4>
                {
                    moreUrl ?
                    <Link to={moreUrl} className="text-primary font-bold ">See all <i className="ml-2 fas fa-chevron-right"></i></Link>
                    : ""
                }
            </div>
            : ""
            }

            <div className=" grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                {
                    data.map(element => {
                        return(
                            <div className="flex flex-col gap-4" key={element.id}>
                                <div className="w-full h-40 relative rounded-xl overflow-hidden">
                                    <img src={element.image} alt="" className="absolute w-full sm:w-auto"/>
                                </div>
                                <div className="flex justify-between">
                                    <p className="text-ellipsis-2 font-bold text-text-dark w-2/3">
                                        {element.title}
                                    </p>
                                    <div className="flex flex-col justify-between items-center text-xs">
                                        <span className="bg-primary-lighter text-primary font-semibold px-2 py-1 rounded uppercase">{element.network}</span>
                                        <span><i className="fas fa-clock mr-1"></i> {element.time} pm</span>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        </section>
    );
}

export default CardBoxBig;